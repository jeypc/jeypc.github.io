import { motion } from 'framer-motion';
import { FaReact, FaServer, FaLayerGroup, FaCode, FaRocket, FaMobileAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

// Dynamic icon resolver
const iconMap = {
  FaReact: <FaReact className="w-8 h-8 text-blue-400" />,
  FaServer: <FaServer className="w-8 h-8 text-emerald-400" />,
  FaLayerGroup: <FaLayerGroup className="w-8 h-8 text-purple-400" />,
  FaCode: <FaCode className="w-8 h-8 text-cyan-400" />,
  FaRocket: <FaRocket className="w-8 h-8 text-red-400" />,
  FaMobileAlt: <FaMobileAlt className="w-8 h-8 text-pink-400" />,
};

export default function Services() {
  const services = portfolioData.services;

  return (
    <section id="services" className="py-24 px-6 bg-slate-50/50 dark:bg-slate-950/20 relative">
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
            Services Offered
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col text-left group cursor-default"
            >
              {/* Icon Container */}
              <div className="p-4 bg-white dark:bg-slate-800/80 rounded-2xl w-fit mb-6 shadow-inner group-hover:scale-110 transition-transform">
                {iconMap[service.icon] || <FaCode className="w-8 h-8 text-primary" />}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-850 dark:text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
