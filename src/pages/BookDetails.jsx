// BookDetailsPage.jsx

import React from "react";

import { useParams } from "react-router-dom";

import books from "../utils/books.js";
import amazonIcon from "../assets/amazon.svg";
import kindeIcon from "../assets/kindle.svg";
import ziffyIcon from "../assets/ziffy.svg";
import { ExternalLink, ShoppingCart } from "lucide-react";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";

const BookDetailsPage = () => {
  const { id } = useParams();

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-black">
        Book Not Found
      </div>
    );
  }

  return (
    <div className="bg-[#f7f8fc] min-h-screen">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <div
          className="
            bg-white
            rounded-[32px]
            shadow-sm
            border
            border-gray-100
            overflow-hidden
          "
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center p-6 md:p-10">
            {/* LEFT */}
            <div className="flex justify-center">
              <img
                src={book.cover}
                alt={book.title}
                className="
                  w-[260px]
                  md:w-[360px] 
                  object-contain
                  drop-shadow-2xl
                "
              />
            </div>

            {/* RIGHT */}
            <div>
              <div
                className="
                  inline-flex
                  bg-pink-100
                  text-pink-600
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-semibold
                "
              >
                HR Mirror 500 Series
              </div>

              <h1
                className="
                  text-3xl
                  md:text-5xl
                  font-black
                  text-[#101828]
                  leading-tight
                  mt-5
                "
              >
                {book.title}
              </h1>

              {/* <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                {book.subtitle}
              </p> */}

              {/* BUY LINKS */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-[#101828] mb-5">
                  Buy This Book
                </h3>

                <div className="grid sm:grid-cols-3 gap-4">
                  {/* AMAZON */}
                  <a
                    href={book.amazonLink}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      border-2 border-gray-100
                      rounded-2xl
                      p-5
                      flex
                      items-center
                      justify-between
                      hover:scale-[1.02]
                      transition
                    "
                  >
                    <img
                      src={amazonIcon}
                      alt="Amazon"
                      className="h-7 object-contain"
                    />

                    <ExternalLink size={18} className="text-white" />
                  </a>

                  {/* KINDLE */}
                  <a
                    href={book.kindleLink}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      bg-white
                      border
                      border-gray-200
                      rounded-2xl
                      p-5
                      flex
                      items-center
                      justify-between
                      hover:shadow-md
                      transition
                    "
                  >
                    <img
                      src={kindeIcon}
                      alt="Kindle"
                      className="h-7 object-contain"
                    />

                    <ExternalLink size={18} />
                  </a>

                  {/* ZIFFY */}
                  <a
                    href={book.ziffyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      border-2 border-gray-100
                      rounded-2xl
                      p-5
                      flex
                      items-center
                      justify-between
                      hover:scale-[1.02]
                      transition
                    "
                  >
                    <img
                      src={ziffyIcon}
                      alt="Ziffy"
                      className="h-7 object-contain"
                    />

                    <ShoppingCart size={18} className="text-yellow-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 pb-20">
        <div
          className="
            bg-white
            rounded-[32px]
            border
            border-gray-100
            shadow-sm
            p-6
            md:p-10
          "
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] bg-gray-100 flex-1" />

            <h2 className="text-3xl font-black text-[#101828]">Book Details</h2>

            <div className="h-[2px] bg-gray-100 flex-1" />
          </div>

          <div
            className="
              prose
              prose-lg
              max-w-none

              prose-headings:text-[#101828]
              prose-headings:font-black

              prose-p:text-gray-600
              prose-p:leading-8

              prose-li:text-gray-600
              prose-li:leading-8

              prose-strong:text-[#101828]
            "
            dangerouslySetInnerHTML={{
              __html: book.description,
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default BookDetailsPage;
