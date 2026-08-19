import { Link } from 'react-router-dom';
import { ArrowUpRight, Package } from 'lucide-react';
import { products } from '../data/products';
import logoHorizontal from '@assets/Fluxrico_(2)_1785613812245.png';
import './shop.css';

function Shop() {
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

      <main className="shop-main">
        <div className="shop-intro">
          <div className="section-kicker">
            <span>Full library</span>
            <span className="kicker-rule" />
          </div>
          <h1>Every collection, in one place.</h1>
          <p>Browse everything Fluxrico has released so far. New drops land here first.</p>
        </div>

        <div className="shop-grid">
          {products.map((product) => (
            <Link
              className="shop-card"
              to={`/shop/${product.id}`}
              key={product.id}
              data-testid={`card-product-${product.id}`}
            >
              <div className="shop-card-visual">
                <Package size={28} strokeWidth={1.5} />
              </div>
              <div className="shop-card-body">
                <p className="shop-card-tagline">{product.tagline}</p>
                <h3>{product.title}</h3>
                <p className="shop-card-meta">
                  {product.itemCount} · {product.formats}
                </p>
              </div>
              <div className="shop-card-footer">
                <span className="shop-card-price">${product.price}</span>
                <span className="shop-card-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-bottom">
          <span>© 2026 Fluxrico. Made for the curious.</span>
        </div>
      </footer>
    </div>
  );
}

export default Shop;
