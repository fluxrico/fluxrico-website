 import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Instagram,
  Menu,
  MoveUpRight,
  Package,
  Sparkles,
  X,
} from 'lucide-react';
import logoHorizontal from '@assets/Fluxrico_(2)_1785613812245.png';
import logoCompact from '@assets/Fluxrico_(1)_1785613812487.png';
import heroAbstract from './assets/hero-abstract.png';
import iconPreviewOne from './assets/icon-preview-1.png';
import iconPreviewTwo from './assets/icon-preview-2.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/not-found';
const navItems = [
  { label: 'Collections', href: '#collections' },
  { label: 'The Fluxrico way', href: '#method' },
  { label: 'About', href: '#about' },
];

const categories = [
  {
    index: '01',
    title: 'Icons',
    detail: 'Available now',
    description: 'A considered library of flexible, pixel-perfect symbols for the products people use every day.',
    className: 'category-card category-card--active',
  },
  {
    index: '02',
    title: 'Templates',
    detail: 'Coming soon',
    description: 'Thoughtful starting points for brands, shops, and ambitious ideas still taking shape.',
    className: 'category-card category-card--lavender',
  },
  {
    index: '03',
    title: 'UI kits',
    detail: 'Coming soon',
    description: 'System-ready building blocks that help your best ideas move from first sketch to final screen.',
    className: 'category-card category-card--blue',
  },
];

