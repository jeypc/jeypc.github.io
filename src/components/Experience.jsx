import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-24 px-6 bg-slate-50/50 dark:bg-slate-950/20 relative">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white"
          >
            Professional Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-32 py-4 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline marker */}
              <div className="absolute -left-3.5 top-1.5 w-7 h-7 bg-white dark:bg-slate-950 border-2 border-accent rounded-full flex items-center justify-center shadow-lg">
                <FaBriefcase className="w-3 h-3 text-accent" />
              </div>

              {/* Float duration tag to the left on desktop */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-24">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {exp.duration}
                </span>
              </div>

              {/* Card wrapper */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-100/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-850 dark:text-white">
                      {exp.position}
                    </h3>
                    <h4 className="text-accent font-semibold mt-1">
                      {exp.company}
                    </h4>
                  </div>
                  
                  {/* Mobile duration tag */}
                  <div className="md:hidden flex items-center space-x-2 mt-2 sm:mt-0 text-slate-500 text-sm">
                    <FaCalendarAlt className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <p className="text-slate-655 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-white dark:bg-slate-850 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
