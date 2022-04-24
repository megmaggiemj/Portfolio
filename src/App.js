import "./App.css";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import SocialLinks from "./Components/SocialLinks/SocialLinks"

function App() {
  return (
    <main className="containerApp">
      <header>Hello</header>
      <div className="heroImage">{ <Hero /> }</div>
      <div className="aboutSection">{ <About /> }</div>
      <div className="projectSection">{ <Projects /> }</div>
      <div className="socialSection">{ <SocialLinks /> }</div>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<About />} />
        </Routes> */}
        <footer>Goodbye</footer>
      </main>
  
  );
}

export default App;
