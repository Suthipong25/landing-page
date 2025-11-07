import React from "react";
import Navbar from "./Navbar";
import MenuNavbar from "./MenuNavbar";
import frenchfries from "../assets/frenchfries.jpg";
import friedchickenwings from "../assets/friedchickenwings.jpg";
import tempuraveggies from "../assets/tempuraveggies.jpg";
import onionrings from "../assets/onionrings.jpg";
const MenuSection = () => {
  return (
    <div className="bg-[#383A3D] text-white  w-screen h-screen overflow-hidden">
      

      <Navbar />
      <div className="mt-[140px]"></div>
      <MenuNavbar />

      
      <section className="px-9 py-3">
        <h1 className="text-[64px]  mb-2 font-playfairsc ">MENU</h1>
        <p className="text-[32px] mb-2 font-abhaya">The Fried</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
          
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={frenchfries}
              alt="frenchfries"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                Crispy golden fries,
                <br />
                perfectly salted and
                <br />
                served hot, making a simple
                <br />
                yet irresistible snack
                <br />
                or side dish.
                
                <p className="text-[24px] mt-5">Cost : 105 Baht</p>
              </p>
            </div>
          </div>

         
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={friedchickenwings}
              alt="friedchickenwings"
              className="w-[350px] h-[263px]"
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                 Crunchy and flavorful
                <br /> chicken wings coated
                <br />with a spicy and savory 
                <br /> seasoning, perfect as a
                <br /> starter or main snack.
                
                <p className="text-[24px] mt-5">Cost : 210 Baht</p>
              </p>
            </div>
          </div>

         
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={tempuraveggies}
              alt="tempuraveggies"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                 Fresh seasonal vegetables
                <br /> lightly battered and fried
                <br /> to golden perfection,
                <br /> served with a tangy
                <br /> dipping sauce.
                <p className="text-[24px] mt-5">
                  Cost : 175 Baht 
                </p>
              </p>
            </div>
          </div>

         
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={onionrings}
              alt="onionrings"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                Crispy and crunchy onion
                <br /> rings with a slightly sweet
                <br /> flavor, served with
                <br /> a delicious dipping sauce.
                <p className="text-[24px] mt-5">Cost : 140 Baht</p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuSection;
