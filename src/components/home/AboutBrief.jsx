import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutBrief = () => {
  return (
    <section className="section about-brief">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Professional Accounting Team" 
              className="about-image"
            />
            <div className="about-experience-badge">
              <div className="years">65+</div>
              <div>Years of<br/>Excellence</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge" style={{ marginBottom: '1rem', color: 'var(--primary)', borderColor: 'var(--primary)' }}>
              Our Legacy
            </div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '2.5rem' }}>
              Building Trust with Precision & Integrity
            </h2>
            <p className="mb-6 text-foreground-light">
              Rohit KC Jain & Company is a legacy Chartered Accountant firm with over 65 years of excellence in delivering trusted financial, taxation, and advisory services. Established with a vision to provide reliable and ethical professional services, we combine traditional values with modern financial practices.
            </p>
            
            <div className="about-features mt-6">
              <div className="about-feature">
                <ShieldCheck className="about-feature-icon" size={32} />
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Trusted Over Decades</h4>
                  <p className="text-foreground-light text-sm">Serving individuals, startups, SMEs, and corporates with uncompromised integrity.</p>
                </div>
              </div>
              
              <div className="about-feature">
                <Target className="about-feature-icon" size={32} />
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Result-Oriented Solutions</h4>
                  <p className="text-foreground-light text-sm">Understanding evolving business needs to provide customized strategies that support growth.</p>
                </div>
              </div>

              <div className="about-feature">
                <TrendingUp className="about-feature-icon" size={32} />
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Consistent Value</h4>
                  <p className="text-foreground-light text-sm">We don’t just provide services—we build long-term relationships based on transparency.</p>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="btn btn-primary mt-4">
              Explore Our Vision <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrief;
