import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

export default function Stats() {
  const [counts, setCounts] = useState({ reach: 0, campaigns: 0, universities: 0, colleges: 0 });

  useEffect(() => {
    const stats = [
      { key: 'reach', target: 37, symbol: 'M+' },
      { key: 'campaigns', target: 500, symbol: 'K+' },
      { key: 'universities', target: 50, symbol: '+' },
      { key: 'colleges', target: 30, symbol: '+' }
    ];

    stats.forEach(stat => {
      let current = 0;
      const increment = stat.target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          setCounts(prev => ({ ...prev, [stat.key]: stat.target }));
          clearInterval(timer);
        } else {
          setCounts(prev => ({ ...prev, [stat.key]: Math.round(current) }));
        }
      }, 30);
      return () => clearInterval(timer);
    });
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      className="stats"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      <div className="container">
        <div className="stats-grid">
          <motion.div className="stat-card" variants={fadeUp}>
            <div className="stat-value">
              {counts.reach}<span className="stat-symbol">M+</span>
            </div>
            <p className="stat-title">Indian College Students Reachable</p>
          </motion.div>

          <motion.div className="stat-divider" variants={fadeUp}></motion.div>

          <motion.div className="stat-card" variants={fadeUp}>
            <div className="stat-value">
              {counts.campaigns}<span className="stat-symbol">K+</span>
            </div>
            <p className="stat-title">Creator Network Reach</p>
          </motion.div>

          <motion.div className="stat-divider" variants={fadeUp}></motion.div>

          <motion.div className="stat-card" variants={fadeUp}>
            <div className="stat-value">
              {counts.universities}<span className="stat-symbol">+</span>
            </div>
            <p className="stat-title">Brand Campaigns Run</p>
          </motion.div>

          <motion.div className="stat-divider" variants={fadeUp}></motion.div>

          <motion.div className="stat-card" variants={fadeUp}>
            <div className="stat-value">
              {counts.colleges}<span className="stat-symbol">+</span>
            </div>
            <p className="stat-title">University Partnerships</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
