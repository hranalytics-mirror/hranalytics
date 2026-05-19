import React, { useState } from "react";
import { motion } from "framer-motion";

import assessment1 from "../assets/assesment1.png";
import assessment2 from "../assets/assesment2.png";

import attritionicon from "../assets/attritionicon.svg";
import engagementicon from "../assets/engagementicon.svg";
import headcounticon from "../assets/headcounticon.svg";
import performanceicon from "../assets/performanceicon.svg";
import payicon from "../assets/payicon.svg";

import { CheckCircle, FileText, Lock, Download } from "lucide-react";

const Assessment = () => {
  const [individual, setIndividual] = useState(false);
  const [enterprise, setEnterprise] = useState(false);

  function setForEnterprise() {
    setEnterprise(true);
    setIndividual(false);
  }

  function setForIndividual() {
    setEnterprise(false);
    setIndividual(true);
  }

  const analyticsItems = [
    {
      icon: attritionicon,
      title: "Attrition Analytics",
      link: "https://survey.zohopublic.in/zs/YCCjGV",
    },
    {
      icon: engagementicon,
      title: "Engagement Analytics",
      link: "https://survey.zohopublic.in/zs/aNCjRn",
    },
    {
      icon: headcounticon,
      title: "Headcount Analytics",
      link: "https://survey.zohopublic.in/zs/LrCjLO",
    },
    {
      icon: performanceicon,
      title: "Performance Analytics",
      link: "https://survey.zohopublic.in/zs/97CjuK",
    },
    {
      icon: payicon,
      title: "Pay Analytics",
      link: "https://survey.zohopublic.in/zs/jaCjgd",
    },
  ];

  return (
    <section id="assessments" className="w-full px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center gap-3 sm:gap-4"
        >
          <div className="h-px w-8 bg-gray-300 sm:w-12"></div>

          <h2 className="text-center text-lg font-bold uppercase tracking-wide text-gray-800 sm:text-2xl">
            TOOLS & ASSESSMENTS
          </h2>

          <div className="h-px w-8 bg-gray-300 sm:w-12"></div>
        </motion.div>

        {/* TOP CARDS */}
        <div className="grid gap-6 xl:grid-cols-2">
          {/* Individual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="
              flex
              flex-col
              items-center
              justify-between
              rounded-2xl
              
              border
              border-gray-300
              px-5
              py-5
              shadow-sm
              lg:flex-row
            "
          >
            <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
              <p className="mb-1 text-sm font-medium tracking-wide text-gray-500">
                For Individuals ( B2C )
              </p>

              <p className="mb-2 text-2xl font-bold tracking-wide text-accent">
                HR Analytics Self Check
              </p>

              <p className="mb-4 max-w-sm text-sm font-bold leading-relaxed tracking-wide text-gray-600">
                Assess your skills, identify your strengths and get personalized
                insights.
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-max
                  rounded-lg
                  bg-accent
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-white
                  shadow-md
                  shadow-green-200
                  transition-colors
                  hover:bg-green-700
                "
                onClick={setForIndividual}
              >
                <a href="#individual">TAKE SELF CHECK</a>
              </motion.button>
            </div>

            <motion.img
              whileHover={{ scale: 1.04 }}
              src={assessment1}
              alt=""
              className="
                mt-6
                h-[160px]
                w-full
                max-w-[240px]
                object-contain
                lg:mt-0
              "
            />
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="
              flex
              flex-col
              items-center
              justify-between
              rounded-2xl
              border
              border-gray-300
              px-5
              py-5
              shadow-sm
              lg:flex-row
            "
          >
            <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
              <p className="mb-1 text-sm font-medium tracking-wide text-gray-500">
                For Enterprises ( B2B )
              </p>

              <h3 className="mb-2 text-2xl font-bold tracking-wide text-secondary">
                HR Analytics Maturity Assessment
              </h3>

              <p className="mb-4 max-w-sm text-sm font-bold leading-relaxed tracking-wide text-gray-600">
                Evaluate your organization's HR analytics maturity and get a
                detailed report.
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-max
                  rounded-lg
                  bg-secondary
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-white
                  shadow-md
                  shadow-pink-200
                  transition-colors
                  hover:bg-pink-700
                "
                onClick={setForEnterprise}
              >
                <a href="#enterprises">START ASSESSMENT</a>
              </motion.button>
            </div>

            <motion.img
              whileHover={{ scale: 1.04 }}
              src={assessment2}
              alt=""
              className="
                mt-6
                h-[160px]
                w-full
                max-w-[240px]
                object-contain
                lg:mt-0
              "
            />
          </motion.div>
        </div>

        {/* INDIVIDUAL */}
        {individual && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              mx-auto
              mt-6
              rounded-2xl
              bg-green-100
              p-5
            "
            id="individual"
          >
            <h1 className="mb-6 text-center text-2xl font-bold tracking-wide text-green-600">
              For Individuals
            </h1>

            <div
              className="
                grid
                grid-cols-2
                gap-6
                sm:grid-cols-3
                lg:grid-cols-5
              "
            >
              {analyticsItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="mb-2 w-[55px] sm:w-[60px]"
                  />

                  <p className="text-sm font-medium tracking-wide text-gray-500">
                    {item.title}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* ENTERPRISE */}
        {enterprise && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              mx-auto
              mt-6
              rounded-2xl
              bg-pink-100
              p-5
            "
            id="enterprises"
          >
            <h1 className="mb-6 text-center text-2xl font-bold tracking-wide text-pink-600">
              For Enterprises
            </h1>

            <div
              className="
                grid
                grid-cols-2
                gap-6
                sm:grid-cols-3
                lg:grid-cols-5
              "
            >
              {analyticsItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="mb-2 w-[55px] sm:w-[60px]"
                  />

                  <p className="text-sm font-medium tracking-wide text-gray-500">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* BOTTOM FEATURES */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-10
            grid
            grid-cols-1
            gap-6
            border-t
            border-gray-100
            pt-8
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          <Feature
            icon={<CheckCircle size={32} strokeWidth={1.5} />}
            color="text-accent"
            title="Easy to Use"
            desc="Quick & simple process"
          />

          <Feature
            icon={<FileText size={32} strokeWidth={1.5} />}
            color="text-accent"
            title="Data-driven Insights"
          />

          <Feature
            icon={<Lock size={32} strokeWidth={1.5} />}
            color="text-secondary"
            title="Secure & Confidential"
            desc="Your data is safe with us"
          />

          <Feature
            icon={<Download size={32} strokeWidth={1.5} />}
            color="text-blue-500"
            title="Download Report"
            desc="Instant PDF report"
          />
        </motion.div>

        <div className="mx-auto mt-5 h-px w-full max-w-6xl bg-gray-300"></div>
      </div>
    </section>
  );
};

const Feature = ({ icon, color, title, desc }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex items-center justify-center gap-4"
    >
      <div className={color}>{icon}</div>

      <div>
        <h4 className="text-sm font-bold text-gray-800">{title}</h4>

        {desc && <p className="text-xs text-gray-500">{desc}</p>}
      </div>
    </motion.div>
  );
};

export default Assessment;
