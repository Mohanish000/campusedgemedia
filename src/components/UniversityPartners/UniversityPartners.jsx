import { useState } from 'react';
import { motion } from 'framer-motion';
import { universities } from '../../data/universities.js';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './UniversityPartners.css';

export default function UniversityPartners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;
  
  const totalSlides = Math.ceil(universities.length / itemsPerPage);
  const visibleUniversities = universities.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
  };

  return (
    <section className="university-partners">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h2>Our University & EdTech Partners</h2>
          <p>Partnerships across India's top institutions and online learning platforms</p>
        </motion.div>

        {/* Carousel Controls */}
        <div className="carousel-header">
          <div className="carousel-indicators">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                className={`indicator ${i === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Universities Carousel */}
        <div className="carousel-container">
          <button className="carousel-arrow prev" onClick={handlePrev} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>

          <motion.div
            className="universities-grid"
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {visibleUniversities.length > 0 ? (
              visibleUniversities.map((uni) => (
                <motion.div 
                  key={uni.id} 
                  className="university-card card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {uni.logo ? (
                    <div className="uni-logo">
                      <img src={uni.logo} alt={uni.name} loading="lazy" />
                    </div>
                  ) : (
                    <div className="uni-logo-placeholder">
                      <span>{uni.name.split(' ')[0]}</span>
                    </div>
                  )}
                  <div className="uni-header">
                    <h3>{uni.name}</h3>
                    <span className="type-badge">{uni.type}</span>
                  </div>
                  <div className="uni-location">
                    <span className="location-label">Location</span>
                    <span className="location-value">{uni.location}</span>
                  </div>
                  {uni.website && (
                    <a href={uni.website} target="_blank" rel="noopener noreferrer" className="website-link">
                      Visit Website →
                    </a>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="no-data">No universities available</div>
            )}
          </motion.div>

          <button className="carousel-arrow next" onClick={handleNext} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
