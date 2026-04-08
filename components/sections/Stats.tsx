"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "17+", label: "Global Brand Partners", description: "ZTE, ELTEK, Huawei, Ericsson & more" },
  { value: "3", label: "Equipment Specializations", description: "Power, Network & Environmental" },
  { value: "100%", label: "Nationwide Coverage", description: "Serving operators across Pakistan" },
  { value: "Fast", label: "Turnaround Guarantee", description: "Minimizing your network downtime" },
];

export default function Stats() {
  return (
    <section className="bg-primary-500 dark:bg-accent-500 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-primary-500/10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="px-8 py-10 text-center"
            >
              <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white font-semibold text-sm mb-1 uppercase tracking-wider">{stat.label}</div>
              <div className="text-white/60 text-xs">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
