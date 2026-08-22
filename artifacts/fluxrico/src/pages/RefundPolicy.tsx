import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logoHorizontal from '@assets/Fluxrico_(2)_1785613812245.png';
import './shop.css';
import './legal.css';

function RefundPolicy() {
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

        <h1>Refund Policy</h1>
        <p className="legal-updated">Last updated: August 2026</p>

        <p>
          Because our products are digital and delivered instantly, refunds are limited.
          Please read the conditions below before purchasing.
        </p>

        <h2>1. When a refund is available</h2>
        <p>We offer a refund within <strong>7 days</strong> of purchase if:</p>
        <ul>
          <li>The downloaded file is corrupted or cannot be opened, and we are unable to fix it or provide a working copy.</li>
          <li>You did not receive your download link due to a technical error on our end.</li>
        </ul>

        <h2>2. When a refund is not available</h2>
        <ul>
          <li>You changed your mind after downloading the files.</li>
          <li>You purchased the wrong product by mistake (contact us first — we're happy to help find the right one).</li>
          <li>You no longer need the product.</li>
        </ul>

        <h2>3. How to request a refund</h2>
        <p>
          Email <a href="mailto:hello@fluxrico.com">hello@fluxrico.com</a> within 7 days
          of your purchase, including your order email and a description of the issue.
          We aim to respond within 2 business days.
        </p>

        <h2>4. Processing time</h2>
        <p>
          Approved refunds are issued to your original PayPal payment method and may take
          a few business days to appear, depending on PayPal's processing times.
        </p>

        <h2>5. Contact</h2>
        <p>
          Questions about this policy? Email us at{' '}
          <a href="mailto:hello@fluxrico.com">hello@fluxrico.com</a>.
        </p>
      </main>

      <footer className="site-footer">
        <div className="footer-bottom">
          <span>© 2026 Fluxrico. Made for the curious.</span>
        </div>
      </footer>
    </div>
  );
}

export default RefundPolicy;
