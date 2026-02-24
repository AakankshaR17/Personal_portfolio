"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Master of Information Technology",
    institution: "Deakin University",
    location: "Melbourne, Australia",
    duration: "2024 – 2026",
    highlights: [
      "Specialization: Cloud Networks & Technologies",
      "Advanced coursework in Kubernetes, DevOps, Distributed Systems and Cloud Infrastructure",
      "Built cloud-native microservices deployed on Kubernetes clusters",
      "Focused on production-ready architecture and scalable system design",
    ],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "KLE College of BCA",
    location: "Belgaum, India",
    duration: "2020 – 2023",
    highlights: [
      "Graduated with strong foundation in Software Engineering and Programming",
      "Languages: Java, Python, SQL",
      "Best Project Award – Fit Finity",
      "Leadership recognition for technical club contributions",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen px-6 py-32 bg-[#11131A] text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-24 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <div className="space-y-16">

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-lg hover:shadow-purple-500/20 transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">

                <div>
                  <h3 className="text-2xl font-semibold text-purple-400">
                    {edu.degree}
                  </h3>

                  <p className="text-gray-400">
                    {edu.institution} • {edu.location}
                  </p>
                </div>

                <span className="text-sm text-gray-500 mt-2 md:mt-0">
                  {edu.duration}
                </span>

              </div>

              <ul className="space-y-3 text-gray-300">
                {edu.highlights.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}