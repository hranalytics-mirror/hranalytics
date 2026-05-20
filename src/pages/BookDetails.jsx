import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

import books from "../utils/books.js";

import amazonIcon from "../assets/amazon.svg";
import kindeIcon from "../assets/kindle.svg";
import ziffyIcon from "../assets/ziffy.svg";

import { ShoppingCart } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
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

const BookDetailsPage = () => {
  const { id } = useParams();

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="flex min-h-screen items-center justify-center text-3xl font-black">
        Book Not Found
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{book.title} - HR Analytics Mirror</title>

        <meta name="description" content={book.description} />
      </Helmet>
      <div className="min-h-screen overflow-hidden bg-[#f7f8fc]">
        {/* HERO */}
        <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
            overflow-hidden
            rounded-[32px]
            border
            border-gray-100
            bg-white
            shadow-sm
          "
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
            <div className="grid items-center gap-10 p-6 md:p-10 lg:grid-cols-2">
              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="flex justify-center"
              >
                <motion.img
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.04,
                    rotate: -2,
                  }}
                  src={book.cover}
                  alt={book.title}
                  className="
                  w-[260px]
                  object-contain
                  drop-shadow-2xl
                  md:w-[360px]
                "
                />
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                    },
                  },
                }}
              >
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
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
                  HR Mirror 500 Series
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  transition={{ duration: 0.6 }}
                  className="
                  mt-5
                  text-3xl
                  font-black
                  leading-tight
                  text-[#101828]
                  md:text-5xl
                "
                >
                  {book.title}
                </motion.h1>

                {/* BUY LINKS */}
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.7 }}
                  className="mt-10"
                >
                  <button className="mb-5 text-xl font-bold text-white bg-gradient-to-br from-primary via-blue-600 to-blue-700 w-[200px] rounded-lg h-[40px]">
                    Buy This Book
                  </button>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {/* AMAZON */}
                    <motion.a
                      whileHover={{
                        scale: 1.03,
                        y: -4,
                      }}
                      whileTap={{ scale: 0.96 }}
                      href={book.amazonLink}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border-2
                      border-gray-100
                      p-5
                      transition
                    "
                    >
                      <img
                        src={amazonIcon}
                        alt="Amazon"
                        className="h-7 object-contain"
                      />

                      <ShoppingCart size={18} className="text-yellow-400" />
                    </motion.a>

                    {/* KINDLE */}
                    <motion.a
                      whileHover={{
                        scale: 1.03,
                        y: -4,
                      }}
                      whileTap={{ scale: 0.96 }}
                      href={book.kindleLink}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-gray-200
                      bg-white
                      p-5
                      transition
                    "
                    >
                      <img
                        src={kindeIcon}
                        alt="Kindle"
                        className="h-7 object-contain"
                      />

                      <ShoppingCart size={18} className="text-yellow-400" />
                    </motion.a>

                    {/* ZIFFY */}
                    <motion.a
                      whileHover={{
                        scale: 1.03,
                        y: -4,
                      }}
                      whileTap={{ scale: 0.96 }}
                      href={book.ziffyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border-2
                      border-gray-100
                      p-5
                      transition
                    "
                    >
                      <img
                        src={ziffyIcon}
                        alt="Ziffy"
                        className="h-7 object-contain"
                      />

                      <ShoppingCart size={18} className="text-yellow-400" />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* DETAILS */}
        <section className="mx-auto max-w-5xl px-4 pb-20 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
            rounded-[32px]
            border
            border-gray-100
            bg-white
            p-6
            shadow-sm
            md:p-10
          "
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8 flex items-center gap-4"
            >
              <div className="h-[2px] flex-1 bg-gray-100" />

              <h2 className="text-3xl font-black text-[#101828]">
                Book Details
              </h2>

              <div className="h-[2px] flex-1 bg-gray-100" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="
              prose
              prose-lg
              max-w-none

              prose-headings:font-black
              prose-headings:text-[#101828]

              prose-p:leading-8
              prose-p:text-gray-600

              prose-li:leading-8
              prose-li:text-gray-600

              prose-strong:text-[#101828]
            "
              dangerouslySetInnerHTML={{
                __html: book.description,
              }}
            />
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default BookDetailsPage;
