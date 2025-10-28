import React from "react";
import Navbar from "./Navbar";

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Reece",
      rating: 5.0,
      stars: "★★★★★",
      comment: "The Food Very Fantastic\nThe Ingredient Is So Good I",
      hashtag: "#30:02:0",
      description: "Any Datagram for Great-\nBudget Restaurant"
    },
    {
      id: 2,
      name: "Dexter MeatLover",
      rating: "★★★★",
      stars: "★★★★",
      comment: "Not Bad But Today Is Not\nPlenty Good Because I Actually\nOrder A Medium Rare Steak\nBut I Got Alive Cow Meat\nAnd I Was Confuse What But\nThe Water And Service Is Very\nFast Respond To Me and\nServe some Good Meat Pretty\nwell"
    },
    {
      id: 3,
      name: "Hunter Ketulaka",
      rating: 5.0,
      stars: "★★★★★",
      comment: "Sybau This Restaurant is\nExcellent"
    }
  ];

  return (
    <section 
      className="relative w-full min-h-screen overflow-hidden font-poppins py-20"
      style={{ backgroundColor: '#383A3D' }}
      id="reviews"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-whisper text-gray-200 text-8xl mb-4 drop-shadow-lg">
            Reviews
          </h2>
          <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-600 hover:border-gray-400 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Review Header */}
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-saira text-white text-2xl font-bold">
                    {review.name}
                  </h3>
                  <div className="flex items-center">
                    <span className="font-saira text-yellow-400 text-lg mr-2">
                      {review.rating}
                    </span>
                    {typeof review.rating === 'number' && (
                      <span className="text-yellow-400 text-lg">★</span>
                    )}
                  </div>
                </div>
                
                {/* Stars */}
                <div className="text-yellow-400 text-xl mb-3">
                  {review.stars}
                </div>

                {/* Hashtag for first review */}
                {review.hashtag && (
                  <div className="mb-3">
                    <span className="font-saira text-gray-300 bg-gray-700 px-3 py-1 rounded-full text-sm">
                      {review.hashtag}
                    </span>
                  </div>
                )}
              </div>

              {/* Review Comment */}
              <div className="mb-4">
                <p className="font-saira text-gray-200 text-lg whitespace-pre-line leading-relaxed">
                  {review.comment}
                </p>
              </div>

              {/* Description for first review */}
              {review.description && (
                <div className="mt-4 pt-4 border-t border-gray-600">
                  <p className="font-saira text-gray-300 text-sm whitespace-pre-line">
                    {review.description}
                  </p>
                </div>
              )}

              {/* Decorative Element */}
              <div className="mt-6 pt-4 border-t border-gray-600">
                <div className="flex justify-between items-center">
                  <span className="font-italianno text-gray-400 text-xl">
                    BisTra
                  </span>
                  <span className="font-saira text-gray-500 text-sm">
                    {String(review.id).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="font-saira text-gray-400 text-lg">
            More reviews coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;