import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const categories = ["All", "Frontend", "Backend", "Fullstack"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const projects = portfolioData.projects;

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category.toLowerCase() === selectedCategory.toLowerCase());

  // Dynamic gradient map based on title or image placeholder to look premium
  const getGradient = (index) => {
    const gradients = [
      "from-blue-600 to-cyan-500",
      "from-purple-600 to-pink-500",
      "from-emerald-500 to-teal-400",
      "from-orange-500 to-amber-400"
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-accent text-white border-transparent shadow-lg shadow-primary/25"
                  : "bg-slate-100/50 dark:bg-slate-900 border-slate-200/10 hover:border-primary text-slate-655 dark:text-slate-350"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                whileHover={{ y: -8 }}
                className="group bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full text-left"
              >
                {/* Screenshot Placeholder with elegant Gradient */}
                <div className={`relative h-48 sm:h-56 bg-gradient-to-tr ${getGradient(index)} flex items-center justify-center p-6 text-white overflow-hidden`}>
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors" />
                  <div className="text-center z-10">
                    <span className="text-xs uppercase tracking-widest font-black bg-slate-950/30 px-3 py-1.5 rounded-full border border-white/20">
                      {project.category}
                    </span>
                    <h4 className="text-xl font-bold mt-3 drop-shadow-md">
                      {project.title}
                    </h4>
                  </div>
                  
                  {/* Subtle vector grid over screenshot */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-350 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm font-bold text-slate-655 hover:text-primary dark:text-slate-350 dark:hover:text-primary transition-colors cursor-pointer"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm font-bold text-slate-655 hover:text-accent dark:text-slate-350 dark:hover:text-accent transition-colors cursor-pointer"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
