import React from "react";
import { motion } from "framer-motion";

const Capability = () => {
  return (
    <div className="border-t border-b border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20" id="capabilities">
      <div className="max-w-7xl mx-auto p-6">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Capabilities
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
            I bring ideas to life with creativity, innovation, and expertise.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* UX/CX Section */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                UX/CX
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 font-medium space-y-2">
                <li>User Experience Design</li>
                <li>Rapid Prototyping</li>
                <li>Usability Testing</li>
                <li>UX Reviews</li>
                <li>Interaction Design</li>
                <li>Customer Journeys</li>
              </ul>
            </div>
          </motion.div>

          {/* Product Design Section */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Product Design
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 font-medium space-y-2">
                <li>User Interface Design</li>
                <li>Visual Design</li>
                <li>Visual Identities</li>
                <li>Design Systems</li>
                <li>Responsive & Mobile Websites</li>
                <li>Modular Grid Systems</li>
                <li>Brand Guidelines</li>
              </ul>
            </div>
          </motion.div>

          {/* Development Section */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Development
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 font-medium space-y-2">
                <li>Front-end Development</li>
                <li>Responsive & Mobile Websites</li>
                <li>Mobile Apps</li>
                <li>Animations</li>
                <li>SaaS Applications</li>
                <li>Platform Solutions</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Capability;