import React from 'react';
import AnimatedSection from './AnimatedSection';
import { SKILLS } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto">
        <AnimatedSection direction="up" delay="delay-200">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold glow-text mb-6">A Passion for Growth</h2>
            <p className="text-lg text-[#D8ECF8]/90 leading-relaxed mb-8">
              I'm A.EL GARRAM, a digital marketer dedicated to building brands that resonate. My passion lies at the intersection of creative strategy and data-driven results, crafting campaigns that not only look beautiful but also drive meaningful growth.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center">
              {SKILLS.map(skill => (
                <div key={skill.name} className="flex items-center space-x-2 text-[#D8ECF8]/80">
                  <i className={`ph ${skill.icon} text-2xl text-cyan-400`}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;