// src/App.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Scene/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Service/Service";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Scene/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
