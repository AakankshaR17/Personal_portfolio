"use client";

import { motion } from "framer-motion";
import Hero3D from "./components/Hero3D";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import FadeIn from "./components/FadeIn";
import ScrollProgress from "./components/ScrollProgress";
import AnimatedBackground from "./components/AnimatedBackground";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Education from "./components/Education";


export default function Home() {
  return (
    <main className="bg-[#0F1117] text-white">

     <SmoothScroll />
      <Navbar />
      <ScrollProgress />
      <AnimatedBackground />

     {/* ================= HERO SECTION ================= */}
<section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

  {/* 3D Background */}
  <Hero3D />

  <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">

    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
    >
      Aakanksha Rajput
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
    >
      Engineering intelligent systems at the intersection of
      Frontend × Cloud × Production Infrastructure.
    </motion.p>

    <motion.a
      href="#about"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      className="mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-xl shadow-purple-500/30 transition"
    >
      Enter My Portfolio
    </motion.a>

  </div>
</section>

      {/* ================= ABOUT SECTION ================= */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 bg-[#11131A]"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a Frontend & Cloud Engineer based in Melbourne.
              I specialize in building scalable systems using React,
              Kubernetes, Docker, and modern DevOps practices.
              My goal is to design systems that are not only functional,
              but production-ready and future-proof.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/profile.jpg"
              alt="Aakanksha Rajput"
              className="rounded-2xl shadow-2xl w-80 object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-6 bg-[#0F1117]"
      >
        <div className="max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:scale-105 transition">
              <h3 className="text-xl text-purple-400 mb-4">
                Food Remedy API
              </h3>
              <p className="text-gray-400">
                Modular React frontend with dynamic A–Z sorting and reusable architecture.
              </p>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:scale-105 transition">
              <h3 className="text-xl text-purple-400 mb-4">
                TaskBuddy
              </h3>
              <p className="text-gray-400">
                Cloud-native microservice with Docker, Kubernetes, and MongoDB.
              </p>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:scale-105 transition">
              <h3 className="text-xl text-purple-400 mb-4">
                KubeGallery
              </h3>
              <p className="text-gray-400">
                Distributed Django system deployed on Kubernetes with persistent storage.
              </p>
            </div>

          </div>
        </div>
      </section>
      <Experience />
      <Education />

            <TechStack />

      
{/* ================= CONTACT ================= */}
<section
  id="contact"
  className="min-h-screen flex items-center justify-center px-6 bg-[#0F1117]"
>
  <FadeIn>
    <div className="max-w-3xl text-center">
      <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
      <p className="text-gray-400 mb-8">
        I'm currently open to frontend, cloud and DevOps opportunities.
      </p>

      <a
        href="mailto:Aakanksharajputwork@gmail.com"
        className="px-8 py-4 bg-purple-600 rounded-full hover:scale-110 transition inline-block"
      >
        Contact Me
      </a>
    </div>
  </FadeIn>
</section>

    </main>
  );
}