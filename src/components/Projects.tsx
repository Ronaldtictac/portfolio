import Link from "next/link";

const projects = [
  {
    title: "Ama Store",
    emoji: "🛒",
    description: "E-commerce Full Stack con autenticación JWT, catálogo de productos, carrito de compras y panel de administración.",
    tech: ["Next.js 15", "TypeScript", "React 19", "Prisma", "PostgreSQL"],
    demo: "https://proyecto-ama-store.vercel.app/",
    repo: "#",
  },
  {
    title: "New Life Cup",
    emoji: "⚽",
    description: "Plataforma de gestión de torneos deportivos con control de partidos en vivo, brackets y app Android.",
    tech: ["Vanilla JS", "Vite 5", "Supabase", "Capacitor"],
    demo: "https://proyecto-new-life.vercel.app/",
    repo: "#",
  },
  {
    title: "Bodega Armados",
    emoji: "📦",
    description: "App móvil para gestión de inventarios con modo offline, sincronización con backend y autenticación JWT.",
    tech: ["Flutter", "Django", "DRF", "PostgreSQL", "SQLite"],
    demo: "https://gorgeous-otter-80323b.netlify.app/",
    repo: "https://gitlab.com/vita-group8455532/bodega_armados",
  },
  {
    title: "Linga AI",
    emoji: "🤖",
    description: "Aplicación de aprendizaje de idiomas potenciada por IA con speech-to-text y text-to-speech.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Gemini", "Groq"],
    demo: "https://lingo-ai-dusky.vercel.app/",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Screenshot placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-6xl">{project.emoji}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 text-accent hover:text-primary font-medium text-sm transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </Link>
                  <Link
                    href={project.repo}
                    target="_blank"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary font-medium text-sm transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Código
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
