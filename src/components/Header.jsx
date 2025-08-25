import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const desktopMenuItems = [
    { name: "ECRC Overview", src: "/ecrc-overview" },
    { name: "Meet the Team", src: "/meet-the-team" },
    { name: "What We Do", src: "/what-we-do" },
    { name: "Education & Trainings", src: "/education-and-trainings" },
    { name: "Other Activities", src: "/other-activities" },
    { name: "Jobs & Careers", src: "/jobs-and-careers" },
    { name: "Gallery", src: "/gallery" },
    { name: "Pay/Donate", src: "/pay-donate" },
    { name: "Contact Us", src: "/contact-us" },
  ];

  const mobileMenuItems = [
    { name: "Home", src: "/" },
    { name: "Contact Us", src: "/contact-us" },
    { name: "Pay/Donate", src: "/pay-donate" },
    { name: "Education & Trainings", src: "/education-and-trainings" },
    { name: "What We Do", src: "/what-we-do" },
    { name: "Meet the Team", src: "/meet-the-team" },
    { name: "ECRC Overview", src: "/ecrc-overview" },
    { name: "Other Activities", src: "/other-activities" },
    { name: "Jobs & Careers", src: "/jobs-and-careers" },
    { name: "Gallery", src: "/gallery" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className=" shadow-sm border-b border-gray-100 relative ">
        <div className="max-w-7xl mx-auto px-4 py-2 text-[rgb(51,51,51)]">
          <div className="flex justify-between items-center ">
            {/* Logo */}
            <Link to={"/"} className="flex-shrink-0">
              <img src="/logo.avif" alt="ECRC logo" className="h-16 md:h-20" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="ml-6 flex items-baseline space-x-8 ">
                {desktopMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.src}
                    className={`${
                      location.pathname === item.src ? "text-[#9402bf]" : ""
                    } hover:text-[#9402bf]  py-2 text-[0.85rem]   transition-colors duration-200 relative group`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9402bf] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden z-60">
              <button
                onClick={toggleMenu}
                className="relative  grid grid-cols-2 gap-y-2 group"
              >
                {/* Top Line */}
                <motion.span
                  className="w-5 h-1 bg-gray-800 rounded"
                  animate={
                    isOpen
                      ? { rotate: 45, y: 6, x: 4 }
                      : { rotate: 0, y: 0, x: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
                <motion.span className="w-4 h-1 bg-transparent rounded" />
                {/* Middle Line */}
                <motion.span
                  className="w-10 h-1 bg-gray-800 rounded col-span-2"
                  animate={isOpen ? { rotate: 135 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
                {/* Bottom Line */}

                <motion.span
                  className="w-5 h-1 bg-gray-800 rounded col-start-2"
                  animate={
                    isOpen
                      ? { rotate: 45, y: -6, x: -4 }
                      : { rotate: 0, y: 0, x: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50  z-40 lg:hidden"
              onClick={toggleMenu}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Menu Items */}
              <div className="px-6 py-4 mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="space-y-1"
                >
                  {mobileMenuItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.src}
                      onClick={handleMenuItemClick}
                      className={`block px-4 py-3  ${
                        location.pathname === item.src
                          ? "text-[#9402bf]"
                          : "text-dark"
                      }  hover:bg-purple-50 rounded-lg transition-colors duration-200 text-base font-medium`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.05,
                        duration: 0.3,
                      }}
                      whileHover={{ x: 4 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
