import React from "react";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const projects = [
    {
      id: 1,
      title: "Mobile Medical Unit, Nandurbar",
      description: [
        "ECRC is committed to serve community through various means and trying to reach community in association with like mind organizations. This helps us to create awareness about Cancer and also to detect cancer at early state.",
        "ECRC in collaboration with AaSHRAY-DURG Organization-India is running Mobile Medical Unit in Nandurbar district since 2019. This vehicle visits 3 to 4 villages every day. Each village is visited once in a month and people residing in more than 85 villages / Hamlets are benefitted through this project. Every month more than 1800 beneficiaries are availing services from our mobile medical unit. This project is technically supported Medicare Surgical & Dental Hospital and Nandurbar Institute of Medical Sciences.",
        "Topiwala National Medical College (TNMC), Mumbai 1992 Batch has come forward to support this project.",
      ],
    },
    {
      id: 2,
      title: "Cancer Early Detection Camps",
      description: [
        "Many living un-diagnosed and losing their lives due to lack of awareness and unavailability of the treatment at early stage. Aashray-Durg in Association with Grace Hospital and Eurasian Cancer Research Council have started Cancer Early Detection program for tribal area. We conduct periodic camps (Once a month) with support from Muni Seva Ashram’s Kailash Cancer Hospital (Goraj), Medicare Surgical & Dental Hospital and Nandurbar Institute of Medical Sciences. Wide publicity is given through handbills, banners and social media. Team of experts from various hospitals and institutes come together at Grace Hospital for consultation and diagnosis. Patients are referred to Medicare Hospital, Nandurbar and Kailash Cancer Hospital, Goraj for further necessary treatment. Community residing in Navapur Block of Nandurbar District (Maharashtra), Ucchal, Songadh, Nizar block of Tapi and Ahawa Dang districts of Gujarat are benefited from this program.",
        "This activity is jointly conducted Eurasian Cancer Research Council in Association with Aashray-Durg, Muni Seva Ashram’s Kailash Cancer Hospital (Goraj – Gujarat) & Grace Hospital (Navapur), Eurasian Federation of Oncology, T. N. Medical College Mumbai (1992 MBBS Batch), Medicare Surgical & Dental Hospital and Nandurbar Institute of Medical Sciences since year 2019.",
      ],
    },
    {
      id: 3,
      title: "Hemodialysis Unit",
      description: [
        "ECRC has started Hemodialysis Unit in Nandurbar Town of Maharashtra India.",
        "There are many individuals suffering from renal diseases and few of them need Hemodialysis at frequent intervals. We have installed 5 Hemodialysis Machines at Shinde Hospital (Nandurbar) and facility is managed by Medicare Hospital team. Every day 3-4 patients are undergoing Haemodialysis at highly subsidised rates.",
        "This project is partially Supported by Eurasian Federation of Oncology, T. N. Medical College Mumbai (1992 MBBS Batch), Medicare Surgical & Dental Hospital and Nandurbar Institute of Medical Sciences.",
      ],
    },
    {
      id: 4,
      title: "Clinical Laboratory",
      description: [
        "In remote areas of India, many remain untreated due to lack of availability of the facilities. Few are treated without any diagnosis. Directors and supporters are committed to render quality health care services to the underprivileged through our activities ECRC in association has started basic clinical laboratory at Bhadbhunja Village of Gujarat. Every more than 200 beneficiaries are visiting this laboratory for various blood tests. Laboratory services are being provided to the patients at discounted rates.",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 ">
      <div className="container mx-auto px-4  lg:px-8 max-w-4xl">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Project Number and Title */}
              <div className="mb-2">
                <h3 className="text-lg  font-bold  ">
                  {project.id}. {project.title}
                </h3>
              </div>

              {/* Project Description */}
              <div className="space-y-2 ml-4">
                {project.description.map((paragraph, pIndex) => (
                  <p key={pIndex} className=" leading-7 text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
