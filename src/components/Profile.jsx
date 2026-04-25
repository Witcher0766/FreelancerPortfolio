import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import fallbackImage from "../assets/png.png";
import ParticleConfig from "./config/ParticleConfig";

const FloatingOrb = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
    animate={{
      y: [0, -30, 0],
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 7 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

const StatPill = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center px-6 py-3 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/60 dark:border-gray-700/60 shadow-sm"
  >
    <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {value}
    </span>
    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">{label}</span>
  </motion.div>
);

const Profile = () => {
  const gifUrl =
    "https://user-images.githubusercontent.com/74038190/218265814-3084a4ba-809c-4135-afc0-8685d0f634b3.gif";

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #f0fdf4 100%)" }}
      id="parent-particles"
    >
      {/* Dark mode overlay */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 dark:opacity-100 opacity-0 pointer-events-none" />

      {/* Background orbs */}
      <FloatingOrb className="w-[500px] h-[500px] bg-blue-400 -top-32 -left-40" delay={0} />
      <FloatingOrb className="w-80 h-80 bg-green-400 top-1/2 -right-24" delay={2} />
      <FloatingOrb className="w-56 h-56 bg-purple-400 bottom-24 left-1/3" delay={4} />

      <ParticleConfig />

      {/* Inner constrained layout */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto w-full px-6 lg:px-12 pt-32 md:pt-40 pb-24 min-h-screen">

        {/* Text Content */}
        <motion.div
          style={{ y, opacity }}
          className="w-full md:w-3/5 flex flex-col gap-6 justify-center text-center md:text-left"
        >
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 self-center md:self-start px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 text-sm font-semibold"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for freelance work
          </motion.div>

          {/* Typewriter heading */}
          <motion.h1
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.02em" }}
          >
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer 💻",
                  "Android App Developer 📱",
                  "Building Scalable Web Apps",
                  "Code. Debug. Repeat.",
                  "From UI to Backend ⚙️"
                ],
                autoStart: true,
                loop: true,
                pauseFor: 2500,
                deleteSpeed: 40,
              }}
            />
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            SDE with{" "}
            <span className="font-semibold text-gray-800 dark:text-white">
              2+ years of experience
            </span>{" "}
            delivering scalable full-stack, Android & ERP applications. Shipped a platform serving{" "}
            <span className="font-semibold text-gray-800 dark:text-white">18,000+ users</span>,
            an Android app with <span className="font-semibold text-gray-800 dark:text-white">5,000+ installs</span>, and cut feature delivery time by 35%.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base"
              >
                View My Work →
              </motion.button>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0172e5f8e76e258bcb?mp_source=share"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(22, 163, 74, 0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 text-sm sm:text-base"
              >
                Hire Me on Upwork ✦
              </motion.button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-3 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <StatPill value="2+" label="Years Experience" delay={0.85} />
            <StatPill value="18K+" label="Users Served" delay={0.95} />
            <StatPill value="5K+" label="App Installs" delay={1.05} />
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-2/5 flex justify-center mt-12 md:mt-0 flex-shrink-0"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-green-500 blur-2xl opacity-20 scale-110" />
            <motion.div
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={gifUrl}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = fallbackImage;
                }}
                alt="Developer working animation"
                className="relative w-full max-w-xs sm:max-w-sm md:max-w-md object-contain drop-shadow-2xl rounded-3xl z-10"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring", bounce: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-4 py-3 border border-gray-100 dark:border-gray-700 flex items-center gap-2"
            >
              <span className="text-2xl">💻</span>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Currently working on</p>
                <p className="text-sm font-bold text-gray-800 dark:text-white">Full Stack Projects</p>
              </div>
            </motion.div>

            {/* Top floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring", bounce: 0.5 }}
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-4 py-2 border border-gray-100 dark:border-gray-700"
            >
              <p className="text-sm font-bold text-green-600">Open to Work ✓</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;