import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '// About', href: '#about' },
    { name: '// Services', href: '#services' },
    { name: '// Stack', href: '#skills' },
    { name: '// Works', href: '#projects' },
    { name: '// Logs', href: '#experience' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'glass-nav py-3 border-primary/10' : 'bg-transparent py-5 border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              <div className="border border-primary/30 p-1.5 rounded bg-primary/5 group-hover:bg-primary/10 transition-colors">
                <Terminal size={18} className="text-primary" />
              </div>
              <span className="text-lg font-bold text-slate-200 font-mono tracking-tight">
                ~/satyam<span className="text-primary animate-pulse">_</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-400 hover:text-primary text-xs font-mono font-medium transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2 text-xs font-mono font-bold text-darker bg-primary rounded-sm hover:bg-sky-300 transition-all hover:shadow-[0_0_10px_rgba(56,189,248,0.3)]"
            >
              $ contact_me
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-primary hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-slate-700 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-sm font-mono text-slate-300 hover:text-primary hover:bg-slate-800/50 border-b border-slate-800 last:border-0"
              >
                {link.name}
              </a>
            ))}
             <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 px-3 py-3 text-center text-sm font-mono font-bold text-darker bg-primary rounded-sm"
              >
                Initialize Contact
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
