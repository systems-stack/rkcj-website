import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Optimize Your Finances?</h2>
          <p>Schedule a detailed consultation with our experts to discover customized taxation structures, solid compliance, and accelerated growth pathways.</p>
          <div className="flex justify-center gap-4 flex-wrap" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              <Calendar size={20} /> Book a Free Consultation
            </Link>
            <a href="tel:+919876543210" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem', color: 'var(--primary)', borderColor: 'var(--primary)' }}>
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
