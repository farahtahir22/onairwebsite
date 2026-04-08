import Link from "next/link";
import { FiMail, FiMapPin } from "react-icons/fi";
import { contactInfo, navigation } from "@/data/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-orange-50 dark:bg-gray-900 border-t-2 border-primary-500/30 dark:border-primary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                OnAir
              </span>
              <span className="text-gray-400 dark:text-white/40 text-sm">Telecom Solutions</span>
            </div>
            <p className="text-gray-500 dark:text-white/60 text-sm leading-relaxed max-w-xs">
              Expert repair &amp; refurbishment for Pakistan's telecom infrastructure — power systems, network equipment, and environmental systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 dark:text-white/50 uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-500 dark:text-white/60 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 dark:text-white/50 uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm">
                <FiMapPin className="text-primary-500 flex-shrink-0" size={14} />
                <span className="text-gray-500 dark:text-white/60">{contactInfo.location}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FiMail className="text-primary-500 flex-shrink-0" size={14} />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-500 dark:text-white/60 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/8 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-400 dark:text-white/30">© {currentYear} {contactInfo.company}. All rights reserved.</p>
          <p className="text-gray-400 dark:text-white/30">Pakistan's Telecom Equipment Specialists</p>
        </div>
      </div>
    </footer>
  );
}
