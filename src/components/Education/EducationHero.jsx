import React from "react";
import { motion } from "framer-motion";

const EducationHero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden  md:px-6 lg:px-12 xl:px-20 md:py-6 lg:py-10">
      <div className="container bg-[#f5f5f5] py-8 mx-auto px-4  lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl text-[#9402bf] lg:text-5xl xl:text-6xl font-bold mb-8 "
          >
            Education & Trainings
          </motion.h1>

          {/* Main Content */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* First paragraph */}
            <p className="text-lg leading-8">
              ECRC is committed to develop human capital, build and strengthen
              the oncology community’s capabilities. ECRC offers different types
              of trainings, arranges educational events and numerous educational
              modules. These enable clinicians, students, scientists and others
              involved in designing, managing or implementing cancer related
              research activities, clinical trials to acquire and develop
              knowledge of clinical trial methodology, or to explore new
              developments in cancer treatment and molecular understanding.
            </p>

            {/* Second paragraph */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg  leading-8"
            >
              We also motivate and support of fellows and depute them to
              different parts of the world for their professional development in
              various aspects of cancer treatment and research.
            </motion.p>

            {/* Third paragraph */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-lg  leading-8"
            >
              Please write us for more information about our trainings, courses
              and conferences.
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mt-8"
          >
            <a href="https://www.eafo.info/" target="_blank">
              <button className="bg-[#9402bf]  text-white  px-8 py-2 text-lg cursor-pointer rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationHero;
