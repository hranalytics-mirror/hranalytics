import React from "react";
import { Trophy, Star, Shield } from "lucide-react";

import trophy from "../assets/trophy.png";

import discount from "../assets/discount.png";

const Quiz = () => {
  return (
    <div className="max-w-7xl mx-auto  rounded-2xl bg-[#16005B] px-8 py-2 text-white shadow-xl">
      <div className="flex items-center justify-between gap-6">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-6">
          {/* Trophy */}
          <img src={trophy} alt="Trophy" className="w-[180px] object-contain" />

          {/* Text + Feature Cards */}
          <div className="flex items-center justify-between">
            {/* Heading */}
            <div>
              <h2 className="text-[18px] font-bold leading-tight pb-4">
                QUIZ ARENA
                <span className="ml-2 text-[18px] font-semibold text-gray-200">
                  — PLAY, LEARN & EARN!
                </span>
              </h2>

              {/* Description */}
              <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto md:mx-0">
                Test your HR analytics knowledge with our{" "}
                <span className="font-bold text-yellow-400">
                  gamified quizzes. Climb the leaderboard
                </span>
                , earn badges and unlock exciting rewards!
              </p>
            </div>

            {/* Feature Boxes */}
            <div className="flex flex-col sm:flex-row gap-2 justify-center px-3 py-3 md:justify-start rounded-xl border border-white/10 bg-[#321c7c]">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500/20 p-2 rounded-lg">
                  <Trophy size={20} className="text-yellow-400" />
                </div>
                <div className="text-left">
                  <div className="text-white text-xs font-bold">Play Quiz</div>
                  <div className="text-blue-200 text-[10px]">
                    Challenge yourself
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <Star size={20} className="text-green-400" />
                </div>
                <div className="text-left">
                  <div className="text-white text-xs font-bold">
                    Earn Points
                  </div>
                  <div className="text-blue-200 text-[10px]">
                    Score high & earn points
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <Shield size={20} className="text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="text-white text-xs font-bold">
                    Unlock Rewards
                  </div>
                  <div className="text-blue-200 text-[10px]">
                    Get discounts on HR Mirror 500 books!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col items-center">
          {/* Discount Image */}
          <img
            src={discount}
            alt="Discount"
            className="w-[140px] object-contain"
          />

          {/* Button */}
          <button className="flex items-center gap-2 rounded-xl bg-[#FF2D78]  text-[15px] px-5 py-1 font-semibold text-white transition hover:scale-105">
            {/* Simple Game Icon */}
            <span className="text-[18px]">🎮</span>
            PLAY QUIZ NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
