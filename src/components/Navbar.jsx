import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "projects", "capabilities", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Capabilities", href: "#capabilities", id: "capabilities" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
            ? "backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-lg shadow-black/5"
            : "bg-transparent"
          }`}
        id="home"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="relative group flex items-center gap-1"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Decorative bracket */}
              <span
                className="text-blue-400 dark:text-blue-500 font-black text-2xl leading-none select-none"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {"<"}
              </span>
              <span className="flex flex-col leading-none">
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Vishwajeet
                </span>
                <span
                  className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"
                  style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.03em" }}
                >
                  Kumar
                </span>
              </span>
              <span
                className="text-green-400 dark:text-green-500 font-black text-2xl leading-none select-none"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {"/>"}
              </span>
              {/* Underline hover */}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-500 group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${activeSection === link.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                >
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-blue-50 dark:bg-blue-900/30 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </motion.a>
              ))}
              <motion.a
                href="mailto:kumarvishwajeet076@gmail.com"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold rounded-full shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
              >
                Hire Me ✦
              </motion.a>
            </div>

            {/* Mobile Hamburger */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all"
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 border-t border-gray-100 dark:border-gray-800"
            >
              <div className="px-6 py-4 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-gray-700 dark:text-gray-200 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 transition-all"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="mailto:kumarvishwajeet076@gmail.com"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl text-center"
                >
                  Hire Me ✦
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;