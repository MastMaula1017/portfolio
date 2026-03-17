import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`comic-card flex justify-between items-center px-6 py-4 bg-white`}>
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-bubblegum border-4 border-black flex items-center justify-center font-fredoka font-bold text-xl">
              V
            </div>
            <span className="font-fredoka font-bold text-2xl hidden sm:block">Vansh Raturi</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <MagneticWrapper key={link}>
                <a 
                  href={`#${link.toLowerCase()}`}
                  className="inline-block font-fredoka font-semibold text-lg border-2 border-transparent hover:border-black px-3 py-1 rounded-lg transition-all hover:bg-mint-green hover:-translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  {link}
                </a>
              </MagneticWrapper>
            ))}
            <MagneticWrapper>
              <a 
                href="/vanshCv.pdf" 
                download="Vansh_Raturi_Resume.pdf"
                className="inline-flex items-center gap-2 bg-bubblegum text-black font-fredoka font-bold text-lg px-4 py-2 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff9c95] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all"
              >
                <Download size={18} /> Resume
              </a>
            </MagneticWrapper>
          </div>

          {/* Mobile Toggle */}
          <MagneticWrapper className="md:hidden">
            <button 
              className="border-2 border-black p-1 rounded-lg hover:bg-mint-green transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </MagneticWrapper>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden comic-card mt-2 p-4 flex flex-col gap-4 bg-pastel-yellow"
          >
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="font-fredoka font-semibold text-xl border-2 border-black bg-white px-4 py-2 rounded-lg text-center active:bg-mint-green"
              >
                {link}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              download="Vansh_Raturi_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="font-fredoka font-bold text-xl border-4 border-black bg-bubblegum px-4 py-3 rounded-xl text-center flex items-center justify-center gap-2 active:bg-[#ff9c95] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Download size={24} /> Download Resume
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
