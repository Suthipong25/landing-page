import React from "react";
import Navbar from "./Navbar";
import MenuNavbar from "./MenuNavbar";
import tomyumpasta from "../assets/tomyumpasta.png";
import pestopasta from "../assets/pestopasta.png";
import balongnesepasta from "../assets/balongnesepasta.png";
import agliooliopasta from "../assets/agliooliopasta.png";
const MenuSection = () => {
  return (
    <div className="bg-[#383A3D] text-white  w-screen h-screen overflow-hidden">
      

      <Navbar />
      <div className="mt-[140px]"></div>
      <MenuNavbar />

      
      <section className="px-9 py-3">
        <h1 className="text-[64px]  mb-2 font-playfairsc ">MENU</h1>
        <p className="text-[32px] mb-2 font-abhaya">The Pasta</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
          
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={tomyumpasta}
              alt="tomyumpasta"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                Tom yum Pasta a
                <br />
                Fusion
                <br />
                From Thai And
                <br />
                America
                <br />
                Dished We use a Agnezi <br />
                Fettucine and white <br />
                Pawn To Make This <br />
                <p className="text-[24px] mt-5">Cost : 250 Baht</p>
              </p>
            </div>
          </div>

         
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={balongnesepasta}
              alt="balongnesepasta"
              className="w-[350px] h-[263px]"
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                 Balongnese Pasta a
                <br /> Classic Tomato Paste
                <br /> With Ground Beef 
                <br /> and Some Italian
                <br /> Spice Serve With 
                <br /> 2 Slices of Garlic 
                <br /> Bread
                <p className="text-[24px] mt-5">Cost : 250 Baht</p>
              </p>
            </div>
          </div>

         
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={pestopasta}
              alt="pestopasta"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                  A regular Panko pesto
                <br /> Quick and and Easy Tog
                <br /> Make
                <br /> and We Have Many
                <br /> Pasta Choice For You Serve With Pamejano <br />
                and Whole Basil
                <p className="text-[24px] mt-5">
                  Cost : 199 Baht 
                </p>
              </p>
            </div>
          </div>

         
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={agliooliopasta}
              alt="agliooliopasta"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                Aglio olio Pasta with
                <br /> Bacon with Use a
                <br /> angel hair Pasta 
                <br /> For This Meal This
                <br /> one You Can addon
                <br /> Some Chili Flake 
                <br /> and Some Black
                <br /> Olive
                <p className="text-[24px] mt-5">Cost : 450 Baht</p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuSection;
