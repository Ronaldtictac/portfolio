"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#" className="text-xl font-bold text-primary">
            Milton<span className="text-accent">.</span>dev
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#proyectos" className="text-gray-600 hover:text-primary transition-colors">
              Proyectos
            </Link>
            <Link href="#habilidades" className="text-gray-600 hover:text-primary transition-colors">
              Habilidades
            </Link>
            <Link href="#contacto" className="text-gray-600 hover:text-primary transition-colors">
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="#proyectos" className="block text-gray-600 hover:text-primary" onClick={() => setIsOpen(false)}>
              Proyectos
            </Link>
            <Link href="#habilidades" className="block text-gray-600 hover:text-primary" onClick={() => setIsOpen(false)}>
              Habilidades
            </Link>
            <Link href="#contacto" className="block text-gray-600 hover:text-primary" onClick={() => setIsOpen(false)}>
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
