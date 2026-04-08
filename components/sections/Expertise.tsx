"use client";

import { expertise } from "@/data/services";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function Expertise() {
  return (
    <section className="py-24 bg-orange-50 dark:bg-dark-900 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-3">Deep Expertise</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">Our Expertise</h2>
            <p className="text-gray-500 dark:text-white/50 max-w-sm text-sm leading-relaxed md:text-right">
              Certified expertise across leading global manufacturers — servicing{" "}
              <span className="text-primary-500 font-semibold">17+ brands</span> nationwide.
            </p>
          </div>
        </motion.div>

        {/* Expertise cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {expertise.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-white dark:bg-dark-100 rounded-2xl p-7 border border-orange-200 dark:border-dark-300 hover:border-primary-500/40 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
            >
              {/* Number */}
              <div className="text-xs font-bold text-primary-500/50 uppercase tracking-widest mb-4">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-lg font-bold mb-5 text-gray-900 dark:text-white">{item.title}</h3>

              <ul className="space-y-2.5">
                {item.items.map((brand, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FiCheckCircle className="text-primary-500 w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-white/70 text-xs font-mono tracking-wide uppercase">
                      {brand}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-dark-100 rounded-2xl border border-orange-200 dark:border-dark-300 px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-gray-900 dark:text-white font-bold text-xl mb-1">
              Servicing 17+ global equipment brands
            </p>
            <p className="text-gray-500 dark:text-white/50 text-sm">
              From power rectifiers to microwave transmission — all under one roof.
            </p>
          </div>
          <a
            href="/#contact"
            className="flex-shrink-0 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-0.5"
          >
            Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
