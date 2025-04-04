"use client";

import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-[#1E3A8A] p-4 text-white fixed w-full top-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">Servicios Informáticos</h1>
        </div>

        {/* Menú de navegación */}
        <div className="flex space-x-6">
          <Link
            href="/"
            className="relative after:block after:h-1 after:bg-pink-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Inicio
          </Link>
          <Link
            href="/about"
            className="relative after:block after:h-1 after:bg-pink-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            ¿Quiénes Somos?
          </Link>

          {/* Menú desplegable con hover */}
          <div className="relative group">
            <button className="flex items-center gap-1 relative after:block after:h-1 after:bg-pink-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform">
              Nuestros Servicios <FaChevronDown />
            </button>

            {/* Dropdown */}
            <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              {[
                { href: "/services/pc", text: "Soporte técnico para PC" },
                { href: "/services/laptops", text: "Reparación de Laptops" },
                { href: "/services/mac", text: "Desarrollo de Aplicaciones" },
                { href: "/services/cloud", text: "Desarrollo Web" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 hover:bg-pink-600 hover:text-white transition-colors"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/proyectos"
            className="relative after:block after:h-1 after:bg-pink-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Proyectos
          </Link>
          <Link
            href="/testimonios"
            className="relative after:block after:h-1 after:bg-pink-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Testimonios
          </Link>
          <Link
            href="/contact"
            className="relative after:block after:h-1 after:bg-pink-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Contacto
          </Link>
        </div>

        {/* Botón de agendar cita */}
        <div>
          {/* <Link
            href="/cita"
            className="bg-pink-600 px-4 py-2 rounded-lg font-semibold transition hover:bg-pink-700"
          >
            Agenda una cita
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
