import React from "react";
import { motion } from "framer-motion";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Somasundaram Subramanian",
      position: "Chairman",
      image: "/core-team/member1.avif", // Replace with actual image
    },
    {
      id: 2,
      name: "Dr. Ulhas Jayant Vasave",
      position: "Director and CEO",
      image: "/core-team/member2.avif", // Replace with actual image
    },
    {
      id: 3,
      name: "Dr. Anton Barchuk",
      position: "Advisor Research",
      image: "/core-team/member3.avif", // Replace with actual image
    },
    {
      id: 4,
      name: "Dr. Dauren Adilbay",
      position: "Advisor Research And Clinical Development",
      image: "/core-team/member4.avif", // Replace with actual image
    },
    {
      id: 5,
      name: "Dr. Rajashekhar Mohan",
      position: "International Advisor Educational Programs",
      image: "/core-team/member5.avif", // Replace with actual image
    },
    {
      id: 6,
      name: "Dr. Ekansh Shekhar",
      position: "Director, International Relations & Educational",
      image: "/core-team/member6.avif", // Replace with actual image
    },
    {
      id: 7,
      name: "Dr. Tarun Singh",
      position: "Director, Public Health Projects Strategic Division",
      image: "/core-team/member7.avif", // Replace with actual image
    },
    {
      id: 8,
      name: "Dr. Eddy Giarso",
      position: "Country Representative Indonesia",
      image: "/core-team/member8.avif", // Replace with actual image
    },
    {
      id: 9,
      name: "Mr. Praveen Sankaran",
      position: "Director, Digital Affairs",
      image: "/core-team/member9.avif", // Replace with actual image
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
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
    <div className="bg-white min-h-screen py-16 ">
      <div className="container mx-auto px-4  lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl xl:text-6xl text-[#9402bf] font-medium mb-4"
          >
            Meet The Team
          </motion.h1>

          {/* Decorative underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-2 bg-[#9402bf] mx-auto"
          ></motion.div>
        </div>

        {/* Team Grid - 3 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto px-4 lg:px-0"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="group cursor-pointer"
            >
              <div className="bg-white relative  overflow-hidden transition-all duration-500 ">
                {/* Image Container with Purple Gradient Background */}
                <div className="relative h-full lg:h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500  relative z-10"
                  />
                </div>

                {/* Content - Positioned at bottom of image */}
                <div className=" p-2 bg-[#f5f5f5] ">
                  <div className="">
                    {/* Position */}
                    <p className="  font-medium">{member.position}</p>

                    {/* Name */}
                    <h3 className="text-lg font-[600] text-dark">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
