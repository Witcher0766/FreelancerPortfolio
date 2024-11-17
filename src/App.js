import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Capability from "./components/Capability";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <Profile/>
       <Capability/>
       <Skills/>
       <Contact/>
        <Footer />
      </div>
    </>
  );
}

export default App;
