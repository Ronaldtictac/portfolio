export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 90 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", level: 85 },
        { name: "Django", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Supabase", level: 70 },
      ],
    },
    {
      title: "Mobile",
      skills: [
        { name: "Flutter", level: 75 },
        { name: "Dart", level: 70 },
        { name: "Capacitor", level: 65 },
      ],
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 60 },
        { name: "Linux", level: 75 },
        { name: "Vercel", level: 80 },
      ],
    },
  ];

  return (
    <section id="habilidades" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Habilidades</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-primary mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
