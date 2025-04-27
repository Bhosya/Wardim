
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import FeaturedMenu from '@/components/FeaturedMenu';
import Promotions from '@/components/Promotions';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <div className="section-divider"></div>
      <FeaturedMenu />
      <div className="section-divider"></div>
      <Promotions />
      <div className="section-divider"></div>
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
