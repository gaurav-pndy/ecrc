import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Awareness = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const swiperRef = useRef(null);

  // Sample team member data - replace with your actual team images and info
  const teamMembers = [
    {
      id: 1,
      name: "Akshay KULKARNI",
      position: "Project Associate – Media & Visual Communication",
      image: "/other/img1.avif",
    },
    {
      id: 2,
      name: "Amit SHIVALKAR",
      position: "Program Associate",
      image: "/other/img2.avif",
    },
    {
      id: 3,
      name: "Ashok GAIKAWAD",
      position: "Program Associate",
      image: "/other/img3.avif",
    },
    {
      id: 4,
      name: "Chandrkant PAWAR",
      position: "Program Associate",
      image: "/other/img4.avif",
    },
    {
      id: 5,
      name: "Nayan KAREKAR",
      position: "Program Associate",
      image: "/other/img5.avif",
    },
    {
      id: 6,
      name: "Nitin VINCHURE",
      position: "Resource Material Designer",
      image: "/other/img6.avif",
    },
    {
      id: 7,
      name: "Pradeep SONAWANE",
      position: "Program Associate",
      image: "/other/img7.avif",
    },
    {
      id: 8,
      name: "Samuel BHATT",
      position: "Program Associate",
      image: "/other/img8.avif",
    },
    {
      id: 9,
      name: "Shilpa BHALDARE",
      position: "Program Associate",
      image: "/other/img9.avif",
    },
  ];

  // Update currentMember whenever currentSlide changes
  const [currentMember, setCurrentMember] = useState(teamMembers[0]);

  useEffect(() => {
    setCurrentMember(teamMembers[currentSlide]);
  }, [currentSlide, teamMembers]);

  const handleSlideChange = (swiper) => {
    setIsTransitioning(true);

    // Use swiper's activeIndex to ensure correct sync
    setCurrentSlide(swiper.activeIndex);

    // Remove the immediate setCurrentMember call - let useEffect handle it
    setTimeout(() => {
      setIsTransitioning(false);
    }, 150);
  };

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
    // Remove manual slide index calculation - let handleSlideChange handle it
  };

  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
    // Remove manual slide index calculation - let handleSlideChange handle it
  };

  return (
    <section className="bg-white py-16 ">
      <div className="container  mx-auto ">
        {/* Awareness and Campaign Team Section */}
        <div className="pb-20 max-w-6xl  mx-auto border-b px-4 lg:px-8 xl:px-20 2xl:px-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-start">
            {/* Left Side - Team Member Carousel */}
            <div className="relative  lg:w-fit">
              <div className="relative border p-2  w-80 mx-auto group">
                {/* Swiper Carousel */}
                <Swiper
                  modules={[EffectFade, Navigation, Autoplay]}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  speed={800}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  onSlideChange={handleSlideChange}
                  className=" "
                >
                  {teamMembers.map((member, index) => (
                    <SwiperSlide key={member.id}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="absolute disabled:opacity-20 -left-6 cursor-pointer top-1/2 transform -translate-y-1/2 text-gray-800 transition-all duration-200  z-10"
                >
                  <SlArrowLeft className="text-2xl" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentSlide === teamMembers.length - 1}
                  className="absolute disabled:opacity-20 -right-6 cursor-pointer top-1/2 transform -translate-y-1/2  text-gray-800  transition-all duration-200  z-10"
                >
                  <SlArrowRight className="text-2xl" />
                </button>

                {/* Member Info Overlay with Fade Animation */}
                <div className=" p-4 z-10 text-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: isTransitioning ? 0 : 1,
                        y: isTransitioning ? 10 : 0,
                      }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-dark mb-1">
                        {currentMember.name}
                      </h3>
                      <p className=" ">{currentMember.position}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 text-center">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl text-[#9402bf] "
              >
                Awareness and Campaign Team
              </motion.h2>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4  leading-7"
              >
                <p>
                  Every website has a story, and your visitors want to hear
                  yours. This space is a great opportunity to give a full
                  background on who you are, what your team does and what your
                  site has to offer. Double click on the text box to start
                  editing your content and make sure to add all the relevant
                  details you want site visitors to know.
                </p>

                <p>
                  If you're a business, talk about how you started and share
                  your professional journey. Explain your core values, your
                  commitment to customers and how you stand out from the crowd.
                  Add a photo, gallery or video for even more engagement.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Other Activities Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl  mx-auto  px-4 lg:px-8 pt-16"
        >
          <h2 className="text-3xl lg:text-4xl  text-center text-[#9402bf] mb-16">
            Other Activities
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            {/* Medical Support */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <h3 className="text-xl font-bold  mb-4">
                Medical Support & Affordable Health Care for deserving and
                needy:
              </h3>
              <ul className=" space-y-2 text-left">
                <li>
                  • "ECRC" is committed to serve "Every one! Everywhere! Every
                  Day!
                </li>
                <li>
                  • Affordable medical care & medicine support by reaching to
                  optimum number of cancer patients. Where in ECRC is looking
                  for collaborative efforts with likeminded institutions and
                  individuals, which can come together to support the cause.
                </li>
                <li>
                  • Arranging the treatment for Cancer patient by way of
                  Screening, Consultation, Counseling, Rehabilitation measures,
                  who is in need and due to it's ecosystem couldn't manage the
                  survival.
                </li>
                <li>
                  • Augment the Cancer treatment and prevention activities with
                  local communities so the larger benefit to the community can
                  be ensured.
                </li>
              </ul>
            </motion.div>

            {/* Cancer Prevention Education */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <h3 className="text-xl font-bold  mb-4">
                Support for Cancer Prevention Education:
              </h3>
              <p className=" text-left">
                ECRC is actively involved in academic development, efforts and
                activities by supporting various institutions & individuals who
                are engaged in Cancer Prevention Activities.
              </p>
            </motion.div>

            {/* Exchange Program */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <h3 className="text-xl font-bold  mb-4">
                Exchange Program for Students (Inter & Intra Country Level)
              </h3>
              <ul className=" space-y-2 text-left">
                <li>
                  • Under this platform where students from within country as
                  well as abroad could participate to learn new areas of
                  treatment of Cancer related activities.
                </li>
                <li>
                  • Students will play a pivotal role in exchanging the ideas,
                  sharing and developing a channel for new learning & skill
                  building.
                </li>
                <li>
                  • Visiting various institutions and projects for newer area of
                  learning so student community can gain the enriching
                  experiences from it.
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awareness;
