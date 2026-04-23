import { Mail, MapPin, Phone, Share2 } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Column */}
          <div className="footer-section brand-section">
            <div className="footer-logo">
              <span className="logo-icon">⚡</span>
              <span>CampusEdge<br />Media</span>
            </div>
            <p className="footer-tagline">Bridging Brands, Creators & Education</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><ScrollLink to="hero" smooth duration={500} className="footer-link">Home</ScrollLink></li>
              <li><ScrollLink to="services" smooth duration={500} className="footer-link">Services</ScrollLink></li>
              <li><ScrollLink to="creators" smooth duration={500} className="footer-link">Creators</ScrollLink></li>
              <li><ScrollLink to="about" smooth duration={500} className="footer-link">About</ScrollLink></li>
              <li><ScrollLink to="contact" smooth duration={500} className="footer-link">Contact</ScrollLink></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Campus Activation</a></li>
              <li><a href="#services" className="footer-link">Creator Partnerships</a></li>
              <li><a href="#services" className="footer-link">Event Sponsorships</a></li>
              <li><a href="#services" className="footer-link">Brand Ambassadors</a></li>
              <li><a href="#services" className="footer-link">Performance Analytics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-items">
              <a href="mailto:mediacampusedge@gmail.com" className="contact-item contact-link">
                <Mail size={18} />
                <span>mediacampusedge@gmail.com</span>
              </a>
              <a href="tel:+918194054966" className="contact-item contact-link">
                <Phone size={18} />
                <span>+91 81940 54966</span>
              </a>
              <div className="contact-item">
                <MapPin size={18} />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} CampusEdge Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
