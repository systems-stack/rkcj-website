import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Rocket, MonitorSmartphone, Store } from 'lucide-react';

const industries = [
  {
    title: 'Exporters & Importers',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    icon: <Factory size={28} />
  },
  {
    title: 'Startups & IT',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    icon: <Rocket size={28} />
  },
  {
    title: 'E-commerce',
    img: 'https://images.unsplash.com/photo-1556740749-887f6717defa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    icon: <MonitorSmartphone size={28} />
  },
  {
    title: 'SMEs & Retail',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    icon: <Store size={28} />
  }
];

const Industries = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-10">
          <div className="hero-badge" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>
            Focus Areas
          </div>
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">
            Providing specialized insights and customized structures for diversified business sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
          {industries.map((ind, i) => (
            <motion.div 
              key={i} 
              className="industry-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <img src={ind.img} alt={ind.title} />
              <div className="industry-content">
                <div className="industry-icon">{ind.icon}</div>
                <h3>{ind.title}</h3>
                <p className="text-secondary text-sm">Tax & Compliance Support &rarr;</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
