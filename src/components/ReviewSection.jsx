import React from "react";
import { motion } from "framer-motion";

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
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <motion.div
        id="reviews"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative
          mx-auto
          max-w-[1500px]
          overflow-hidden
          rounded-2xl
          bg-cover
          bg-center
          
          sm:pb-5
        "
        style={{
          backgroundImage: `url(${reviewBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              mb-1
              px-4
              text-center
              text-lg
              font-bold
              uppercase
              tracking-wide
              text-gray-800
              sm:text-2xl
            "
          >
            VOICES THAT INSPIRE
          </motion.h2>

          {/* Carousel */}
          <div className="relative px-2 sm:px-8 md:px-14">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-3">
                {reviews.map((item, index) => (
                  <CarouselItem
                    key={item.id}
                    className="
                      pl-3
                      basis-full
                      sm:basis-1/2
                      lg:basis-1/3
                    "
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                      }}
                      className="
                        relative
                        flex
                        h-full
                        min-h-[240px]
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white/90
                        px-5
                        py-8
                        shadow-xl
                        backdrop-blur-sm
                      "
                    >
                      {/* Top Comma */}
                      <motion.img
                        whileHover={{ rotate: -10 }}
                        src={topComma}
                        alt="quote"
                        className="
                          absolute
                          left-4
                          top-4
                          w-6
                          object-contain
                          opacity-80
                          sm:left-5
                          sm:top-5
                          sm:w-8
                        "
                      />

                      {/* Stars */}
                      <div
                        className="
                          mb-3
                          text-center
                          text-[20px]
                          tracking-[3px]
                          text-[#FFB400]
                          sm:text-[22px]
                        "
                      >
                        ★★★★★
                      </div>

                      {/* Review */}
                      <p
                        className="
                          max-w-xs
                          text-center
                          text-sm
                          font-medium
                          italic
                          leading-relaxed
                          text-gray-600
                          sm:text-[15px]
                        "
                      >
                        {item.review}
                      </p>

                      {/* Author */}
                      <p
                        className="
                          mt-4
                          text-center
                          text-[15px]
                          font-semibold
                          text-[#1B1464]
                          sm:text-[16px]
                        "
                      >
                        — {item.author}
                      </p>

                      {/* Bottom Comma */}
                      <motion.img
                        whileHover={{ rotate: 10 }}
                        src={downComma}
                        alt="quote"
                        className="
                          absolute
                          bottom-4
                          right-4
                          w-6
                          object-contain
                          opacity-80
                          sm:bottom-5
                          sm:right-5
                          sm:w-8
                        "
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Left Arrow */}
              <CarouselPrevious
                className="
                  left-0
                  h-9
                  w-9
                  border-none
                  bg-white
                  text-[#1B1464]
                  shadow-lg
                  hover:bg-white
                  sm:h-11
                  sm:w-11
                "
              />

              {/* Right Arrow */}
              <CarouselNext
                className="
                  right-0
                  h-9
                  w-9
                  border-none
                  bg-white
                  text-[#1B1464]
                  shadow-lg
                  hover:bg-white
                  sm:h-11
                  sm:w-11
                "
              />
            </Carousel>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Review;
