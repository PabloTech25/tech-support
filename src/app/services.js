import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";


export default function Services() {
  const services = [
    { title: "Soporte Técnico", description: "Reparación y mantenimiento de equipos" },
    { title: "Desarrollo Web", description: "Sitios y aplicaciones modernas" },
    { title: "Consultoría TI", description: "Optimización de infraestructura tecnológica" },
  ];

  return (
    <div>
      <Navbar />
      <motion.section
        className="container mx-auto py-20"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </motion.section>
    </div>
  );
}