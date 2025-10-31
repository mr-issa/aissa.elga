import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container mx-auto text-center text-[#D8ECF8]/60">
        <div className="flex justify-center space-x-6 mb-4">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="hover:text-cyan-400 hover:glow-text transition-all duration-300">
              {link.name}
            </a>
          ))}
        </div>
        <p>&copy; 2022 A.EL GARRAM. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;