const steps = [
  {
    number: '01',
    title: 'Choose',
    body: 'Find a collection that gives your next idea the right visual language.',
  },
  {
    number: '02',
    title: 'Download',
    body: 'Get production-ready files in the formats your workflow already knows.',
  },
  {
    number: '03',
    title: 'Make it yours',
    body: 'Put polished, consistent design into the world faster than ever.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fluxrico-site">
      <header className="site-header">
        <a className="brand-link" href="#" data-testid="link-brand">
          <img src={logoHorizontal} alt="Fluxrico" className="brand-logo" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.label} data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-shop-link" href="#featured" data-testid="link-shop-now">
            Shop the library <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>
          <button
            className="mobile-menu-trigger"
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`}
                >
                  {item.label}
                </a>
              ))}
              <a href="#featured" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-shop">
                Shop the library <ArrowUpRight size={16} />
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-orb hero-orb--one" />
          <div className="hero-orb hero-orb--two" />
          <div className="hero-content">
            <motion.div
              className="eyebrow"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="eyebrow-line" />
              Design assets for forward motion
            </motion.div>
            <motion.h1
              id="hero-title"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.08 }}
            >
              Make room for
              <span> better design.</span>
            </motion.h1>
            <motion.p
              className="hero-copy"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.16 }}
            >
              A growing library of refined digital products for designers,
              entrepreneurs, and curious minds who care how things feel.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.24 }}
            >
              <a className="gradient-button" href="#featured" data-testid="button-explore-collection">
                Explore the collection <ArrowRight size={17} />
              </a>
              <a className="text-button" href="#method" data-testid="link-how-it-works">
                How it works <ChevronDown size={16} />
              </a>
            </motion.div>
          </div>
          <motion.div
            className="hero-art-wrap"
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-art-frame">
              <img src={heroAbstract} alt="Flowing blue and purple abstract ribbons" data-testid="img-hero-art" />
              <div className="hero-art-caption">
                <span>01 / 03</span>
                <span>Shape your next idea</span>
              </div>
            </div>
            <span className="floating-label floating-label--top">Made with intention</span>
            <span className="floating-label floating-label--bottom">AI assisted / human refined</span>
          </motion.div>
          <a className="scroll-cue" href="#collections" aria-label="Scroll to collections" data-testid="link-scroll-collections">
            <span>Scroll to explore</span>
            <ArrowDownRight size={17} />
          </a>
        </section>

        <section className="statement-section" id="about" aria-labelledby="statement-title">
          <motion.div
            className="section-kicker"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <span>Our point of view</span>
            <span className="kicker-rule" />
          </motion.div>
          <motion.h2
            id="statement-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            Not more noise.
            <br />
            <em>More signal.</em>
          </motion.h2>
          <motion.p
            className="statement-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            Fluxrico is a digital products platform built around one belief:
            when the details are right, everything moves better. We combine
            the pace of AI with the eye of a human designer to create assets
            that are useful, distinctive, and ready to work.
          </motion.p>
        </section>

        <section className="collections-section" id="collections" aria-labelledby="collections-title">
          <div className="section-heading-row">
            <div>
              <div className="section-kicker"><span>What&apos;s in the works</span><span className="kicker-rule" /></div>
              <h2 id="collections-title">A library in motion.</h2>
            </div>
            <p>Icons today. Templates, UI kits, and more tomorrow. Every collection is made to give your work a head start.</p>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <motion.a
                href={index === 0 ? '#featured' : '#collections'}
                className={category.className}
                key={category.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                data-testid={`card-category-${category.title.toLowerCase().replace(' ', '-')}`}
              >
                <div className="category-topline">
                  <span>{category.index}</span>
                  {index === 0 ? <Check size={18} /> : <Sparkles size={17} />}
                </div>
                <div className="category-copy">
                  <p className="category-detail">{category.detail}</p>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
                <span className="category-arrow"><ArrowUpRight size={20} /></span>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="featured-section" id="featured" aria-labelledby="featured-title">
          <div className="featured-copy">
            <div className="section-kicker"><span>Available now</span><span className="kicker-rule" /></div>
            <p className="product-number">Collection 001</p>
            <h2 id="featured-title">E-commerce &amp; Shopping <em>Icon Pack</em></h2>
            <p className="featured-description">
              The essentials, redrawn. 120 minimalist icons for the moments
              that make an online store feel easy to use — from first click
              to front door.
            </p>
            <div className="product-meta">
              <div><span>120</span><small>icons</small></div>
              <div><span>03</span><small>formats</small></div>
              <div><span>$19</span><small>one-time</small></div>
            </div>
            <a className="outline-button" href="#featured-preview" data-testid="button-view-icon-pack">
              View collection <MoveUpRight size={17} />
            </a>
          </div>
          <div className="featured-visual" id="featured-preview">
            <div className="visual-sticker">New release</div>
            <div className="preview-stack">
              <motion.img
                src={iconPreviewTwo}
                alt="Minimal shopping icon preview"
                className="preview-image preview-image--back"
                whileHover={{ rotate: -3, y: -8 }}
                transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                data-testid="img-icon-preview-secondary"
              />
              <motion.img
                src={iconPreviewOne}
                alt="Grid of minimalist e-commerce icons"
                className="preview-image preview-image--front"
                whileHover={{ rotate: 2, y: -8 }}
                transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                data-testid="img-icon-preview-primary"
              />
            </div>
            <div className="visual-note"><Package size={15} /> SVG / PNG / Figma</div>
          </div>
        </section>

        <section className="method-section" id="method" aria-labelledby="method-title">
          <div className="method-intro">
            <div className="section-kicker"><span>The Fluxrico way</span><span className="kicker-rule" /></div>
            <h2 id="method-title">Less searching.<br /><em>More making.</em></h2>
            <p>Good design should feel like momentum. We take care of the groundwork so you can stay in the flow.</p>
          </div>
          <div className="steps-list">
            {steps.map((step, index) => (
              <motion.div
                className="step-item"
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                transition={{ delay: index * 0.12 }}
              >
                <span className="step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
                <ArrowUpRight className="step-arrow" size={19} />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="cta-section" aria-labelledby="cta-title">
          <div className="cta-grid-pattern" />
          <div className="cta-inner">
            <img src={logoCompact} alt="" className="cta-mark" aria-hidden="true" />
            <div className="section-kicker section-kicker--light"><span>Start with the good stuff</span><span className="kicker-rule" /></div>
            <h2 id="cta-title">Your next idea<br /><em>is already moving.</em></h2>
            <a className="light-button" href="#featured" data-testid="button-browse-collection">
              Browse the collection <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <a href="#" className="footer-brand" data-testid="link-footer-brand">
            <img src={logoHorizontal} alt="Fluxrico" />
            <span>Digital products for<br />forward-thinking creators.</span>
          </a>
          <div className="footer-links">
            <div><span className="footer-label">Explore</span><a href="#collections" data-testid="link-footer-collections">Collections</a><a href="#featured" data-testid="link-footer-icons">Icon pack</a></div>
            <div><span className="footer-label">Connect</span><a href="mailto:hello@fluxrico.com" data-testid="link-footer-email">Email us</a><a href="#contact" data-testid="link-footer-support">Support</a></div>
            <div><span className="footer-label">Follow along</span><div className="social-links"><a href="#contact" aria-label="Instagram" data-testid="link-instagram"><Instagram size={17} /></a><a href="#contact" aria-label="Dribbble" data-testid="link-dribbble">Dr</a><a href="#contact" aria-label="X" data-testid="link-x">X</a></div></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 Fluxrico. Made for the curious.</span><span>AI assisted. Human refined.</span></div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return <Router />;
}

export default App;
