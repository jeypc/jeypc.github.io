import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronUp, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { name, email, github, linkedin, instagram } = portfolioData.personalInfo;
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 bg-slate-900 border-t border-slate-200/10 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Logo / Brand */}
        <div className="text-center md:text-left">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {name}
          </span>
          <p className="text-xs text-slate-500 mt-1">
            &copy; {currentYear} {name}. All rights reserved.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex space-x-6">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors cursor-pointer"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors cursor-pointer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors cursor-pointer"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${email}`}
            className="hover:text-primary transition-colors cursor-pointer"
            aria-label="Email"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>

        {/* Right: Manual back to top link */}
        <button
          onClick={scrollToTop}
          className="text-sm font-semibold hover:text-accent transition-colors cursor-pointer flex items-center space-x-1"
        >
          <span>Back to Top</span>
          <FaChevronUp className="w-3 h-3" />
        </button>
      </div>

      {/* Floating Scroll Button (Bottom Right) */}
      <AnimatePresence>
        {showScrollBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent-hover text-white rounded-2xl shadow-xl z-30 cursor-pointer transition-all transform hover:-translate-y-0.5"
            aria-label="Scroll to top"
          >
            <FaChevronUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
