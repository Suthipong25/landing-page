import React from "react";
import Navbar from "./Navbar";
import MenuNavbar from "./MenuNavbar";
import beefcurry from "../assets/beefcurry.jpg";
import greencurrychicken from "../assets/greencurrychicken.jpg";
import vegetablekorma from "../assets/vegetablekorma.jpg";
import redcurrykabocha from "../assets/redcurrykabocha.jpg";
const MenuSection = () => {
  return (
    <div className="bg-[#383A3D] text-white  w-screen h-screen overflow-hidden">
      

      <Navbar />
      <div className="mt-[140px]"></div>
      <MenuNavbar />

      
      <section className="px-9 py-3">
        <h1 className="text-[64px]  mb-2 font-playfairsc ">MENU</h1>
        <p className="text-[32px] mb-2 font-abhaya">The Curry</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
          
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={greencurrychicken}
              alt="greencurrychicken"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                Tender chicken pieces cooked
                <br />
                in a rich and aromatic Thai green curry
                <br />
                with coconut milk,
                <br />
                fresh herbs, and a hint of spiciness that perfectly
                <br />
                balances sweetness and heat.
                <p className="text-[24px] mt-5">Cost : 280 Baht</p>
              </p>
            </div>
          </div>

         
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={beefcurry}
              alt="beefcurry"
              className="w-[350px] h-[263px]"
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                 Slow-cooked beef in a mild and slightly
                <br /> sweet Massaman curry
                <br /> with potatoes, onions, peanuts,
                <br /> and warm spices
                    that create a comforting and flavorful dish.
                <p className="text-[24px] mt-5">Cost : 315 Baht</p>
              </p>
            </div>
          </div>

         
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={redcurrykabocha}
              alt="redcurrykabocha"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                 Juicy shrimp cooked in a vibrant
                <br /> Thai curry with coconut milk,
                <br /> Thai basil, and a perfect
                <br /> balance of spicy, sweet, and savory flavors.
                
                <p className="text-[24px] mt-5">
                  Cost : 245 Baht 
                </p>
              </p>
            </div>
          </div>

         
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={vegetablekorma}
              alt="vegetablekorma"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                A creamy and mildly spiced
                <br />Indian-style curry loaded
                <br /> with fresh seasonal 
                <br /> vegetables, simmered in a
                <br /> luscious coconut and cashew sauce.
               
                <p className="text-[24px] mt-5">Cost : 350 Baht</p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuSection;
