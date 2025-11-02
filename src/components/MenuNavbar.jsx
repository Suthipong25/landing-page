import React from "react";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import { FaMotorcycle } from "react-icons/fa";
import Delivery_Click from "../assets/Delivery_Click.png";

const MenuNavbar = () => {
  const navigate = useNavigate(); // <-- สร้าง navigate function
  const goToPopular = () => {
    navigate("/menu"); // ✅ พาไปหน้า MenuSection
  };

  const scrollToPopular = () => {
    const section = document.getElementById("popular-menu");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuClick = (menu) => {
    if (menu === "Pasta") {
      navigate("/Pasta"); 
    } else {
      scrollToPopular(); 
    }
    if (menu === "Curry") {
      navigate("/Curry"); 
    } else {
      scrollToPopular(); 
    }
    if (menu === "Fried") {
      navigate("/Fried"); 
    } else {
      scrollToPopular(); 
    }
    if (menu === "Steak") {
      navigate("/Steak"); // 
    } else {
      scrollToPopular(); 
    }
    if (menu === "Dessert") {
      navigate("/Dessert"); 
    } else {
      scrollToPopular(); 
    }
    if (menu === "Drink") {
      navigate("/Drink"); 
    } else {
      scrollToPopular(); 
    }
  };

  return (
    <nav className="w-full bg-[#D9D9D9] text-black flex flex-wrap justify-between items-center px-9 py-1 shadow-md font-abhaya">
      <div className="flex items-center gap-3">
        <h2
          onClick={goToPopular}
          className="text-[32px] underline underline-offset-1 cursor-pointer hover:text-gray-600 transition"
        >
          The Popular Dished
        </h2>
        <img 
          src={Delivery_Click}  
          alt="Delivery"
          className="w-11 h-11 object-contain"
        />
        <span className="text-[32px]">Delivery Click</span>
      </div>

      <ul className="flex flex-wrap gap-22 text-[32px] font-medium">
        <li onClick={() => handleMenuClick("Curry")} className="hover:text-gray-600 cursor-pointer transition">Curry</li>
        <li onClick={() => handleMenuClick("Fried")} className="hover:text-gray-600 cursor-pointer transition">Fried</li>
        <li onClick={() => handleMenuClick("Steak")} className="hover:text-gray-600 cursor-pointer transition">Steak</li>
        <li onClick={() => handleMenuClick("Pasta")} className="hover:text-gray-600 cursor-pointer transition">Pasta</li>
        <li onClick={() => handleMenuClick("Dessert")} className="hover:text-gray-600 cursor-pointer transition">Dessert</li>
        <li onClick={() => handleMenuClick("Drink")} className="hover:text-gray-600 cursor-pointer transition">Drink</li>
      </ul>
    </nav>
  );
};

export default MenuNavbar;
