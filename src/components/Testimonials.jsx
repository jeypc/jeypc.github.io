import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Testimonials() {
  const testimonials = portfolioData.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white"
          >
            Client Reviews
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Carousel Window */}
        <div className="relative min-h-[320px] sm:min-h-[250px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200/10 rounded-3xl p-8 sm:p-12 shadow-sm hover:shadow-md flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 sm:gap-8"
            >
              {/* Avatar image */}
              <div className="relative shrink-0">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-accent/20"
                  loading="lazy"
                />
                <div className="absolute -top-2 -left-2 bg-accent text-white p-2 rounded-full shadow-md">
                  <FaQuoteLeft className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Text content */}
              <div className="space-y-4">
                <p className="text-slate-655 dark:text-slate-350 text-base italic leading-relaxed">
                  "{activeTestimonial.comment}"
                </p>
                <div>
                  <h4 className="font-bold text-lg text-slate-850 dark:text-white">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-sm font-semibold text-accent">
                    {activeTestimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls and dots */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "bg-accent w-6"
                    : "bg-slate-300 dark:bg-slate-700 hover:bg-primary"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex space-x-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/10 hover:bg-primary hover:text-white transition-colors cursor-pointer text-slate-700 dark:text-slate-300"
              aria-label="Previous Testimonial"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/10 hover:bg-primary hover:text-white transition-colors cursor-pointer text-slate-700 dark:text-slate-300"
              aria-label="Next Testimonial"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
