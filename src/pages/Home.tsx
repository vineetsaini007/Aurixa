import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="bg-transparent">
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;