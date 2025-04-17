'use client';

import { motion } from "framer-motion";
import TestimonialCard from "../../components/TestimonialCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const testimonials = [
  {
    name: "María González",
    role: "Directora de Marketing",
    company: "TechCorp",
    image: "/testimonials/maria.jpg",
    testimonial: "El equipo demostró un nivel excepcional de profesionalismo y creatividad. Transformaron nuestra visión en una realidad digital que superó nuestras expectativas."
  },
  {
    name: "Carlos Ruiz",
    role: "CEO",
    company: "Innovatech",
    image: "/testimonials/carlos.jpg",
    testimonial: "La atención al detalle y la capacidad de entender nuestras necesidades fue impresionante. El resultado final es un sitio web que verdaderamente representa nuestra marca."
  },
  {
    name: "Ana Martínez",
    role: "Gerente de Proyectos",
    company: "Digital Solutions",
    image: "/testimonials/ana.jpg",
    testimonial: "La comunicación fue excelente durante todo el proyecto. Su experiencia técnica y consejos fueron invaluables para lograr los objetivos que buscábamos."
  },
  // Puedes agregar más testimonios aquí
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#13111C] to-[#1E1B2E]">
      <Navbar />
      <main className="pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 max-w-7xl relative"
        >
          {/* Efecto de brillo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-32 w-1/2 bg-purple-500/20 blur-[100px] rounded-full" />

          <div className="text-center mb-12 relative">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Lo que dicen nuestros clientes
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Descubre por qué nuestros clientes confían en nosotros para sus proyectos digitales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
