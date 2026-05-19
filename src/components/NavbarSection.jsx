import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Menu, X } from "lucide-react";

import brandlogo from "../assets/brandLogo.png";

const navItem = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.35,
    },
  }),
};

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to={"/"}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2"
            >
              <motion.div
                whileHover={{ rotate: 5 }}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                "
              >
                <img src={brandlogo} alt="brandlogo" className="rounded-full" />
              </motion.div>

              <div className="flex flex-col">
                <span
                  className="
                    text-base
                    font-bold
                    leading-tight
                    text-blue-950
                    sm:text-lg
                  "
                >
                  HR MIRROR 500
                </span>

                <span
                  className="
                    text-[10px]
                    font-medium
                    text-gray-500
                    sm:text-xs
                  "
                >
                  Stories HR is Missing
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden space-x-6 lg:flex lg:items-center">
            {[
              { label: "Home", link: "/", isRoute: true },
              { label: "Books", link: "#books" },
              {
                label: "Tools & Assessments",
                link: "#assessments",
              },
              { label: "Quiz Arena", link: "#quiz", new: true },
              { label: "Reviews", link: "#reviews" },
              {
                label: "About Authors",
                link: "/author",
                isRoute: true,
              },
              {
                label: "Contact Us",
                link: "https://talent-synergy.com/contact-us",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={navItem}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -2 }}
                className="relative"
              >
                {item.isRoute ? (
                  <Link
                    to={item.link}
                    className={`
                      text-sm font-medium transition
                      ${
                        item.label === "Home"
                          ? "text-secondary hover:text-pink-700"
                          : "text-gray-600 hover:text-primary"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.link}
                    className="
                      text-sm
                      font-medium
                      text-gray-600
                      transition
                      hover:text-primary
                    "
                  >
                    {item.label}
                  </a>
                )}

                {item.new && (
                  <motion.span
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                    }}
                    className="
                      absolute
                      -right-6
                      -top-3
                      rounded-full
                      bg-accent
                      px-1.5
                      py-0.5
                      text-[10px]
                      font-bold
                      text-white
                    "
                  >
                    NEW
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.96 }}
              className="
                rounded-md
                bg-secondary
                px-2
                py-2
                text-sm
                font-medium
                text-white
                shadow-md
                shadow-pink-200
                transition-all
                hover:bg-pink-700
              "
            >
              Grab Your Book RN
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 lg:hidden"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden lg:hidden"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.06,
                    },
                  },
                }}
                className="
                  flex
                  flex-col
                  gap-5
                  border-t
                  border-gray-100
                  pt-4
                  pb-6
                "
              >
                {[
                  { label: "Home", link: "/", isRoute: true },
                  { label: "Books", link: "#books" },
                  {
                    label: "Tools & Assessments",
                    link: "#assessments",
                  },
                  { label: "Quiz Arena", link: "#quiz", new: true },
                  { label: "Reviews", link: "#reviews" },
                  {
                    label: "About Authors",
                    link: "/author",
                    isRoute: true,
                  },
                  {
                    label: "Contact",
                    link: "https://talent-synergy.com/contact-us",
                  },
                ].map((item, index) => (
                  <motion.div key={index} variants={navItem} custom={index}>
                    {item.new ? (
                      <div className="flex items-center gap-2">
                        <a
                          href={item.link}
                          onClick={() => setIsOpen(false)}
                          className="
                            text-sm
                            font-medium
                            text-gray-600
                          "
                        >
                          {item.label}
                        </a>

                        <motion.span
                          animate={{
                            scale: [1, 1.08, 1],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                          }}
                          className="
                            rounded-full
                            bg-accent
                            px-1.5
                            py-0.5
                            text-[10px]
                            font-bold
                            text-white
                          "
                        >
                          NEW
                        </motion.span>
                      </div>
                    ) : item.isRoute ? (
                      <Link
                        to={item.link}
                        onClick={() => setIsOpen(false)}
                        className={`
                          text-sm font-medium
                          ${
                            item.label === "Home"
                              ? "text-secondary"
                              : "text-gray-600"
                          }
                        `}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.link}
                        onClick={() => setIsOpen(false)}
                        className="
                          text-sm
                          font-medium
                          text-gray-600
                        "
                      >
                        {item.label}
                      </a>
                    )}
                  </motion.div>
                ))}

                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    w-full
                    rounded-md
                    bg-secondary
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-white
                    shadow-md
                    shadow-pink-200
                    transition-all
                    hover:bg-pink-700
                  "
                >
                  Grab Your Book RN
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavbarSection;
