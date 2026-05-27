import books from "@/utils/books";
import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Books = () => {
  const booksData = books;
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
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Books - HR Analytics Mirror</title>
        <meta
          name="description"
          content="Explore the complete collection of HR Mirror 500 Series books, covering essential HR topics with practical insights and guidance."
        />
        <meta
          name="keywords"
          content="HR Mirror 500 Series, HR books, HR Analytics Mirror, human resources books, HR analytics"
        />
      </Helmet>
      <div className="min-h-screen overflow-hidden bg-[#f7f8fc]">
        <section className="max-w-7xl mx-auto">
          <div className="bg-white border-gray-100  rounded-[32px] p-4 md:p-6 mt-4 md:mt-6">
            <div className=" px-6">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition mb-2"
              >
                <ArrowLeft size={18} />
                Back
              </button>
            </div>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="
                  flex
                  rounded-full
                  bg-pink-100
                  px-4
                  py-2
                  text-xl md:text-3xl lg:text-4xl
                  font-semibold
                  text-pink-600 text-center w-[300px] md:w-[400px] lg:w-[500px] items-center justify-center mx-auto  mb-6  
                "
            >
              HR Mirror 500 Series
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  overflow-hidden
           


            bg-white
            shadow-sm p-4 md:p-6  place-items-center"
            >
              {booksData.map((book) => (
                <div
                  key={book.id}
                  className="py-6 flex flex-col items-center justify-center"
                >
                  <Link to={`/book/${book.id}`}>
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
                  md:w-[360px] rounded-xl
                "
                    />
                  </Link>
                  <motion.h2
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                    className="text-center mt-4 font-bold text-lg "
                  >
                    {book.title}
                  </motion.h2>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Books;
