import React from "react";
import { FaMotorcycle } from "react-icons/fa";
import Delivery_Click from "../assets/Delivery_Click.png"; // import เป็นโมดูล

const MenuNavbar = () => {
  const scrollToPopular = () => {
    const section = document.getElementById("popular-menu");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-[#D9D9D9] text-black flex flex-wrap justify-between items-center px-9 py-1 shadow-md font-abhaya">
      <div className="flex items-center gap-3">
        <h2
          onClick={scrollToPopular}
          className="text-[32px] underline underline-offset-1 cursor-pointer hover:text-gray-600 transition"
        >
          The Popular Dished
        </h2>
        <div className="text-black text-2xl" />
        <img 
          src={Delivery_Click}  
          alt="Delivery"
          className="w-11 h-11 object-contain"
        />
        <span className="text-[32px]">Delivery Click</span>
      </div>

      <ul className="flex flex-wrap gap-22 text-[32px] font-medium">
        <li className="hover:text-gray-600 cursor-pointer transition">Curry</li>
        <li className="hover:text-gray-600 cursor-pointer transition">Fried</li>
        <li className="hover:text-gray-600 cursor-pointer transition">Steak</li>
        <li className="hover:text-gray-600 cursor-pointer transition">Pasta</li>
        <li className="hover:text-gray-600 cursor-pointer transition">Dessert</li>
        <li className="hover:text-gray-600 cursor-pointer transition">Drink</li>
      </ul>
    </nav>
  );
};

export default MenuNavbar;
