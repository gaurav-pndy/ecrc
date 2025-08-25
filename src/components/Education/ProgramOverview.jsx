import React from "react";
import { motion } from "framer-motion";

const ProgramOverview = () => {
  const programOverview = [
    "Gain insight into the day-to-day operations of clinical care in eminent centers.",

    "Introductory strategy session with Doctor of the core team prior to the rotation to understand strengths and weaknesses followed by a targeted plan to follow during the rotation so that the Observer can make the most of their clinical experience enhance history taking, assessment and diagnostic skills.",

    "Attend hospital clinical rounds.",

    "Explore areas of interest in ongoing research and initiatives",

    "Opportunity to give presentations and receive valuable feedback",

    "Earn a letter of recommendation upon successful completion of rotation",

    "Guidance with International and National residency and other relevant training protocols.",

    "Rotate and collaborate with top residency program faculties, attending physicians, chief residents and even program directors.",

    "Participate in teaching rounds and possible in journal clubs and residency conferences.",

    "Virtual Platform support.",

    "Periodic follow-up during the rotation by Doctors of the team to ensure that the rotation is meeting needs.",

    "Observership is unique as it offers advantages to go beyond the patient care experience. Observer may have opportunities to lead, direct, or participate in practice improvement projects. Observers may also have written case reports and review articles and taken part in the research projects. These efforts will strengthen CV for global acceptance in variety of training initiatives.",

    "Participants will submit short report of the learning.",

    "Certificate will be provided after completion of Observership",
  ];

  const applicationProcess = [
    "Apply on website or email your request",

    "An application form will be sent to the Observer’s email.",

    "Free other medical education prospects consultation upon request.",

    "Submit completed application, required documents and payment",

    "Rotation will be confirmed and an acceptance letter will be sent.",

    "Scholarship opportunities available to deserving candidates.",

    "Opportunity to work in partner National and International eminent centres for deserving candidates with letter of recommendation.",
  ];

  const eligibilityCriteria = [
    "Observership is open for Medical University Students, Practicing Doctors, Teaching Professionals",
  ];

  const process = [
    "A CV/resume to apply (unless a hospital requires more to accept your application)",

    "Two signed letters of professional recommendation from director-level supervisors on company/institution letterhead.",

    "Short Virtual Interview round to be cleared by the Observer with a substantial competency and for the satisfaction of the Medical Board involved. (To be discussed)",

    "Statement of purpose, a one-page letter outlining the following information:",

    "Desired dates of observership (typically limited to one to three months, depending on the department requested)",

    "Specialty/sub-specialty to be observed (please be more specific than “internal medicine”)",

    "Detailed learning objectives to be achieved while observing",
  ];

  const programFees = [
    "Fees (to be discussed) shall be non-refundable. To be paid once applicant is selected by selection board. The application fee will be deducted from the total amount due.",

    "EAFO & ECRC will try to arrange affordable accommodation within campus and local travel (subject to availability)",

    "All fees must be paid in at least 15 days prior to the observership start date.",

    "*Please note that application fees will not be refunded for applications that are deemed incomplete or unqualified (based on program requirements) or otherwise unapproved by the competent authorities.",
  ];

  const partnerHospitals = [
    "Kailash Cancer Hospital & Research Centre, (Gujarat)",

    "Nandurbar Institute of Medical Sciences, Nandurbar (Maharashtra)",

    "Grace Hospital, Navapur (Maharashtra)",

    "Dayanand Hospital, Talasari, (Maharashtra)",

    "HP Cancer Hospital & Research Centre, Gorakhpur (Uttar Pradesh)",

    "Oking Hospital & Research Clinic, Kohima, (Nagaland) North East India",

    "North East Cancer Hospital & Research Centre, Guwahati (Assam) North East India",

    "Cachar Cancer Hospital, Silchar (Assam) North East India",

    "Aashray – Durg Organization, (Maharashtra) India",

    "Yuvaraj Singh Foundation, India",

    "Institute of Physiology of National Academy of Sciences, Minsk, Belarus",
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-16 ">
      <div className="container mx-auto px-4  max-w-5xl">
        {/* Program Overview */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-4xl  text-[#9402bf] mb-6">
            Program Overview
          </h2>
          <ul className="ml-4">
            {programOverview.map((item, index) => (
              <li key={index} className="flex items-start gap-3 ">
                <span className="mt-1">•</span>{" "}
                <span className=" lg:text-[1.15rem] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Application Process */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-4xl  text-[#9402bf] mb-6">
            Application Process
          </h2>
          <ul className="ml-4">
            {applicationProcess.map((item, index) => (
              <li key={index} className="flex items-start gap-3 ">
                <span className=" mt-1">•</span>
                <span className=" lg:text-[1.15rem] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Eligibility Criteria */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-4xl  text-[#9402bf] mb-6">
            Eligibility Criteria
          </h2>
          <ul className="ml-4">
            {eligibilityCriteria.map((item, index) => (
              <li key={index} className="flex items-start gap-3 ">
                <span className=" mt-1">•</span>
                <span className="lg:text-[1.15rem] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Process */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-4xl  text-[#9402bf] mb-6">Process</h2>
          <ul className="ml-4">
            {process.map((item, index) => (
              <li key={index} className="flex items-start gap-3 ">
                <span className=" mt-1">•</span>
                <span className="lg:text-[1.15rem] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Program Fees */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-4xl  text-[#9402bf] mb-6">
            Program Fees (exclusive of travel and accommodations)
          </h2>
          <ul className="ml-4">
            {programFees.map((item, index) => (
              <li key={index} className="flex items-start gap-3 ">
                <span className="lg:text-[1.15rem] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Identification Badges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-4xl  text-[#9402bf] mb-6">
            Identification Badges
          </h2>
          <p className="ml-4 lg:text-[1.15rem] leading-relaxed">
            At your orientation, Observer will receive a temporary photo ID
            badge. Observer must wear this badge at all times while on premises.
            (A security deposit amount to be discussed) is required for the ID
            badge; this deposit will be reimbursed when Observer returns the
            badge at the end of the Observership.
          </p>
        </motion.div>

        {/* Dress Code */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-4xl  text-[#9402bf] mb-6">
            Dress Code
          </h2>
          <p className="ml-4 lg:text-[1.15rem] leading-relaxed">
            Observers are expected to be dressed in a professional manner.
            Operation Theatre Dress will be Provided by EAFO & ECRC
          </p>
        </motion.div>

        {/* Confidentiality */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-4xl  text-[#9402bf] mb-6">
            Confidentiality
          </h2>
          <p className="ml-4 lg:text-[1.15rem] leading-relaxed">
            Each Department shall ensure that a Observer maintains the
            confidentiality of records and files of the University or Hospital
            attached during a Participant’s observership.
          </p>
        </motion.div>

        {/* Participating Departments */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-4xl  text-[#9402bf] mb-6">
            PARTICIPATING DEPARTMENTS (BLENDED LEARNING)
          </h2>
          <p className="lg:text-[1.15rem] leading-relaxed ml-4">
            Oncopathology | Hematopathology | Head & Neck Surgery and Oncology |
            Reconstructive Head & Neck Surgery | Gynecologic Oncosurgery |
            Urologic Oncosurgery | Robotic Urologic Surgery | Hematology and
            Hematooncology & Bone marrow transplant | Liver transplant | Renal
            transplant | Internal medicine (including cardiology, pulmonology,
            gastroenterology, rheumatology, nephrology & neurology) |
            Ophthalmology | Thoracic Surgery | Hepato-pancreato-biliary Surgery
            | Neuro Surgery | Gastro-Intestinal Surgery | Orthopedic Surgery &
            Orthopedic Oncology | Dermatology & DermatoOncology | Aesthetic
            plastic Surgery | Radiology | Radiotherapy | Nuclear medicine |
            Medical physics | Medical Laboratory Technology | Anaesthesiology &
            Intensive care | Endoscopy | Dialysis | Otorhinolaryngology |
            Pediatrics and pediatric Surgery | Mental Health | Rehabilitation |
            Others.
          </p>
        </motion.div>

        {/* Partner Hospitals */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-4xl  text-[#9402bf] mb-6">
            PARTNER HOSPITALS
          </h2>
          <ul className="ml-4">
            {partnerHospitals.map((hospital, index) => (
              <li key={index} className="flex items-start gap-3 ">
                <span className=" mt-1">•</span>
                <span className="lg:text-[1.15rem] leading-relaxed">
                  {hospital}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramOverview;
