import React from "react";
import { motion } from "framer-motion";

const WhatWeDoHero = () => {
  return (
    <section className="relative h-full lg:h-[28rem] ">
      {/* Background Image using img tag */}
      <motion.img
        src="/what-we-do-hero.jpg"
        alt="What We Do Background"
        className="lg:absolute inset-0 w-full h-48 lg:h-full object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Text Container - Positioned absolutely over the image */}
      <motion.div
        className="lg:absolute -bottom-10 left-1/2 lg:-translate-x-1/2 flex items-center justify-center mx-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        <motion.div
          className="bg-white  border-b p-4 lg:p-20 lg:px-32 lg:w-4xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: "easeOut",
          }}
        >
          {/* Title */}
          <motion.h1
            className="text-4xl lg:text-5xl xl:text-6xl text-[#9402bf] font-medium mb-4 md:mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.7,
              ease: "easeOut",
            }}
          >
            What We Do
          </motion.h1>

          {/* Description */}
          <motion.p
            className="leading-7 text-justify"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.9,
              ease: "easeOut",
            }}
          >
            This is your Project Page. It's a great opportunity to help visitors
            understand the context and background of your latest work. Double
            click on the text box to start editing your content and make sure to
            add all the relevant details you want to share.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatWeDoHero;
