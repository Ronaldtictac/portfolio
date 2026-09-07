import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Foto de perfil */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-6xl font-bold shadow-lg">
              MV
            </div>
          </div>

          {/* Contenido */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Milton Ronald
              <span className="block text-primary">Villarreal Minango</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Full-Stack Developer
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-xl">
              React · Next.js · TypeScript · Flutter · Django
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#proyectos"
                className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors shadow-lg"
              >
                Ver Proyectos
              </Link>
              <Link
                href="#contacto"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
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
