export default function Header() {
  return (
    <header className="bg-zinc-900 text-white">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Engiemar S. Balanay</h1>
          <p className="text-zinc-400 text-sm mt-1">AI Agent Developer &amp; IT Student</p>
        </div>
        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-zinc-300 transition-colors">About</a>
          <a href="#skills" className="hover:text-zinc-300 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-zinc-300 transition-colors">Experience</a>
          <a href="#education" className="hover:text-zinc-300 transition-colors">Education</a>
          <a href="#contact" className="hover:text-zinc-300 transition-colors">Contact</a>
          <a href="/persons" className="hover:text-zinc-300 transition-colors">Persons</a>
        </nav>
      </div>
    </header>
  );
}
