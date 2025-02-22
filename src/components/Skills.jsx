import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
const Skills = () => {
   
    const [selectedCategory, setSelectedCategory] = useState("Web");
    const [isAnimating, setIsAnimating] = useState(false);
    const skills = {
        Web: [
            "reactjs",
            "angular",
            "html",
            "css",
            "javascript",
            "mongodb",
            "nodejs",
            "expressjs",
            "springboot",
            "java",
            "mysql",
            "typescript"
          ],
        App: ["kotlin", "react-native", "flutter"],
        Others: ["github", "vscode", "androidStudio", "intellij", "postman", "Firebase"],
      };

      const handleCategoryChange = (category) => {
        if (category !== selectedCategory) {
          setIsAnimating(true);
          setTimeout(() => {
            setSelectedCategory(category);
            setIsAnimating(false);
          }, 300);
        }
      };
  return (
  <motion.div
  className="container max-w-7xl mx-auto p-6 flex flex-col md:flex-row justify-around items-center h-auto md:h-[75vh]"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}
>
    <motion.div
        className="p-6 w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
          Skills & Tools
        </h1>
        <h2 className="text-lg text-gray-600 dark:text-gray-300 mt-2 text-center">
          For those who know what they’re looking for..
        </h2>

        {/* Toggle Buttons */}
        <div className="flex items-center justify-center mt-6">
          {["Web", "App", "Others"].map((category) => (
            <button
              key={category}
              className={`px-6 py-2 font-medium text-sm sm:text-base ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              } transition-all duration-300 ${
                category === "Web" ? "rounded-l-lg" : category === "Others" ? "rounded-r-lg" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center w-full max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {skills[selectedCategory].map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <span className="text-gray-800 dark:text-white font-medium text-center">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
</motion.div>
  )
}

export default Skills