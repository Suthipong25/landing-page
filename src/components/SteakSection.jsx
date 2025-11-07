import React from "react";
import Navbar from "./Navbar";
import MenuNavbar from "./MenuNavbar";
import ribeyesteak from "../assets/ribeyesteak.jpg";
import sirloinsteak from "../assets/sirloinsteak.jpg";
import filetmignon from "../assets/filetmignon.jpg";
import tbonesteak from "../assets/tbonesteak.jpg";
const MenuSection = () => {
  return (
    <div className="bg-[#383A3D] text-white  w-screen h-screen overflow-hidden">
      <Navbar />
      <div className="mt-[140px]"></div>
      <MenuNavbar />

      <section className="px-9 py-3">
        <h1 className="text-[64px]  mb-2 font-playfairsc ">MENU</h1>
        <p className="text-[32px] mb-2 font-abhaya">The Steak</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={ribeyesteak}
              alt="ribeyesteak"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                A juicy and tender ribeye grilled <br />
                to perfection,
                <br />
                served with garlic butter <br />
                and accompanied
                <br />
                by seasonal vegetables or <br />
                mashed potatoes.
                <br />
                <p className="text-[24px] mt-5">Cost : 630 Baht</p>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={sirloinsteak}
              alt="sirloinsteak"
              className="w-[350px] h-[263px]"
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                Classic sirloin steak with a succulent
                <br /> texture, served with a rich
                <br /> peppercorn sauce
                <br /> and a side of roasted
                <br /> vegetables.
               
                <p className="text-[24px] mt-5">Cost : 560 Baht</p>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={filetmignon}
              alt="filetmignon"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                Premium cut of filet mignon,
                <br /> extremely tender and
                <br /> flavorful, grilled to your
                <br /> liking and topped
                <br /> with herb-infused butter.
                <p className="text-[24px] mt-5">Cost : 770 Baht</p>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 font-abhaya text-[24px]">
            <img
              src={tbonesteak}
              alt="tbonesteak"
              className="w-[350px] h-[263px] "
            />
            <div>
              <p className="text-[24px] mt-[-9px]">
                A hearty T-bone steak,
                <br /> perfectly seared and served
                <br /> with roasted
                <br /> vegetables, giving a
                <br /> combination of tenderloin
                <br /> and strip steak in every bite.
               
                <p className="text-[24px] mt-5">Cost : 700 Baht</p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuSection;
