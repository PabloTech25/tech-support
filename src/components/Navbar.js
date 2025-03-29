'use client';

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white fixed w-full top-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tech Support</h1>
        <div className="space-x-4">
          <Link href="/">Inicio</Link>
          <Link href="/about">Quiénes Somos</Link>
          <Link href="/services">Servicios</Link>
          <Link href="/projects">Proyectos</Link>
          <Link href="/testimonials">Testimonios</Link>
          <Link href="/contact">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
