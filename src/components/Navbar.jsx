import React from "react";
import { Link } from "react-router-dom";
import brandlogo from "../assets/brandlogo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to={"/"}>
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center ">
                <img src={brandlogo} alt="brandlogo" className="rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-blue-950 leading-tight">
                  HR MIRROR 500
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  Stories HR is Missing
                </span>
              </div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to={"/"}
              className="text-secondary font-medium text-sm hover:text-pink-700 transition"
            >
              Home
            </Link>
            <a
              href="#books"
              className="text-gray-600 hover:text-primary font-medium text-sm transition"
            >
              Books
            </a>
            {/* <a
              href="#insights"
              className="text-gray-600 hover:text-primary font-medium text-sm transition"
            >
              Insights
            </a> */}
            <a
              href="#assessments"
              className="text-gray-600 hover:text-primary font-medium text-sm transition"
            >
              Tools& Assessments
            </a>
            <div className="relative">
              <a
                href="#quiz"
                className="text-gray-600 hover:text-primary font-medium text-sm transition"
              >
                Quiz Arena
              </a>
              <span className="absolute -top-3 -right-6 bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                NEW
              </span>
            </div>
            <a
              href="#reviews"
              className="text-gray-600 hover:text-primary font-medium text-sm transition"
            >
              Reviews
            </a>
            <Link
              to={"/author"}
              href="#contactus"
              className="text-gray-600 hover:text-primary font-medium text-sm transition"
            >
              About Authors
            </Link>
            <a
              href="#contactus"
              className="text-gray-600 hover:text-primary font-medium text-sm transition"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-secondary hover:bg-pink-700 text-white px-6 py-2 rounded-md font-medium text-sm shadow-md shadow-pink-200 transition-all">
              BUY THE BOOK
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
