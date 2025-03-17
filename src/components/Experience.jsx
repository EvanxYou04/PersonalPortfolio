import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Daikin Applied",
      location: "Plymouth, MN",
      period: "May 2024 - Febuary 2025",
      description: "Developed and implemented a CI/CD pipeline for LabVIEW applications across HVAC controllers, reducing deployment time by 30% and increasing frequency by 50%. Automated testing and deployment processes using Shell scripts, achieving a 40% reduction in manual effort. Created 7+ I/O testing commands for HVAC controllers and engineered a regression testing pipeline automating 79+ test cases, resulting in a 20% improvement in testing efficiency and 50% reduction in manual testing effort.",
      technologies: ["C#", ".NET", "Azure DevOps", "CI/CD Pipeline", "Python"]
    },
    {
      title: "Incoming Software Engineer Intern",
      company: "Medtronic",
      location: "Mounds View, MN",
      period: "May 2025 - August 2025",
      description: "",
      technologies: []
    },
    // Add more experiences as needed
  ];

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-700 transform -translate-x-1/2"></div>

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ExperienceCard {...experience} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

