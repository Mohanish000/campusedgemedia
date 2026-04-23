import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: 'home' },
    { label: 'Services', to: 'services' },
    { label: 'Partners', to: 'creators' },
    { label: 'About', to: 'about' },
    { label: 'Contact', to: 'contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <ScrollLink to="home" className="logo" smooth duration={500}>
            <Zap size={24} />
            <span>Campus<span className="logo-media">Edge</span></span>
          </ScrollLink>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navLinks.map(link => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                className="nav-link"
              >
                {link.label}
              </ScrollLink>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="header-ctas">
            <ScrollLink to="contact" smooth duration={500} className="btn btn-ghost">
              For Brands
            </ScrollLink>
            <ScrollLink to="contact" smooth duration={500} className="btn btn-primary">
              Join as Creator
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="nav-mobile">
          {navLinks.map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              className="nav-link-mobile"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </ScrollLink>
          ))}
          <div className="mobile-ctas">
            <button className="btn btn-ghost">For Brands</button>
            <button className="btn btn-primary">Join as Creator</button>
          </div>
        </nav>
      )}
    </header>
  );
}
