import React from "react";
import { Link, useLocation } from "react-router-dom";


import TWITTER_ICON from "../assets/twitter-icon.png"; 
import FACEBOOK_ICON from "../assets/facebook-icon.png";
import INSTAGRAM_ICON from "../assets/instagram-icon.png";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "AboutUs", path: "/aboutus" },
    { name: "Contact", path: "/contact" },
    { name: "Review", path: "/review" },
  ];

  return (
    <>
      <div>
        <header class="sticky top-0 z-50"></header>
        <main class="relative"></main>
        <footer></footer>
      </div>
      <div className="fixed top-0 left-0 w-full z-50 bg-[#383A3D] text-gray-300 py-1 px-10 flex justify-between items-center text-[24px] tracking-wide font-libre font-normal">
        <div className="flex items-center space-x-8">
          <span>Tel 085-963-753</span>
          <span>BisTroThai@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            {/* 💡 ใช้ตัวแปรที่ import มาแทน URL */}
            <img src={TWITTER_ICON} alt="Twitter" className="h-9 w-9" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* 💡 ใช้ตัวแปรที่ import มาแทน URL */}
            <img src={FACEBOOK_ICON} alt="Facebook" className="h-9 w-9" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* 💡 ใช้ตัวแปรที่ import มาแทน URL */}
            <img src={INSTAGRAM_ICON} alt="Instagram" className="h-9 w-9" />
          </a>
        </div>
      </div>

      {/* 🔹 Navbar หลัก */}
      <nav className="fixed top-[30px] left-0 w-full z-40 bg-white backdrop-blur-sm px-4 py-0 flex justify-between items-center shadow-sm">
        <div
          to="/"
          className="text-[70px] !text-black ml-6 hover:text-gray-500 transition pt-2 pb-1 font-italianno"
        >
          BisTro
        </div>

        <div className="flex space-x-3 mr-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`w-[160px] h-[45px]  flex items-center justify-center rounded-[15px] text-4xl font-medium transition border border-[#332B2B] border-[1px] shadow-md font-['Italianno']
                ${
                  location.pathname === item.path ||
                  (location.pathname === "/" && item.name === "Home")
                    ? "bg-yellow-100 text-gray-900"
                    : "bg-[#FDF4B0] text-gray-900 "
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;