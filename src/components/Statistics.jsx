import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

// Reusable Counter Sub-component
function AnimatedCounter({ endVal, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * endVal));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endVal); // safety override
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, endVal, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Statistics() {
  const { experienceYears, completedProjects, happyClients, technologiesCount } = portfolioData.personalInfo;

  const stats = [
    {
      label: "Years Experience",
      value: experienceYears,
      suffix: "+",
    },
    {
      label: "Projects Completed",
      value: completedProjects,
      suffix: "+",
    },
    {
      label: "Happy Clients",
      value: happyClients,
      suffix: "+",
    },
    {
      label: "Technologies Mastered",
      value: technologiesCount,
      suffix: "+",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-y border-slate-200/10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="flex flex-col items-center justify-center text-center space-y-2"
          >
            {/* Value */}
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-850 dark:text-white tracking-tight">
              <AnimatedCounter endVal={stat.value} />
              <span className="text-accent">{stat.suffix}</span>
            </span>
            
            {/* Label */}
            <span className="text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
