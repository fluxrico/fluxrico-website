import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Download, Package } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { getProductById } from '../data/products';
import logoHorizontal from '@assets/Fluxrico_(2)_1785613812245.png';
import './shop.css';

declare global {
  interface Window {
    paypal?: any;
  }
}

const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID as string | undefined;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

function ProductDetail() {
  const { productId } = useParams();
  const product = productId ? getProductById(productId) : undefined;
  const paypalRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'paid' | 'error'>('idle');
  const [buyerEmail, setBuyerEmail] = useState('');

  useEffect(() => {
    if (!product || !PAYPAL_CLIENT_ID) return;

    const scriptId = 'paypal-sdk';

    const renderButtons = () => {
      if (!window.paypal || !paypalRef.current) return;
      paypalRef.current.innerHTML = '';
      window.paypal
        .Buttons({
          style: { layout: 'vertical', color: 'blue', shape: 'pill', label: 'paypal' },
          createOrder: (_: unknown, actions: any) =>
            actions.order.create({
              purchase_units: [
                {
                  description: product.title,
                  amount: { value: product.price.toFixed(2) },
                },
              ],
            }),
          onApprove: async (_: unknown, actions: any) => {
            const details = await actions.order.capture();
            const email = details?.payer?.email_address ?? '';
            setBuyerEmail(email);
            setStatus('paid');

            if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY && email) {
              try {
                await emailjs.send(
                  EMAILJS_SERVICE_ID,
                  EMAILJS_TEMPLATE_ID,
                  {
                    to_email: email,
                    product_title: product.title,
                    download_url: product.downloadUrl,
                  },
                  EMAILJS_PUBLIC_KEY
                );
              } catch (err) {
                console.error('Email send failed', err);
              }
            }
          },
          onError: () => setStatus('error'),
        })
        .render(paypalRef.current);
    };

    if (document.getElementById(scriptId)) {
      renderButtons();
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`;
    script.onload = renderButtons;
    document.body.appendChild(script);
  }, [product]);

  if (!product) {
    return (
      <div className="fluxrico-site shop-page">
        <main className="shop-main">
          <p>Product not found.</p>
          <Link to="/shop">Back to shop</Link>
        </main>
      </div>
    );
  }

  return (
    <div className="fluxrico-site shop-page">
      <header className="site-header">
        <Link className="brand-link" to="/" data-testid="link-brand">
          <img src={logoHorizontal} alt="Fluxrico" className="brand-logo" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link to="/" data-testid="link-nav-home">Home</Link>
          <Link to="/shop" data-testid="link-nav-shop">Shop</Link>
        </nav>
      </header>

      <main className="product-main">
        <Link to="/shop" className="back-link" data-testid="link-back-shop">
          <ArrowLeft size={16} /> Back to shop
        </Link>

        <div className="product-layout">
          <div className="product-visual">
            <Package size={56} strokeWidth={1.2} />
          </div>

          <div className="product-info">
            <p className="section-kicker">
              <span>{product.tagline}</span>
            </p>
            <h1>{product.title}</h1>
            <p className="product-description">{product.description}</p>
            <div className="product-meta">
              <div>
                <span>{product.itemCount}</span>
              </div>
              <div>
                <span>{product.formats}</span>
              </div>
              <div>
                <span>${product.price}</span>
                <small>one-time</small>
              </div>
            </div>

            {status !== 'paid' ? (
              <div className="paypal-section">
                {PAYPAL_CLIENT_ID ? (
                  <div ref={paypalRef} data-testid="paypal-button-container" />
                ) : (
                  <p className="paypal-warning">
                    PayPal isn't configured yet. Add VITE_PAYPAL_CLIENT_ID to enable checkout.
                  </p>
                )}
                {status === 'error' && (
                  <p className="paypal-warning">Something went wrong. Please try again.</p>
                )}
              </div>
            ) : (
              <div className="purchase-success" data-testid="purchase-success">
                <Check size={20} />
                <div>
                  <p>
                    Thanks! Your download is ready
                    {buyerEmail ? ` and a copy was sent to ${buyerEmail}` : ''}.
                  </p>
                  <a
                    className="gradient-button"
                    href={product.downloadUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-testid="link-download"
                  >
                    <Download size={16} /> Download now
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetail;
