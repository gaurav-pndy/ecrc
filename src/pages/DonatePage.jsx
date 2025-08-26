import React from "react";
import { motion } from "framer-motion";

const DonatePage = () => {
  const bankDetails = [
    {
      label: "Name of Account holder:",
      value: '"EURASIAN CANCER RESEARCH COUNCIL"',
    },
    { label: "Bank Name:", value: "Standard Chartered Bank" },
    {
      label: "Branch Name:",
      value:
        "Kalson House, Opp R. K. Studio Sion Tomboay Road, Chembur, Mumbai 400071",
    },
    { label: "Bank Savings Account No:", value: "000405115733" },
    { label: "IFSC Code:", value: "SCBL0036066" },
    {
      label: "Address:",
      value: "B – 1210, Golf Scappe, Diamond Garden, Chembur, Mumbai – 400071",
    },
    { label: "Tel:", value: "+7(985)125-77-88" },
    { label: "Email:", value: "travel@eafo.info" },
    { label: "Mob:", value: "+91 9029111777" },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden  md:px-6 lg:px-12 xl:px-20 py-10 bg-[#f2f2f2]">
      {/* Hero Section */}
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 gap-y-12 lg:min-h-[30rem]   lg:grid-cols-2  items-center">
          {/* Left Side - Title and Button */}
          <div className="text-center">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl text-[#9402bf] lg:text-5xl xl:text-6xl  mb-8"
            >
              Pay/Donate
            </motion.h1>

            <a href="https://www.eafo.info/donate" target="_blank">
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="bg-[#9402bf]  text-white  px-8 py-2 text-lg cursor-pointer rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Learn More
              </motion.button>
            </a>
          </div>

          {/* Right Side - Donation Information */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className=" h-full text-lg lg:text-xl px-4 lg:p-32 bg-white leading-9 text-center flex items-center"
          >
            <p>
              Donations to ECRC are exempted under 80 G of IT Act. Vide Order
              No. CIT (E)/80G/2953/2019-20 Dt. 26/09/2019You can either choose
              to Offer Financial Grants / Donation / Support Online through the
              Donation form below or Offline through Bank Transfer. Details for
              Bank Transfer can be found below:
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bank Details Section */}
      <div className="bg-white px-4 lg:px-0 mt-10 py-10">
        <div className="container mx-auto ">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row">
            {/* Bank Details Title */}
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-[2.5rem] lg:w-1/3  text-[#9402bf]  mb-6"
            >
              Bank Details
            </motion.h2>

            {/* Bank Details Grid */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className=" rounded-2xl lg:w-2/3  lg:px-8 "
            >
              <div className="">
                {bankDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className=" pb-3 last:pb-0 "
                  >
                    <div
                      className={` ${
                        detail.label === "Email:" ||
                        detail.label === "Mob:" ||
                        detail.label === "Tel:"
                          ? "flex items-center"
                          : ""
                      } gap-2`}
                    >
                      <dt className="font-semibold text-lg ">{detail.label}</dt>
                      <dd className=" text-lg">
                        {detail.label === "Email:" ? (
                          <a
                            href={`mailto:${detail.value}`}
                            className="text-[#9402bf] underline transition-colors duration-200"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          detail.value
                        )}
                      </dd>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
