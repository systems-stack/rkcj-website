import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, BookOpen, TrendingUp, Clock } from 'lucide-react';

const reasons = [
  {
    icon: <Award size={36} />,
    title: '65+ Years Experience',
    desc: 'Led by seasoned professionals with distinct knowledge and a trusted legacy.'
  },
  {
    icon: <ShieldCheck size={36} />,
    title: 'Strong Reputation',
    desc: 'Uncompromising integrity and long-term client relationships spanning decades.'
  },
  {
    icon: <BookOpen size={36} />,
    title: 'Deep Industry Knowledge',
    desc: 'We map out custom accounting strategies smoothly aligned with diverse sectors.'
  },
  {
    icon: <TrendingUp size={36} />,
    title: 'Personalized Solutions',
    desc: 'Practical, result-oriented strategies focused on your specific business goals.'
  },
  {
    icon: <Clock size={36} />,
    title: 'Timeliness & Accuracy',
    desc: 'Rapid turnout of assignments with strict adherence to regulatory compliance.'
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const WhyChooseUs = () => {
  return (
    <section className="section why-us-bg">
      <div className="container">
        <div className="text-center mb-10">
          <div className="hero-badge" style={{ color: 'var(--secondary)', borderColor: 'var(--secondary)' }}>
            The Rohit KC Jain Difference
          </div>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Entrusting your financial management to us guarantees unparalleled professionalism and robust long-term growth.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} className="why-card" variants={itemVariants}>
              <div className="why-card-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
