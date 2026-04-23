import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials.js';
import './Testimonials.css';

export default function Testimonials() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
  };

  const StarRating = ({ rating }) => (
    <div className="star-rating">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
    </div>
  );

  return (
    <section className="testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h2>What Our Clients Say</h2>
          <p>Testimonials from brands that achieved real growth with CampusEdge</p>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {testimonials.map(testimonial => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card card"
              variants={fadeUp}
            >
              <StarRating rating={testimonial.rating} />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p className="author-role">{testimonial.role}</p>
                <p className="author-company">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
