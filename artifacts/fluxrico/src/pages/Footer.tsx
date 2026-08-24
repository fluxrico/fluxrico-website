import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import logoHorizontal from '@assets/Fluxrico_(2)_1785613812245.png';
import './footer.css';

function Footer() {
  return (
    <footer className="site-footer-full">
      <div className="footer-top">
        <div className="footer-intro">
          <img src={logoHorizontal} alt="Fluxrico" className="footer-logo" />
          <p className="footer-blurb">
            Fluxrico is a digital products platform creating refined design
            assets — icons, templates, and UI kits — for designers,
            entrepreneurs, and curious minds.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram" data-testid="link-instagram"><Instagram size={16} /></a>
            <a href="#" aria-label="X" data-testid="link-x">X</a>
            <a href="#" aria-label="TikTok" data-testid="link-tiktok">Tk</a>
            <a href="#" aria-label="Facebook" data-testid="link-facebook"><Facebook size={16} /></a>
          </div>
        </div>

        <div className="footer-col">
          <span className="footer-label">Site</span>
          <Link to="/" data-testid="link-footer-home">Home</Link>
          <Link to="/shop" data-testid="link-footer-shop">Shop</Link>
          <a href="/#about" data-testid="link-footer-about">About</a>
          <a href="mailto:hello@fluxrico.com" data-testid="link-footer-contact">Contact</a>
        </div>

        <div className="footer-col">
          <span className="footer-label">Legal</span>
          <Link to="/terms-of-service" data-testid="link-footer-terms">Terms of Service</Link>
          <Link to="/privacy-policy" data-testid="link-footer-privacy">Privacy Policy</Link>
          <Link to="/refund-policy" data-testid="link-footer-refund">Refund Policy</Link>
        </div>

        <div className="footer-col">
          <span className="footer-label">Categories</span>
          <Link to="/shop" data-testid="link-footer-icons">Icons</Link>
          <a href="/#collections" data-testid="link-footer-templates">Templates</a>
          <a href="/#collections" data-testid="link-footer-ui-kits">UI Kits</a>
        </div>

        <div className="footer-col">
          <span className="footer-label">Contact</span>
          <a href="mailto:hello@fluxrico.com" className="footer-contact-line" data-testid="link-footer-email">
            <Mail size={14} /> hello@fluxrico.com
          </a>
          <a href="tel:+212777869335" className="footer-contact-line" data-testid="link-footer-phone">
            <Phone size={14} /> +212 777 869 335
          </a>
          <span className="footer-label footer-payment-label">We accept</span>
          <div className="footer-payment">
            <span className="payment-badge">PayPal</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom-full">
        <span>© 2026 Fluxrico. All rights reserved.</span>
        <span>Made for the curious.</span>
      </div>
    </footer>
  );
}

export default Footer;
