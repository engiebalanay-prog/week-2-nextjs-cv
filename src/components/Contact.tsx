export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6">Contact</h2>
        <p className="text-zinc-600 mb-8 max-w-lg">
          Interested in working together or want to learn more about my projects?
          Feel free to reach out through any of the channels below.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 max-w-2xl">
          <a
            href="mailto:engiebalanay@gmail.com"
            className="bg-zinc-50 rounded-lg p-5 hover:bg-zinc-100 transition-colors"
          >
            <p className="font-medium text-zinc-900 text-sm">Email</p>
            <p className="text-zinc-500 text-sm mt-1">engiebalanay@gmail.com</p>
          </a>
          <a
            href="https://github.com/engiebalanay-prog"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-50 rounded-lg p-5 hover:bg-zinc-100 transition-colors"
          >
            <p className="font-medium text-zinc-900 text-sm">GitHub</p>
            <p className="text-zinc-500 text-sm mt-1">engiebalanay-prog</p>
          </a>
          <div className="bg-zinc-50 rounded-lg p-5">
            <p className="font-medium text-zinc-900 text-sm">Location</p>
            <p className="text-zinc-500 text-sm mt-1">Philippines</p>
          </div>
        </div>
      </div>
    </section>
  );
}
