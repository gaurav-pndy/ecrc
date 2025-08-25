import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const desktopMenuItems = [
    "ECRC Overview",
    "Meet the Team",
    "What We Do",
    "Education & Trainings",
    "Other Activities",
    "Jobs & Careers",
    "Gallery",
    "Pay/Donate",
    "Contact Us",
  ];

  const mobileMenuItems = [
    "Home",
    "Contact Us",
    "Pay/Donate",
    "Education & Trainings",
    "What We Do",
    "Meet the Team",
    "ECRC Overview",
    "Other Activities",
    "Jobs & Careers",
    "Gallery",
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
        <div className="max-w-7xl mx-auto px-4 py-2 ">
          <div className="flex justify-between items-center ">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/logo.avif" alt="ECRC logo" className="h-20" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="ml-6 flex items-baseline space-x-8 ">
                {desktopMenuItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className=" hover:text-purple-600  py-2 text-[0.85rem]   transition-colors duration-200 relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden z-60">
              <button
                onClick={toggleMenu}
                className="relative w-8 h-8 flex flex-col justify-between items-center p-2 group"
              >
                {/* Top Line */}
                <motion.span
                  className="w-6 h-0.5 bg-gray-700 rounded"
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Middle Line */}
                <motion.span
                  className="w-6 h-0.5 bg-gray-700 rounded"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                {/* Bottom Line */}
                <motion.span
                  className="w-6 h-0.5 bg-gray-700 rounded"
                  animate={
                    isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
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
              {/* Close button */}
              <div className="flex justify-end p-4">
                <motion.button
                  onClick={toggleMenu}
                  className="p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="px-6 py-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="space-y-1"
                >
                  {mobileMenuItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      onClick={handleMenuItemClick}
                      className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200 text-base font-medium"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.05,
                        duration: 0.3,
                      }}
                      whileHover={{ x: 4 }}
                    >
                      {item}
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
