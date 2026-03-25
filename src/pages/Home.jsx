import React from 'react';
import Hero from '../components/home/Hero';
import AboutBrief from '../components/home/AboutBrief';
import ServicesList from '../components/home/ServicesList';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Industries from '../components/home/Industries';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <AboutBrief />
      <ServicesList />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
