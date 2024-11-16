import React from 'react'
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
      });
      const toggleDarkMode = () => {
        setIsDarkMode((prev) => {
          const newMode = !prev;
          localStorage.setItem("darkMode", newMode); 
          return newMode;
        });
      };
    
      useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [isDarkMode]);
  return (
   <>
<nav className="bg-white-800 dark:bg-gray-900 " style={{boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"}}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16 py-10">
      <div className="flex items-center">
        <a href="#" className="text-lg font-bold text-blue-500">
          MyLogo
        </a>
      </div>

      <div className="hidden md:block">
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium"
          >
            Project
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium"
          >
            Capabilities
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-500 px-3 py-2 rounded-md text-lg font-medium"
          >
            Contact
          </a>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="bg-gray-700 dark:bg-gray-600 text-gray-300 dark:text-gray-100 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600 dark:hover:bg-gray-500"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>

      <div className="-mr-2 flex md:hidden">
        <button
          type="button"
          className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-500  "
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isMobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  </div>

  {isMobileMenuOpen && (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          href="#"
          className="text-gray-400 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
        >
          Project
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
        >
          Capabilities
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
        >
          Contact
        </a>
      </div>
    </div>
  )}
</nav>
   </>
  )
}

export default Navbar