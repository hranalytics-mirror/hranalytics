import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { motion } from "framer-motion";

import amazonLogo from "../assets/amazon.svg";
import kindleLogo from "../assets/kindle.svg";
import ziffybeeLogo from "../assets/ziffy.svg";

import book1 from "../assets/book1.webp";
import book2 from "../assets/book2.webp";
import book3 from "../assets/book3.webp";
import book4 from "../assets/book4.webp";
import book5 from "../assets/book5.webp";

import { useNavigate } from "react-router-dom";

const books = [
  {
    id: 1,
    image: book1,
    volume: "Volume 1",
    desc: "Where the journey stories began.",
    color: "bg-[#F4B400]",
  },
  {
    id: 2,
    image: book2,
    volume: "Volume 2",
    desc: "The next level of HR analytics stories.",
    color: "bg-[#2563EB]",
  },
  {
    id: 3,
    image: book3,
    volume: "Volume 3",
    desc: "More stories. Deeper insights.",
    color: "bg-[#16A34A]",
  },
  {
    id: 4,
    image: book4,
    volume: "Volume 4",
    desc: "Advanced analytics lessons.",
    color: "bg-[#9333EA]",
  },
  {
    id: 5,
    image: book5,
    volume: "Volume 5",
    desc: "Modern strategies for teams.",
    color: "bg-[#DC2626]",
  },
];

const BookCard = ({ book, index }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
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
      id="books"
      className="w-full rounded-2xl border border-gray-300 bg-gray-100 p-3 shadow-sm transition-all duration-300 scroll-mt-24"
    >
      {/* Top */}
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        {/* Book Image */}
        <motion.img
          whileHover={{ rotate: -2, scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={book.image}
          alt={book.volume}
          className="h-[150px] w-[90px] object-contain sm:h-[170px] sm:w-[100px]"
        />

        {/* Content */}
        <div className="flex flex-col items-center justify-between py-2 sm:pt-4 sm:pb-5">
          <div>
            <h2 className="text-center text-[18px] font-bold tracking-wide text-[#1B1464] sm:text-[20px]">
              {book.volume}
            </h2>

            <p className="mt-3 max-w-[140px] text-center text-[11px] leading-5 text-gray-500 sm:text-[12px]">
              {book.desc}
            </p>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(`/book/${book.id}`)}
            className={`mt-4 w-fit rounded-md px-3 py-2 text-[11px] font-semibold text-white sm:text-[12px] ${book.color}`}
          >
            BUY NOW
          </motion.button>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-5 flex items-center justify-center gap-3 sm:gap-4">
        <img src={amazonLogo} alt="Amazon" className="h-3 w-auto sm:h-4" />

        <div className="h-4 w-[1px] bg-gray-400"></div>

        <img src={kindleLogo} alt="Kindle" className="h-4 w-auto sm:h-5" />

        <div className="h-4 w-[1px] bg-gray-400"></div>

        <img src={ziffybeeLogo} alt="Ziffybee" className="h-4 w-auto sm:h-5" />
      </div>
    </motion.div>
  );
};

const BooksCarousel = () => {
  return (
    <section className="w-full overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center justify-center gap-3 sm:gap-4"
        >
          <div className="h-px w-8 bg-gray-300 sm:w-12"></div>

          <h2 className="text-center text-lg font-bold uppercase tracking-wide text-gray-800 sm:text-2xl">
            THE HR MIRROR 500 SERIES
          </h2>

          <div className="h-px w-8 bg-gray-300 sm:w-12"></div>
        </motion.div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {books.map((book, index) => (
              <CarouselItem
                key={book.id}
                className="
                  pl-2
                  basis-full
                  sm:basis-1/2
                  lg:basis-1/3
                  xl:basis-1/5
                "
              >
                <BookCard book={book} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Buttons */}
          <CarouselPrevious
            className="
              left-1
              h-9
              w-9
              border-gray-300
              bg-white
              shadow-md
              sm:-left-5
              sm:h-10
              sm:w-10
            "
          />

          <CarouselNext
            className="
              right-1
              h-9
              w-9
              border-gray-300
              bg-white
              shadow-md
              sm:-right-5
              sm:h-10
              sm:w-10
            "
          />
        </Carousel>
      </div>
    </section>
  );
};

export default BooksCarousel;
