import React from "react";
import background from "../assets/bac_upscaled.png";

import { Users, FileText, Lightbulb, TrendingUp } from "lucide-react";

import { ArrowRight, Gift, ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <div
      className={`bg-cover bg-center bg-no-repeat max-w-[1500px] w-[100%] mx-auto relative h-[70vh]`}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="absolute top-[10%] left-[6%] w-[50%] ">
        <div className="relative z-10 max-w-[560px]">
          {/* Top Text */}
          <h2 className="text-[26px] font-bold font-poppins uppercase leading-[1.05] text-purple-700 tracking-wide">
            BEYOND DASHBOARDS,
          </h2>

          {/* Main Heading */}
          <h1 className="mt-2 text-[56px]  leading-[0.85]  font-bold">
            <span className="bg-black bg-clip-text text-transparent">
              Stories
            </span>{" "}
            <span className="bg-gradient-to-b from-[#FF4D7A] to-[#D91E63] bg-clip-text text-transparent">
              HR
            </span>
            <br />
            <span className="bg-black bg-clip-text text-transparent">
              is
            </span>{" "}
            <span className="bg-gradient-to-b from-[#2FAE66] to-[#1F8A4D] bg-clip-text text-transparent">
              Missing.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-[560px] text-[20px] leading-[1.5] font-bold text-[#1F1F1F]">
            We go beyond numbers to uncover the{" "}
            <span className="bg-gradient-to-b from-[#FF4D7A] to-[#D91E63] bg-clip-text text-transparent">
              people
            </span>
            , <spna className="text-[#2166F3]">patterns</spna> and{" "}
            <spna className="text-[#2BA84A]">stories</spna> behind them.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap items-center gap-4 w-[800px]">
            <button className="flex items-center gap-3 rounded-xl bg-[#2166F3] px-2 py-2 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(33,102,243,0.35)]">
              EXPLORE INSIGHTS
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-3 rounded-xl bg-[#EB3C78] px-2 py-2 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(235,60,120,0.35)]">
              PLAY QUIZ & WIN
              <Gift size={18} />
            </button>

            <button className="flex items-center gap-3 rounded-xl bg-[#2BA84A] px-2 py-2 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(43,168,74,0.35)]">
              BUY THE SUBSCRIPTION
              <ShoppingCart size={18} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="flex flex-col items-center text-center bg-white/50 rounded-lg">
              <div className="bg-pink-50 p-3 rounded-full text-secondary mb-2">
                <Users size={24} />
              </div>
              <h4 className="font-bold text-gray-900">500+</h4>
              <p className="text-xs text-gray-500">Real HR Scenarios</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white/50 rounded-lg">
              <div className="bg-blue-50 p-3 rounded-full text-primary mb-2">
                <FileText size={24} />
              </div>
              <h4 className="font-bold text-gray-900">Real</h4>
              <p className="text-xs text-gray-500">Workplace Patterns</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white/50 rounded-lg">
              <div className="bg-yellow-50 p-3 rounded-full text-yellow-500 mb-2">
                <Lightbulb size={24} />
              </div>
              <h4 className="font-bold text-gray-900">Practical</h4>
              <p className="text-xs text-gray-500">Insights</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white/50 rounded-lg">
              <div className="bg-gray-50 p-3 rounded-full text-gray-500 mb-2">
                <TrendingUp size={24} />
              </div>
              <h4 className="font-bold text-gray-900">Better</h4>
              <p className="text-xs text-gray-500">People Decisions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
