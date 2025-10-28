import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ReviewSection from "./components/ReviewSection.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* หน้า Home: แสดง HeroSection */}
        <Route path="/" element={<HeroSection />} />

        {/* หน้า About Us: แสดง AboutSection แบบเต็มหน้า */}
        <Route path="/aboutus" element={<AboutSection isFullPage={true} />} />

        {/* หน้า Reviews: แสดง ReviewSection */}
        <Route path="/reviews" element={<ReviewSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;