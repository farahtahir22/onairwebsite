"use client";

import { motion } from "framer-motion";
import { FiTool, FiRefreshCw, FiSettings } from "react-icons/fi";
import { services } from "@/data/services";

const serviceIcons = [FiTool, FiRefreshCw, FiSettings];
const serviceNumbers = ["01", "02", "03"];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/3 via-transparent to-accent-500/3 dark:from-primary-500/5 dark:to-accent-500/5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div>
            <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Our Services
            </h2>
          </div>
          <p className="text-gray-500 dark:text-white/50 max-w-xs text-sm leading-relaxed md:text-right">
            End-to-end telecom equipment solutions for Pakistan's leading network operators.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gray-50 dark:bg-dark-100 border border-gray-200 dark:border-dark-300 rounded-2xl p-8 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Number watermark */}
                <div className="absolute top-4 right-6 text-7xl font-bold text-primary-500/8 dark:text-primary-500/10 select-none leading-none group-hover:text-primary-500/15 transition-colors duration-300">
                  {serviceNumbers[index]}
                </div>

                {/* Left orange border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500 rounded-l-2xl scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></div>

                {/* Icon */}
                <div className="w-12 h-12 bg-primary-500/10 dark:bg-primary-500/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors duration-300">
                  <Icon className="text-primary-500 w-5 h-5" />
                </div>

                {/* Number label */}
                <div className="text-xs font-bold text-primary-500/60 uppercase tracking-widest mb-2">
                  {serviceNumbers[index]}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
