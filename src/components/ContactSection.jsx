import React from "react";
import Navbar from "./Navbar";
import contactbg from "../assets/contactbg.png"; // ✅ ภาพพื้นหลัง
import instagramIcon from "../assets/instagram.png";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";
const ContactSection = () => {
  return (
    <div className="h-screen flex flex-col font-sans relative overflow-hidden">
      
      <Navbar />

      {/* ✅ พื้นหลัง - แสดงเต็มโดยไม่ตัดและขยับลงมา */}
      <div
        style={{
          backgroundImage: `url(${contactbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 130,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          
        }}
      >
        {/* overlay สีดำโปร่ง */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* ✅ เนื้อหา */}
      <main className="relative z-10 flex flex-1 flex-col lg:flex-row text-white pt-32">
        {/* 🔹 ฝั่งซ้าย */}
        <div className="flex-1 p-10 flex flex-col justify-center h-1/2 lg:h-full">
          <p className=" md:text-[96px]   mb-49 font-lexend  text-outline">
            ConTact <br />
            Us
          </p>

          <div className="space-y-4 text-[24px] font-lexend text-outline ">
            <p>Booking Table</p>
            <p className="font-bold">and Phone number : 085-963-753</p>
            <p>
              Twitter x : <span className="font-bold">BisTroThai</span>
            </p>
            <p>
              FaceBook : <span className="font-bold">BisTroThai</span>
            </p>
            <p>
              Instagram : <span className="font-bold">BisTroThai</span>
            </p>
            <p>
              Email For Make Party or Wedding :
              <span className="font-bold mt-2"> BisTroThai@gmail.com</span>
            </p>
          </div>
        </div>

        {/* 🔹 ฝั่งขวา */}
        <div className="flex-1 p-10 flex flex-col justify-center items-start h-1/2 lg:h-full">
          <p className="md:text-[96px]  mb-49 leading-tight font-lexend text-outline">
            Love & Kindness
          </p>

          <div className="space-y-4 text-[24px] font-lexend text-outline mt-8">
            <p>Address SaphanMai Bangu</p>
            <p>5/76 st.jakcal MukRob Spetnaz</p>
            <p className="font-bold mt-2">Zip Code 10460</p>
            <p className="font-bold mt-2">012-965-741 LL2 jr. Office Contact</p>
            <p className="font-bold mt-2">Follow We at</p>
          </div>

          <div className="flex space-x-5 mt-9">
            {/* ✅ Instagram Icon */}
            <div className="w-28 h-28  rounded-lg flex items-center justify-center  transition-transform cursor-pointer shadow-lg">
              <img 
                src={instagramIcon} 
                alt="Instagram" 
                className="w-103 h-103 object-contain"
              />
            </div>
            
            {/* ✅ Facebook Icon */}
            <div className="w-28 h-28  rounded-lg flex items-center justify-center  transition-transform cursor-pointer shadow-lg">
              <img 
                src={facebookIcon} 
                alt="Facebook" 
                className="w-103 h-103 object-contain"
              />
            </div>
            
            {/* ✅ Twitter/X Icon */}
            <div className="w-28 h-28  rounded-lg flex items-center justify-center  transition-transform cursor-pointer shadow-lg">
              <img 
                src={twitterIcon} 
                alt="Twitter" 
                className="w-103 h-103 object-contain"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default ContactSection;
