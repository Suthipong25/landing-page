import React from "react";
import Navbar from "./Navbar";
import ABOUT_IMAGE from "../assets/Muhammad_Ali.png"; 

const AboutSection = ({ isFullPage }) => {
  const sectionHeightClass = isFullPage ? "h-screen" : "h-[85vh] md:h-[700px]";

  return (
    <>
      <Navbar />

      <section
        className={`relative w-full ${sectionHeightClass} bg-gray-900 overflow-hidden font-poppins`}
        id="aboutus"
      >
        <div
          className={`w-full flex flex-col md:flex-row h-full ${
            isFullPage ? "pt-[100px]" : ""
          }`}
        >
          <div className="absolute w-[680px] h-[800px] top-[145px] left-0 ">
            <img
              
              src={ABOUT_IMAGE}
              alt="About"
              className="w-full h-full grayscale brightness-90"
            />
          </div>

          <div className="w-full md:w-1/2 h-full bg-black/80 text-white p-10 md:p-19 flex flex-col justify-start flex-grow" style={{ backgroundColor: '#383A3D' }}>
          
            <h2
              className="font-whisper text-gray-200 tracking-wide drop-shadow-lg text-6xl md:text-8xl mb-8"
              style={{
                position: "absolute",
                width: "600px",
                height: "450",
                top: "150px",
                left: "900px",
                fontSize: "128px",
                lineHeight: "1.1",
                letterSpacing: "0.5px",
                textAlign: "left",
                opacity: 1,
                overflowWrap: "break-word",
                wordBreak: "break-word",
              }}
            >
              About Us
            </h2>

            <p
              className="font-saira text-gray-200"
              style={{
                position: "absolute",
                width: "602.86px",
                height: "436.70px",
                top: "300px",
                left: "900px",
                fontSize: "40px",
                lineHeight: "1.6",
                letterSpacing: "0.5px",
                textAlign: "left",
                opacity: 1,
                overflowWrap: "break-word",
                wordBreak: "break-word",
              }}
            >
              LL2 — The Most Dangerous Man have a new Challenge for Life Because
              He Retired From Boxer Tournament For Kid and Wife. He Want To
              Start a new Life in Thailand and Bring Some His Grandpa Cooking
              Recipe. And He Make The Bistro A Fusion Thai Menu and American.
              That Day Bistro Was Born From Love and Kind.
            </p>

            <div
              className="absolute"
              style={{
                width: "534.85px",
                height: "91.98px",
                top: "800px",
                left: "900px",
                textAlign: "left",
              }}
            >
              <div className="text-left">
                <p className="font-saira text-gray-200 text-5xl mb-3">
                  With Love and Kindness
                </p>
                <p className="text-gray-200  text-5xl">
                  <span className="font-saira">Mr. </span>
                  <span className="font-nautigal">LL2</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;