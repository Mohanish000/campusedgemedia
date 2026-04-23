import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Users, Star } from 'lucide-react';
import FounderImage from '../../assets/Founder.jpeg';
import './About.css';

export default function About() {
  const achievements = [
    { icon: Trophy, title: '50+ JEE Creators', description: 'Physics, Chemistry, Maths teachers on YouTube & Instagram' },
    { icon: TrendingUp, title: '10X Average ROI', description: 'EdTech campaigns deliver high conversion rates' },
    { icon: Users, title: '15+ EdTech Brands', description: 'Courses, apps, test series, learning platforms' },
    { icon: Star, title: '4.9/5 Creator Rating', description: 'Fair payment, transparent contracts, on-time' }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
  };

  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <h2>Our Niche Focus</h2>
            <p>The Intersection of JEE Creators, EdTech Brands & BTech Colleges</p>
          </motion.div>

          <motion.div
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp}>
              CampusEdge Media is <strong>not a generalist influencer agency</strong>. We specialize exclusively in the JEE/EdTech ecosystem. We connect:
            </motion.p>

            <motion.div className="differentiators" variants={fadeUp}>
              <div className="diff-pill">✓ JEE Physics, Chemistry, Maths Creators</div>
              <div className="diff-pill">✓ EdTech Brands (Course & App Companies)</div>
              <div className="diff-pill">✓ BTech Colleges (Admission Marketing)</div>
            </motion.div>

            <motion.p variants={fadeUp}>
              EdTech brands waste lakhs on Meta ads reaching general audiences. BTech colleges struggle to reach serious JEE-qualified students during counselling. JEE creators want brand deals that actually match their audience. We solve all three problems at once.
            </motion.p>

            <motion.p variants={fadeUp}>
              Our creators teach Physics, Chemistry, Maths for JEE Mains & Advanced, BITSAT, and MHT-CET. Our brands sell courses, test series, doubt-solving platforms, and learning apps. Our colleges offer BTech programs in AI, Data Science, Cybersecurity, and core engineering. Perfect alignment. Zero waste.
            </motion.p>
          </motion.div>

          <motion.div
            className="achievements-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {achievements.map((achievement, i) => {
              const Icon = achievement.icon;
              return (
                <motion.div key={i} className="achievement-card card" variants={fadeUp}>
                  <Icon size={32} className="achievement-icon" />
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="team" className="team-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <h2>Meet Our Founder</h2>
            <p>The Niche Expert Behind CampusEdge</p>
          </motion.div>

          <motion.div
            className="founder-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <div className="founder-photo-wrapper">
              <img 
                src={FounderImage}
                alt="Samrat Patel - Founder & CEO" 
                className="founder-large-photo"
              />
            </div>
            <div className="founder-details">
              <h2>Samrat Patel</h2>
              <p className="founder-role">Founder & CEO</p>
              <p className="founder-message">
                "At Campus Edge Media, we don’t just run campaigns — we build influence that delivers real results.
                When I started this agency, the goal was clear: to transform how brands connect with the student ecosystem. In the edtech space, attention is easy to get, but trust is hard to earn. That’s where we come in.
                We specialize in creating high-impact collaborations between brands and creators who truly understand their audience. Our focus is not just on views or impressions, but on meaningful engagement and measurable ROI. Every campaign is designed with precision, keeping performance and authenticity at its core.
                As a founder, I believe growth is built on strong relationships. That’s why we prioritize transparency, consistency, and long-term partnerships over short-term wins. Whether it’s helping a brand scale or enabling a creator to monetize effectively, our approach is always strategic and result-driven.
                Campus Edge Media is not just an agency — it’s a platform where brands grow smarter and creators grow faster.
                Focused on performance. Committed to results.
                <p>-- Samrat Patel</p>
              </p>
              <div className="founder-highlights">
                <div className="highlight">
                  <p className="highlight-text">Campus Marketing Pioneer</p>
                </div>
                <div className="highlight">
                  <p className="highlight-text">Creator Advocate</p>
                </div>
                <div className="highlight">
                  <p className="highlight-text">Strategic Visionary</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
