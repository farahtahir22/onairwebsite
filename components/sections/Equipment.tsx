"use client";

import { useState } from "react";
import { equipmentCategories, equipmentBrands } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";
import { FiZap, FiWifi, FiWind, FiChevronRight } from "react-icons/fi";

const iconMap: Record<string, React.ReactNode> = {
  power: <FiZap className="w-5 h-5" />,
  network: <FiWifi className="w-5 h-5" />,
  environment: <FiWind className="w-5 h-5" />,
};

export default function Equipment() {
  const [selectedCategory, setSelectedCategory] = useState(equipmentCategories[0].id);

  const currentCategory =
    equipmentCategories.find((cat) => cat.id === selectedCategory) || equipmentCategories[0];

  const categoryBrands = equipmentBrands.filter((brand) => {
    if (currentCategory.id === "power-systems") return brand.category === "Power Systems";
    if (currentCategory.id === "network-equipment") return brand.category === "Network Equipment";
    if (currentCategory.id === "environmental-systems")
      return brand.category === "Power Systems" || brand.category === "Network Equipment";
    return false;
  });

  return (
    <section className="py-24 bg-orange-50 dark:bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-3">What We Service</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Equipment We Service
            </h2>
            <p className="text-gray-500 dark:text-white/40 max-w-xs text-sm leading-relaxed md:text-right">
              Specialized repair across all major telecom infrastructure categories.
            </p>
          </div>
        </motion.div>

        {/* Mobile: horizontal tab bar */}
        <div className="flex lg:hidden gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {equipmentCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  isActive
                    ? "bg-primary-500 border-primary-500 text-white"
                    : "bg-white dark:bg-dark-200 border-orange-200 dark:border-dark-400 text-gray-600 dark:text-white/60 hover:border-primary-500/50 hover:text-primary-500 dark:hover:text-white"
                }`}
              >
                {iconMap[cat.icon]}
                <span>{cat.shortTitle}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20" : "bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-white/40"}`}>
                  {cat.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Desktop: sidebar + content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left sidebar — desktop only */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="lg:sticky lg:top-28 space-y-2">
              {equipmentCategories.map((category) => {
                const isActive = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`group w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left ${
                      isActive
                        ? "bg-primary-500/10 border-primary-500/40"
                        : "bg-white dark:bg-dark-200 border-orange-200 dark:border-dark-400 hover:bg-orange-100 dark:hover:bg-dark-300 hover:border-primary-500/30"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                        isActive
                          ? "bg-primary-500/20 text-primary-500"
                          : "bg-orange-100 dark:bg-dark-300 text-gray-400 dark:text-white/50 group-hover:text-primary-500"
                      }`}
                    >
                      {iconMap[category.icon]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`font-semibold text-sm uppercase tracking-wider block ${isActive ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-white/60 group-hover:text-gray-800 dark:group-hover:text-white"}`}>
                        {category.shortTitle}
                      </span>
                      <span className={`text-xs truncate block mt-0.5 ${isActive ? "text-gray-600 dark:text-white/60" : "text-gray-400 dark:text-white/40"}`}>
                        {category.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? "bg-primary-500/20 text-primary-500" : "bg-gray-100 dark:bg-white/10 text-gray-400 dark:text-white/40"}`}>
                        {category.items.length}
                      </span>
                      <FiChevronRight className={`transition-opacity duration-200 ${isActive ? "text-primary-500 opacity-100" : "opacity-0 group-hover:opacity-40"}`} size={16} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right content area */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
                className="bg-white dark:bg-dark-100 border border-orange-200 dark:border-dark-300 rounded-2xl p-8 md:p-10"
              >
                {/* Category header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-500 flex-shrink-0">
                    {iconMap[currentCategory.icon]}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {currentCategory.title}
                    </h3>
                    <p className="text-gray-500 dark:text-white/60 text-sm leading-relaxed max-w-2xl">
                      {currentCategory.description}
                    </p>
                  </div>
                </div>

                {/* CTA link */}
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 text-sm font-medium transition-colors duration-200 mb-8 group"
                >
                  The right service makes all the difference
                  <FiChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>

                {/* Equipment items */}
                <div className="mb-10">
                  <p className="text-gray-400 dark:text-white/30 text-xs uppercase tracking-wider mb-4 font-semibold">Equipment Types</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentCategory.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                        className="flex items-center gap-3 bg-gray-50 dark:bg-dark-200 border border-gray-200 dark:border-dark-400 rounded-lg px-4 py-3 hover:border-primary-500/40 hover:bg-orange-50 dark:hover:bg-dark-300 transition-all duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0"></span>
                        <span className="text-gray-700 dark:text-white/70 text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                {categoryBrands.length > 0 && (
                  <div>
                    <div className="h-px bg-gray-200 dark:bg-white/8 mb-8"></div>
                    <p className="text-gray-400 dark:text-white/30 text-xs uppercase tracking-wider mb-5 font-semibold">
                      Trusted Brand Partners
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {categoryBrands.map((brand, index) => (
                        <motion.div
                          key={brand.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.04 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="group"
                        >
                          <div className="px-4 py-2 bg-gray-50 dark:bg-dark-200 border border-gray-200 dark:border-dark-400 rounded-lg hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-200">
                            <span className="text-gray-500 dark:text-white/60 group-hover:text-primary-500 font-medium text-xs tracking-wider uppercase transition-colors duration-200">
                              {brand.name}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
