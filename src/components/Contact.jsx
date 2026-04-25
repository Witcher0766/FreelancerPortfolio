import React from "react";
import { motion } from "framer-motion";

const ContactItem = ({ icon, label, value, href, delay }) => (
  <motion.a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel="noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.03 }}
    className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/80 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-all duration-300 group"
  >
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-lg shadow-md shadow-blue-500/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide">{label}</p>
      <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  return (
    <section
      className="relative py-28 overflow-hidden"
      id="contact"
      style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)" }}
    >
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:opacity-100 opacity-0" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent dark:via-blue-700" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-400 rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: CTA text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 text-center md:text-left"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block self-center md:self-start px-4 py-1.5 rounded-full bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-widest"
            >
              Let's Connect
            </motion.span>

            <h2
              className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.03em" }}
            >
              In need of a{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                designer
              </span>{" "}
              /{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                developer
              </span>
              ?
            </h2>

            <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2 justify-center md:justify-start">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              I'm currently available for work
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Whether you have a project in mind or just want to chat — my inbox is always open. Let's create something amazing together.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <motion.a
                href="mailto:kumarvishwajeet076@gmail.com"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 text-sm"
              >
                Send a Message →
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/vishwajeet-kumar-8080a51bb/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold rounded-full shadow-md border border-gray-200 dark:border-gray-700 text-sm hover:border-blue-300 transition-all"
              >
                LinkedIn Profile
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <ContactItem
              icon="📞"
              label="Phone"
              value="+91 7070761869"
              href="tel:+917070761869"
              delay={0.2}
            />
            <ContactItem
              icon="✉️"
              label="Email"
              value="kumarvishwajeet076@gmail.com"
              href="mailto:kumarvishwajeet076@gmail.com"
              delay={0.3}
            />
            <ContactItem
              icon="🌍"
              label="Location"
              value="India · Remote Friendly"
              href="#"
              delay={0.4}
            />
            <ContactItem
              icon="💼"
              label="Upwork"
              value="View Freelance Profile"
              href="https://www.upwork.com/freelancers/~0172e5f8e76e258bcb?mp_source=share"
              delay={0.5}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;