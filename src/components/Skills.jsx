import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillIcons = {
  // Frontend
  "React": "⚛️", "Angular": "🅰️", "Next.js": "▲", "React Native": "📱",
  "HTML": "🌐", "CSS": "🎨", "TypeScript": "📘", "JavaScript": "⚡",
  "Tailwind CSS": "💨", "Redux Toolkit": "🔄",
  // Backend
  "Spring Boot": "🌿", "Node.js": "💚", "Express.js": "🚀",
  "REST APIs": "🔗", "WebSocket": "⚡", "Microservices": "🧩", "RBAC": "🔐",
  // Mobile
  "Flutter": "💙", "Dart": "🎯", "Firebase": "🔥", "FCM": "🔔",
  // Databases
  "MongoDB": "🍃", "MySQL": "🐬", "Redis": "🟥", "Hive": "🐝",
  // Cloud & DevOps
  "AWS (S3/CDN)": "☁️", "Docker": "🐳",
  // AI & Tools
  "ChatGPT API": "🤖", "Ollama / Mistral": "🧠", "Google Translation API": "🌍",
  // Tools
  "Figma": "🎨", "GitHub": "🐙", "Postman": "📮", "Linux": "🐧",
  "Android Studio": "🤖", "IntelliJ IDEA": "💡",
};

const categories = [
  { label: "Frontend", icon: "🌐", color: "from-blue-500 to-cyan-400" },
  { label: "Backend", icon: "⚙️", color: "from-orange-500 to-amber-400" },
  { label: "Mobile", icon: "📱", color: "from-violet-500 to-purple-400" },
  { label: "Database & Cloud", icon: "☁️", color: "from-sky-500 to-blue-400" },
  { label: "AI & Tools", icon: "🛠️", color: "from-green-500 to-emerald-400" },
];

const skills = {
  "Frontend": [
    "React", "Angular", "Next.js", "React Native",
    "TypeScript", "JavaScript", "HTML", "CSS",
    "Tailwind CSS", "Redux Toolkit",
  ],
  "Backend": [
    "Spring Boot", "Node.js", "Express.js",
    "REST APIs", "WebSocket", "Microservices", "RBAC",
  ],
  "Mobile": [
    "Flutter", "Dart", "Firebase", "FCM",
    "Android Studio",
  ],
  "Database & Cloud": [
    "MongoDB", "MySQL", "Redis", "Hive",
    "AWS (S3/CDN)", "Docker",
  ],
  "AI & Tools": [
    "ChatGPT API", "Ollama / Mistral", "Google Translation API",
    "Figma", "GitHub", "Postman", "Linux", "IntelliJ IDEA",
  ],
};

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.85, y: -10 }}
    transition={{ duration: 0.35, delay: index * 0.05 }}
    whileHover={{ scale: 1.06, y: -4, transition: { duration: 0.2 } }}
    className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/80 dark:border-gray-700/60 rounded-2xl p-4 shadow-sm hover:shadow-lg flex flex-col items-center justify-center gap-2 cursor-default transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-600"
  >
    <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
      {skillIcons[skill] || "🔧"}
    </span>
    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 text-center leading-tight">
      {skill}
    </span>
  </motion.div>
);

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");
  const activeCat = categories.find((c) => c.label === selectedCategory);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest"
          >
            Tech Stack
          </motion.span>
          <h2
            className="text-5xl font-black text-gray-900 dark:text-white tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.03em" }}
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg">
            Tools and languages I work with across web, mobile & tooling.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10 gap-2 flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat.label}
              onClick={() => setSelectedCategory(cat.label)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${selectedCategory === cat.label
                  ? "text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300"
                }`}
            >
              {selectedCategory === cat.label && (
                <motion.span
                  layoutId="skills-tab-bg"
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${cat.color}`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{cat.icon}</span>
              <span className="relative z-10 whitespace-nowrap">{cat.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Skill count badge */}
        <motion.p
          key={selectedCategory + "-count"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-xs text-gray-400 dark:text-gray-500 mb-6 font-medium"
        >
          {skills[selectedCategory].length} technologies in this category
        </motion.p>

        {/* Skill Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {skills[selectedCategory].map((skill, index) => (
              <SkillCard key={skill} skill={skill} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;