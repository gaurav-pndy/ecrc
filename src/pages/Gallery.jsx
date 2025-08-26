import React from "react";
import { motion } from "framer-motion";
import GallerySection from "../components/Gallery/GallerySection";

const Gallery = () => {
  // Sample data - replace with your actual images
  const galleryData = [
    {
      title:
        "Eurasian Cancer Research Council Collaborative Cancer Research - ECRC Expert Forum",
      date: "22 April 2018",
      location: "Sochi, Russia",
      images: [
        "/gallery/img1.avif",
        "/gallery/img2.avif",
        "/gallery/img3.avif",
        "/gallery/img4.avif",
        "/gallery/img5.avif",
        "/gallery/img6.avif",
        "/gallery/img7.avif",
        "/gallery/img8.avif",
        "/gallery/img9.avif",
      ],
    },
    {
      title:
        'Round Table "International agreements to find solutions for problems related to fighting against cancer"',
      date: "25 October 2018",
      location: "Moscow, Russia",
      images: [
        "/gallery/img10.avif",
        "/gallery/img11.avif",
        "/gallery/img12.avif",
        "/gallery/img13.avif",
        "/gallery/img14.avif",
        "/gallery/img15.avif",
        "/gallery/img16.avif",
        "/gallery/img17.avif",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Gallery Sections */}
      <div className="container max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-20 px-4  py-10 ">
        {galleryData.map((gallery, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <GallerySection
              title={gallery.title}
              date={gallery.date}
              location={gallery.location}
              images={gallery.images}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
