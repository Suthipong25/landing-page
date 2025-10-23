import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";

// 💡 สร้าง Placeholder ง่ายๆ สำหรับหน้าอื่นๆ ที่คุณต้องการให้แสดงว่า "อยู่ระหว่างการพัฒนา"
const ComingSoonPage = ({ title }) => (
  <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
    {" "}
    <h1 className="text-6xl md:text-8xl font-serif font-bold text-yellow-400 mb-4">
      {title}
    </h1>
    {" "}
    <p className="text-lg md:text-2xl font-['Poppins']">
      หน้านี้กำลังอยู่ระหว่างการพัฒนา กรุณาเยี่ยมชมหน้าอื่น ๆ
      ที่เสร็จสมบูรณ์แล้ว
    </p>
    {" "}
  </div>
);

function App() {
  return (
    <BrowserRouter>
     {" "}
      <Routes>
         {/* 1. หน้า Home: แสดง HeroSection */}
        <Route path="/" element={<HeroSection />} />{" "}
        {/* 2. หน้า About Us: แสดง AboutSection แบบเต็มหน้า */}{" "}
        <Route path="/aboutus" element={<AboutSection isFullPage={true} />} />
        {" "}
        {/* 💡 Route สำหรับหน้าที่ยังไม่เสร็จ: ใช้ ComingSoonPage */}{" "}
        <Route path="/menu" element={<ComingSoonPage title="เมนู (Menu)" />} />
       {" "}
        <Route
          path="/contact"
          element={<ComingSoonPage title="ติดต่อเรา (Contact)" />}
        />
       {" "}
        <Route
          path="/review"
          element={<ComingSoonPage title="รีวิว (Review)" />}
        />
        {/* 💡 404 Page */}{" "}
        <Route path="*" element={<ComingSoonPage title="404 Not Found" />} />
        {" "}
      </Routes>
      {" "}
    </BrowserRouter>
  );
}

export default App;
