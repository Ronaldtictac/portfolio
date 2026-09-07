export default function About() {
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "📘" },
    { name: "Flutter", icon: "🎯" },
    { name: "Django", icon: "🐍" },
    { name: "PostgreSQL", icon: "🗄️" },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre Mí</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
            Desarrollador Full-Stack autodidacta y estudiante de Desarrollo de Software
            en el Instituto Tecnoecuatoriano. Me aplica crear aplicaciones completas desde
            cero, y ya tengo <span className="font-semibold text-primary">4 proyectos desplegados en producción</span>.
            Busco mi primera oportunidad profesional para aportar valor en un equipo de desarrollo.
          </p>

          {/* Tech Stack */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-3xl mb-2">{tech.icon}</span>
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
