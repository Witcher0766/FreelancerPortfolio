import React from 'react'
import { useState } from 'react';

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState("Web");

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
  return (
    <div className="container  max-w-7xl mx-auto p-6 flex flex-col md:flex-row justify-around items-center h-auto md:h-[75vh]">
    <div className="p-6 w-full  ">
      <h1 className="text-3xl font-bold text-gray-800 text-center">Skills & Tools</h1>
      <h2 className="text-lg text-gray-600 mt-2 text-center">
        For those who know what they’re looking for..
      </h2>

      {/* Toggle Buttons */}
      <div className="flex items-center justify-center mt-4 ">
        <button
          className={`px-4 py-2 font-medium ${
            selectedCategory === "Web"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } ${"rounded-l-lg"} `}
          onClick={() => setSelectedCategory("Web")}
        >
          Web
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            selectedCategory === "App"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setSelectedCategory("App")}
        >
          App
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            selectedCategory === "Others"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          } ${"rounded-r-lg"} `}
          onClick={() => setSelectedCategory("Others")}
        >
          Tech
        </button>
      </div>

      {/* Skills as Buttons */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center  w-full max-w-3xl mx-auto">
        {skills[selectedCategory].map((skill, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-blue-600 hover:text-white transition duration-300"
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Skills