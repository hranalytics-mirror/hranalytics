import React from "react";
import { Brain, BarChart3, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-5 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/30 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="
            relative

            bg-white/70
            backdrop-blur-xl

            border border-white/60
            shadow-xl

            rounded-[32px]

            p-6
            md:p-10
            lg:p-14

            overflow-hidden
          "
        >
          {/* FLOATING DECORATIVE CARDS */}
          <div className="absolute top-10 right-10 hidden lg:block">
            <div
              className="
                w-44
                rounded-3xl
                bg-white/80
                shadow-2xl
                border border-gray-100
                p-5
                rotate-[10deg]
              "
            >
              <div className="text-xs text-gray-400 mb-3">
                Workforce Analytics
              </div>

              <div className="space-y-3">
                <div className="h-3 bg-blue-100 rounded-full w-full" />

                <div className="h-3 bg-pink-100 rounded-full w-4/5" />

                <div className="h-3 bg-green-100 rounded-full w-2/3" />
              </div>

              <div className="mt-5 h-24 rounded-2xl bg-gradient-to-br from-pink-100 to-blue-100" />
            </div>
          </div>

          <div className="absolute bottom-12 right-24 hidden lg:block">
            <div
              className="
                w-52
                rounded-3xl
                bg-white/80
                shadow-2xl
                border border-gray-100
                p-5
                rotate-[-8deg]
              "
            >
              <div className="text-xs text-gray-400 mb-4">
                Predictive Insights
              </div>

              <div className="flex items-end gap-2 h-24">
                <div className="w-5 h-10 bg-blue-200 rounded-md" />

                <div className="w-5 h-14 bg-pink-200 rounded-md" />

                <div className="w-5 h-20 bg-green-200 rounded-md" />

                <div className="w-5 h-16 bg-yellow-200 rounded-md" />
              </div>

              <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                Bridging HR data with strategic decision-making frameworks.
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="max-w-4xl">
            {/* SMALL LABEL */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-primary rounded-full" />

              <span className="uppercase tracking-[0.2em] text-primary text-sm font-bold">
                About The Series
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                text-2xl
                md:text-3xl
                xl:text-4xl

                font-black
                leading-tight

                text-darkBlue
              "
            >
              HR Analytics
              <span className="text-primary"> Mirror </span>
              500
            </h2>

            {/* TEXT */}
            <p
              className="
                mt-6
                text-gray-600
                leading-relaxed
                text-base
                md:text-lg
              "
            >
              In today’s rapidly evolving world of work, HR is undergoing
              profound paradigm shifts. Digital tools, dashboards, and AI
              platforms are everywhere, yet many organizations still grapple
              with a fundamental question:
              <span className="font-semibold text-primary">
                {" "}
                “What do we truly know about our people?”
              </span>
            </p>

            <p
              className="
                mt-5
                text-gray-600
                leading-relaxed
                text-base
                md:text-lg
              "
            >
              The HR Analytics Mirror 500 series offers a practitioner-first
              roadmap to building maturity in people analytics. Structured as a
              multi-volume handbook, it transforms complex workforce data into
              clear metrics, actionable models, and decision-making frameworks.
            </p>

            <p
              className="
                mt-5
                text-gray-600
                leading-relaxed
                text-base
                md:text-lg
              "
            >
              Whether you’re an HR practitioner, business leader, manager, or
              aspiring analyst, the series helps you move beyond descriptive
              reporting toward deeper diagnostic, predictive, and prescriptive
              insights.
            </p>

            {/* PILLS */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="px-4 py-2 rounded-full bg-yellow-50 text-yellow-500 text-sm font-semibold">
                Headcount
              </div>

              <div className="px-4 py-2 rounded-full bg-blue-50 text-blue-500 text-sm font-semibold">
                Engagement
              </div>

              <div className="px-4 py-2 rounded-full bg-red-50 text-red-800 text-sm font-semibold">
                Performance
              </div>

              <div className="px-4 py-2 rounded-full bg-pink-50 text-pink-500 text-sm font-semibold">
                Attrition
              </div>

              <div className="px-4 py-2 rounded-full bg-green-50 text-green-600 text-sm font-semibold">
                Pay
              </div>
            </div>

            {/* FEATURE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <div
                className="
                  bg-white/80
                  rounded-2xl
                  p-5
                  shadow-md
                  border border-gray-100
                "
              >
                <Brain className="text-primary mb-3" />

                <h4 className="font-bold text-darkBlue text-sm">
                  Practical Thinking
                </h4>

                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Understand analytics through real-world HR context and
                  practical decision-making.
                </p>
              </div>

              <div
                className="
                  bg-white/80
                  rounded-2xl
                  p-5
                  shadow-md
                  border border-gray-100
                "
              >
                <BarChart3 className="text-secondary mb-3" />

                <h4 className="font-bold text-darkBlue text-sm">
                  Clear Metrics
                </h4>

                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Simplified frameworks for sharper workforce insights and
                  business alignment.
                </p>
              </div>

              <div
                className="
                  bg-white/80
                  rounded-2xl
                  p-5
                  shadow-md
                  border border-gray-100
                "
              >
                <Users className="text-green-600 mb-3" />

                <h4 className="font-bold text-darkBlue text-sm">
                  People Stories
                </h4>

                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Connect dashboards with meaningful human experiences and
                  workforce narratives.
                </p>
              </div>

              <div
                className="
                  bg-white/80
                  rounded-2xl
                  p-5
                  shadow-md
                  border border-gray-100
                "
              >
                <TrendingUp className="text-yellow-500 mb-3" />

                <h4 className="font-bold text-darkBlue text-sm">
                  Strategic Growth
                </h4>

                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Move beyond reporting toward predictive and prescriptive
                  people intelligence.
                </p>
              </div>
            </div>
          </div>

          {/* BIG BACKGROUND GLOW */}
          <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default About;
