import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Capability from "./components/Capability";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Project from "./components/Project";

function App() {
  return (
    <>
     <div className="main bg-white dark:bg-gray-900 w-full min-h-screen flex flex-col">
  <Navbar />
  <div className="flex-grow">
    <Profile />
    <Project />
    <Capability />
    <Skills />
    <Contact />
  </div>
  <Footer />
</div>

    </>
  );
}

export default App;
