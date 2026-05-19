import React from "react";
import { Trophy, Star, Shield } from "lucide-react";
import { motion } from "framer-motion";

import trophy from "../assets/trophy.png";
import discount from "../assets/discount.png";
import { Link } from "react-router-dom";

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.45,
    },
  }),
};

const Quiz = () => {
  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        id="quiz"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-2xl
          bg-[#16005B]
          px-4
          py-6
          text-white
          shadow-xl
          sm:px-6
          lg:px-8 scroll-mt-24
        "
      >
        <div
          className="
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* LEFT SECTION */}
          <div
            className="
              flex
              flex-col
              items-center
              gap-6
              lg:flex-row
              lg:items-center
            "
          >
            {/* Trophy */}
            <motion.img
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -8,
                rotate: -3,
              }}
              src={trophy}
              alt="Trophy"
              className="
                w-[140px]
                object-contain
                sm:w-[170px]
                lg:w-[180px]
              "
            />

            {/* Text + Feature Cards */}
            <div className="flex flex-col xl:flex-row  gap-6">
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left"
              >
                <h2
                  className="
                    text-[22px]
                    font-bold
                    leading-tight
                    sm:text-[28px]
                    lg:text-[18px]
                  "
                >
                  QUIZ ARENA
                  <span
                    className="
                      ml-2
                      text-[16px]
                      font-semibold
                      text-gray-200
                      sm:text-[20px]
                      lg:text-[18px]
                    "
                  >
                    — PLAY, LEARN & EARN!
                  </span>
                </h2>

                {/* Description */}
                <p
                  className="
                    mt-4
                    max-w-xl
                    text-sm
                    leading-6
                    text-blue-100
                    sm:text-[15px]
                    lg:max-w-md
                  "
                >
                  Test your HR analytics knowledge with our{" "}
                  <span className="font-bold text-yellow-400">
                    gamified quizzes. Climb the leaderboard
                  </span>
                  , earn badges and unlock exciting rewards!
                </p>
              </motion.div>

              {/* Feature Boxes */}
              <div
                className="
                  flex
                  flex-col
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-[#321c7c]
                  p-4
                  sm:flex-row
                  sm:flex-wrap
                  lg:flex-nowrap
                "
              >
                {/* Box 1 */}
                <motion.div
                  custom={0}
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3"
                >
                  <div className="rounded-lg bg-yellow-500/20 p-2">
                    <Trophy size={20} className="text-yellow-400" />
                  </div>

                  <div className="text-left">
                    <div className="text-xs font-bold text-white">
                      Play Quiz
                    </div>

                    <div className="text-[10px] text-blue-200">
                      Challenge yourself
                    </div>
                  </div>
                </motion.div>

                {/* Box 2 */}
                <motion.div
                  custom={1}
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3"
                >
                  <div className="rounded-lg bg-green-500/20 p-2">
                    <Star size={20} className="text-green-400" />
                  </div>

                  <div className="text-left">
                    <div className="text-xs font-bold text-white">
                      Earn Points
                    </div>

                    <div className="text-[10px] text-blue-200">
                      Score high & earn points
                    </div>
                  </div>
                </motion.div>

                {/* Box 3 */}
                <motion.div
                  custom={2}
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3"
                >
                  <div className="rounded-lg bg-purple-500/20 p-2">
                    <Shield size={20} className="text-purple-400" />
                  </div>

                  <div className="text-left">
                    <div className="text-xs font-bold text-white">
                      Unlock Rewards
                    </div>

                    <div className="text-[10px] text-blue-200">
                      Get discounts on HR Mirror 500 books!
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              flex
              flex-col
              items-center
              justify-center
            "
          >
            {/* Discount Image */}
            <motion.img
              whileHover={{
                scale: 1.06,
                rotate: 2,
              }}
              transition={{ duration: 0.3 }}
              src={discount}
              alt="Discount"
              className="
                w-[110px]
                object-contain
                sm:w-[130px]
                lg:w-[140px]
              "
            />

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="
                mt-2
                flex
                items-center
                gap-2
                rounded-xl
                bg-[#FF2D78]
                px-5
                py-2
                text-[13px]
                font-semibold
                text-white
                transition
                sm:text-[15px]
              "
            >
              <span className="text-[18px]">🎮</span>
              <Link to={"/commingsoon"}>PLAY QUIZ NOW</Link>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Quiz;
