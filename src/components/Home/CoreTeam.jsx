import React from "react";
import { motion } from "framer-motion";

const CoreTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Somasundaram SUBRAMANIAN",
      location: "Moscow,",
      country: "Russian Federation",
      image: "/core-team/member1.avif",
    },
    {
      id: 2,
      name: "Dr. Ulhas Jayant VASAVE",
      location: "Mumbai,",
      country: "India",
      image: "/core-team/member2.avif",
    },
    {
      id: 3,
      name: "Dr. Anton BARCHUK",
      location: "Saint Petersburg,",
      country: "Russian Federation",
      image: "/core-team/member3.avif",
    },
    {
      id: 4,
      name: "Dr. DAUREN Adilbay",
      location: "New York,",
      country: "USA",
      image: "/core-team/member4.avif",
    },
    {
      id: 5,
      name: "Dr. Rajashekar MOHAN",
      location: "Mangalore,",
      country: "India",
      image: "/core-team/member5.avif",
    },
    {
      id: 6,
      name: "Dr. Ekansh Shekhar",
      location: "Pune,",
      country: "India",
      image: "/core-team/member6.avif",
    },
  ];

  return (
    <section className="bg-white py-16 mb-20">
      <div className="container max-w-5xl mx-auto px-4  lg:px-8">
        {/* Title */}
        <div className="mb-12 lg:ml-8">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium mb-8  text-[#9402bf]">
            MEET OUR CORE TEAM
          </h2>

          <p className=" text-gray-500 text-lg max-w-2xl leading-relaxed">
            This is your Team section. It's a great place to introduce your team
            and talk about what makes it special, such as your culture and work
            philosophy. Don't be afraid to illustrate personality and character
            to help users connect with your team.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 gap-y-32 lg:gap-y-40 max-w-6xl mx-auto px-4 md:px-0">
          {teamMembers.map((member) => (
            <div key={member.id} className="relative">
              {/* Image Container with Purple Gradient */}
              <div className="relative w-full h-96 lg:h-86  overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-500 to-pink-400"></div>
                <img
                  src={member.image}
                  alt={`${member.name} ${member.lastName}`}
                  className="w-full h-full object-cover relative z-10"
                />
              </div>

              {/* Text Box Overlapping Bottom of Image */}
              <div className="absolute  z-10   bg-white w-[90%] md:w-[82%] right-0 -bottom-26  p-4">
                <h3 className="text-2xl font-medium   mb-1">{member.name}</h3>

                <p className=" text-xl mb-1">{member.location}</p>
                <p className=" text-xl">{member.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
