import React from "react";
import { Link, useLocation } from "react-router-dom";

const TWITTER_ICON_URL =
  "https://cdn.discordapp.com/attachments/1159103768252665906/1431544543781589084/dcc8c77ed64cc2d0a5ebc6c68f7096885615c5d7.png?ex=68fdcd40&is=68fc7bc0&hm=52f74838d0a6510ad09643f17bce762522613ad37443fda53b307212bfaa897f&";
const FACEBOOK_ICON_URL =
  "https://cdn.discordapp.com/attachments/1159103768252665906/1431544543395971133/3a8671745ff251667c54f03aa293cfbd07922c1b.png?ex=68fdcd3f&is=68fc7bbf&hm=2b8d46501c1a2cf9a6375436b927adc7e0b28e30672f9845bb3c50671466896e&";
const INSTAGRAM_ICON_URL =
  "https://cdn.discordapp.com/attachments/1159103768252665906/1431544542896590960/de2017cdc3e9bdbe03bbf6a2acc6600da835733f.png?ex=68fdcd3f&is=68fc7bbf&hm=7496d8da09c681fa456b7f2a63cb7d6059b98b49cfc257c7b33da10bf0e0855d&";

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
            <img src={TWITTER_ICON_URL} alt="Twitter" className="h-9 w-9" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FACEBOOK_ICON_URL} alt="Facebook" className="h-9 w-9" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={INSTAGRAM_ICON_URL} alt="Instagram" className="h-9 w-9" />
          </a>
        </div>
      </div>

      {/* 🔹 Navbar หลัก */}
      <nav className="fixed top-[30px] left-0 w-full z-40 bg-white backdrop-blur-sm px-4 py-0 flex justify-between items-center shadow-sm">
        <Link
          to="/"
          className="text-[70px] !text-black ml-6 hover:text-gray-500 transition pt-2 pb-1 font-italianno"
        >
          BisTro
        </Link>

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
