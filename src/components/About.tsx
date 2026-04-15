export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6">About Me</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <p className="text-zinc-600 leading-relaxed mb-4">
              I am a 3rd year Bachelor of Science in Information Technology student with a strong
              interest in AI-powered development and modern web technologies. Through the AI Agent
              Developer Workshop, I have gained practical experience building full-stack applications,
              configuring MCP servers, and working with AI tools that are reshaping how software is built.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              My approach to development centers on using AI as a collaborator rather than just a tool.
              I believe the next generation of developers will be defined by their ability to orchestrate
              intelligent agents, and I am building the skills to be part of that shift.
            </p>
          </div>
          <div className="bg-zinc-50 rounded-lg p-6">
            <h3 className="font-semibold text-zinc-900 mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li className="flex justify-between">
                <span className="font-medium text-zinc-800">Name</span>
                <span>Engiemar S. Balanay</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-zinc-800">Role</span>
                <span>AI Agent Developer Intern</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-zinc-800">Education</span>
                <span>BSIT - 3rd Year</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-zinc-800">Focus</span>
                <span>AI Agents &amp; Full-Stack Dev</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-zinc-800">GitHub</span>
                <a href="https://github.com/engiebalanay-prog" className="text-blue-500 hover:underline">
                  engiebalanay-prog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
