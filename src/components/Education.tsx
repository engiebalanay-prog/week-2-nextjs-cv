export default function Education() {
  return (
    <section id="education" className="py-16 bg-zinc-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-zinc-900 mb-8">Education</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm max-w-lg">
          <h3 className="font-semibold text-zinc-900 text-lg">
            Bachelor of Science in Information Technology
          </h3>
          <p className="text-zinc-500 text-sm mt-1">3rd Year - Currently Enrolled</p>
          <div className="mt-4">
            <p className="text-sm font-medium text-zinc-700 mb-2">Relevant Coursework:</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Web Development",
                "Database Management",
                "Software Engineering",
                "Data Structures",
                "Networking",
              ].map((course) => (
                <span
                  key={course}
                  className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full text-xs"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
