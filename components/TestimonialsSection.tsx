import React from 'react';
import AnimatedSection from './AnimatedSection';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="p-8 rounded-lg glass-card glow-border h-full flex flex-col">
    <i className="ph ph-quotes text-4xl text-cyan-400 mb-4"></i>
    <p className="text-[#D8ECF8]/90 mb-6 flex-grow">"{testimonial.quote}"</p>
    <div className="flex items-center">
      <img src={testimonial.imageUrl} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white/20"/>
      <div>
        <p className="font-bold text-[#D8ECF8]">{testimonial.name}</p>
        <p className="text-sm text-[#D8ECF8]/70">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold glow-text text-center mb-12">What Clients Say</h2>
        </AnimatedSection>
        <AnimatedSection delay="delay-200">
          <div className="flex overflow-x-auto snap-x snap-mandatory space-x-8 pb-4 scrollbar-hide">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="snap-center shrink-0 w-[90%] sm:w-80 md:w-96">
                  <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
