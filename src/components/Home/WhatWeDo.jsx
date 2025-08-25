import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const WhatWeDo = () => {
  const services = [
    {
      id: 1,
      number: "1",
      title: "Research",
      description:
        "Conducting research on Cancer related fields, Population Based, Epidemiological, Translational, Clinical Trials, Lab based activities & field action research",
    },
    {
      id: 2,
      number: "2",
      title: "Cancer Treatment with Medical & Medicine Support",
      description:
        "Providing support to Cancer patients with affordable services & treatment.",
    },
    {
      id: 3,
      number: "3",
      title: "Collaborative Efforts",
      description:
        "Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden py-16">
      {/* Title Section */}
      <div className="bg-white  ">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl xl:text-6xl font-medium mb-12  text-gray-800 tracking-wide"
          >
            WHAT WE DO
          </motion.h2>
        </div>
      </div>

      {/* Parallax Background Section */}
      <Parallax
        bgImage="/what-we-do-bg.avif" // Replace with your actual background image
        bgImageAlt="Medical Background"
        strength={400}
        className="relative"
        bgImageStyle={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        <div className="py-20 ">
          {/* Content Container */}
          <div className="relative z-10 container mx-auto px-4  lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-2 max-w-5xl mx-auto"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  className="relative"
                >
                  {/* Service Card */}
                  <div className="bg-white  shadow-xl p-8 lg:p-10 h-full relative ">
                    {/* Number Circle */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-20 h-20 bg-[#f2f2f2] rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-[#9402bf] font-bold text-4xl">
                          {service.number}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="pt-8 text-center">
                      <h3 className="md:text-xl font-medium  mb-6 leading-tight  flex items-center justify-center">
                        {service.title}
                      </h3>

                      <p className="text-dark leading-relaxed text-base ">
                        {service.description}
                      </p>
                    </div>

                    {/* Subtle background decoration */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-100/50 to-transparent rounded-tl-full"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default WhatWeDo;
