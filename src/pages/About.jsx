import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <div className="section container">
      <div className="text-center mb-10">
        <div className="hero-badge" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>
          Our Legacy
        </div>
        <h1 className="section-title">65+ Years of Excellence</h1>
        <p className="section-subtitle">
          Delivering trusted financial, taxation, and advisory services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Corporate Office"
            style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }}
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>Who We Are</h2>
          <p className="mb-4" style={{ color: 'var(--foreground-light)' }}>
            <strong>Rohit KC Jain & Company</strong> is a legacy Chartered Accountant firm with over 65 years of excellence in delivering trusted financial, taxation, and advisory services.
          </p>
          <p className="mb-4" style={{ color: 'var(--foreground-light)' }}>
            Established with a vision to provide reliable and ethical professional services, the firm has built a strong reputation over decades for its integrity, expertise, and client-first approach. With deep-rooted experience across generations, we combine traditional values with modern financial practices to offer practical, result-oriented solutions.
          </p>
          <p className="mb-4" style={{ color: 'var(--foreground-light)' }}>
            Over the years, we have successfully served a diverse clientele including individuals, startups, SMEs, exporters, and corporates—helping them navigate complex regulatory environments while ensuring compliance and financial efficiency.
          </p>
          <p className="mb-4" style={{ color: 'var(--foreground-light)' }}>
            Our strength lies in our ability to understand evolving business needs and provide customized strategies that support sustainable growth. From GST and income tax to audit and business advisory, we act as a dependable partner in every stage of your financial journey.
          </p>
          <p style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '1.1rem' }}>
            At Rohit KC Jain & Company, we don’t just provide services—we build long-term relationships based on trust, transparency, and consistent value.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-10">
        <motion.div 
          className="service-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Eye size={40} color="var(--secondary)" />
            <h2 style={{ marginBottom: 0 }}>Our Vision</h2>
          </div>
          <p style={{ color: 'var(--foreground-light)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            To be a leading and most trusted Chartered Accountant firm, recognized for 65+ years of excellence, innovation, and client satisfaction.
          </p>
        </motion.div>

        <motion.div 
          className="service-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Target size={40} color="var(--secondary)" />
            <h2 style={{ marginBottom: 0 }}>Our Mission</h2>
          </div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--foreground-light)' }}>
              <CheckCircle size={20} color="var(--secondary)" style={{ flexShrink: 0 }} />
              To uphold the legacy of 65 years with integrity and professionalism.
            </li>
            <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--foreground-light)' }}>
              <CheckCircle size={20} color="var(--secondary)" style={{ flexShrink: 0 }} />
              To deliver accurate, timely, and compliant financial solutions.
            </li>
            <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--foreground-light)' }}>
              <CheckCircle size={20} color="var(--secondary)" style={{ flexShrink: 0 }} />
              To continuously adapt to changing laws and business environments.
            </li>
            <li style={{ display: 'flex', gap: '0.5rem', color: 'var(--foreground-light)' }}>
              <CheckCircle size={20} color="var(--secondary)" style={{ flexShrink: 0 }} />
              To create long-term value for our clients.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
