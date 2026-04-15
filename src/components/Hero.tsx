export default function Hero() {
  return (
    <section className="bg-zinc-900 text-white pb-16 pt-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-zinc-400 text-sm uppercase tracking-widest mb-3">Welcome to my portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Building the future with
            <span className="text-blue-400"> AI Agents</span>
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-8">
            A driven IT student and aspiring AI Agent Developer with hands-on experience in
            full-stack web development, MCP server architecture, and AI-enhanced development
            workflows. Currently completing an intensive workshop program focused on building
            production-ready AI agent systems using modern tools and frameworks.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="border border-zinc-600 hover:border-zinc-400 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
