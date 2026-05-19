import React from "react";
import { motion } from "framer-motion";

import { Clock3, Rocket, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CommingSoon = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f7f8fc]
        px-6
        py-10
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Pink */}
        <div
          className="
            absolute
            left-[-120px]
            top-[-120px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-pink-400/20
            blur-3xl
          "
        />

        {/* Blue */}
        <div
          className="
            absolute
            right-[-120px]
            top-[20%]
            h-[380px]
            w-[380px]
            rounded-full
            bg-blue-400/20
            blur-3xl
          "
        />

        {/* Green */}
        <div
          className="
            absolute
            bottom-[-120px]
            left-[30%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-green-400/20
            blur-3xl
          "
        />

        {/* Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.04]
            [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(to_right,#000_1px,transparent_1px)]
            [background-size:40px_40px]
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10
          mx-auto
          flex
          min-h-[90vh]
          max-w-6xl
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            mb-6
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/40
            bg-white/60
            px-5
            py-2
            backdrop-blur-md
          "
        >
          <Sparkles size={16} className="text-pink-500" />

          <span
            className="
              text-sm
              font-semibold
              tracking-wide
              text-gray-700
            "
          >
            Something Exciting is Coming
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="
            text-5xl
            font-black
            leading-[0.95]
            text-[#111827]
            md:text-7xl
          "
        >
          Coming
          <span
            className="
              bg-gradient-to-b
              from-[#FF4D7A]
              to-[#D91E63]
              bg-clip-text
              text-transparent
            "
          >
            {" "}
            Soon
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="
            mt-6
            max-w-2xl
            text-lg
            leading-relaxed
            text-gray-600
            md:text-xl
          "
        >
          We’re building something powerful and meaningful. Stay tuned for the
          next experience from{" "}
          <span className="font-bold text-[#111827]">HR Mirror 500</span>.
        </motion.p>

        {/* ICON CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="
            mt-12
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {/* CARD 1 */}
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              flex
              flex-col
              items-center
              rounded-3xl
              border
              border-white/40
              bg-white/70
              px-8
              py-8
              backdrop-blur-md
              shadow-xl
            "
          >
            <div className="rounded-full bg-pink-100 p-4">
              <Rocket size={30} className="text-pink-500" />
            </div>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              New Features
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Better tools, deeper insights, and smarter experiences are on the
              way.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              flex
              flex-col
              items-center
              rounded-3xl
              border
              border-white/40
              bg-white/70
              px-8
              py-8
              backdrop-blur-md
              shadow-xl
            "
          >
            <div className="rounded-full bg-blue-100 p-4">
              <Clock3 size={30} className="text-blue-500" />
            </div>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Launching Soon
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              We’re polishing every detail to deliver a smooth and premium
              experience.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              flex
              flex-col
              items-center
              rounded-3xl
              border
              border-white/40
              bg-white/70
              px-8
              py-8
              backdrop-blur-md
              shadow-xl
            "
          >
            <div className="rounded-full bg-green-100 p-4">
              <Sparkles size={30} className="text-green-500" />
            </div>

            <h3 className="mt-4 text-xl font-bold text-gray-900">Stay Tuned</h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Big updates and fresh content are arriving very soon.
            </p>
          </motion.div>
        </motion.div>

        {/* BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{ scale: 0.96 }}
          className="
            mt-12
            rounded-2xl
            bg-gradient-to-r
            from-[#2166F3]
            to-[#4F46E5]
            px-8
            py-4
            text-sm
            font-semibold
            tracking-wide
            text-white
            shadow-[0_12px_40px_rgba(79,70,229,0.35)]
          "
        >
          <Link to={"/"}>BACK TO HOME</Link>
        </motion.button>
      </div>
    </section>
  );
};

export default CommingSoon;
