import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { scroller } from 'react-scroll';
import './Hero.css';

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
  };

  const scrollToContact = () => {
    scroller.scrollTo('contact', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <motion.div
            className="hero-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div className="badge" variants={fadeUp}>
              📍 India's #1 Campus Marketing Network
            </motion.div>

            <motion.h1 variants={fadeUp}>
              The Last Agency <span className="gradient-text"> You'll Ever Pitch To</span>
            </motion.h1>

            <motion.p className="hero-subtitle" variants={fadeUp}>
              We operate at the exact intersection of JEE/Engineering creators, EdTech brands, and BTech colleges. No generalist approach. Just deep, niche expertise.
            </motion.p>

            <motion.div className="hero-ctas" variants={fadeUp}>
              <button className="btn btn-primary" onClick={scrollToContact}>
                Start a Campaign <ArrowRight size={18} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
