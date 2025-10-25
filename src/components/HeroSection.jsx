import React from "react";
import Navbar from "./Navbar";

const HERO_IMAGE_URL = "https://iili.io/KgyNccG.png";

const HeroSection = () => {
  return (
    <header className="relative h-screen full-bg">
      {/* ✅ Navbar อยู่ด้านบนสุด */}
      <Navbar />

      {/* 🔳 พื้นหลัง Hero */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_IMAGE_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>

      {/* 🔳 ข้อความกลางจอ */}
      <div className="absolute inset-0 z-10 grid place-items-center text-center px-6">
        <h1
          className="text-9xl font-josefin leading-tight drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)] text-center text-white [-webkit-text-stroke:3px_black] [text-stroke:3px_black]"
        >
          Welcome To The Bistro <br /> Since 1990
        </h1>
      </div>
    </header>
  );
};

export default HeroSection;
