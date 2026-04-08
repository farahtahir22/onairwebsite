"use client";

import { useState } from "react";
import { FiMail, FiMapPin, FiSend, FiClock } from "react-icons/fi";
import { contactInfo } from "@/data/contact";
import { motion } from "framer-motion";

const serviceOptions = [
  "Equipment Repair",
  "Refurbishment",
  "Maintenance",
  "General Inquiry",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/3 via-transparent to-accent-500/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-3">Contact Us</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="text-gray-500 dark:text-white/50 max-w-xs text-sm leading-relaxed md:text-right">
              Tell us about your equipment and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-gray-50 dark:bg-dark-100 border border-gray-200 dark:border-dark-300 rounded-2xl p-7">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors duration-200">
                    <FiMapPin className="text-primary-500 w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-wider mb-1 font-semibold">Location</p>
                    <p className="text-gray-700 dark:text-white font-medium">{contactInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors duration-200">
                    <FiMail className="text-primary-500 w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-wider mb-1 font-semibold">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-primary-500 hover:text-primary-400 font-medium transition-colors text-sm"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors duration-200">
                    <FiClock className="text-primary-500 w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-wider mb-1 font-semibold">Response Time</p>
                    <p className="text-gray-700 dark:text-white font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services we handle */}
            <div className="bg-gray-50 dark:bg-dark-100 border border-gray-200 dark:border-dark-300 rounded-2xl p-7">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">Services Available</h4>
              <div className="space-y-2">
                {serviceOptions.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-gray-600 dark:text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-50 dark:bg-dark-100 border border-gray-200 dark:border-dark-300 rounded-2xl p-7 md:p-9">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-500 dark:text-white/50 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-dark-900 border border-gray-300 dark:border-dark-400 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-white/25 text-sm"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-500 dark:text-white/50 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-dark-900 border border-gray-300 dark:border-dark-400 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-white/25 text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-gray-500 dark:text-white/50 uppercase tracking-wider mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-dark-900 border border-gray-300 dark:border-dark-400 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm appearance-none cursor-pointer"
                  >
                    <option value="" className="dark:bg-dark-900">Select a service...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="dark:bg-dark-900">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-500 dark:text-white/50 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-dark-900 border border-gray-300 dark:border-dark-400 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400 dark:placeholder:text-white/25 text-sm"
                    placeholder="Describe the equipment and issue..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:shadow-primary-500/30 transform hover:-translate-y-0.5 text-sm"
                >
                  <span>Send Message</span>
                  <FiSend size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
