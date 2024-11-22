import React from 'react'
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-white py-8 text-center md:text-left">
    <motion.div
      className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Info Section */}
      <motion.div
        className="mb-8 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-white">
          Info
        </h3>
        <ul className="space-y-2">
          <li className="text-gray-600 dark:text-gray-300">
            <strong>Country:</strong> India
          </li>
          <li className="text-gray-600 dark:text-gray-300">
            <strong>Phone:</strong> +91 7070761869
          </li>
          <li className="text-gray-600 dark:text-gray-300">
            <strong>Email:</strong> kumarvishwajeet076@gmail.com
          </li>
        </ul>
      </motion.div>

      {/* Terms and Conditions Section */}
      <motion.div
        className="mb-8 md:mb-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-white">
          Terms and Conditions
        </h3>
        <p className="text-gray-600 dark:text-gray-300">© 2024 Copyright</p>
      </motion.div>

      {/* Follow Us Section */}
      <motion.div
        className="flex space-x-4 items-center text-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3 className="text-lg font-semibold text-blue-600 dark:text-white">
          Follow Us
        </h3>
        <div className="flex space-x-4">
          <a
            href="https://github.com/Witcher0766"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
            aria-label="GitHub"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .297C5.37.297 0 5.67 0 12.3c0 5.296 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.18c-3.338.725-4.042-1.44-4.042-1.44-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.235 1.84 1.235 1.07 1.834 2.807 1.304 3.492.998.108-.776.418-1.305.762-1.604-2.665-.304-5.466-1.335-5.466-5.935 0-1.31.468-2.38 1.235-3.222-.124-.304-.535-1.527.118-3.18 0 0 1.007-.322 3.3 1.23.957-.266 1.98-.398 3-.404 1.02.006 2.043.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.244 2.876.12 3.18.768.842 1.232 1.912 1.232 3.222 0 4.61-2.805 5.627-5.477 5.922.429.37.812 1.096.812 2.21v3.283c0 .32.216.694.825.576C20.565 22.098 24 17.593 24 12.3 24 5.67 18.63.297 12 .297z" />
            </svg>
          </a>
          {/* Add LinkedIn and Instagram here with similar structure */}
        </div>
      </motion.div>
    </motion.div>
  </footer>
  )
}

export default Footer