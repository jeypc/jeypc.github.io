import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaAward, FaCalendarAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { biography, passion, careerObjective } = portfolioData.about;
  const { experienceYears, completedProjects, technologiesCount } = portfolioData.personalInfo;

  const cardItems = [
    {
      icon: <FaCalendarAlt className="text-primary w-6 h-6" />,
      title: "Experience",
      description: `${experienceYears}+ Years Working`,
    },
    {
      icon: <FaCode className="text-accent w-6 h-6" />,
      title: "Projects",
      description: `${completedProjects}+ Completed`,
    },
    {
      icon: <FaAward className="text-yellow-500 w-6 h-6" />,
      title: "Technologies",
      description: `${technologiesCount}+ Mastered`,
    },
    {
      icon: <FaGraduationCap className="text-green-500 w-6 h-6" />,
      title: "Certifications",
      description: "AWS, GCP & Kubernetes",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-slate-900/40 dark:bg-slate-950/20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Text Detail */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <h3 className="text-2xl font-bold text-slate-850 dark:text-slate-100">
              My Journey and Core Philosophies
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              {biography}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              <strong>My Passion: </strong>
              {passion}
            </p>
            <div className="p-5 bg-slate-100/50 dark:bg-slate-800/40 border border-slate-200/10 rounded-2xl">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
                Career Objective
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                {careerObjective}
              </p>
            </div>
          </motion.div>

          {/* Right Cards Showcase */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {cardItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-6 bg-slate-100 dark:bg-slate-900 border border-slate-200/10 dark:border-slate-850 rounded-2xl shadow-sm hover:shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-default"
              >
                <div className="p-4 bg-white dark:bg-slate-800/80 rounded-2xl mb-4 group-hover:scale-110 transition-transform shadow-inner">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg text-slate-850 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
