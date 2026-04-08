"use client";

import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
      }}
      className="group relative bg-white dark:bg-dark-800/50 backdrop-blur-sm rounded-lg p-6 shadow-md dark:shadow-xl dark:shadow-primary-500/5 hover:shadow-xl dark:hover:shadow-primary-500/20 transition-all duration-300 border border-secondary-200 dark:border-dark-700 hover:border-primary-500/50 overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:to-primary-600/10 transition-all duration-300 rounded-lg"></div>
      
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}