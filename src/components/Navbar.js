"use client";

import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuClick = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const handleServicesMenuClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setServicesMenuOpen(prev => !prev);
  }, []);

  const handleMobileLinkClick = useCallback(() => {
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-[#1E3A8A]/90 via-[#1E2A5A]/90 to-[#1E1B2E]/90 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-r from-[#1E3A8A] via-[#1E2A5A] to-[#1E1B2E]'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-[0.98]"
          >
            <h1 className="text-2xl font-bold text-white">
              Servicios Informáticos
            </h1>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/about">¿Quiénes Somos?</NavLink>
            <div className="relative group">
              <button 
                className="flex items-center gap-2 text-white py-2 transition-all group outline-none focus:outline-none"
                aria-haspopup="true"
                aria-expanded={servicesMenuOpen}
              >
                Nuestros Servicios
                <FaChevronDown className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-gradient-to-b from-[#1E3A8A] to-[#1E1B2E] rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-white/10 backdrop-blur-sm">
                {[
                  { href: "/services/pc", text: "Soporte técnico para PC", icon: "🖥️" },
                  { href: "/services/laptops", text: "Reparación de Laptops", icon: "💻" },
                  { href: "/services/mac", text: "Desarrollo de Aplicaciones", icon: "📱" },
                  { href: "/services/cloud", text: "Desarrollo Web", icon: "🌐" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition-colors first:rounded-t-xl last:rounded-b-xl"
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
            <NavLink href="/proyectos">Proyectos</NavLink>
            <NavLink href="/testimonios">Testimonios</NavLink>
            <NavLink href="/contact">Contacto</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={handleMobileMenuClick}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-gradient-to-b from-[#1E3A8A] to-[#1E1B2E] border-t border-white/10"
            >
              <div className="px-4 py-2 space-y-1">
                <MobileNavLink href="/" onClick={handleMobileLinkClick}>
                  Inicio
                </MobileNavLink>
                <MobileNavLink href="/about" onClick={handleMobileLinkClick}>
                  ¿Quiénes Somos?
                </MobileNavLink>
                <div className="py-2">
                  <button
                    onClick={handleServicesMenuClick}
                    className="w-full flex items-center justify-between text-white px-4 py-3 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <span>Nuestros Servicios</span>
                    <FaChevronDown 
                      className={`transition-transform duration-300 ${
                        servicesMenuOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 space-y-1 mt-1"
                      >
                        {[
                          { href: "/services/pc", text: "Soporte técnico para PC", icon: "🖥️" },
                          { href: "/services/laptops", text: "Reparación de Laptops", icon: "💻" },
                          { href: "/services/mac", text: "Desarrollo de Aplicaciones", icon: "📱" },
                          { href: "/services/cloud", text: "Desarrollo Web", icon: "🌐" },
                        ].map((item, index) => (
                          <MobileNavLink
                            key={index}
                            href={item.href}
                            onClick={handleMobileLinkClick}
                            className="flex items-center gap-2 pl-4"
                          >
                            <span>{item.icon}</span>
                            <span>{item.text}</span>
                          </MobileNavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <MobileNavLink href="/proyectos" onClick={handleMobileLinkClick}>
                  Proyectos
                </MobileNavLink>
                <MobileNavLink href="/testimonios" onClick={handleMobileLinkClick}>
                  Testimonios
                </MobileNavLink>
                <MobileNavLink href="/contact" onClick={handleMobileLinkClick}>
                  Contacto
                </MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-gray-300 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}