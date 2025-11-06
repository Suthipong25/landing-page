import React from "react";

import staricon from "../assets/staricon.png"; 

const ReviewCard = ({ name, rating, text, image }) => {
  
  
 
  const starsToDisplay = Array.from({ length: rating });

  return (
    <div className="relative bg-[#923C3C] rounded-[30px] p-6 w-[360px] min-h-[420px] shadow-lg border-2 border-black text-white transition-transform duration-300 ">
      
      <h2 className="text-[36px] font-archivo mb-2 underline underline-offset-4 decoration-[2px]">
        {name}
      </h2>

      
      <div className="flex items-center space-x-1 mb-3">
        {starsToDisplay.map((_, index) => (
          <img
            key={index}
            src={staricon}
            alt="Star rating"
            
            className="w-[35px] h-[33px] object-contain" 
          />
        ))}
        
        <span className="text-white text-[20px] ml-2">{rating}.0</span> 
      </div>

      <p className="text-[20px] leading-6 font-archivo">{text}</p>

      
      <img
        src={image}
        alt={name}
        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[92px] h-[93px] rounded-full border-2 border-black"
      />
    </div>
  );
};

export default ReviewCard;