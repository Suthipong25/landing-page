import React from "react";
import Navbar from "./Navbar";
import MenuNavbar from "./MenuNavbar";
import ribeye from "../assets/ribeyesteak.png";
import tomyum from "../assets/tomyum.png";
import salmon from "../assets/salmon.png";
import snapper from "../assets/tomsab.png";
const MenuSection = () => {
  return (
    <div className="bg-[#383A3D] text-white  w-screen h-screen overflow-hidden">
      {/* Navbar */}
      
      <Navbar />
      <div className="mt-[140px]"></div>
      <MenuNavbar />
      
      {/* Section: MENU */}
      <section className="px-9 py-1">
        <h1 className="text-[64px]  mb-2 font-playfairsc ">MENU</h1>
        <p className="text-[32px] mb-3 font-abhaya">The Popular Dished</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
          {/* เมนูที่ 1 */}
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={ribeye}
              alt="Ribeye Steak"    
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px]">
                Ribeye Steak a premium
                <br />
                Angus Cow Import From
                <br />
                Australia <br />
                With a Tender and Juicy Serve With
                <br />
                Pepper Sauce <br />
                <p className="text-[24px] mt-4">
                  Cost : 2000 Baht (with Whole <br/> pieces)
                </p>
              </p>
            </div>
          </div>

          {/* เมนูที่ 2 */}
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={tomyum}
              alt="Tom Yum"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px]">
                Tomyum kung<br /> This Tomyum kung Use a Big<br /> Tiger Shrimp of Jaopraya
                River<br /> We use Driver to Drive<br /> Deep in River and Catch them <br />Fresh
                <p className="text-[24px] mt-4">Cost : 500 Baht</p>
              </p>
            </div>
          </div>

          {/* เมนูที่ 3 */}
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={salmon}
                alt="Salmon"
             className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px]">
                Salmon Steak a<br />
                Deluxe Fish From
                <br />
                NorwayPartnership
                <br />
                Serve with TaTar
                <br />
                Sauce and Some Ceasar Salad
                <p className="text-[24px] mt-4">
                  Cost : Cost : 750 Baht (with 3 giant pieces)
                </p>
              </p>
            </div>
          </div>

          {/* เมนูที่ 4 */}
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={snapper}
            alt="snapper"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px]">
                A Whole Two
                <br /> Snapper with
                <br /> Yam Sam Rod Serve
                <br /> with Lime and
                <br />Sillanco and Some
                <br /> thai Herb and Some <br />Seafood Sauce
                <p className="text-[24px] mt-4">Cost : 450 Baht</p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuSection;
