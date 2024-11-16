import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Capability from "./components/Capability";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <Profile/>
       <Capability/>

        <Footer />
      </div>
    </>
  );
}

export default App;
