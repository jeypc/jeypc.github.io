import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const roles = [
  "Lead Full Stack Developer",
  "DevOps Engineer",
  "Distributed Systems Architect",
  "Clean Code Enthusiast"
];

export default function Hero() {
  const { name, subtitle, description } = portfolioData.personalInfo;
  
  // Custom typing animation state
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at the end of word before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting characters
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const handleDownloadCV = () => {
    // Simulated CV download
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'Jaydev_CV.pdf');
    alert("Simulated CV download started!");
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 z-10 grid-bg">
      {/* Floating Animated Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/20 blur-3xl -z-10 animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-96 md:h-96 rounded-full bg-accent/20 blur-3xl -z-10 animate-float-delayed pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Intro Text Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-slate-200/50 dark:bg-slate-800/50 border border-slate-200/10 rounded-full text-sm font-semibold tracking-wide text-accent mb-4">
              Welcome to my portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800 dark:text-white leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{name}</span>
            </h1>
            
            {/* Dynamic typing role header */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200 min-h-[40px] flex items-center mt-2">
              <span>I am a&nbsp;</span>
              <span className="text-primary dark:text-accent font-semibold relative">
                {currentText}
                <span className="animate-[pulse_1s_infinite] text-primary dark:text-accent">|</span>
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={scrollToContact}
              className="flex items-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-2xl shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Contact Me</span>
              <FaArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={handleDownloadCV}
              className="flex items-center space-x-2 px-6 py-3.5 bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-850 text-slate-800 dark:text-white font-semibold rounded-2xl border border-slate-200/10 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <FaDownload className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </motion.div>
        </div>

        {/* Graphical Representation Column */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96"
          >
            {/* Background glowing rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 blur-2xl animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border-4 border-dashed border-primary/40 animate-[spin_20s_linear_infinite]" />
            
            {/* Mock Portrait Graphics */}
            <div className="absolute inset-6 rounded-full bg-slate-800/90 dark:bg-slate-900 border-2 border-slate-700/50 flex flex-col justify-center items-center overflow-hidden shadow-inner">
              <svg
                viewBox="0 0 100 100"
                className="w-44 h-44 text-slate-400 dark:text-slate-600 animate-pulse"
                fill="currentColor"
              >
                <path d="M50 15a15 15 0 1 0 15 15 15 15 0 0 0-15-15zm0 35c-20 0-35 10-35 25v5h70v-5c0-15-15-25-35-25z" />
              </svg>
              <span className="text-sm font-semibold tracking-wider text-accent uppercase -mt-4">
                &lt; Developer /&gt;
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
