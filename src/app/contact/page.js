'use client';

import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E3A8A] to-[#1E1B2E]">
      <Navbar />
      <main className="pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 max-w-4xl relative"
        >
          {/* Efecto de brillo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-32 w-1/2 bg-blue-500/20 blur-[100px] rounded-full" />

          <div className="text-center mb-12 relative">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Cuéntanos sobre él y nos pondremos en contacto contigo.
            </p>
          </div>

          <div className="bg-[#1E2A5A]/50 p-8 rounded-xl border border-[#2D4A8A] backdrop-blur-sm shadow-lg shadow-blue-500/10">
            <ContactForm />
          </div>

          {/* Información de contacto adicional */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-[#1E2A5A]/30 rounded-xl border border-[#2D4A8A]/50 backdrop-blur-sm">
              <svg className="w-8 h-8 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="text-white font-medium mb-2">Teléfono</h3>
              <p className="text-gray-300">+52 (123) 456-7890</p>
            </div>

            <div className="p-6 bg-[#1E2A5A]/30 rounded-xl border border-[#2D4A8A]/50 backdrop-blur-sm">
              <svg className="w-8 h-8 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-white font-medium mb-2">Email</h3>
              <p className="text-gray-300">contacto@tuempresa.com</p>
            </div>

            <div className="p-6 bg-[#1E2A5A]/30 rounded-xl border border-[#2D4A8A]/50 backdrop-blur-sm">
              <svg className="w-8 h-8 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-white font-medium mb-2">Ubicación</h3>
              <p className="text-gray-300">Ciudad, Estado, México</p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}