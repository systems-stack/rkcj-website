import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileText, CheckSquare, Building, BookOpen, Landmark, Briefcase, Award } from 'lucide-react';

const detailedServices = [
  {
    icon: <Calculator size={32} />,
    title: 'GST Consultancy & Compliance',
    desc: 'End-to-end GST solutions to ensure smooth compliance and maximum efficiency.',
    items: [
      'GST Registration & Setup',
      'Return Filing (Monthly/Quarterly/Annual)',
      'Refund Processing (including exporters)',
      'GST Notices & Litigation Support',
      'Advisory & Compliance Review'
    ]
  },
  {
    icon: <FileText size={32} />,
    title: 'Income Tax Services',
    desc: 'Comprehensive tax solutions tailored for individuals and businesses.',
    items: [
      'Income Tax Return Filing',
      'Tax Planning & Optimization',
      'TDS/TCS Compliance',
      'Handling Tax Notices & Assessments',
      'Capital Gains & Investment Advisory'
    ]
  },
  {
    icon: <CheckSquare size={32} />,
    title: 'Audit & Assurance',
    desc: 'Reliable audit services ensuring transparency and regulatory compliance.',
    items: [
      'Statutory Audit',
      'Tax Audit',
      'Internal Audit',
      'GST Audit',
      'Risk & Compliance Review'
    ]
  },
  {
    icon: <Building size={32} />,
    title: 'Business Registration & Structuring',
    desc: 'Helping you start and structure your business the right way.',
    items: [
      'Company Incorporation (Pvt Ltd, LLP, OPC)',
      'Partnership & Firm Registration',
      'Startup & MSME Registration',
      'PAN, TAN & Other Licenses'
    ]
  },
  {
    icon: <BookOpen size={32} />,
    title: 'Accounting & Bookkeeping',
    desc: 'Accurate financial records to support informed decision-making.',
    items: [
      'Outsourced Accounting',
      'Bookkeeping Services',
      'Financial Statements Preparation',
      'MIS & Reporting',
      'Payroll Management'
    ]
  },
  {
    icon: <Landmark size={32} />,
    title: 'Financial Advisory & Consulting',
    desc: 'Strategic insights to drive business growth and profitability.',
    items: [
      'Financial Planning',
      'Cash Flow & Budgeting',
      'Profitability Analysis',
      'Investment Structuring',
      'Business Growth Advisory'
    ]
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Compliance & Regulatory Services',
    desc: 'Ensuring your business stays fully compliant at all times.',
    items: [
      'ROC Compliance & Filings',
      'Secretarial Compliance',
      'FEMA & RBI Compliance',
      'Labour Law Compliance'
    ]
  },
  {
    icon: <Award size={32} />,
    title: 'Specialized & Value-Added Services',
    desc: 'Focused solutions for complex and high-value requirements.',
    items: [
      'GST Refund Recovery (especially for exporters)',
      'Business Restructuring',
      'Due Diligence',
      'Project Financing Support',
      'Government Liaison Services'
    ]
  }
];

const Services = () => {
  return (
    <div className="section container">
      <div className="text-center mb-10">
        <div className="hero-badge" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>
          Our Expertise
        </div>
        <h1 className="section-title">Comprehensive Financial Services</h1>
        <p className="section-subtitle">
          Explore our wide range of professional services built on 65+ years of trusted experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-md">
        {detailedServices.map((service, index) => (
          <motion.div 
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div className="service-icon" style={{ marginBottom: 0 }}>{service.icon}</div>
              <h2 style={{ fontSize: '1.3rem', marginBottom: 0 }}>{service.title}</h2>
            </div>
            <p style={{ color: 'var(--foreground-light)', marginBottom: '1.5rem', fontWeight: '500' }}>
              {service.desc}
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {service.items.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--foreground-light)', fontSize: '0.95rem' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--secondary)', borderRadius: '50%' }}></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
