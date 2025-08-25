import React from "react";
import { motion } from "framer-motion";

const WhatWeDoDetails = () => {
  const services = [
    {
      id: 1,
      number: "01",
      title: "Research & Training",
      description:
        "Conducting research on Cancer related fields, Population Based, Epidemiological, Translational, Clinical Trials, Lab based activities & field action research",
      image: "/what-we-do/img1.avif", // Laboratory/research image
      imagePosition: "left",
    },
    {
      id: 2,
      number: "02",
      title: "Cancer Treatment with Medical & Medicine Support",
      description:
        "Providing support to Cancer patients with affordable services & treatment.",
      image: "/what-we-do/img2.avif", // Laboratory/research image
      imagePosition: "right",
    },
    {
      id: 3,
      number: "03",
      title: "Collaborative Efforts",
      description:
        'This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on "Edit Text" or double click on the text box to start.',
      image: "/what-we-do/img3.avif", // Laboratory/research image
      imagePosition: "left",
    },
  ];

  return (
    <section className="bg-white py-16 lg:mt-20 ">
      <div className="container mx-auto px-4  lg:px-8 max-w-[60rem]">
        {services.map((service, index) => (
          <div key={service.id}>
            {/* Service Item */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center ${
                service.imagePosition === "right"
                  ? "md:grid-flow-col-dense"
                  : ""
              }`}
            >
              {/* Image */}
              <div
                className={`${
                  service.imagePosition === "right" ? "md:col-start-2" : ""
                }`}
              >
                <div className="relative overflow-hidden ">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 "
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`${
                  service.imagePosition === "right" ? "md:col-start-1" : ""
                }`}
              >
                {/* Number */}
                <div className="mb-2">
                  <span className="text-xl lg:text-2xl font-bold text-[#9402bf]">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-medium  mb-6 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className=" leading-7 max-w-sm">{service.description}</p>
              </div>
            </motion.div>

            {/* Divider Line (except for last item) */}
            {index < services.length - 1 && (
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-px bg-gray-300 my-8 md:my-16"
              ></motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoDetails;
