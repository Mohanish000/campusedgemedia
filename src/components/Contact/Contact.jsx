import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'brands',
    message: ''
  });
  const [submitState, setSubmitState] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState('loading');

    try {
      // Formspree endpoint for CampusEdge Media
      const response = await fetch('https://formspree.io/f/mojyynjd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setSubmitState('success');
        setFormState({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'brands',
          message: ''
        });
        setTimeout(() => setSubmitState('idle'), 5000);
      } else {
        setSubmitState('error');
        setTimeout(() => setSubmitState('idle'), 5000);
      }
    } catch (err) {
      setSubmitState('error');
      setTimeout(() => setSubmitState('idle'), 5000);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h2>Get Your Campaign Started</h2>
          <p>Our team responds within 24 hours with a custom proposal</p>
        </motion.div>

        <div className="contact-grid">
          {/* Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div className="form-group" variants={fadeUp}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </motion.div>

            <motion.div className="form-group" variants={fadeUp}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </motion.div>

            <motion.div className="form-group" variants={fadeUp}>
              <label htmlFor="phone">Phone (+91)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder="10 digit mobile"
              />
            </motion.div>

            <motion.div className="form-group" variants={fadeUp}>
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formState.company}
                onChange={handleChange}
                placeholder="Your company"
              />
            </motion.div>

            <motion.div className="form-group" variants={fadeUp}>
              <label htmlFor="service">I'm a:</label>
              <select
                id="service"
                name="service"
                value={formState.service}
                onChange={handleChange}
              >
                <option value="brands">Brand looking for campaigns</option>
                <option value="creators">Creator interested in partnerships</option>
                <option value="university">University/Institution</option>
              </select>
            </motion.div>

            <motion.div className="form-group" variants={fadeUp}>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell us about your campaign goals..."
                rows="5"
              />
            </motion.div>

            <motion.button
              type="submit"
              className={`btn btn-primary submit-btn ${submitState !== 'idle' ? 'disabled' : ''}`}
              disabled={submitState !== 'idle'}
              variants={fadeUp}
            >
              {submitState === 'idle' && 'Send Message'}
              {submitState === 'loading' && (
                <>
                  <Loader size={18} className="spin" /> Sending...
                </>
              )}
              {submitState === 'success' && (
                <>
                  <CheckCircle size={18} /> Message Sent!
                </>
              )}
              {submitState === 'error' && (
                <>
                  <AlertCircle size={18} /> Error - Try Again
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Right Side - Contact Info */}
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
          >
            <motion.div className="info-card" variants={fadeUp}>
              <Phone className="info-icon" size={32} />
              <h4>Phone</h4>
              <p>+91 81940 54966</p>
              <span className="info-label">Response in 24 hrs</span>
            </motion.div>

            <motion.div className="info-card" variants={fadeUp}>
              <Mail className="info-icon" size={32} />
              <h4>Email</h4>
              <p>mediacampusedge@gmail.com</p>
              <span className="info-label">We reply fast</span>
            </motion.div>

            <motion.div className="info-card" variants={fadeUp}>
              <MapPin className="info-icon" size={32} />
              <h4>Location</h4>
              <p>New Delhi, India</p>
              <span className="info-label">Pan-India reach</span>
            </motion.div>

            <motion.div className="info-highlight" variants={fadeUp}>
              <p>📍 <strong>No spam, no fluff.</strong> Just genuine partnerships and real results.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
