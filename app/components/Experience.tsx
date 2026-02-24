"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Kanchi Australia",
    role: "Frontend & Cloud Systems Engineer (Part-Time)",
    location: "Melbourne, Australia",
    duration: "April 2024 – Present",
    bullets: [
      "Modernized digital infrastructure integrating cloud-based tools and scalable web solutions.",
      "Managed deployment and optimization of web assets improving digital performance and user engagement.",
      "Designed structured digital workflows integrating marketing platforms with analytics systems.",
      "Bridged business operations with technical systems through automation and performance tracking.",
    ],
  },
  {
    company: "Deakin University",
    role: "Frontend & Cloud Developer (Contract)",
    location: "Melbourne, Australia",
    duration: "July 2024 – October 2024",
    bullets: [
      "Developed cloud-native applications using React, Docker and Kubernetes.",
      "Implemented containerized deployments and CI/CD workflows for academic cloud projects.",
      "Built modular frontend architectures focusing on performance and maintainability.",
      "Contributed to scalable distributed system designs and infrastructure configuration.",
    ],
  },
  {
    company: "Mint Media",
    role: "Frontend Developer (Remote)",
    location: "India",
    duration: "July 2023 – June 2024",
    bullets: [
      "Developed responsive production-ready frontend applications using React and modern JavaScript.",
      "Collaborated with backend engineers to integrate REST APIs and optimize data handling.",
      "Improved UI performance through code splitting, asset optimization and clean component architecture.",
      "Worked in agile startup environment delivering scalable features under tight deadlines.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen px-6 py-32 bg-[#0F1117] text-white"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-24 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
        >
          Professional Experience
        </motion.h2>

        <div className="relative border-l border-white/20 ml-6">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-20 ml-10 relative"
            >
              <div className="absolute w-5 h-5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full -left-[30px] top-2 shadow-lg shadow-purple-500/40" />

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-purple-500/20 transition">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">

                  <div>
                    <h3 className="text-2xl font-semibold text-purple-400">
                      {exp.role}
                    </h3>

                    <p className="text-gray-400">
                      {exp.company} • {exp.location}
                    </p>
                  </div>

                  <span className="text-sm text-gray-500 mt-2 md:mt-0">
                    {exp.duration}
                  </span>

                </div>

                <ul className="space-y-3 text-gray-300">
                  {exp.bullets.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}