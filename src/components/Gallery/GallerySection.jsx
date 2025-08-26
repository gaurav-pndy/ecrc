import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const GallerySection = ({ title, date, location, images, sectionId }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Create a safe selector ID by removing special characters and replacing spaces
  const safeId = sectionId || title.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mb-16 lg:mb-24">
      {/* Title and Info */}
      <div className="text-center mb-6">
        <h2 className="text-lg text-[#9402bf] mb-1 leading-tight">{title}</h2>
        <p className="text-sm lg:text-base text-[#9402bf]">
          {date} | {location}
        </p>
      </div>

      {/* Main Large Image */}
      <div className="relative mb-4">
        <div className="relative  overflow-hidden shadow-lg group cursor-pointer">
          <img
            src={images[activeImageIndex]}
            alt={`${title} - Image ${activeImageIndex + 1}`}
            className="w-full h-64 lg:h-96 object-cover transition-transform duration-300 "
            onClick={openModal}
          />

          {/* Navigation Arrows on Main Image */}
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 p-2 rounded-full cursor-pointer transition-all duration-200 "
          >
            <SlArrowLeft className="text-4xl" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 p-2 rounded-full cursor-pointer transition-all duration-200  "
          >
            <SlArrowRight className="text-4xl" />
          </button>
        </div>
      </div>

      {/* Thumbnail Carousel */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Thumbs]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={{
            prevEl: `.prev-${safeId}`,
            nextEl: `.next-${safeId}`,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
          }}
          onSwiper={setThumbsSwiper}
          className="gallery-thumbs"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative cursor-pointer overflow-hidden transition-all duration-200`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={image}
                  alt={`${title} - Thumbnail ${index + 1}`}
                  className="w-full h-24 lg:h-32 object-cover"
                />
                {index === activeImageIndex && (
                  <div className="absolute inset-0 bg-white/50"></div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`prev-${safeId} absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 cursor-pointer transition-colors duration-200 z-10`}
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>

        <button
          className={`next-${safeId} absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 cursor-pointer bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200 z-10`}
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Modal for Enlarged Image */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[activeImageIndex]}
                alt={`${title} - Full Size`}
                className="max-w-full max-h-full object-contain "
              />

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4  text-white cursor-pointer hover:text-gray-200 transition-colors duration-200"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Modal Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 p-2 rounded-full cursor-pointer transition-all duration-200"
              >
                <SlArrowLeft className="text-4xl" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 p-2 rounded-full cursor-pointer transition-all duration-200"
              >
                <SlArrowRight className="text-4xl" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GallerySection;
