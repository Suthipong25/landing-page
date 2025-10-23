import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HERO_IMAGE_URL =
  'https://assets.vegconom.de/media/wp-content/uploads/sites/3/2024/02/09135525/Tabletop-allproducts-planted.jpg';

const HeroSection = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'AboutUs', path: '/aboutus' },
    { name: 'Contact', path: '/contact' },
    { name: 'Review', path: '/review' },
  ];

  const location = useLocation();

  return (
    <header className="relative w-full h-screen overflow-hidden font-['Poppins']">
      {/* 🔳 พื้นหลัง */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_IMAGE_URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* 🔳 Overlay มืดโปร่ง */}
      <div className="absolute inset-0 bg-black/55 z-0"></div>

      {/* 🔳 แถบบนสุด */}
      <div className="absolute top-0 left-0 w-full z-30 bg-gray-900 text-gray-300 py-1 px-4 flex justify-between items-center text-xs md:text-sm tracking-wide font-['Poppins']">
        <div className="flex items-center space-x-4">
          <span>📞 Tel 095-788-9675</span>
          <span>✉️ BisTroThai@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3 text-lg">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">✕</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">f</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">📷</a>
        </div>
      </div>

      {/* 🔳 Navbar */}
      <nav className="absolute top-[35px] left-0 w-full z-20 bg-white/70 backdrop-blur-sm px-4 py-3 flex justify-between items-center shadow-lg">
        <Link
          to="/"
          className="text-5xl font-serif font-semibold text-gray-900 tracking-wider ml-6 hover:text-gray-700 transition"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          BisTro
        </Link>

        <div className="flex space-x-2 md:space-x-4 mr-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-6 py-2 rounded-full text-base font-medium shadow-md border border-gray-300 transition font-['Poppins'] ${
                location.pathname === item.path ||
                (location.pathname === '/' && item.name === 'Home')
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-yellow-100 text-gray-900 hover:bg-yellow-200'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* 🔳 ข้อความหลัก */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <div className="bg-black/40 px-8 py-6 rounded-2xl shadow-2xl">
          <h1
            className="text-white text-6xl md:text-8xl font-bold leading-tight drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]"
            style={{
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '3px',
            }}
          >
            Welcome To
            <br />
            <span className="text-yellow-400 text-7xl md:text-9xl tracking-widest mt-2 block">
              BisTro
            </span>
          </h1>

          <p
            className="mt-6 text-xl md:text-2xl text-gray-100 font-light tracking-wide drop-shadow-lg"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Since 1990 — Where Taste Meets Passion
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
