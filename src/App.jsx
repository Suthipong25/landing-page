import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* หน้า Home: แสดง HeroSection */}
        <Route path="/" element={<HeroSection />} />

        {/* หน้า About Us: แสดง AboutSection แบบเต็มหน้า */}
        <Route path="/aboutus" element={<AboutSection isFullPage={true} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;