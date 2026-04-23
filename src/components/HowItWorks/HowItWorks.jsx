import { motion } from 'framer-motion';
import { FileText, Target, TrendingUp } from 'lucide-react';
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Share Your Campaign Goal',
      description: 'Are you an EdTech brand wanting installs? A college looking for admissions? Or a creator seeking brand deals? Tell us your goal.',
      icon: FileText
    },
    {
      number: '02',
      title: 'We Match Your Perfect Fit',
      description: 'Our AI-powered platform matches EdTech brands with JEE creators, colleges with relevant creator audiences, and creators with aligned brands.',
      icon: Target
    },
    {
      number: '03',
      title: 'Campaign Goes Live & You Track ROI',
      description: 'Campaigns launch across YouTube, Instagram, and campus touchpoints. Real-time dashboard shows installs, conversions, and cost-per-acquisition.',
      icon: TrendingUp
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
  };

  return (
    <section className="how-it-works">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h2>How It Works</h2>
          <p>Three steps to connect your brand, creators, or college with the JEE ecosystem</p>
        </motion.div>

        <motion.div
          className="steps-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } } }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={index} className="step-card" variants={fadeUp}>
                <div className="step-number">{step.number}</div>
                <Icon className="step-icon" size={32} />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
