import React from "react";
import { motion } from "framer-motion";

import background from "../assets/back_without_book.webp";
import book1 from "../assets/book1.webp";
import book2 from "../assets/book2.webp";
import book3 from "../assets/book3.webp";
import book4 from "../assets/book4.webp";
import book5 from "../assets/book5.webp";
import {
  Users,
  FileText,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  Gift,
  ShoppingCart,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import RotatingCarousel from "./RotatingCarousel";

const images = [book1, book2, book3, book4, book5];

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* DESKTOP*/}
      <section
        className="
          hidden md:hidden lg:block
          bg-cover bg-center bg-no-repeat
          max-w-[1500px] w-full mx-auto
          relative overflow-hidden
          min-h-[820px] lg:min-h-[500px]
        "
      >
        {/* Desktop BG */}
        <div
          className="
            hidden lg:block
            absolute inset-0
            bg-cover bg-center bg-no-repeat
          "
          style={{
            backgroundImage: `url(${background})`,
          }}
        />

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-[10%] left-[6%] w-[52%]"
        >
          <div className="relative z-10 max-w-[620px]">
            {/* TOP TEXT */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="
                text-[26px]
                font-bold
                font-poppins
                uppercase
                leading-[1.05]
                text-purple-700
                tracking-wide
              "
            >
              BEYOND DASHBOARDS,
            </motion.h2>

            {/* MAIN HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-2 text-[56px] leading-[0.85] font-bold"
            >
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
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="
                mt-4
                max-w-[460px]
                text-[20px]
                leading-[1.5]
                font-bold
                text-[#1F1F1F]
              "
            >
              We go beyond numbers to uncover the{" "}
              <span className="bg-gradient-to-b from-[#FF4D7A] to-[#D91E63] bg-clip-text text-transparent">
                people
              </span>
              , <span className="text-[#5008d6]">patterns</span> and{" "}
              <span className="text-[#2BA84A]">stories</span> behind them.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex items-center gap-4 flex-wrap lg:w-[600px] xl:w-[700px]  "
            >
              {" "}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.96 }}
                className="
                  flex items-center gap-3
                  rounded-xl bg-[#2166F3]
                  px-4 py-3 text-[14px]
                  font-semibold text-white
                  shadow-[0_10px_30px_rgba(33,102,243,0.35)]
                "
                onClick={() => navigate("/comingsoon")}
              >
                EXPLORE INSIGHTS
                <ArrowRight size={18} />
              </motion.button>{" "}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.96 }}
                className="
                  flex items-center gap-3
                  rounded-xl bg-[#EB3C78]
                  px-4 py-3 text-[14px]
                  font-semibold text-white
                  shadow-[0_10px_30px_rgba(235,60,120,0.35)]
                "
                onClick={() => navigate("/comingsoon")}
              >
                PLAY QUIZ & WIN
                <Gift size={18} />
              </motion.button>{" "}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.96 }}
                className="
                  flex items-center gap-3
                  rounded-xl bg-[#2BA84A]/70
                  px-4 py-3 text-[14px]
                  font-semibold text-white
                  shadow-[0_10px_30px_rgba(43,168,74,0.35)]
                "
                onClick={() => navigate("/comingsoon")}
              >
                BUY THE SUBSCRIPTION
                <ShoppingCart size={18} />
              </motion.button>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="
                grid lg:grid-cols-4 md:grid-cols-2 grid-cols-4
                gap-5 mt-[5%]
                md:w-[400px] lg:w-[500px] xl:w-[600px]
              "
            >
              {/* CARD 1 */}
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className="
                  flex flex-col items-center text-center
                  bg-white/60 backdrop-blur-sm
                  rounded-xl p-4
                "
              >
                <div className="bg-pink-50 p-1 rounded-full">
                  <Users size={24} />
                </div>

                <h4 className="font-bold text-gray-900">500+</h4>

                <p className="text-xs text-gray-500">Real HR Scenarios</p>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className="
                  flex flex-col items-center text-center
                  bg-white/60 backdrop-blur-sm
                  rounded-xl p-4
                "
              >
                <div className="bg-blue-50 p-1 rounded-full">
                  <FileText size={24} />
                </div>

                <h4 className="font-bold text-gray-900">Real</h4>

                <p className="text-xs text-gray-500">Workplace Patterns</p>
              </motion.div>

              {/* CARD 3 */}
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className="
                  flex flex-col items-center text-center
                  bg-white/60 backdrop-blur-sm
                  rounded-xl p-4
                "
              >
                <div className="bg-yellow-50 p-1 rounded-full">
                  <Lightbulb size={24} />
                </div>

                <h4 className="font-bold text-gray-900">Practical</h4>

                <p className="text-xs text-gray-500">Insights</p>
              </motion.div>

              {/* CARD 4 */}
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className="
                  flex flex-col items-center text-center
                  bg-white/60 backdrop-blur-sm
                  rounded-xl p-4
                "
              >
                <div className="bg-gray-50 p-1 rounded-full">
                  <TrendingUp size={24} />
                </div>

                <h4 className="font-bold text-gray-900">Better</h4>

                <p className="text-xs text-gray-500">People Decisions</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute mdlg:w-[30%] lg:w-[55%] lgxl:w-[48%] xl:w-[45%]  h-[400px] top-[5%] xl:right-[2%]  lg:right-[1%] ">
          <RotatingCarousel
            images={images}
            //     className="
            //   bottom-[120px]
            //   right-[140px]
            // "
          />
        </div>
      </section>
      {/* Tablet*/}
      <section
        className="
    hidden md:block lg:hidden
    relative
    overflow-hidden
    max-w-[1500px]
    w-full
    mx-auto
    min-h-[820px]
    px-8
    py-12
    bg-[#f7f8fc]
  "
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Pink Glow */}
          <div
            className="
        absolute
        top-[-180px]
        left-[-100px]
        h-[380px]
        w-[380px]
        rounded-full
        bg-pink-400/25
        blur-3xl
      "
          />

          {/* Blue Glow */}
          <div
            className="
        absolute
        top-[180px]
        right-[-120px]
        h-[420px]
        w-[420px]
        rounded-full
        bg-blue-400/25
        blur-3xl
      "
          />

          {/* Green Glow */}
          <div
            className="
        absolute
        bottom-[-120px]
        left-[28%]
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
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-[5%] left-[6%] w-[88%] "
        >
          <div className="relative z-10 max-w-[720px]">
            {/* TOP TEXT */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="
          text-[30px]
          font-bold
          uppercase
          leading-[1.05]
          text-purple-700
          tracking-wide
        "
            >
              BEYOND DASHBOARDS,
            </motion.h2>

            {/* MAIN HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="
          mt-3
          text-[72px]
          leading-[0.85]
          font-bold
        "
            >
              <span className="text-black">Stories</span>{" "}
              <span className="bg-gradient-to-b from-[#FF4D7A] to-[#D91E63] bg-clip-text text-transparent">
                HR
              </span>
              <br />
              <span className="text-black">is</span>{" "}
              <span className="bg-gradient-to-b from-[#2FAE66] to-[#1F8A4D] bg-clip-text text-transparent">
                Missing.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="
          mt-6
          max-w-[650px]
          text-[24px]
          leading-[1.5]
          font-bold
          text-[#1F1F1F]
        "
            >
              We go beyond numbers to uncover the{" "}
              <span className="bg-gradient-to-b from-[#FF4D7A] to-[#D91E63] bg-clip-text text-transparent">
                people
              </span>
              , <span className="text-[#2166F3]">patterns</span> and{" "}
              <span className="text-[#2BA84A]">stories</span> behind them.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="
          mt-10
          grid
          grid-cols-2
          gap-4
          max-w-[620px]
        "
            >
              {" "}
              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{ scale: 0.96 }}
                className="
            flex items-center justify-center gap-3
            rounded-2xl
            bg-[#2166F3]
            px-5 py-4
            text-[15px]
            font-semibold
            text-white
            shadow-[0_10px_30px_rgba(33,102,243,0.35)]
          "
                onClick={() => navigate("/comingsoon")}
              >
                EXPLORE INSIGHTS
                <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{ scale: 0.96 }}
                className="
            flex items-center justify-center gap-3
            rounded-2xl
            bg-[#EB3C78]
            px-5 py-4
            text-[15px]
            font-semibold
            text-white
            shadow-[0_10px_30px_rgba(235,60,120,0.35)]
          "
                onClick={() => navigate("/comingsoon")}
              >
                PLAY QUIZ & WIN
                <Gift size={18} />
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{ scale: 0.96 }}
                className="
            col-span-2
            flex items-center justify-center gap-3
            rounded-2xl
            bg-[#2BA84A]
            px-5 py-4
            text-[15px]
            font-semibold
            text-white
            shadow-[0_10px_30px_rgba(43,168,74,0.35)]
          "
                onClick={() => navigate("/comingsoon")}
              >
                BUY THE SUBSCRIPTION
                <ShoppingCart size={18} />
              </motion.button>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="
          grid
          grid-cols-2
          gap-5
          mt-10
          max-w-[620px]
        "
            >
              {/* CARD 1 */}
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className="
            flex flex-col items-center text-center
            bg-white/70
            backdrop-blur-md
            border border-white/40
            rounded-2xl
            p-5
            shadow-lg
          "
              >
                <div className="bg-pink-50 p-2 rounded-full">
                  <Users size={26} />
                </div>

                <h4 className="mt-2 font-bold text-gray-900">500+</h4>

                <p className="text-sm text-gray-500">Real HR Scenarios</p>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className="
            flex flex-col items-center text-center
            bg-white/70
            backdrop-blur-md
            border border-white/40
            rounded-2xl
            p-5
            shadow-lg
          "
              >
                <div className="bg-blue-50 p-2 rounded-full">
                  <FileText size={26} />
                </div>

                <h4 className="mt-2 font-bold text-gray-900">Real</h4>

                <p className="text-sm text-gray-500">Workplace Patterns</p>
              </motion.div>

              {/* CARD 3 */}
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className="
            flex flex-col items-center text-center
            bg-white/70
            backdrop-blur-md
            border border-white/40
            rounded-2xl
            p-5
            shadow-lg
          "
              >
                <div className="bg-yellow-50 p-2 rounded-full">
                  <Lightbulb size={26} />
                </div>

                <h4 className="mt-2 font-bold text-gray-900">Practical</h4>

                <p className="text-sm text-gray-500">Insights</p>
              </motion.div>

              {/* CARD 4 */}
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className="
            flex flex-col items-center text-center
            bg-white/70
            backdrop-blur-md
            border border-white/40
            rounded-2xl
            p-5
            shadow-lg
          "
              >
                <div className="bg-gray-50 p-2 rounded-full">
                  <TrendingUp size={26} />
                </div>

                <h4 className="mt-2 font-bold text-gray-900">Better</h4>

                <p className="text-sm text-gray-500">People Decisions</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* MOBILE HERO */}
      <section
        className="
    md:hidden
    relative
    overflow-hidden
    px-5
    pt-8
    pb-10
    min-h-screen
    bg-[#f7f8fc]
  "
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Pink Glow */}
          <div
            className="
        absolute
        top-[-120px]
        left-[-80px]
        h-[260px]
        w-[260px]
        rounded-full
        bg-pink-400/30
        blur-3xl
      "
          />

          {/* Blue Glow */}
          <div
            className="
        absolute
        top-[180px]
        right-[-100px]
        h-[280px]
        w-[280px]
        rounded-full
        bg-blue-400/30
        blur-3xl
      "
          />

          {/* Green Glow */}
          <div
            className="
        absolute
        bottom-[-100px]
        left-[20%]
        h-[240px]
        w-[240px]
        rounded-full
        bg-green-400/20
        blur-3xl
      "
          />

          {/* Grid Pattern */}
          <div
            className="
        absolute inset-0
        opacity-[0.04]
        [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(to_right,#000_1px,transparent_1px)]
        [background-size:32px_32px]
      "
          />
        </div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* TOP TEXT */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
        text-[30px]
        font-bold
        text-center
        uppercase
        leading-tight
        text-purple-700
        tracking-wide
      "
          >
            BEYOND DASHBOARDS,
          </motion.h2>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="
        mt-3
        text-[52px]
        text-center
        leading-[0.9]
        font-bold
      "
          >
            <span className="text-black">Stories</span>{" "}
            <span className="bg-gradient-to-b from-[#FF4D7A] to-[#D91E63] bg-clip-text text-transparent">
              HR
            </span>
            <br />
            <span className="text-black">is</span>{" "}
            <span className="bg-gradient-to-b from-[#035225] to-[#07853e] bg-clip-text text-transparent">
              Missing.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="
        mt-5
        text-[20px]
        text-center
        leading-[1.6]
        font-bold
        text-[#1F1F1F]
        max-w-[95%]
        mx-auto
      "
          >
            We go beyond numbers to uncover the{" "}
            <span className="bg-gradient-to-b from-[#FF4D7A] to-[#D91E63] bg-clip-text text-transparent">
              people
            </span>
            , <span className="text-[#2166F3]">patterns</span> and{" "}
            <span className="text-[#2BA84A]">stories</span> behind them.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="
        mt-8
        flex
        flex-col
        gap-4
        items-center
      "
          >
            {/* BUTTON 1 */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              className="
          w-[70%]
          flex
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-[#2166F3]
          px-4
          py-4
          text-[15px]
          font-semibold
          text-white
          shadow-[0_10px_30px_rgba(33,102,243,0.35)]
        "
              onClick={() => navigate("/comingsoon")}
            >
              EXPLORE INSIGHTS
              <ArrowRight size={18} />
            </motion.button>
            {/* BUTTON 2 */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              className="
          w-[70%]
          flex
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-[#EB3C78]
          px-4
          py-4
          text-[15px]
          font-semibold
          text-white
          shadow-[0_10px_30px_rgba(235,60,120,0.35)]
        "
              onClick={() => navigate("/comingsoon")}
            >
              PLAY QUIZ & WIN
              <Gift size={18} />
            </motion.button>{" "}
            {/* BUTTON 3 */}{" "}
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              className="
          w-[70%]
          flex
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-[#2BA84A]
          px-4
          py-4
          text-[15px]
          font-semibold
          text-white
          shadow-[0_10px_30px_rgba(43,168,74,0.35)]
        "
              onClick={() => navigate("/comingsoon")}
            >
              BUY THE SUBSCRIPTION
              <ShoppingCart size={18} />
            </motion.button>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="
        grid
        grid-cols-2
        gap-4
        mt-8
        justify-items-center
      "
          >
            {/* CARD 1 */}
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              className="
          flex
          flex-col
          items-center
          text-center
          bg-white/70
          backdrop-blur-md
          border
          border-white/40
          rounded-2xl
          p-4
          w-[150px]
          shadow-lg
        "
            >
              <div className="bg-pink-50 p-2 rounded-full">
                <Users size={24} />
              </div>

              <h4 className="mt-2 font-bold text-gray-900">500+</h4>

              <p className="text-xs text-gray-500">Real HR Scenarios</p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              className="
          flex
          flex-col
          items-center
          text-center
          bg-white/70
          backdrop-blur-md
          border
          border-white/40
          rounded-2xl
          p-4
          w-[150px]
          shadow-lg
        "
            >
              <div className="bg-blue-50 p-2 rounded-full">
                <FileText size={24} />
              </div>

              <h4 className="mt-2 font-bold text-gray-900">Real</h4>

              <p className="text-xs text-gray-500">Workplace Patterns</p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              className="
          flex
          flex-col
          items-center
          text-center
          bg-white/70
          backdrop-blur-md
          border
          border-white/40
          rounded-2xl
          p-4
          w-[150px]
          shadow-lg
        "
            >
              <div className="bg-yellow-50 p-2 rounded-full">
                <Lightbulb size={24} />
              </div>

              <h4 className="mt-2 font-bold text-gray-900">Practical</h4>

              <p className="text-xs text-gray-500">Insights</p>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              className="
          flex
          flex-col
          items-center
          text-center
          bg-white/70
          backdrop-blur-md
          border
          border-white/40
          rounded-2xl
          p-4
          w-[150px]
          shadow-lg
        "
            >
              <div className="bg-gray-50 p-2 rounded-full">
                <TrendingUp size={24} />
              </div>

              <h4 className="mt-2 font-bold text-gray-900">Better</h4>

              <p className="text-xs text-gray-500">People Decisions</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
