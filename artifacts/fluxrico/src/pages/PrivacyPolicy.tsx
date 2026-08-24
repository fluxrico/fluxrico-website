import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logoHorizontal from '@assets/Fluxrico_(2)_1785613812245.png';
import './shop.css';
import './legal.css';
import Footer from './Footer';
import { useSeo } from '../lib/useSeo';

function PrivacyPolicy() {
  useSeo(
    'Privacy Policy — Fluxrico',
    'How Fluxrico collects, uses, and protects your personal information.'
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

        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: August 2026</p>

        <p>
          Fluxrico ("we", "us", "our") respects your privacy. This policy explains
          what information we collect when you visit or purchase from
          fluxrico-website-fluxrico.vercel.app, and how we use it.
        </p>

        <h2>1. Information we collect</h2>
        <ul>
          <li><strong>Payment information:</strong> processed entirely by PayPal. We never see or store your card or PayPal account details.</li>
          <li><strong>Email address:</strong> collected at checkout to send your download link and order confirmation.</li>
          <li><strong>Usage data:</strong> basic, non-identifying analytics about how visitors use the site.</li>
        </ul>

        <h2>2. How we use your information</h2>
        <ul>
          <li>To deliver your purchased digital product and send confirmation emails.</li>
          <li>To respond to support requests.</li>
          <li>To improve the website and our product offering.</li>
        </ul>
        <p>We do not sell or rent your personal information to third parties.</p>

        <h2>3. Third-party services</h2>
        <p>We rely on the following third parties to operate the site:</p>
        <ul>
          <li><strong>PayPal</strong> — payment processing.</li>
          <li><strong>EmailJS</strong> — sending order confirmation emails.</li>
          <li><strong>Vercel</strong> — website hosting.</li>
        </ul>
        <p>Each of these providers has its own privacy policy governing how they handle data.</p>

        <h2>4. Data retention</h2>
        <p>
          We retain order-related emails only as long as necessary to provide support
          and meet legal or accounting obligations.
        </p>

        <h2>5. Your rights</h2>
        <p>
          You can request a copy of the data we hold about you, or ask us to delete it,
          by contacting us at <a href="mailto:hello@fluxrico.com">hello@fluxrico.com</a>.
        </p>

        <h2>6. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The "Last updated" date above
          reflects the most recent revision.
        </p>

        <h2>7. Contact</h2>
        <p>
          Questions about this policy? Email us at{' '}
          <a href="mailto:hello@fluxrico.com">hello@fluxrico.com</a>.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
