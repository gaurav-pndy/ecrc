import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 ">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-[38rem] mx-auto text-center">
          {/* Section Title */}
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl xl:text-6xl font-medium mb-8  text-[#9402bf]"
          >
            ABOUT ECRC
          </motion.h2>

          {/* Content Container */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Main Description */}
            <p className="text-lg  text-gray-600 leading-8 font-medium">
              “Eurasian Cancer Research Council (ECRC)” is a NOT-FOR-PROFIT
              organisation specializing in conducting and promoting
              collaborative Cancer Research beyond borders across continents.{" "}
              <br />
              Donations to ECRC are exempted under 80 G of IT Act. Vide Order
              No. CIT (E)/80G/2953/2019-20 Dt. 26/09/2019.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
