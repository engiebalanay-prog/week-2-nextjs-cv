const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Prisma ORM", "PostgreSQL (Vercel Neon)", "REST APIs", "Server Actions"],
  },
  {
    title: "AI & MCP Tools",
    skills: ["GitHub Copilot", "Claude Desktop", "MCP Protocol", "MCP Server Development", "v0.dev"],
  },
  {
    title: "DevOps & Workflow",
    skills: ["Git", "GitHub", "Vercel Deployment", "VS Code", "npm"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-zinc-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-zinc-900 mb-8">Skills &amp; Technologies</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
