import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Capability from "./components/Capability";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Project from "./components/Project";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #090b16; color: #f1f5f9; }
`;

function App() {
  return (
    <>
     <style>{globalStyles}</style>
      <div style={{ background: "#090b16", minHeight: "100vh" }}>
        <Navbar />
        <Profile />
        <About />
        <Skills />
        <WorkExperience />
        <Project />
        <Capability />
        <Contact />
        <Footer />
      </div>

    </>
  );
}

export default App;
