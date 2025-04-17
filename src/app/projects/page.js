'use client';

import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    title: "Renovación página del ITS Ciudad Serdán",
    description: "Rediseño completo del sitio web del Instituto Tecnológico Superior de Ciudad Serdán, creado con Joomla para mejorar la experiencia de usuario y modernizar la interfaz.",
    image: "/projects/ITSSerdan.png",
    technologies: [
      { name: "Joomla", color: "bg-[#5091CD]" }
    ],
    projectUrl: "https://ejemplo.com/its-serdan",
    codeUrl: null
  },
  {
    title: "Creación de un blog con React.js y Tailwind CSS",
    description: "Este proyecto demuestra un sistema básico de CRUD (crear, leer, actualizar y eliminar) para publicaciones, con una interfaz moderna y fácil de navegar. Creado desde cero con React.js y Tailwind CSS.",
    image: "/projects/project 2.png",
    technologies: [
      { name: "React.js", color: "bg-[#61DAFB]" },
      { name: "Tailwind CSS", color: "bg-[#06B6D4]" }
    ],
    projectUrl: "https://ejemplo.com/blog-react",
    codeUrl: "https://github.com/ejemplo/blog-react"
  }
];

export default function Projects() {
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-32 w-1/2 bg-purple-500/20 blur-[100px] rounded-full" />
          
          <div className="text-center mb-12 relative">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nuestros Proyectos
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explora nuestra colección de proyectos donde demostramos nuestras capacidades
              y soluciones tecnológicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
} 