import React from 'react';
import AnimatedSection from './AnimatedSection';
import { SKILLS } from '../constants';
import type { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const delay = `delay-${index * 100}`;
  return (
    <AnimatedSection delay={delay} className="w-full">
      <div className="p-6 rounded-lg border border-white/10 bg-white/5 glow-border-hover transition-all duration-300 flex flex-col items-center justify-center space-y-4 h-full">
        {skill.icon}
        <p className="text-lg font-semibold text-[#D8ECF8]">{skill.name}</p>
      </div>
    </AnimatedSection>
  );
}

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold glow-text text-center mb-12">Tech Stack</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
