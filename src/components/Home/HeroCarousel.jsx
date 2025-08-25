import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdArrowBack, MdArrowBackIos } from "react-icons/md";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      mainTitle: "44th EAFO",
      subtitle: "OncoPathology Course",
      largeTitle: "HematoLymphoid <br/> Tumors",
      description: "In collaboration with authors of the",
      whoText: "WHO Classification of HematoLymphoid Tumors",
      date: "25—29 July 2024",
      location: "Vladivostok, Russian Federation",
      buttonText: "Visit Event Site",
      backgroundImage: "/hero1.avif", // Medical microscopy image
      logos: [
        { name: "EAFO", src: "/eafo.avif" },
        { name: "FEFU", src: "/fefu.avif" },
        { name: "Medical Center", src: "/logo3.avif" },
      ],
    },
    {
      id: 2,
      organizationTitle: "Eurasian Cancer",
      organizationSubtitle: "Research Council",
      tagline: "Collaborating to combat Cancer",
      backgroundImage: "/hero2.avif", // Conference meeting image
      isConferenceSlide: true,
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length, isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-[34rem] lg:min-h-[48rem] xl:h-full xl:min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image with Gradient Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: ` url(${currentSlideData.backgroundImage})`,
            }}
          />

          {/* Content Overlay */}
          <div className="absolute inset-0">
            <div className="container mx-auto  h-full">
              {/* First Slide - Medical Conference */}
              {!currentSlideData.isConferenceSlide ? (
                <div className="flex flex-col md:flex-row h-full">
                  {/* Left Side - Microscopy Image Circle */}
                  <div className="md:w-[38%] flex items-center justify-center ">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="relative"
                    ></motion.div>
                  </div>

                  {/* Right Side - Text Content */}
                  <div className="md:w-[62%] px-4 flex flex-col justify-center py-4 lg:py-12 lg:pl-8 max-w-xl">
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="text-[#00075e]"
                    >
                      {/* Small Title */}
                      <motion.h3
                        className="text-2xl lg:text-5xl  lg:mb-2 pl-20 md:pl-0"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      >
                        {currentSlideData.mainTitle}
                      </motion.h3>

                      <motion.h4
                        className="text-2xl lg:text-5xl  lg:mb-2 pl-20 md:pl-0"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        {currentSlideData.subtitle}
                      </motion.h4>

                      {/* Large Title */}
                      <motion.h1
                        className="text-3xl lg:text-6xl xl:text-7xl font-bold  lg:leading-18 pl-20 md:pl-0"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        dangerouslySetInnerHTML={{
                          __html: currentSlideData.largeTitle,
                        }}
                      ></motion.h1>

                      {/* Description with WHO text */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="mb-4 bg-[#504b87] p-2 text-center rounded-4xl italic ml-20 md:ml-0"
                      >
                        <p className=" lg:text-[1.4rem] mb-2 text-white">
                          {currentSlideData.description}
                        </p>

                        <p className=" lg:text-[1.4rem] italic font-semibold text-white">
                          {currentSlideData.whoText}
                        </p>
                      </motion.div>

                      {/* Date and Location */}
                      <motion.div
                        className="mb-1 pl-20 md:pl-0"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.0, duration: 0.8 }}
                      >
                        <p className=" lg:text-2xl  lg:mb-2 ">
                          {currentSlideData.date}
                        </p>
                        <p className=" lg:text-2xl font-bold ">
                          {currentSlideData.location}
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="lg:hidden pl-20 md:pl-0 my-6"
                      >
                        <button className="bg-[#c2264b] hover:bg-white hover:text-[#c2264b] border border-[#c2264b] text-white  px-8 py-1.5 rounded-full text-lg transition-all duration-300 transform cursor-pointer shadow-xl ">
                          {currentSlideData.buttonText}
                        </button>
                      </motion.div>

                      {/* Logos */}
                      <motion.div
                        className="mb-8"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                      >
                        <div className="bg-white rounded-4xl border border-gray-400 p-4 inline-block">
                          <div className="flex items-center gap-6">
                            {currentSlideData.logos.map((logo, index) => (
                              <div key={index} className="text-center">
                                <img
                                  src={logo.src}
                                  className="h-12 lg:h-16"
                                  alt=""
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      {/* CTA Button */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="hidden lg:block"
                      >
                        <button className="bg-[#c2264b] hover:bg-white hover:text-[#c2264b] border border-[#c2264b] text-white  px-8 py-1.5 rounded-full text-lg transition-all duration-300 transform cursor-pointer shadow-xl">
                          {currentSlideData.buttonText}
                        </button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              ) : (
                /* Second Slide - Conference Meeting */
                <div className="h-full flex items-center relative  w-full">
                  <div className="w-full">
                    {/* Organization Title Overlay */}
                    <motion.div
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="absolute bottom-10 right-0  transform "
                    >
                      <div className="bg-white/85 backdrop-blur-sm rounded-tl-4xl rounded-bl-4xl p-6 pr-20 lg:pr-40 text-[#9402bf]  shadow-2xl">
                        <h1 className="text-3xl lg:text-4xl font-bold ">
                          {currentSlideData.organizationTitle}
                        </h1>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-2 ">
                          {currentSlideData.organizationSubtitle}
                        </h2>
                        <p className="text-lg  text-red-600 font-semibold">
                          {currentSlideData.tagline}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2  text-white  group z-10 cursor-pointer hover:text-gray-400 transition-all duration-200"
      >
        <SlArrowLeft className="text-5xl  transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 md:right-4 top-1/2 transform -translate-y-1/2 text-white  group z-10 cursor-pointer hover:text-gray-400 transition-all duration-200"
      >
        <SlArrowRight className="text-5xl  transition-transform" />
      </button>
    </div>
  );
};

export default HeroCarousel;
