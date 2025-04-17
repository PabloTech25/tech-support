'use client';

import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div>
      <Navbar />
      <main className="pt-20 bg-gradient-to-b from-blue-500 to-green-500 min-h-screen text-white">
        <motion.section
          className="text-center py-32 md:py-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-8">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6">Quiénes Somos</h1>
            <p className="text-2xl md:text-3xl max-w-3xl mx-auto mb-8">
              Somos un equipo apasionado por la tecnología, dedicado a proporcionar soluciones innovadoras y soporte técnico de calidad.
            </p>
          </div>
        </motion.section>

        <div className="container mx-auto px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <motion.div
              className="bg-gray-800 text-white p-10 rounded-2xl shadow-lg hover:bg-gray-700 transition-colors duration-300"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold mb-6">Nuestra Misión</h2>
              <p className="leading-relaxed">
                Proporcionar soluciones tecnológicas innovadoras y soporte técnico excepcional que impulse el éxito de nuestros clientes,
                garantizando la máxima eficiencia y satisfacción en cada proyecto.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-800 text-white p-10 rounded-2xl shadow-lg hover:bg-gray-700 transition-colors duration-300"
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-semibold mb-6">Nuestra Visión</h2>
              <p className="leading-relaxed">
                Ser líderes reconocidos en el sector tecnológico, destacando por nuestra innovación, calidad de servicio y compromiso
                con el éxito de nuestros clientes.
              </p>
            </motion.div>
          </div>

          <motion.section
            className="mb-24"
            {...fadeIn}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">Nuestros Valores</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
                <div className="text-yellow-500 text-6xl mb-6 inline-block">💡</div>
                <h3 className="text-2xl font-semibold mb-4">Innovación</h3>
                <p>Buscamos constantemente nuevas formas de mejorar y optimizar soluciones.</p>
              </div>
              <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
                <div className="text-yellow-500 text-6xl mb-6 inline-block">🤝</div>
                <h3 className="text-2xl font-semibold mb-4">Compromiso</h3>
                <p>Nos dedicamos al éxito de nuestros clientes como si fuera el nuestro.</p>
              </div>
              <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
                <div className="text-yellow-500 text-6xl mb-6 inline-block">⭐</div>
                <h3 className="text-2xl font-semibold mb-4">Excelencia</h3>
                <p>Mantenemos los más altos estándares en todo lo que hacemos.</p>
              </div>
            </div>
          </motion.section>

          <motion.section
            {...fadeIn}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">Nuestro Equipo</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg text-center hover:bg-gray-700 transition-colors duration-300">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                  {/* <img src="/path/to/ana.jpg" alt="Ana García" className="w-full h-full object-cover" /> */}
                </div>
                <h3 className="text-2xl font-semibold">Ana García</h3>
                <p className="text-yellow-500">CEO</p>
              </div>
              <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg text-center hover:bg-gray-700 transition-colors duration-300">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden"></div>
                <h3 className="text-2xl font-semibold">Carlos Ruiz</h3>
                <p className="text-yellow-500">CTO</p>
              </div>
              <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg text-center hover:bg-gray-700 transition-colors duration-300">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden"></div>
                <h3 className="text-2xl font-semibold">Laura Martínez</h3>
                <p className="text-yellow-500">Directora de Proyectos</p>
              </div>
              <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg text-center hover:bg-gray-700 transition-colors duration-300">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden"></div>
                <h3 className="text-2xl font-semibold">Miguel Torres</h3>
                <p className="text-yellow-500">Lead Developer</p>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
