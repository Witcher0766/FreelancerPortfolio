import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web");

  const skills = {
    Web: [
      "ReactJS",
      "Angular",
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "NodeJS",
      "ExpressJS",
      "Spring Boot",
      "MySQL",
      "TypeScript",
    ],
    App: ["Flutter", "Dart", "Kotlin"],
    Others: [
      "Figma",
      "GitHub",
      "VS Code",
      "Android Studio",
      "IntelliJ IDEA",
      "Postman",
      "Firebase",
    ],
  };

  const handleCategoryChange = (category) => {
    if (category !== selectedCategory) {
      setSelectedCategory(category);
    }
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Skills & Technologies
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Technologies I work with across web, mobile & tooling.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        {["Web", "App", "Others"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              selectedCategory === category
                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                : "bg-white dark:bg-gray-700 dark:text-white text-gray-800 border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-2 sm:px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          {skills[selectedCategory].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-center justify-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="text-sm font-medium text-gray-800 dark:text-white">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Skills;
