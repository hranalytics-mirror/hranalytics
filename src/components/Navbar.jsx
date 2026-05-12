import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold text-xl border-2 border-primary">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-blue-950 leading-tight">HR MIRROR 500</span>
              <span className="text-xs text-gray-500 font-medium">Stories HR is Missing</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-secondary font-medium text-sm hover:text-pink-700 transition">Home</a>
            <a href="#" className="text-gray-600 hover:text-primary font-medium text-sm transition">Books</a>
            <a href="#" className="text-gray-600 hover:text-primary font-medium text-sm transition">Insights</a>
            <a href="#" className="text-gray-600 hover:text-primary font-medium text-sm transition">Tools& Assessments</a>
            <div className="relative">
              <a href="#" className="text-gray-600 hover:text-primary font-medium text-sm transition">Quiz Arena</a>
              <span className="absolute -top-3 -right-6 bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">NEW</span>
            </div>
            <a href="#" className="text-gray-600 hover:text-primary font-medium text-sm transition">Reviews</a>
            <a href="#" className="text-gray-600 hover:text-primary font-medium text-sm transition">About Us</a>
            <a href="#" className="text-gray-600 hover:text-primary font-medium text-sm transition">Contact</a>
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
