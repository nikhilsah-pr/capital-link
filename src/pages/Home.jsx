import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import VisionMission from '../components/VisionMission';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import Timeline from '../components/Timeline';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <WhyChoose />
        <Timeline />
        <Partners />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
