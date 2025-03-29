'use client';

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../app/about";
import Services from "../app/services";
import Projects from "../app/projects";
import Testimonials from "../app/testimonials";
import Contact from "../app/contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <motion.section
        className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">Soluciones Tecnológicas Innovadoras</h1>
        <p className="mt-4 text-lg md:text-xl">Soporte técnico y desarrollo a tu medida</p>
      </motion.section>
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
