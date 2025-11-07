import React from "react";
import Navbar from "./Navbar";

const HERO_IMAGE_URL = "https://iili.io/KgyNccG.png";

const HeroSection = () => {
  return (
    <div className="relative">
      
      <Navbar className="fixed top-0 left-0 w-full z-50" />

      
      <header className="pt-[80px] h-screen relative">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${HERO_IMAGE_URL})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>

        {/* 🔳 ข้อความกลางจอ */}
        <div className="absolute inset-0 z-10 grid place-items-center text-center px-7">
          <h1
            className="text-9xl font-josefin font-bold leading-tight drop-shadow-[0_25px_50px_rgba(0,0,0,1)] text-center text-white [-webkit-text-stroke:3px_black] [text-stroke:3px_black]"
          >
            Welcome To The Bistro <br /> Since 1990
          </h1>
        </div>
      </header>
    </div>
  );
};

export default HeroSection;