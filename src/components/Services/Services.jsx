import { useState } from 'react';
import { motion } from 'framer-motion';
import { forBrands, forCreators, services } from '../../data/services.js';
import * as Icons from 'lucide-react';
import './Services.css';

export default function Services() {
  const [activeTab, setActiveTab] = useState('brands');

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h2>Our Services</h2>
          <p>Tailored solutions for both brands and creators</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="services-tabs"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <button
            className={`tab-button ${activeTab === 'brands' ? 'active' : ''}`}
            onClick={() => setActiveTab('brands')}
          >
            For Brands
          </button>
          <button
            className={`tab-button ${activeTab === 'creators' ? 'active' : ''}`}
            onClick={() => setActiveTab('creators')}
          >
            For Creators
          </button>
        </motion.div>

        {/* Brands Content */}
        {activeTab === 'brands' && (
          <motion.div
            className="tab-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="content-header">
              <h3>{forBrands.title}</h3>
              <p>{forBrands.subtitle}</p>
            </div>
            <div className="services-grid">
              {services.slice(0, 6).map((service, i) => {
                const Icon = Icons[service.icon];
                return (
                  <motion.div
                    key={service.id}
                    className="service-card card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Icon className="service-icon" size={32} />
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Creators Content */}
        {activeTab === 'creators' && (
          <motion.div
            className="tab-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="content-header">
              <h3>{forCreators.title}</h3>
              <p>{forCreators.subtitle}</p>
            </div>
            <div className="services-grid">
              {forCreators.features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="service-card card creator-feature"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="creator-feature-icon">✓</div>
                  <p>{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
