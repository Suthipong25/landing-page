import React from "react";
import { Link, useLocation } from "react-router-dom";
import localBackground from "../assets/background.png";
const HERO_IMAGE_URL = localBackground;
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const HeroSection = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "AboutUs", path: "/aboutus" },
    { name: "Contact", path: "/contact" },
    { name: "Review", path: "/review" },
  ];

  const location = useLocation();

  return (
    <header className="relative h-screen full-bg ">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_IMAGE_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full z-30 bg-[#383A3D] text-gray-300 py-2 px-10 flex justify-between items-center text-xl md:text-2xl tracking-wide font-libre">
        <div className="flex items-center space-x-8">
          <span>Tel 085-963-753</span>
          <span>✉️ BisTroThai@gmail.com</span>
        </div>
        <div className="flex items-center space-x-4 text-4xl">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaXTwitter /> 
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaFacebookF /> 
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaInstagram /> 
          </a>
        </div>
      </div>

      {/* 🔳 Navbar */}
      <nav className="absolute top-[30px] left-0 w-full z-20 bg-white/100 backdrop-blur-sm px-5 py-10 flex justify-between items-center shadow-xs">
        <div
          to="/"
          className="text-8xl !text-black ml-1 hover:text-gray-500 transition font-italianno">
            <div className="flex-1"></div>
          BisTro
        </div>
        <div className="flex space-x-2 md:space-x-3 mr-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              // 🌟🌟 แก้ไขแล้ว: เพิ่ม Backticks (`) ครอบคลาสทั้งหมด 🌟🌟
              className={`
                w-[200px] h-[60px] flex items-center justify-center 
                rounded-[15px] text-5xl font-medium transition 
                border border-[#332B2B] border-[1px] shadow-md
                font-['Italianno']
                ${
                  location.pathname === item.path ||
                  (location.pathname === "/" && item.name === "Home")
                    ? "bg-yellow-400 text-gray-900" // 👈 สีตัวอักษรเมื่อ Active
                    : "bg-[#FDF4B0] text-gray-900 hover:bg-yellow-200" // 👈 สีตัวอักษรเมื่อ Normal
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <div className="absolute inset-0 z-10 grid place-items-center text-center px-6">
        <h1
          className="text-9xl font-josefin leading-tight drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)] text-center
    text-white [-webkit-text-stroke:3px_black] [text-stroke:3px_black]"
        >
          Welcome To The Bistro <br /> Since 1990
        </h1>
      </div>
    </header>
  );
};

export default HeroSection;
