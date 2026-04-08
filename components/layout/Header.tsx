"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { navigation } from "@/data/contact";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-dark-900 shadow-lg dark:shadow-2xl dark:shadow-primary-500/10"
          : "bg-white/95 dark:bg-dark-900/95 backdrop-blur-sm"
      } border-b border-gray-200 dark:border-dark-700`}
    >
      {/* Orange accent top strip */}
      <div className="h-0.5 w-full bg-gradient-to-r from-primary-900 via-primary-500 to-primary-900"></div>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 bg-clip-text text-transparent group-hover:from-primary-400 group-hover:via-primary-300 group-hover:to-primary-500 transition-all duration-300">
              OnAir
            </div>
            <span className="text-sm text-gray-500 dark:text-white/70 hidden sm:block tracking-wide">
              Telecom Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-all duration-200 relative group text-sm tracking-wide"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-5 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-0.5 text-sm font-semibold"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              className="text-gray-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-200 dark:border-dark-700 flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors duration-200 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 text-center text-sm font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
