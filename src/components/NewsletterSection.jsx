import React from "react";
import { Mail, Linkedin, Instagram, Youtube } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="bg-[linear-gradient(90deg,#ff5f6d_0%,#7b1fa2_35%,#1565c0_70%,#1faa59_100%)] py-8 px-4 sm:px-6 lg:px-8   ">
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Text */}
        <div className="flex items-center gap-4 text-white flex-1">
          <div className="bg-white/20 p-3 rounded-full relative">
            <Mail size={24} />
            <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-accent"></div>
          </div>
          <p className="font-semibold text-sm sm:text-base leading-tight max-w-sm">
            Stay updated with the latest stories ,<br />
            insights& offers from HR Mirror 500
          </p>
        </div>

        {/* Middle: Input & Button */}
        <div className="flex-1 w-full max-w-md flex bg-white rounded-lg p-1 shadow-inner relative">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent px-4 py-2 text-sm text-gray-700 outline-none w-full"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-sm px-6 py-2 rounded-md shadow transition-colors">
            SUBSCRIBE
          </button>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className="h-8 w-px bg-white/30 hidden md:block mr-4"></div>
          <div className="text-white text-xs font-semibold mr-2">
            Follow us for daily insights
          </div>
          <a
            href="#"
            className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white hover:bg-blue-700 transition"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="#"
            className="w-8 h-8 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded flex items-center justify-center text-white hover:opacity-90 transition"
          >
            <Instagram size={16} />
          </a>
          <a
            href="#"
            className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white hover:bg-red-700 transition"
          >
            <Youtube size={16} />
          </a>
          <a
            href="#"
            className="w-8 h-8 bg-green-500/20 border border-white/40 rounded flex items-center justify-center text-white hover:bg-white/20 transition"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
