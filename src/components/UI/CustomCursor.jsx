import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 300, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;
    
    setIsVisible(true);
    document.body.classList.add('custom-cursor-active');

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('interactive-cursor');
      
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-accent pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? "rgba(6, 182, 212, 0.15)" : "rgba(6, 182, 212, 0)",
          borderColor: isHovered ? "rgba(6, 182, 212, 0.8)" : "rgba(6, 182, 212, 0.5)",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          x: cursorX.get() + 12,
          y: cursorY.get() + 12,
          scale: isHovered ? 0.5 : 1,
        }}
      />
    </>
  );
}
