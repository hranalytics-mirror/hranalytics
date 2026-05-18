import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import reviewBg from "../assets/review_background.png";
import topComma from "../assets/top_comma.png";
import downComma from "../assets/down_comma.png";

const reviews = [
  {
    id: 1,
    review:
      "A must-read for every HR professional who wants to move beyond dashboards.",
    author: "HR Manager",
  },
  {
    id: 2,
    review: "The real-world stories and analytics perspective are eye-opening!",
    author: "People Analytics Lead",
  },
  {
    id: 3,
    review: "Finally, a book that connects data with real human behavior.",
    author: "CHRO",
  },
  {
    id: 4,
    review:
      "Practical insights that can actually be implemented in organizations.",
    author: "Talent Strategist",
  },
];

const Review = () => {
  return (
    <div
      id="reviews"
      className="relative   overflow-hidden rounded-xl bg-cover bg-center py-2 max-w-[1500px] mx-auto"
      style={{
        backgroundImage: `url(${reviewBg})`,
      }}
    >
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center text-gray-800 tracking-wide uppercase mb-2">
        VOICES THAT INSPIRE
      </h2>

      {/* Carousel */}
      <div className="relative px-16">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                {/* Card */}
                <div className="relative h-full rounded-xl bg-white/90 p-3 shadow-lg backdrop-blur-sm">
                  {/* Top Comma */}
                  <img
                    src={topComma}
                    alt="quote"
                    className="absolute left-5 top-5 w-8 object-contain opacity-80"
                  />

                  {/* Stars */}
                  <div className="mb-1 text-center text-[22px] tracking-[4px] text-[#FFB400]">
                    ★★★★★
                  </div>

                  {/* Review */}
                  <p className="text-gray-600 font-medium text-sm leading-relaxed italic max-w-xs text-center">
                    {item.review}
                  </p>

                  {/* Author */}
                  <p className="mt-1 text-center text-[16px] font-semibold text-[#1B1464]">
                    — {item.author}
                  </p>

                  {/* Bottom Comma */}
                  <img
                    src={downComma}
                    alt="quote"
                    className="absolute bottom-5 right-5 w-8 object-contain opacity-80"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Left Arrow */}
          <CarouselPrevious className="left-0 h-12 w-12 border-none bg-white text-[#1B1464] shadow-lg hover:bg-white" />

          {/* Right Arrow */}
          <CarouselNext className="right-0 h-12 w-12 border-none bg-white text-[#1B1464] shadow-lg hover:bg-white" />
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
