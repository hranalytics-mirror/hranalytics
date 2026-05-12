import React from "react";
import { Users, FileText, Lightbulb, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-white pt-16 pb-20 overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-br-full opacity-20 -z-10 blur-3xl mix-blend-multiply"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-300 rounded-l-full opacity-20 -z-10 blur-3xl mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-10 z-10">
            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">
              BEYOND DASHBOARDS ,
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2 leading-tight">
              Stories HR <br />
              <span className="text-gray-200 block mt-2 opacity-50">
                is Missing
              </span>
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-lg mt-6">
              We go beyond numbers to uncover the{" "}
              <span className="text-primary font-medium">patterns</span>
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-primary hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-blue-200 transition-transform hover:-translate-y-0.5">
                EXPLORE INSIGHTS →
              </button>
              <button className="bg-secondary hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-pink-200 transition-transform hover:-translate-y-0.5">
                PLAY QUIZ& WIN
              </button>
              <button className="bg-accent hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-green-200 transition-transform hover:-translate-y-0.5">
                BUY THE BOOK
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-pink-50 p-3 rounded-full text-secondary mb-2">
                  <Users size={24} />
                </div>
                <h4 className="font-bold text-gray-900">500+</h4>
                <p className="text-xs text-gray-500">Real HR Scenarios</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full text-primary mb-2">
                  <FileText size={24} />
                </div>
                <h4 className="font-bold text-gray-900">Real</h4>
                <p className="text-xs text-gray-500">Workplace Patterns</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-50 p-3 rounded-full text-yellow-500 mb-2">
                  <Lightbulb size={24} />
                </div>
                <h4 className="font-bold text-gray-900">Practical</h4>
                <p className="text-xs text-gray-500">Insights</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-gray-50 p-3 rounded-full text-gray-500 mb-2">
                  <TrendingUp size={24} />
                </div>
                <h4 className="font-bold text-gray-900">Better</h4>
                <p className="text-xs text-gray-500">People Decisions</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 mt-16 lg:mt-0 relative z-10">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* This is a placeholder for the book & dashboard illustrations */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-purple-50 rounded-[3rem] shadow-xl border border-white flex items-center justify-center overflow-hidden">
                <div className="flex gap-4 items-center">
                  <div className="w-48 h-72 bg-blue-900 rounded-r-xl shadow-2xl transform -rotate-6 flex flex-col justify-between p-4 border-l-4 border-blue-400">
                    <div>
                      <p className="text-blue-200 text-xs text-center font-bold">
                        HR ANALYTICS
                      </p>
                      <h3 className="text-white text-3xl font-bold text-center mt-2 leading-none">
                        MIRROR
                        <br />
                        500
                      </h3>
                      <div className="bg-white/20 text-white text-xs w-max mx-auto px-2 py-0.5 rounded mt-2">
                        VOLUME 2
                      </div>
                    </div>
                    <div className="w-16 h-16 rounded-full border-2 border-white/30 mx-auto mt-4"></div>
                  </div>
                  <div className="w-40 h-64 bg-yellow-500 rounded-r-xl shadow-xl transform rotate-3 flex flex-col justify-between p-4 border-l-4 border-yellow-300">
                    <div>
                      <p className="text-yellow-900 text-[10px] text-center font-bold">
                        HR ANALYTICS
                      </p>
                      <h3 className="text-yellow-950 text-2xl font-bold text-center mt-1 leading-none">
                        MIRROR
                        <br />
                        500
                      </h3>
                      <div className="bg-yellow-950/20 text-yellow-950 text-[10px] w-max mx-auto px-2 py-0.5 rounded mt-1">
                        VOLUME 1
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-yellow-900/30 mx-auto mt-4"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Authors Box */}
            <div className="absolute -bottom-6 right-10 bg-gray-50/90 backdrop-blur border border-gray-200 px-8 py-4 rounded-xl shadow-lg flex gap-8">
              <div className="text-sm font-medium text-gray-700">
                Parthana Karmakar
              </div>
              <div className="text-sm font-medium text-gray-700">
                Abhinandan Mookherjee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
