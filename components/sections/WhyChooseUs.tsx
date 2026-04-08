"use client";

import { motion } from "framer-motion";
import { FiPackage, FiShield, FiStar, FiTrendingDown } from "react-icons/fi";
import { whyChooseUs } from "@/data/services";

const icons = [FiPackage, FiShield, FiStar, FiTrendingDown];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/3 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: bold statement */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-4">Why OnAir</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Why Choose OnAir
            </h2>
            <div className="border-l-4 border-primary-500 pl-6 mb-8">
              <p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-white/80 leading-snug italic">
                "Built for Pakistan's Telecom Industry"
              </p>
            </div>
            <p className="text-gray-500 dark:text-white/50 text-base leading-relaxed max-w-md">
              We combine deep technical expertise with industry-standard repair practices to keep Pakistan's telecom infrastructure running at peak performance — with less downtime and lower costs.
            </p>
          </motion.div>

          {/* Right: 2x2 feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyChooseUs.map((feature, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-gray-50 dark:bg-dark-100 border border-gray-200 dark:border-dark-300 rounded-2xl p-6 hover:border-primary-500/40 hover:shadow-lg hover:shadow-primary-500/8 transition-all duration-300 overflow-hidden cursor-default"
                >
                  {/* Left border accent on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500 rounded-l-2xl scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></div>

                  <div className="w-10 h-10 bg-primary-500/10 dark:bg-primary-500/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                    <Icon className="text-primary-500 w-4 h-4" />
                  </div>

                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 dark:text-white/50 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
