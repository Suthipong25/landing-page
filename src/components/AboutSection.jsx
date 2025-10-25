import React from "react";
import Navbar from "./Navbar";

const ABOUT_IMAGE_URL =
  "https://cdn.discordapp.com/attachments/1159103768252665906/1431665627332087950/722f750303ad6af6ba59ef95e58ff5f42ed09808.png?ex=68fe3e04&is=68fcec84&hm=5d28e1e034c4a7e9ac721721d5b9a8fbb1d5eb1330262ad4f10d42d641ff9812&";

const AboutSection = ({ isFullPage }) => {
  const sectionHeightClass = isFullPage ? "h-screen" : "h-[85vh] md:h-[650px]";

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
          <div className="absolute w-[900px] h-[880px] top-[180px] left-0 rotate-[-0.14deg] opacity-100">
            <img
              src={ABOUT_IMAGE_URL}
              alt="About"
              className="w-full h-full object-cover grayscale brightness-90"
            />
          </div>

          <div className="w-full md:w-1/2 h-full bg-black/80 text-white p-10 md:p-19 flex flex-col justify-start flex-grow">
            <h2
              className="font-whisper text-gray-200 font-bold tracking-wide drop-shadow-lg text-6xl md:text-8xl mb-8"
              style={{
                position: "absolute",
                width: "600px",
                height: "450",
                top: "100",
                left: "1150px",
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
              className="font-saira  text-gray-200"
              style={{
                position: "absolute",
                width: "602.86px",
                height: "436.70px",
                top: "328.24px",
                left: "1150px",
                fontSize: "40px",
                lineHeight: "1",
                letterSpacing: "0.5px",
                textAlign: "left",
                opacity: 1,
                overflowWrap: "break-word",
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
                top: "854.59px",
                left: "1150px",
                textAlign: "left",
              }}
            >
              <div className="text-left">
                <p className="font-saira text-gray-200 italic text-lg mb-1">
                  With Love and Kindness,
                </p>
                <p className="text-gray-200 font-semibold italic text-3xl">
                  <span className="font-saira">Mr.</span>
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
