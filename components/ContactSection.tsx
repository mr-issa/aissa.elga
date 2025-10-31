import React from 'react';
import AnimatedSection from './AnimatedSection';
import { SOCIAL_LINKS } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection direction="left">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold glow-text mb-4">Let's Connect</h2>
            <p className="text-lg text-[#D8ECF8]/80 mb-8 max-w-md">
              Have a project in mind or just want to discuss the future of digital? I'd love to hear from you.
            </p>
            <div className="flex space-x-6">
              {SOCIAL_LINKS.map(link => (
                 <a key={link.name} href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer" className="text-[#D8ECF8]/80 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:glow-text">
                   <i className={`ph ${link.icon} text-4xl`}></i>
                 </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right" delay="delay-200">
          <form className="space-y-6 p-8 rounded-lg glass-card glow-border">
            <AnimatedSection direction="up" delay="delay-300">
              <input type="text" placeholder="Your Name" className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all" />
            </AnimatedSection>
            <AnimatedSection direction="up" delay="delay-400">
              <input type="email" placeholder="Your Email" className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all" />
            </AnimatedSection>
            <AnimatedSection direction="up" delay="delay-500">
              <textarea placeholder="Your Message" rows={4} className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"></textarea>
            </AnimatedSection>
            <AnimatedSection direction="up" delay="delay-600">
              <button
                type="submit"
                className="w-full px-8 py-4 text-lg font-semibold text-[#05060f] bg-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.7)] active:scale-95"
              >
                Send Message
              </button>
            </AnimatedSection>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
