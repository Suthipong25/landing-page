import React from "react";
import Navbar from "./Navbar";
import MenuNavbar from "./MenuNavbar";
import chocolatelavacake from "../assets/chocolatelavacake.jpg";
import tiramisu from "../assets/tiramisu.jpg";
import mangostickyrice from "../assets/mangostickyrice.jpg";
import cremebrulee from "../assets/cremebrulee.jpg";
const MenuSection = () => {
  return (
    <div className="bg-[#383A3D] text-white  w-screen h-screen overflow-hidden">
      <Navbar />
      <div className="mt-[140px]"></div>
      <MenuNavbar />

      <section className="px-9 py-3">
        <h1 className="text-[64px]  mb-2 font-playfairsc ">MENU</h1>
        <p className="text-[32px] mb-2 font-abhaya">The Dessert</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={chocolatelavacake}
              alt="chocolatelavacake"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                      Warm chocolate cake
                <br />with a molten chocolate center,
                <br />served with vanilla
                <br />ice cream for a
                <br />heavenly dessert experience.
                <p className="text-[24px] mt-5">Cost : 210 Baht</p>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={tiramisu}
              alt="tiramisu"
              className="w-[350px] h-[263px]"
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                Classic Italian dessert
                <br /> with layers of
                <br /> espresso-soaked
                <br /> ladyfingers and mascarpone
                <br /> cream, dusted with cocoa powder.
  
                <p className="text-[24px] mt-5">Cost : 210 Baht</p>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={mangostickyrice}
              alt="mangostickyrice"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                Sweet sticky rice
                <br /> served with ripe, juicy mango
                <br /> and drizzled with rich
                <br /> coconut milk,
                <br /> a traditional Thai favorite.
                <p className="text-[24px] mt-5">Cost : 175 Baht</p>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={cremebrulee}
              alt="cremebrulee"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                      Smooth and creamy
                <br />custard topped with
                <br />caramelized sugar,
                <br />offering a delightful
                <br />contrast of
                <br />textures and a rich vanilla flavor.
                <p className="text-[24px] mt-5">Cost : 210 Baht</p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuSection;
