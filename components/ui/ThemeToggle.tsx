"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Prevent flash of wrong theme by not rendering until mounted
  if (!mounted) {
    return (
      <div className="relative p-2 rounded-lg bg-secondary-800 dark:bg-secondary-900 border border-secondary-700 dark:border-secondary-800">
        <div className="w-5 h-5"></div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-secondary-800 dark:bg-secondary-900 hover:bg-secondary-700 dark:hover:bg-secondary-800 transition-colors duration-200 border border-secondary-700 dark:border-secondary-800"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <FiSun
          className={`absolute inset-0 w-5 h-5 text-orange-500 transition-all duration-300 ${
            theme === "dark" ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
          }`}
        />
        <FiMoon
          className={`absolute inset-0 w-5 h-5 text-blue-300 transition-all duration-300 ${
            theme === "light" ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
          }`}
        />
      </div>
    </button>
  );
}
