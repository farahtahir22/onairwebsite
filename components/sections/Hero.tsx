"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiZap } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gradient-to-br dark:from-dark-900 dark:via-dark-900 dark:to-accent-500/30 pt-20 overflow-hidden">
      {/* Background blobs — visible in both modes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/15 rounded-full filter blur-3xl opacity-40 animate-blob dark:opacity-25"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/8 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-accent-500/10 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-3000 dark:opacity-15"></div>
      </div>

      {/* Grid pattern — dark lines for light mode, white lines for dark */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-[1]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 text-primary-500 dark:text-primary-400 text-sm font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
          >
            <FiZap size={14} />
            <span>Telecom Equipment Specialists</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Professional Telecom
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Solutions Across Pakistan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl text-gray-500 dark:text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Expert repair, refurbishment, and maintenance for power systems,
            network equipment, and environmental systems — trusted by Pakistan's
            leading telecom operators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/#services"
              className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:shadow-primary-500/40 transform hover:-translate-y-1"
            >
              <span>Explore Services</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/#contact"
              className="bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300 border border-gray-300 dark:border-white/20 hover:border-primary-500/50 flex items-center space-x-2 shadow-md transform hover:-translate-y-1"
            >
              <span>Get In Touch</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
