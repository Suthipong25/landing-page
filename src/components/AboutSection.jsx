import React from "react";
import { Link, useLocation } from "react-router-dom";

const ABOUT_IMAGE_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLc3CJEaUTO19010HPWxX5tZ3dKGbaBYOgkm3HUVXmCjvhOvtApb7gyajkml0T2XVuOyg&usqp=CAU";

const AboutSection = ({ isFullPage }) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "AboutUs", path: "/aboutus" },
    { name: "Contact", path: "/contact" },
    { name: "Review", path: "/review" },
  ];

  const location = useLocation();
  // 💡 ปรับให้ความสูงเป็น h-screen เมื่อเป็นหน้าเต็ม และใช้ h-[85vh] เมื่อเป็นส่วนหนึ่งของหน้า
  const sectionHeightClass = isFullPage ? "h-screen" : "h-[85vh] md:h-[650px]";
  const shouldShowNav = isFullPage;

  return (
    <section
      // 💡 ใช้ h-[...] แทน min-h-[...]
      className={`relative w-full ${sectionHeightClass} bg-gray-900 overflow-hidden font-['Poppins'] ${
        isFullPage ? "" : "pt-[35px]"
      }`}
      id="aboutus"
    > 
      {/* 🔹 Top Bar (ไม่มีการเปลี่ยนแปลง) */}
      {shouldShowNav && (
        <div className="absolute top-0 left-0 w-full z-30 bg-gray-900 text-gray-300 py-1 px-4 flex justify-between items-center text-xs md:text-sm tracking-wide font-['Poppins']">
          <div className="flex items-center space-x-4">
            <span>📞 Tel 095-788-9675</span>
            <span>✉️ BisTroThai@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 text-lg">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              ✕
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              f
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              📷
            </a>
          </div>
        </div>
      )}

      {/* 🔹 Navbar (ไม่มีการเปลี่ยนแปลง) */}
      {shouldShowNav && (
        <nav className="absolute top-[35px] left-0 w-full z-20 bg-white/80 backdrop-blur-sm px-4 py-3 flex justify-between items-center shadow-lg">
          <Link
            to="/"
            className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-wider ml-6 hover:text-gray-700 transition"
          >
            BisTro
          </Link>

          <div className="flex space-x-2 md:space-x-4 mr-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-medium shadow-md border border-gray-300 transition ${
                  location.pathname === item.path ||
                  (location.pathname === "/" && item.name === "Home")
                    ? "bg-yellow-400 text-gray-900"
                    : "bg-yellow-100 text-gray-900 hover:bg-yellow-200"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}

      {/* 🔹 Content - 💡 ใช้ h-full เพื่อให้ยืดความสูงเต็ม section parent */}
      <div
        className={`w-full flex flex-col md:flex-row h-full ${
          isFullPage ? "pt-[100px]" : ""
        }`}
      >
        {/* Image Section */}
        <div
          // 💡 กำหนด h-full เพื่อยืดความสูงเท่ากับส่วน Text
          className="w-full md:w-1/2 h-full bg-cover bg-center object-cover"
          style={{
            backgroundImage: `url(${ABOUT_IMAGE_URL})`,
            filter: "grayscale(80%) brightness(0.85)",
          }}
        ></div>

        {/* Text Section */}
        <div
          // 💡 h-full เพื่อยืดความสูงเท่ากับส่วน Image และใช้ flex-grow
          className="w-full md:w-1/2 h-full bg-black/80 text-white p-10 md:p-16 flex flex-col justify-start flex-grow"
        >
          {/* 💡 ลด pt-12 ออก เพื่อให้จัดวางได้พอดีกับขอบบน */}
          <h2
            className="text-6xl md:text-8xl font-bold mb-6 text-yellow-400 tracking-wide drop-shadow-lg text-left"
            style={{
              letterSpacing: "1px",
            }}
          >
            About Us
          </h2>

          <p
            className="text-4xl md:text-5xl leading-relaxed mb-8 font-light text-gray-200"
            style={{
              lineHeight: "1.8",
            }}
          >
            LL2 — The Most Dangerous Man, retired from the boxing world to start
            a new life in Thailand with his family. Inspired by his
            grandfather’s secret recipes, he created a restaurant that blends
            Thai passion and Western creativity. That’s how “BisTro” was born —
            a place crafted with love, flavor, and kindness.
          </p>

          <div className="mt-10">
            <p className="text-base md:text-lg italic text-gray-400 mb-2">
              With Love and Kindness,
            </p>
            <p className="text-3xl md:text-4xl font-semibold text-yellow-400 italic">
              Mr. LL2
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;