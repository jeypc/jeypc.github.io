import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import useActiveSection from '../hooks/useActiveSection';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const activeSection = useActiveSection(
    navLinks.map((link) => link.id),
    120
  );

  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      setScrolled(window.scrollY > 50);

      // Scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer"
        >
          Jaydev<span className="text-accent">.</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative py-1 font-medium transition-colors cursor-pointer text-sm tracking-wide ${
                activeSection === link.id
                  ? 'text-accent'
                  : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Actions (Theme toggle + Menu toggle) */}
        <div className="flex items-center space-x-4">

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-800 dark:text-slate-200 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/50 py-6 px-6 md:hidden flex flex-col space-y-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`py-2 text-left font-medium text-lg border-b border-slate-200/50 dark:border-slate-800/50 ${
                  activeSection === link.id
                    ? 'text-accent pl-2 border-l-2 border-l-accent'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
