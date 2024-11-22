import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion";

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
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center">
        Skills & Tools
      </h1>
      <h2 className="text-lg text-gray-600 dark:text-gray-300 mt-2 text-center">
        For those who know what they’re looking for..
      </h2>

      {/* Toggle Buttons */}
      <div className="flex items-center justify-center mt-4">
        <button
          className={`px-4 py-2 font-medium ${
            selectedCategory === "Web" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
          } rounded-l-lg`}
          onClick={() => handleCategoryChange("Web")}
          style={{transition: "all 0.3s"}}
        >
          Web
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            selectedCategory === "App" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => handleCategoryChange("App")}
          style={{transition: "all 0.3s"}}

        >
          App
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            selectedCategory === "Others" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
          } rounded-r-lg`}
          onClick={() => handleCategoryChange("Others")}
          style={{transition: "all 0.3s"}}

        >
          Tech
        </button>
      </div>

      {/* Skills with Zoom Animation */}
      <motion.div
        className="mt-6 flex flex-wrap gap-4 justify-center w-full max-w-3xl mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {skills[selectedCategory].map((skill, index) => (
          <motion.button
            key={index}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-blue-600 hover:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {skill}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  </motion.div>
  )
}

export default Skills