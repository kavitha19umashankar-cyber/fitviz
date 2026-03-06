import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2"
          data-testid="navbar-logo"
        >
          <span className="font-black text-2xl uppercase italic tracking-tighter text-white font-['Barlow_Condensed']">
            Fit<span className="text-blue-500">Viz</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wider"
              data-testid={`nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            onClick={() => scrollToSection('#contact')}
            className="bg-blue-600 text-white hover:bg-blue-500 font-bold uppercase tracking-wider rounded-none px-6 py-5 transition-all hover:translate-x-1 hover:-translate-y-1 shadow-[4px_4px_0px_0px_#ffffff]"
            data-testid="nav-get-demo-btn"
          >
            Get Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 right-0 bg-zinc-900/95 backdrop-blur-xl border-b border-white/10 md:hidden"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-base font-medium text-zinc-300 hover:text-white transition-colors uppercase tracking-wider py-2"
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-blue-600 text-white hover:bg-blue-500 font-bold uppercase tracking-wider rounded-none px-6 py-4 mt-2"
              data-testid="mobile-get-demo-btn"
            >
              Get Demo
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
