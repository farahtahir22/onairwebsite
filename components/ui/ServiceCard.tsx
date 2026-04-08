"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-white dark:bg-dark-800/50 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-2xl dark:shadow-primary-500/5 p-8 hover:shadow-2xl dark:hover:shadow-primary-500/20 transition-all duration-300 border border-secondary-200 dark:border-dark-700 hover:border-primary-500/50 overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:to-primary-600/10 transition-all duration-300 rounded-xl"></div>
      
      <div className="relative z-10">
        <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}