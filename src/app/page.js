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
    <div className="bg-gradient-to-b from-gray-900 to-[#1E1B2E]">
      <Navbar />
      
      {/* Hero Section mejorado */}
      <motion.section
         className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden pt-24 md:pt-0" // Añadido pt-24 para móvil
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1 }}
      >
        {/* Efectos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl" />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Soluciones Tecnológicas Innovadoras
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Transformamos ideas en realidad digital con soluciones personalizadas y soporte técnico experto
          </motion.p>

          {/* Botones CTA */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href="#contact" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105"
            >
              Comenzar Proyecto
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/40 text-white rounded-full font-semibold transition-all transform hover:scale-105"
            >
              Explorar Servicios
            </a>
          </motion.div>

          {/* Estadísticas o logros */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-500">100+</h3>
              <p className="text-gray-400">Proyectos Completados</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-500">95%</h3>
              <p className="text-gray-400">Clientes Satisfechos</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-500">10+</h3>
              <p className="text-gray-400">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-500">24/7</h3>
              <p className="text-gray-400">Soporte Técnico</p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.section>

      {/* Resto de secciones */}
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
