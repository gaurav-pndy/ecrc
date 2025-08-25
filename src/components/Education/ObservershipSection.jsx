import React from "react";

const ObservershipSection = () => (
  <section className="w-full bg-white pb-16 max-w-6xl mx-auto border-b ">
    <div className="max-w-5xl  mx-auto px-4">
      {/* Title */}
      <h1 className="text-3xl lg:text-[3.3rem] lg:leading-15 font-bold mb-4 text-left text-[#9402bf]">
        Observership by
        <br />
        Eurasian Federation of Oncology & Eurasian Cancer Research Council
      </h1>

      {/* Subtitle & Paragraph */}
      <div className="mb-12">
        <span className="block font-semibold text-lg mb-2">
          Learning through Observations
        </span>
        <p className="text-lg  leading-relaxed ">
          Observerships are designed to help medical graduates adapt to the
          practice of medicine. These customized educational programs facilitate
          knowledge sharing and expertise in clinical care, as well as quality
          and innovation in health care.
        </p>
      </div>

      {/* Program Length */}
      <div className="mt-14">
        <span className="block text-2xl lg:text-4xl font-bold text-[#9402bf]">
          Length of program: 1 Month
          <br />
          (Or As Desired by the Participants)
        </span>
      </div>
    </div>
  </section>
);

export default ObservershipSection;
