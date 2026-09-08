import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Foto de perfil */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 group-hover:opacity-100 blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse"></div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg ring-4 ring-primary/20 dark:ring-accent/30 group-hover:ring-accent/40 transition-all duration-500 group-hover:scale-105">
                <Image
                  src="/profile.jpeg"
                  alt="Milton Ronald Villarreal Minango"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Milton Ronald
              <span className="block text-primary dark:text-accent">Villarreal Minango</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Full-Stack Developer
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-xl">
              React · Next.js · TypeScript · Flutter · Django
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#proyectos"
                className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Ver Proyectos
              </Link>
              <Link
                href="#contacto"
                className="px-8 py-3 border-2 border-primary dark:border-accent text-primary dark:text-accent rounded-lg font-medium hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Contactarme
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
