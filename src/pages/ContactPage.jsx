import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Linkedin } from "lucide-react";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegEnvelope,
  FaTelegram,
  FaVk,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { BiLike } from "react-icons/bi";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4  lg:px-8 text-center">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-lg lg:text-xl text-dark mb-3"
          >
            Let's Connect
          </motion.p>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-5xl xl:text-6xl text-[#9402bf] "
          >
            Contact
          </motion.h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className=" ">
        <div className="container mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-gray-600 leading-7">
            {/* Left Side - Contact Information */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-4 md:p-8 lg:px-24 flex flex-col  gap-10 border-b md:border-r md:border-b-0 border-gray-600 font-[300] "
            >
              <div className="grid grid-cols-2 gap-2">
                <IoLocationOutline className="text-4xl text-dark col-span-2 " />

                <p className="col-span-2 lg:col-span-1">
                  <strong className="text-lg">Indian Office</strong> <br />{" "}
                  Eurasian Cancer Research Council B – 1210, Golf Scappe,
                  Diamond Garden, <br />
                  Chembur, Mumbai – 400071 <br /> Mob: +91 9029111777
                </p>
                <p className="col-span-2 lg:col-span-1">
                  <strong className="text-lg">Russian Office</strong> <br />
                  Eurasian Cancer Research Council Eurasian Federation of
                  Oncology, Volokolamskoe Shosse, 1 Building 1, Office 606C{" "}
                  <br />
                  Moscow 125080, Russian Federation <br />
                  Tel: +7-499-918-71-97 <br />
                  Mob: +7-915-3333-0-66
                </p>
                <div className="flex flex-col  gap-2 ">
                  <BiLike className="text-4xl text-dark " />
                  <strong className="text-lg">Social Media</strong>

                  <div className="flex gap-3">
                    <a href="https://www.facebook.com/ecrcpro/" target="_blank">
                      <FaFacebookF className="text-xl text-dark" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/ecrcpro/"
                      target="_blank"
                    >
                      <FaLinkedinIn className="text-2xl text-dark" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col  gap-2">
                  <FaRegEnvelope className="text-4xl text-dark " />
                  <strong className="text-lg">Email</strong>

                  <div className="">
                    <a
                      href="mailto:office@ecrc.pro"
                      target="_blank"
                      className="text-[#9402bf] underline"
                    >
                      office@ecrc.pro
                    </a>{" "}
                    <br />
                    <a
                      href="mailto:chair@ecrc.pro"
                      target="_blank"
                      className="text-[#9402bf] underline"
                    >
                      chair@ecrc.pro
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-4 md:p-8 lg:px-24 py-16"
            >
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border p-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border p-2 w-full"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-2 w-full"
                />
                <textarea
                  placeholder="Message"
                  className="border p-2 w-full h-24"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#9402bf]  border border-[#9402bf] text-white px-4 py-2  whitespace-nowrap hover:bg-white cursor-pointer   hover:text-[#9402bf] transition-all duration-300 w-full"
                >
                  Send
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map Section */}

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-96 "
      >
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7542.497122529904!2d72.88848999357913!3d19.052806099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8a63ed024bd%3A0xc03e15bcc2893cdc!2sIDBI%20Bank!5e0!3m2!1sen!2sin!4v1756204786407!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ContactPage;
