import React from "react";
import { motion } from "framer-motion";

const OtherHero = () => {
  return (
    <section className="relative w-full  overflow-hidden  md:px-6 lg:px-12 xl:px-20  md:py-6 lg:py-10">
      <div className="container bg-[#f5f5f5] py-8 mx-auto px-4  lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl text-[#9402bf] lg:text-5xl xl:text-6xl font-bold mb-8 "
          >
            Awareness and Campaign
          </motion.h1>

          {/* Main Content */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* First paragraph */}
            <p className="text-lg leading-8">
              Anti- Smoking, Anti – Tobacco and Good Oral Hygiene Practice
              Campaign among the Children.
            </p>

            {/* Second paragraph */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg  leading-8"
            >
              About 14.6% of youth are addicted to smoking and other tobacco
              products and 30.2% of adults are exposed to second hand smoking,
              of which both are equally dangerous. EAFO and ECRC along with
              Ashwavedh Foundation having realized this have initiated Anti-
              Smoking, Anti – Tobacco and Good Oral Hygiene Practice campaign
              among the children.
            </motion.p>

            {/* Third paragraph */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-lg  leading-8"
            >
              We are happy to introduce our Awareness and Campaign Team through
              which we are conducting Anti – Smoking, Anti – Tobacco and Good
              Oral Hygiene Practices campaign. This team focuses mainly on
              school children and makes them aware about ill effects of smoking
              and tobacco usage. With this team we have reached more than 45000
              students and their parents. We are aiming to reach about 300,000
              students in Year 2019.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OtherHero;
