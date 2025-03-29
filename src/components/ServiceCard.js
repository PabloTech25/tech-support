import { motion } from "framer-motion";

export default function ServiceCard({ service }) {
  return (
    <motion.div
      className="p-6 bg-blue-600 text-white rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-2xl font-bold">{service.title}</h3>
      <p className="mt-2">{service.description}</p>
    </motion.div>
  );
}
