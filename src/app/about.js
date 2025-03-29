'use client';

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";


export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div>
      <Navbar />
      <main className="pt-20 bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <motion.section
          className="bg-blue-600 text-white py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Quiénes Somos</h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Somos un equipo apasionado por la tecnología, dedicado a proporcionar soluciones innovadoras y soporte técnico de calidad.
            </p>
          </div>
        </motion.section>

        <div className="container mx-auto px-4 py-16">
          {/* Misión y Visión */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Nuestra Misión</h2>
              <p className="text-gray-700">
                Proporcionar soluciones tecnológicas innovadoras y soporte técnico excepcional que impulse el éxito de nuestros clientes, 
                garantizando la máxima eficiencia y satisfacción en cada proyecto.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Nuestra Visión</h2>
              <p className="text-gray-700">
                Ser líderes reconocidos en el sector tecnológico, destacando por nuestra innovación, calidad de servicio y compromiso 
                con el éxito de nuestros clientes.
              </p>
            </motion.div>
          </div>

          {/* Valores */}
          <motion.section
            className="mb-16"
            {...fadeIn}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-blue-600 text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-3">Innovación</h3>
                <p className="text-gray-700">Buscamos constantemente nuevas formas de mejorar y optimizar soluciones.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-blue-600 text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3">Compromiso</h3>
                <p className="text-gray-700">Nos dedicamos al éxito de nuestros clientes como si fuera el nuestro.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-blue-600 text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-bold mb-3">Excelencia</h3>
                <p className="text-gray-700">Mantenemos los más altos estándares en todo lo que hacemos.</p>
              </div>
            </div>
          </motion.section>

          {/* Equipo */}
          <motion.section
            {...fadeIn}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Ana García</h3>
                <p className="text-gray-600">CEO</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Carlos Ruiz</h3>
                <p className="text-gray-600">CTO</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Laura Martínez</h3>
                <p className="text-gray-600">Directora de Proyectos</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Miguel Torres</h3>
                <p className="text-gray-600">Lead Developer</p>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
