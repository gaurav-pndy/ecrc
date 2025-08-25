import React from "react";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Mail } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Overview = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden px-4 md:px-6 lg:px-12 xl:px-20 py-10 bg-[#f2f2f2]">
      <section className="relative w-full   mx-auto flex  flex-col lg:flex-row gap-6  items-center  ">
        <img
          src="/overview-hero.jpg"
          alt="EAFO Logo"
          className="lg:max-w-[55rem] max-h-90 w-full h-full   object-left  object-cover"
        />
        <div className="lg:absolute bg-white p-4 md:p-6 lg:px-10    top-1/3 right-4   lg:max-w-[55rem] w-full h-full  lg:max-h-90">
          <h2 className="text-2xl md:text-5xl text-[#9402bf]">
            Eurasian Cancer Research Council
          </h2>
          <div className=" text-[0.9rem] mt-4">
            <p>
              <b> “Eurasian Cancer Research Council (ECRC)”</b> is a NOT – FOR-
              PROFIT, registered under Section 8 of the Companies Act 2013 by
              bearing registration No.U85200MH2017NPL297682. Eurasian Cancer
              Research Council (ECRC)” is the specialized for carrying out
              Basic, Translational, Populations and Clinical research in cancer.
            </p>
            <br />
            <p>
              The objective of the ECRC is to promote and conduct collaborative
              Cancer Research in different countries. A significant feature of
              the ECRC is its expertise in coordinating research across
              countries and organizations; its independent role as an
              international organization facilitates this activity. The Agency
              has a particular interest in conducting research in low and
              middle-income countries through partnerships and collaborations
              with researchers in these regions.
            </p>
            <br />
            <p>
              ECRC is trying to find out issues related to Cancer treatment, so
              the treatment of the cancer can become affordable and within reach
              of needy. The functional area of the ECRC has no boundaries.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16 lg:py-24 lg:mt-24">
        <div className="container mx-auto px-4  lg:px-8">
          <div className="max-w-[60rem] mx-auto ">
            {/* Mission Title */}
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl xl:text-6xl font-medium  mb-12 "
            >
              ECRC Mission
            </motion.h2>

            {/* Mission Content */}
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="   leading-7"
            >
              As an independent, Not-For-Profit cancer research organisation,
              our mission is to coordinate and conduct basic, population based,
              translational and clinical research to improve the standard of
              cancer treatment for patients globally. We aim ultimately to
              increase people's survival and quality of life by testing new
              therapeutic strategies based on existing drugs, surgery and
              radiotherapy. We also help to develop new drugs and approaches in
              partnership with the pharmaceutical industry and in patients' best
              interests.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: ` url('/contact-bg.avif')`, // Replace with your background image
        }}
      >
        <div className="py-10">
          <div className="container mx-auto px-4  lg:px-8">
            <div className="bg-white max-w-5xl mx-auto p-6 ">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
                {/* Contact Us Section */}
                <div className="lg:col-span-2">
                  <h3 className="  mb-2">Contact Us</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Moscow Address */}
                    <div>
                      <h4 className="font-bold text-sm">Moscow Address:</h4>
                      <p className=" text-xs ">
                        Volokolomskoe Shosse, 1, Building 1,
                        <br />
                        Office 606C
                        <br />
                        Moscow, Russian Federation – 125 080
                      </p>
                    </div>

                    {/* Mumbai Address */}
                    <div>
                      <h4 className="font-bold text-sm">Mumbai Address:</h4>
                      <p className=" text-xs ">
                        B – 1210, Golf Scape, Diamond
                        <br />
                        Garden, Chembur, Mumbai, India –<br />
                        400071
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email Section */}
                <div>
                  <h3 className="  mb-4">Email</h3>
                  <a
                    href="mailto:info@ecrc.pro"
                    className="text-blue-800 hover:text-blue-900 underline font-medium transition-colors duration-200 flex items-center gap-2"
                  >
                    info@ecrc.pro
                  </a>
                </div>

                {/* Follow Section */}
                <div>
                  <h3 className="  mb-4">Follow</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      target="_blank"
                      className=""
                      aria-label="Follow us on Facebook"
                    >
                      <FaFacebookF className="text-dark text-lg" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className=" "
                      aria-label="Follow us on LinkedIn"
                    >
                      <FaLinkedinIn className="text-dark text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Overview;
