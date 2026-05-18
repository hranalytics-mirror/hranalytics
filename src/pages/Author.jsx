import React from "react";

import prarthana from "../assets/prathana.png";
import abhi from "../assets/abhi.png";

const Author = () => {
  return (
    <div className="bg-[#f7f8fc] min-h-screen">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="text-center">
          <div className="inline-flex bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-semibold">
            About The Authors
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#101828] mt-6">
            Meet The Minds Behind
            <br />
            HR Mirror 500
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            Experienced professionals combining HR, analytics, AI, workforce
            transformation, and strategic business insight.
          </p>
        </div>
      </section>

      {/* AUTHORS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20 space-y-10">
        {/* AUTHOR 1 */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-10 items-center p-6 md:p-10">
            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src={prarthana}
                alt="Prarthana Karmakar"
                className="
                  w-[280px]
                  md:w-[400px]
                  rounded-[28px]
                  object-cover
                  shadow-2xl
                "
              />
            </div>

            {/* CONTENT */}
            <div>
              <div className="inline-flex bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
                Author
              </div>

              <h2 className="text-4xl font-black text-[#101828] mt-5">
                Prarthana Karmakar
              </h2>

              <p className="text-xl text-gray-600 mt-3">
                Senior Analyst – Analytics & AI Programs
              </p>

              <div className="mt-8 space-y-5 text-gray-600 leading-8">
                <p>
                  Prarthana Karmakar is an analytics professional and emerging
                  AI-driven HR strategist who transforms workforce data into
                  meaningful business insights.
                </p>

                <p>
                  With a strong academic foundation in Actuarial Science and
                  Statistics, she combines analytical thinking with creativity
                  and human-centered problem solving.
                </p>

                <p>
                  Through The HR Mirror 500, she contributes to making HR
                  Analytics more practical, actionable, and business-focused.
                </p>
              </div>

              <a
                href="https://www.linkedin.com/in/prarthana123/"
                target="_blank"
                rel="noreferrer"
                className="
                  mt-8
                  inline-flex
                  bg-[#0077b5]
                  hover:opacity-90
                  text-white
                  px-6
                  py-4
                  rounded-2xl
                  font-semibold
                  transition
                "
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* AUTHOR 2 */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-10 items-center p-6 md:p-10">
            {/* CONTENT */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                Author
              </div>

              <h2 className="text-4xl font-black text-[#101828] mt-5">
                Abhinandan Mookherjee (Abhi)
              </h2>

              <p className="text-xl text-gray-600 mt-3">
                Co-founder & Managing Director, Talent Synergy Solutions
              </p>

              <div className="mt-8 space-y-5 text-gray-600 leading-8">
                <p>
                  Abhinandan Mookherjee is a future-of-work strategist, HR
                  technologist, and people analytics evangelist with over 18
                  years of global experience.
                </p>

                <p>
                  He has worked extensively in HR transformation, workforce
                  analytics, capability development, and technology-led people
                  practices.
                </p>

                <p>
                  Through The HR Mirror 500 series, Abhinandan transforms years
                  of practical experience into actionable frameworks for modern
                  organizations.
                </p>
              </div>

              <a
                href="https://www.linkedin.com/in/abhi2dot0/"
                target="_blank"
                rel="noreferrer"
                className="
                  mt-8
                  inline-flex
                  bg-[#0077b5]
                  hover:opacity-90
                  text-white
                  px-6
                  py-4
                  rounded-2xl
                  font-semibold
                  transition
                "
              >
                View LinkedIn
              </a>
            </div>

            {/* IMAGE */}
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src={abhi}
                alt="Abhinandan Mookherjee"
                className="
                  w-[280px]
                  md:w-[400px]
                  rounded-[28px]
                  object-cover
                  shadow-2xl
                "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Author;
