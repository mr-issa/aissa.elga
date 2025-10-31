import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#05060f]/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-2xl font-bold glow-text">
          A.EL GARRAM
        </a>
        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg text-[#D8ECF8]/80 hover:text-[#D8ECF8] hover:glow-text transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-[#D8ECF8]">
          <i className="ph ph-list text-2xl"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;