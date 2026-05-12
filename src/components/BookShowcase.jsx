import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BookShowcase = () => {
  const books = [
    {
      id: 2,
      vol: "Volume 2",
      desc: "The next level of HR analytics stories..",
      badge: "LATEST",
      color: "blue",
    },
    {
      id: 1,
      vol: "Volume 1",
      desc: "Where the journey of stories began.",
      badge: null,
      color: "yellow",
    },
    {
      id: 3,
      vol: "Volume 3",
      desc: "More stories. Deeper insights",
      badge: null,
      color: "green",
    },
    {
      id: 4,
      vol: "Volume 2",
      desc: "The next level of HR analytics stories..",
      badge: "LATEST",
      color: "blue",
    },
    {
      id: 5,
      vol: "Volume 1",
      desc: "Where the journey of stories began.",
      badge: null,
      color: "yellow",
    },
    {
      id: 6,
      vol: "Volume 3",
      desc: "More stories. Deeper insights",
      badge: null,
      color: "green",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-12 bg-gray-300"></div>
          <h2 className="text-2xl font-bold text-gray-800 tracking-wide uppercase">
            THE HR MIRROR 500 SERIES
          </h2>
          <div className="h-px w-12 bg-gray-300"></div>
        </div>

        <div className="flex items-center justify-between relative">
          <button className="absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-sm rounded-full p-2 text-gray-500 hover:text-primary hover:border-primary transition z-10">
            <ChevronLeft size={24} />
          </button>

          <div className="w-full flex overflow-x-auto gap-4 pb-8 snap-x hide-scrollbar px-4 justify-start lg:justify-center">
            {/* Real Books */}
            {books.map((book) => (
              <div
                key={book.id}
                className={`snap-center flex-shrink-0 w-72 bg-white border ${book.badge ? "border-primary shadow-xl shadow-blue-100 ring-1 ring-primary/20" : "border-gray-100 shadow-md"} rounded-2xl p-6 relative flex flex-col`}
              >
                {book.badge && (
                  <span className="absolute -top-3 left-4 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                    {book.badge}
                  </span>
                )}
                <div className="flex gap-4">
                  {/* Book Mockup */}
                  <div
                    className={`w-24 h-36 rounded-r-md shadow-md flex-shrink-0 flex items-center justify-center p-2
                    ${book.color === "blue" ? "bg-blue-900 border-l-4 border-blue-400" : ""}
                    ${book.color === "yellow" ? "bg-yellow-500 border-l-4 border-yellow-300" : ""}
                    ${book.color === "green" ? "bg-green-700 border-l-4 border-green-400" : ""}
                  `}
                  >
                    <div className="text-center">
                      <div className="text-[8px] font-bold text-white/80">
                        HR ANALYTICS
                      </div>
                      <div className="text-lg font-bold text-white leading-none mt-1">
                        500
                      </div>
                    </div>
                  </div>
                  <div className="text-left flex flex-col justify-center">
                    <h3 className="font-bold text-gray-900 mb-1">{book.vol}</h3>
                    <p className="text-xs text-gray-500 mb-3">{book.desc}</p>
                    <button
                      className={`${book.color === "blue" ? "bg-primary" : book.color === "yellow" ? "bg-yellow-500" : "bg-accent"} text-white text-xs font-semibold py-1.5 px-4 rounded hover:opacity-90 transition w-max`}
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
                <div className="mt-6 flex justify-around items-center border-t border-gray-100 pt-4">
                  <span className="text-xs font-bold text-gray-400">
                    amazon
                  </span>
                  <div className="w-px h-4 bg-gray-200"></div>
                  <span className="text-xs font-bold text-gray-400">
                    ZiffyBees
                  </span>
                </div>
              </div>
            ))}

            {/* Placeholder / Stay Tuned */}
            <div className="snap-center flex-shrink-0 w-64 bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center shadow-inner">
              <button className="bg-gray-200 text-gray-600 text-sm font-semibold py-2 px-6 rounded-full hover:bg-gray-300 transition mt-auto mb-auto">
                STAY TUNED
              </button>
            </div>

            {/* Coming Soon */}
            <div className="snap-center flex-shrink-0 w-64 bg-purple-50 border border-purple-100 rounded-2xl p-6 relative flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-100/50"></div>
              <div className="relative w-24 h-36 bg-purple-200 rounded-r-md shadow-md flex items-center justify-center border-l-4 border-purple-300 mb-4 opacity-80">
                <span className="text-purple-800 font-bold text-center text-sm leading-tight">
                  ANALYTICS
                  <br />
                  COMING
                  <br />
                  SOON
                </span>
              </div>
              <button className="relative bg-white text-purple-700 text-sm font-semibold py-2 px-6 rounded-full shadow-sm hover:shadow transition mt-auto">
                STAY TUNED
              </button>
            </div>
          </div>

          <button className="absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-sm rounded-full p-2 text-gray-500 hover:text-primary hover:border-primary transition z-10">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookShowcase;
