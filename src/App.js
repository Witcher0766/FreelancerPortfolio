import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Capability from "./components/Capability";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Project from "./components/Project";

function App() {
  // Enable smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gray-900 w-full min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Profile />
        <Project />
        <Capability />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;