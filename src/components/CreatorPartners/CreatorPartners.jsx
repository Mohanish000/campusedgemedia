import { motion } from 'framer-motion';
import { creators } from '../../data/creators.js';
import './CreatorPartners.css';

export default function CreatorPartners() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
  };

  const YouTubeLogo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );

  const InstagramLogo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.63c-.791.297-1.459.715-2.126 1.386S.957 3.326.66 4.117C.362 4.905.161 5.775.101 7.053.042 8.333.027 8.74.027 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.935.297.792.715 1.459 1.386 2.126.666.666 1.335 1.079 2.125 1.376.787.297 1.657.499 2.934.558 1.28.06 1.687.072 4.947.072s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.934-.558.792-.297 1.459-.715 2.126-1.386.666-.666 1.079-1.335 1.376-2.126.296-.787.499-1.657.558-2.934.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.936-.297-.791-.715-1.459-1.386-2.126C21.319 1.347 20.651.935 19.86.63c-.789-.297-1.659-.499-2.936-.558C15.667.027 15.26.015 12 0zm0 2.16c3.203 0 3.585.009 4.849.07 1.171.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.061 1.264.07 1.646.07 4.849 0 3.203-.009 3.585-.07 4.849-.055 1.171-.249 1.805-.415 2.231-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.055.36-2.227.413-1.231.061-1.646.07-4.849.07-3.203 0-3.585-.009-4.849-.07-1.171-.055-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.055-.413-2.231-.061-1.264-.07-1.646-.07-4.849 0-3.203.009-3.585.07-4.849.055-1.171.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.055-.36 2.227-.413 1.264-.061 1.646-.07 4.849-.07l.045.002z"/>
      <circle cx="12" cy="12" r="3.338"/>
      <circle cx="18.406" cy="5.594" r=".777"/>
    </svg>
  );

  return (
    <section id="creators" className="creator-partners">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h2>Our JEE Creator Network</h2>
          <p>50+ Physics, Chemistry, Maths teachers & JEE educators</p>
        </motion.div>

        <motion.div
          className="creators-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {creators.map(creator => (
            <motion.div key={creator.id} className="creator-card card" variants={fadeUp}>
              {creator.exclusive && (
                <div className="exclusive-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Exclusive Partner
                </div>
              )}
              <div className="creator-avatar">
                <img src={creator.photo} alt={creator.name} className="creator-photo" />
              </div>
              <h3>{creator.name}</h3>
              
              <div className="social-links">
                <a href={creator.youtube} target="_blank" rel="noopener noreferrer" className="social-btn youtube-btn" title="Subscribe on YouTube">
                  <YouTubeLogo />
                </a>
                <a href={creator.instagram} target="_blank" rel="noopener noreferrer" className="social-btn instagram-btn" title="Follow on Instagram">
                  <InstagramLogo />
                </a>
              </div>

              <div className="followers-section">
                <div className="follower-stat">
                  <span className="label">YouTube</span>
                  <span className="count">{creator.subscribers}</span>
                </div>
                <div className="divider"></div>
                <div className="follower-stat">
                  <span className="label">Instagram</span>
                  <span className="count">{creator.followers}</span>
                </div>
              </div>

              <p className="description">{creator.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
