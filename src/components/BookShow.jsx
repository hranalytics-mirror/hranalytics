import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import amazonLogo from "../assets/amazon.svg";
import kindleLogo from "../assets/kindle.svg";
import ziffybeeLogo from "../assets/ziffy.svg";

// Different book images
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import book4 from "../assets/book4.png";
import book5 from "../assets/book5.png";
import { Link } from "react-router-dom";

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

const BookCard = ({ book }) => {
  return (
    <div
      id="books"
      className="w-full rounded-2xl border border-gray-300 bg-gray-100 p-2 shadow-sm"
    >
      {/* Top */}
      <div className="flex justify-center gap-4">
        {/* Book Image */}
        <img
          src={book.image}
          alt={book.volume}
          className="h-[170px] w-[100px] object-contain"
        />

        {/* Content */}
        <div className="flex flex-col items-center pt-4 pb-5 justify-between">
          <div>
            <h2 className="text-center text-[20px] font-bold tracking-wide text-[#1B1464]">
              {book.volume}
            </h2>

            <p className="mt-3 max-w-[140px] text-center text-[12px] leading-5 text-gray-500">
              {book.desc}
            </p>
          </div>

          <Link to={`/book/${book.id}`}>
            <button
              className={`w-fit rounded-md px-2 py-2 text-[12px] font-semibold text-white ${book.color}`}
            >
              BUY NOW
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-5 flex items-center justify-center gap-4">
        <img src={amazonLogo} alt="Amazon" className="h-4 w-auto" />

        <div className="h-4 w-[1px] bg-gray-400"></div>

        <img src={kindleLogo} alt="Amazon" className="h-5 w-auto" />
        <div className="h-4 w-[1px] bg-gray-400"></div>
        <img src={ziffybeeLogo} alt="Amazon" className="h-5 w-auto" />
      </div>
    </div>
  );
};

const BooksCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="h-px w-12 bg-gray-300"></div>
        <h2 className="text-2xl font-bold text-gray-800 tracking-wide uppercase">
          THE HR MIRROR 500 SERIES
        </h2>
        <div className="h-px w-12 bg-gray-300"></div>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {books.map((book) => (
            <CarouselItem
              key={book.id}
              className="pl-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
            >
              <BookCard book={book} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="-left-5 h-10 w-10 border-gray-300 bg-white shadow-md" />
        <CarouselNext className="-right-5 h-10 w-10 border-gray-300 bg-white shadow-md" />
      </Carousel>
    </div>
  );
};

export default BooksCarousel;
