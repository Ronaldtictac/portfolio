"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#" className="text-xl font-bold text-primary dark:text-accent group">
            Milton<span className="text-accent dark:text-primary group-hover:animate-pulse">.</span>dev
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#proyectos" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
              Proyectos
            </Link>
            <Link href="#habilidades" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
              Habilidades
            </Link>
            <Link href="#contacto" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
              Contacto
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-all duration-300 hover:rotate-90 hover:scale-110"
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
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100 py-4 space-y-4' : 'max-h-0 opacity-0'}`}>
          <Link href="#proyectos" className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:translate-x-2 transition-all duration-300" onClick={() => setIsOpen(false)}>
            Proyectos
          </Link>
          <Link href="#habilidades" className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:translate-x-2 transition-all duration-300" onClick={() => setIsOpen(false)}>
            Habilidades
          </Link>
          <Link href="#contacto" className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:translate-x-2 transition-all duration-300" onClick={() => setIsOpen(false)}>
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}
