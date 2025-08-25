import React from "react";
import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "EAFO",

      logo: "/eafo.avif", // Replace with actual EAFO logo
    },
    {
      id: 2,
      name: "EASHNO",
      logo: "/eashno.avif", // Replace with actual EASHNO logo
    },
    {
      id: 3,
      name: "EACF",

      logo: "/eacf.avif", // Replace with actual EACF logo
    },
  ];

  return (
    <section className=" py-16 l">
      <div className="container max-w-5xl mx-auto px-4  lg:px-8">
        {/* Section Title */}
        <div className=" ">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium mb-8  text-[#9402bf]">
            PARTNERS
          </h2>
        </div>

        {/* Partners Grid - 3 Logos */}
        <div className="grid grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className=" flex flex-col items-center justify-center text-center group "
            >
              {/* Logo Container */}
              <div className="w-full h-20 lg:h-36 flex items-center justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain  transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
