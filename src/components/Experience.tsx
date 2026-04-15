const experiences = [
  {
    role: "AI Agent Developer Intern",
    company: "AI Agent Developer Workshop - AusBiz Consulting",
    period: "April 2026 - Present",
    description: [
      "Set up a professional AI development environment with Node.js, VS Code, GitHub Copilot, and Claude Desktop",
      "Configured and tested 4 MCP servers (Rolldice, Bootcamp AI Agent, Calendar Booking, GitHub) for AI agent communication",
      "Built a portfolio website using Next.js 15, React 19, and Tailwind CSS with AI-assisted development workflows",
      "Developed full-stack applications with Prisma ORM and Vercel Neon PostgreSQL database integration",
      "Built custom MCP servers enabling AI agents to perform CRUD operations on databases",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-zinc-900 mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.role} className="border-l-2 border-blue-500 pl-6">
              <h3 className="font-semibold text-zinc-900 text-lg">{exp.role}</h3>
              <p className="text-blue-600 text-sm font-medium">{exp.company}</p>
              <p className="text-zinc-500 text-sm mb-3">{exp.period}</p>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-zinc-600 text-sm leading-relaxed flex gap-2">
                    <span className="text-blue-400 mt-1 shrink-0">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
