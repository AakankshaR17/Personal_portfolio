"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAmazon,
  SiGithub,
  SiFigma,
  SiPostman,
  SiLinux,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },

  {
    title: "DevOps",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Terraform", icon: SiTerraform, color: "#844FBA" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    ],
  },
  {
    title: "UI / UX & Tools",
    items: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="relative min-h-screen px-6 py-32 bg-[#11131A] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-24 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
        >
          Tech Universe
        </motion.h2>

        <div className="space-y-28">

          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* CATEGORY TITLE */}
              <h3 className="text-2xl font-semibold mb-12 text-purple-400">
                {category.title}
              </h3>

              {/* GRID */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">

                {category.items.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.name}
                      animate={{ y: [0, -12, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      whileHover={{ scale: 1.15 }}
                      className="group relative flex flex-col items-center gap-4 p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 cursor-pointer transition"
                    >
                      {/* Glow Background */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition"
                        style={{
                          background: `radial-gradient(circle at center, ${item.color}, transparent 70%)`,
                        }}
                      />

                      {/* Icon */}
                      <Icon
                        className="text-6xl transition duration-300"
                        style={{ color: item.color }}
                      />

                      {/* Label */}
                      <span className="text-sm text-gray-300">
                        {item.name}
                      </span>
                    </motion.div>
                  );
                })}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}