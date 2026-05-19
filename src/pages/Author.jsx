import React from "react";
import { motion } from "framer-motion";

import prarthana from "../assets/prathana.png";
import abhi from "../assets/abhi.png";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Author = () => {
  return (
    <div className="min-h-screen bg-[#f7f8fc] overflow-hidden">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="text-center"
        >
          <div className="pt-2 px-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </div>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="
              inline-flex
              rounded-full
              bg-pink-100
              px-5
              py-2
              text-sm
              font-semibold
              text-pink-600
            "
          >
            About The Authors
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="
              mt-6
              text-4xl
              font-black
              text-[#101828]
              md:text-6xl
            "
          >
            Meet The Minds Behind
            <br />
            HR Mirror 500
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-relaxed
              text-gray-600
            "
          >
            Experienced professionals combining HR, analytics, AI, workforce
            transformation, and strategic business insight.
          </motion.p>
        </motion.div>
      </section>

      {/* AUTHORS */}
      <section className="mx-auto max-w-7xl space-y-10 px-4 pb-20 md:px-8">
        {/* AUTHOR 1 */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -4 }}
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-gray-100
            bg-white
            shadow-sm
          "
        >
          <div className="grid items-center gap-10 p-6 md:p-10 lg:grid-cols-2">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <motion.img
                whileHover={{
                  scale: 1.03,
                  rotate: -1,
                }}
                transition={{ duration: 0.3 }}
                src={prarthana}
                alt="Prarthana Karmakar"
                className="
                  w-[280px]
                  rounded-[28px]
                  object-cover
                  shadow-2xl
                  md:w-[400px]
                "
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="
                  inline-flex
                  rounded-full
                  bg-pink-100
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-pink-600
                "
              >
                Author
              </motion.div>

              <h2 className="mt-5 text-4xl font-black text-[#101828]">
                Prarthana Karmakar
              </h2>

              <p className="mt-3 text-xl text-gray-600">
                Senior Analyst – Analytics & AI Programs
              </p>

              <div className="mt-8 space-y-5 leading-8 text-gray-600">
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

              <motion.a
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{ scale: 0.96 }}
                href="https://www.linkedin.com/in/prarthana123/"
                target="_blank"
                rel="noreferrer"
                className="
                  mt-8
                  inline-flex
                  rounded-2xl
                  bg-[#0077b5]
                  px-6
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:opacity-90
                "
              >
                View LinkedIn
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* AUTHOR 2 */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -4 }}
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-gray-100
            bg-white
            shadow-sm
          "
        >
          <div className="grid items-center gap-10 p-6 md:p-10 lg:grid-cols-2">
            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="
                  inline-flex
                  rounded-full
                  bg-blue-100
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-blue-600
                "
              >
                Author
              </motion.div>

              <h2 className="mt-5 text-4xl font-black text-[#101828]">
                Abhinandan Mookherjee (Abhi)
              </h2>

              <p className="mt-3 text-xl text-gray-600">
                Co-founder & Managing Director, Talent Synergy Solutions
              </p>

              <div className="mt-8 space-y-5 leading-8 text-gray-600">
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

              <motion.a
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{ scale: 0.96 }}
                href="https://www.linkedin.com/in/abhi2dot0/"
                target="_blank"
                rel="noreferrer"
                className="
                  mt-8
                  inline-flex
                  rounded-2xl
                  bg-[#0077b5]
                  px-6
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:opacity-90
                "
              >
                View LinkedIn
              </motion.a>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 flex justify-center lg:order-2"
            >
              <motion.img
                whileHover={{
                  scale: 1.03,
                  rotate: 1,
                }}
                transition={{ duration: 0.3 }}
                src={abhi}
                alt="Abhinandan Mookherjee"
                className="
                  w-[280px]
                  rounded-[28px]
                  object-cover
                  shadow-2xl
                  md:w-[400px]
                "
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Author;
