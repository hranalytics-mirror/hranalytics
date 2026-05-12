import React from 'react';
import { Trophy, Star, Shield } from 'lucide-react';

const QuizBanner = () => {
  return (
    <section className="py-8 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative bg-blue-950 flex flex-col md:flex-row items-center">
        
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px]"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-[80px]"></div>
        </div>

        {/* Left Side: Trophy Image */}
        <div className="w-full md:w-1/3 p-8 flex justify-center relative z-10">
           <div className="relative">
              {/* Fake trophy with CSS/lucide since no image asset */}
              <div className="w-48 h-48 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-full shadow-[0_0_50px_rgba(250,204,21,0.4)] flex items-center justify-center border-4 border-yellow-200 relative">
                 <Trophy size={80} className="text-yellow-100 drop-shadow-lg" />
                 <div className="absolute bottom-4 left-4 w-12 h-12 bg-pink-500 rounded-md transform rotate-12 flex items-center justify-center text-white border-2 border-pink-300 shadow-lg">🎁</div>
                 <div className="absolute bottom-2 right-4 w-10 h-10 bg-blue-500 rounded-md transform -rotate-6 flex items-center justify-center text-white border-2 border-blue-300 shadow-lg">🎁</div>
              </div>
           </div>
        </div>

        {/* Middle Content */}
        <div className="w-full md:w-1/2 p-8 text-center md:text-left z-10">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">QUIZ ARENA- PLAY, LEARN& EARN !</h2>
          <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto md:mx-0">
            Test your HR analytics knowledge with our <span className="font-bold text-yellow-400">gamified quizzes. Climb the leaderboard</span>, earn badges and unlock exciting rewards!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <Trophy size={20} className="text-yellow-400" />
              </div>
              <div className="text-left">
                <div className="text-white text-xs font-bold">Play Quiz</div>
                <div className="text-blue-200 text-[10px]">Challenge yourself</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Star size={20} className="text-green-400" />
              </div>
              <div className="text-left">
                <div className="text-white text-xs font-bold">Earn Points</div>
                <div className="text-blue-200 text-[10px]">Score high & earn points</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Shield size={20} className="text-purple-400" />
              </div>
              <div className="text-left">
                <div className="text-white text-xs font-bold">Unlock Rewards</div>
                <div className="text-blue-200 text-[10px]">Get discounts on HR Mirror 500 books!</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: CTA / Discount */}
        <div className="w-full md:w-1/4 relative z-10 flex flex-col items-center justify-center p-8 border-t md:border-t-0 md:border-l border-blue-800/50">
          <div className="w-32 h-32 bg-yellow-400 rounded-full flex flex-col items-center justify-center shadow-lg shadow-yellow-500/20 mb-4 transform md:-translate-y-6">
             <div className="text-yellow-900 text-sm font-bold uppercase">Up To</div>
             <div className="text-yellow-900 text-4xl font-extrabold leading-none">20%</div>
             <div className="text-yellow-900 text-[10px] font-bold uppercase mt-1">Discount</div>
             <div className="text-yellow-800 text-[8px] uppercase">ON BOOKS</div>
          </div>
          <button className="bg-secondary hover:bg-pink-700 w-full text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-pink-500/30 transition-transform hover:-translate-y-0.5 md:absolute md:bottom-8">
            PLAY QUIZ NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuizBanner;
