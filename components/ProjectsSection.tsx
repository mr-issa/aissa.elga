import React from 'react';
import AnimatedSection from './AnimatedSection';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; isReversed: boolean }> = ({ project, isReversed }) => (
  <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center`}>
    <AnimatedSection direction={isReversed ? 'right' : 'left'}>
        <div className={`rounded-lg overflow-hidden glow-border group ${isReversed ? 'md:order-2' : ''}`}>
            <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
    </AnimatedSection>
    <AnimatedSection direction={isReversed ? 'left' : 'right'} delay="delay-200">
        <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-[#D8ECF8] mb-4">{project.title}</h3>
            <p className="text-[#D8ECF8]/80 mb-6 text-lg">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-sm bg-[#D8ECF8]/10 text-[#D8ECF8] rounded-full">{tag}</span>
                ))}
            </div>
            {project.liveUrl && 
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 font-semibold text-[#D8ECF8] bg-transparent border-2 border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-400 hover:text-[#05060f] hover:shadow-[0_0_20px_rgba(45,212,191,0.5)]">
                    View Project
                </a>
            }
        </div>
    </AnimatedSection>
  </div>
);

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
       <div className="container mx-auto space-y-24">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold glow-text text-center mb-4">Selected Work</h2>
        </AnimatedSection>
        {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
