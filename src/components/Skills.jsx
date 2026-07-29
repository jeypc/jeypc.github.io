import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { frontend, backend, database, devops, architecture } = portfolioData.skills;

  const categories = [
    { title: "Frontend Development", skills: frontend },
    { title: "Backend Systems", skills: backend },
    { title: "Databases", skills: database },
    { title: "Cloud & DevOps", skills: devops },
    { title: "Architecture & Design", skills: architecture },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
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
            Core Skills &amp; Proficiencies
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="p-6 sm:p-8 bg-slate-100 dark:bg-slate-900 border border-slate-200/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 border-b border-slate-200/10 pb-2 text-left">
                {cat.title}
              </h3>
              
              <div className="space-y-5">
                {cat.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    {/* Header */}
                    <div className="flex justify-between items-center text-sm font-medium text-slate-700 dark:text-slate-300">
                      <span>{skill.name}</span>
                      <span className="text-accent">{skill.level}%</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
