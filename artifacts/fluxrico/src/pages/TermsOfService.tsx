import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logoHorizontal from '@assets/Fluxrico_(2)_1785613812245.png';
import './shop.css';
import './legal.css';
import Footer from './Footer';
import { useSeo } from '../lib/useSeo';

function TermsOfService() {
  useSeo(
    'Terms of Service — Fluxrico',
    'The terms governing your use of Fluxrico and purchase of our digital products.'
  );

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

      <main className="legal-main">
        <Link to="/" className="back-link" data-testid="link-back-home">
          <ArrowLeft size={16} /> Back home
        </Link>

        <h1>Terms of Service</h1>
        <p className="legal-updated">Last updated: August 2026</p>

        <p>
          By accessing or purchasing from Fluxrico, you agree to the following terms.
          Please read them carefully before making a purchase.
        </p>

        <h2>1. Products</h2>
        <p>
          Fluxrico sells digital design assets (icon packs, templates, UI kits) delivered
          electronically. No physical items are shipped.
        </p>

        <h2>2. License</h2>
        <p>
          When you purchase a product, you receive a personal, non-exclusive license to use
          the files in your own projects (personal or commercial), unless stated otherwise
          on the product page. You may not resell, redistribute, or repackage the raw files
          as your own standalone product.
        </p>

        <h2>3. Payment</h2>
        <p>
          Payments are processed securely through PayPal. Fluxrico does not store your
          payment details.
        </p>

        <h2>4. Delivery</h2>
        <p>
          After a successful payment, your download link is shown on the confirmation
          screen and also sent to the email address used at checkout. Please make sure
          the email is entered correctly.
        </p>

        <h2>5. Refunds</h2>
        <p>
          See our <Link to="/refund-policy">Refund Policy</Link> for details on when
          refunds are available.
        </p>

        <h2>6. Limitation of liability</h2>
        <p>
          Fluxrico provides its products "as is". We are not liable for any indirect,
          incidental, or consequential damages arising from the use of our products.
        </p>

        <h2>7. Changes to these terms</h2>
        <p>
          We may update these terms from time to time. Continued use of the site after
          changes means you accept the revised terms.
        </p>

        <h2>8. Contact</h2>
        <p>
          Questions? Email us at <a href="mailto:hello@fluxrico.com">hello@fluxrico.com</a>.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default TermsOfService;
