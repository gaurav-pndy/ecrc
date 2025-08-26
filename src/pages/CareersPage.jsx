import React from "react";
import { motion } from "framer-motion";

const CareersPage = () => {
  return (
    <section className=" bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-6rem)]">
        {/* Left Side - Content */}
        <div className="flex  items-center justify-center lg:py-24 px-4  lg:px-8">
          <div className="max-w-lg w-full text-center">
            {/* Title */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl lg:text-4xl  font-bold text-[#9402bf] mb-12"
            >
              Jobs & Careers
            </motion.h1>

            {/* Content */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-center text-dark"
            >
              <p className="text-lg lg:text-xl  ">
                If you are interested in working with ECRC,
              </p>
              <p className="text-lg lg:text-xl leading-relaxed">
                please mail to{" "}
                <a
                  href="mailto:office@ecrc.pro"
                  className="text-[#9402bf] cursor-pointer underline transition-colors duration-200"
                >
                  office@ecrc.pro
                </a>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative overflow-hidden">
          <motion.img
            src="/careers.avif" // Replace with your actual image
            alt="Careers Background"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default CareersPage;
