import React from "react";
import Navbar from "./Navbar";
import MenuNavbar from "./MenuNavbar";
import mangosmoothie from "../assets/mangosmoothie.jpg";
import icedlatte from "../assets/icedlatte.jpg";
import lemonmintcooler from "../assets/lemonmintcooler.jpg";
import chocolatefrappe from "../assets/chocolatefrappe.jpg";
const MenuSection = () => {
  return (
    <div className="bg-[#383A3D] text-white  w-screen h-screen overflow-hidden">
      

      <Navbar />
      <div className="mt-[140px]"></div>
      <MenuNavbar />

      
      <section className="px-9 py-3">
        <h1 className="text-[64px]  mb-2 font-playfairsc ">MENU</h1>
        <p className="text-[32px] mb-2 font-abhaya">The Drink</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
          
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={mangosmoothie}
              alt="mangosmoothie"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                Refreshing mango smoothie
                <br />
                made with fresh mangoes
                <br />
                creamy yogurt, and a touch
                <br />
               of honey, blended
                <br />
                to a smooth and fruity perfection. <br />
                
                <p className="text-[24px] mt-5">Cost : 175 Baht</p>
              </p>
            </div>
          </div>

         
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={icedlatte}
              alt="icedlatte"
              className="w-[350px] h-[263px]"
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                 Chilled espresso with rich milk
                <br /> poured over ice, creating a
                <br /> smooth and refreshing
                <br /> coffee experience
                <br /> perfect for hot days.
               
                <p className="text-[24px] mt-5">Cost : 140 Baht</p>
              </p>
            </div>
          </div>

         
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={lemonmintcooler}
              alt="lemonmintcooler"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                 Crisp and zesty lemonade
                <br /> infused with fresh
                <br />mint leaves, providing
                <br /> a revitalizing and
                <br /> cooling drink.
                
                <p className="text-[24px] mt-5">
                  Cost : 140 Baht 
                </p>
              </p>
            </div>
          </div>

         
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={chocolatefrappe}
              alt="chocolatefrappe"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                Creamy blended chocolate
                <br /> Creamy blended chocolate
                <br /> offering a rich and
                <br /> indulgent treat
                <br /> for chocolate lovers.

                <p className="text-[24px] mt-5">Cost : 175 Baht</p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuSection;
