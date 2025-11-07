import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import MenuSection from "./components/MenuSection.jsx";
import PastaSection from "./components/PastaSection.jsx";
import ReviewSection from "./components/ReviewSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import DessertSection from "./components/DessertSection.jsx";
import CurrySection from "./components/CurrySection.jsx";
import DrinkSection from "./components/DrinkSection.jsx";
import FriedSection from "./components/FriedSection.jsx";
import SteakSection from "./components/SteakSection.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection />} />

        <Route path="/aboutus" element={<AboutSection isFullPage={true} />} />

        <Route path="/Menu" element={<MenuSection />} />
        <Route path="/Pasta" element={<PastaSection />} />
        <Route path="/Review" element={<ReviewSection />} />
        <Route path="/Contact" element={<ContactSection />} />
        <Route path="/Dessert" element={<DessertSection />} />
        <Route path="/Curry" element={<CurrySection />} />
        <Route path="/Drink" element={<DrinkSection />} />
        <Route path="/Fried" element={<FriedSection />} />
        <Route path="/Steak" element={<SteakSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
