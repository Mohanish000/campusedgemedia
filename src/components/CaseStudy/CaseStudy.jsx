import { motion } from 'framer-motion';
import { Eye, Download, Heart, IndianRupee } from 'lucide-react';
import './CaseStudy.css';

export default function CaseStudy() {
  const caseStudy = {
    brand: 'D2C Fintech Brand',
    campaign: 'Student Banking Awareness Campaign',
    duration: '4 Weeks',
    creators: 8,
    universities: 5,
    results: [
      { metric: 'Total Reach', value: '2.4M', icon: Eye },
      { metric: 'App Downloads', value: '18,400', icon: Download },
      { metric: 'Engagement Rate', value: '11.2%', icon: Heart },
      { metric: 'Cost per Download', value: '₹12', icon: IndianRupee }
    ],
    quote: 'CampusEdge delivered 3x the downloads we expected, at a fraction of what traditional digital ads would cost.',
    quoteAuthor: 'Marketing Head, Fintech Brand'
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
  };

  return (
    <section className="case-study">
      <div className="container">
        <motion.div
          className="case-study-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          {/* Header */}
          <div className="case-header">
            <div className="case-info">
              <h3>Featured Campaign</h3>
              <h2>{caseStudy.campaign}</h2>
              <p className="case-brand">{caseStudy.brand}</p>
            </div>
            <div className="campaign-meta">
              <div className="meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-value">{caseStudy.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Creators</span>
                <span className="meta-value">{caseStudy.creators}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Universities</span>
                <span className="meta-value">{caseStudy.universities}</span>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="results-grid">
            {caseStudy.results.map((result, i) => {
              const Icon = result.icon;
              return (
                <motion.div
                  key={i}
                  className="result-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Icon size={24} className="result-icon" />
                  <p className="result-value">{result.value}</p>
                  <p className="result-label">{result.metric}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Quote */}
          <div className="case-quote">
            <p className="quote-text">"{caseStudy.quote}"</p>
            <p className="quote-author">— {caseStudy.quoteAuthor}</p>
          </div>

          {/* CTA */}
          <motion.div
            className="case-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button className="btn btn-primary">See More Case Studies →</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
