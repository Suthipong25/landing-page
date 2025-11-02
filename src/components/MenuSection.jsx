import React from "react";
import Navbar from "./Navbar";
import MenuNavbar from "./MenuNavbar";

const MenuSection = () => {
  return (
    <div className="bg-[#383A3D] text-white min-h-screen">
      {/* Navbar */}
      <Navbar />
      <div className="mt-[140px]"></div>
      <MenuNavbar />
      {/* Section: MENU */}
      <section className="px-9 py-5">
        <h1 className="text-[64px]  mb-2 font-playfairsc ">MENU</h1>
        <p className="text-[32px] mb-10 font-abhaya">The Popular Dished</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* เมนูที่ 1 */}
          <div className="flex items-start gap-5 font-abhaya text-[24px]">
            <img
              src="https://images.unsplash.com/photo-1604152135912-04a4313469a3"
              alt="Ribeye Steak"
              className="w-48 h-40 object-cover rounded"
            />
            <div>
              <p className="text-sm">
                Ribeye Steak a premium Angus Cow Import From Australia With a
                Tender and Juicy Serve With Pepper Sauce <br />
                Cost : 2000 Baht (with
                Whole pieces)
              </p>
            </div>
          </div>

          {/* เมนูที่ 2 */}
          <div className="flex items-start gap-5 font-abhaya text-[24px]">
            <img
              src="https://images.unsplash.com/photo-1617196036300-2e2b1b7a3bdb"
              alt="Tom Yum"
              className="w-48 h-40 object-cover rounded"
            />
            <div>
              <p className="text-sm">
                Ribeye Steak premium Angus Cow Import From Australia With a
                Tender and Juicy Serve With Pepper Sauce Cost : 500 Baht
              </p>
            </div>
          </div>

          {/* เมนูที่ 3 */}
          <div className="flex items-start gap-5 font-abhaya text-[24px]">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Salmon"
              className="w-48 h-40 object-cover rounded"
            />
            <div>
              <p className="text-sm">
                Salmon Steak a Deluxe Fish From NorwayPartnership Serve with
                TaTar Sauce and Some Ceasar Salad Cost : 750 Baht (with 3 giant
                pieces)
              </p>
            </div>
          </div>

          {/* เมนูที่ 4 */}
          <div className="flex items-start gap-5 font-abhaya text-[24px]">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
              alt="Snapper"
              className="w-48 h-40 object-cover rounded"
            />
            <div>
              <p className="text-sm">
                A Whole Two Snapper with Yam Sam Rod Serve with Lime and
                Sillanco and Some thai Herb and Some Seafood Sauce Cost : 450
                Baht
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuSection;
