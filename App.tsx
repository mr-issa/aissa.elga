import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProjectsSection from './components/ProjectsSection';
import MiniGallerySection from './components/MiniGallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#05060f] overflow-x-hidden">
      {/* Background light spots */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D8ECF8]/10 rounded-full filter blur-3xl opacity-30 animate-pulse pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#D8ECF8]/5 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#D8ECF8]/10 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-4000 pointer-events-none"></div>

      <div className="relative z-10">
        <Header />
        <main className="px-4 sm:px-8 md:px-12 lg:px-24">
          <HeroSection />
          <AboutSection />
          <TestimonialsSection />
          <ProjectsSection />
          <MiniGallerySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;