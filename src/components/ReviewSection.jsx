import React from "react";
import Navbar from "./Navbar";
import reviewbg1 from "../assets/reviewbg1.png";
import ReviewCard from "./ReviewCard";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";

const reviews = [
  {
    name: "Jame Reece",
    rating: 5,
    text: "The food very fantastic. The ingredient is so good I love to eat some ribeye steak and brought some salmon fish for my daughter. It’s a great budget restaurant.",
    image: user1,
  },
  {
    name: "Dexter MeatLover",
    rating: 4,
    text: "Not bad but today is not pretty good because I actually ordered a medium rare steak but got alive cow meat . The waiter and service is very fast, respond to me and serve some good meal pretty well.",
    image: user2,
  },
  {
    name: "Hunter Ketulaka",
    rating: 5,
    text: "Sybau, this restaurant is excellent!",
    image: user2,
  },
];

const ReviewSection = () => {
  return (
    <div className="bg-[#383A3D] text-white w-screen h-screen overflow-hidden">
      <Navbar />

      <div className="mt-[140px]"></div>

      <section className="px-8 py-2">
        
        <div className="mb-4">
          {" "}
          
          <h1 className="text-[64px] mt-5 font-italianno">BisTro review</h1>
        </div>

        
        <div className="relative flex justify-center mt-[-30px]">
          
          <img
            src={reviewbg1}
            alt="reviewbg1"
            className=" w-[1668px] h-[789px] object-cover"
          />
          <div
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
flex justify-center gap-22 flex-wrap w-full max-w-[1400px]"
          >
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                rating={review.rating}
                text={review.text}
                image={review.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
