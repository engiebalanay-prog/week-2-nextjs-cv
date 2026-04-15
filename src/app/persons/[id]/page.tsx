import { getPerson, deletePerson } from "@/lib/actions";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PersonDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const person = await getPerson(id);

  if (!person) notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Link href="/persons" className="text-blue-500 hover:underline text-sm mb-4 inline-block">
        &larr; Back to Persons
      </Link>

      <div className="bg-white border border-zinc-200 rounded-lg p-6 max-w-xl">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-zinc-900">{person.name}</h1>
            <p className="text-zinc-500 text-sm">{person.email}</p>
          </div>
          {person.photo && (
            <img
              src={person.photo}
              alt={person.name}
              className="w-16 h-16 rounded-full object-cover"
            />
          )}
        </div>

        {person.bio && (
          <div className="mb-4">
            <h3 className="text-sm font-medium text-zinc-700 mb-1">Bio</h3>
            <p className="text-zinc-600 text-sm">{person.bio}</p>
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {person.phone && (
            <div>
              <h3 className="text-sm font-medium text-zinc-700">Phone</h3>
              <p className="text-zinc-600 text-sm">{person.phone}</p>
            </div>
          )}
          {person.address && (
            <div>
              <h3 className="text-sm font-medium text-zinc-700">Address</h3>
              <p className="text-zinc-600 text-sm">{person.address}</p>
            </div>
          )}
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {person.github && (
            <div>
              <h3 className="text-sm font-medium text-zinc-700">GitHub</h3>
              <a
                href={`https://github.com/${person.github}`}
                className="text-blue-500 text-sm hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {person.github}
              </a>
            </div>
          )}
          {person.linkedin && (
            <div>
              <h3 className="text-sm font-medium text-zinc-700">LinkedIn</h3>
              <a
                href={`https://linkedin.com/in/${person.linkedin}`}
                className="text-blue-500 text-sm hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {person.linkedin}
              </a>
            </div>
          )}
          {person.website && (
            <div>
              <h3 className="text-sm font-medium text-zinc-700">Website</h3>
              <a
                href={person.website}
                className="text-blue-500 text-sm hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {person.website}
              </a>
            </div>
          )}
        </div>

        <p className="text-xs text-zinc-400 mb-6">
          Created {person.createdAt.toLocaleDateString()} · Updated{" "}
          {person.updatedAt.toLocaleDateString()}
        </p>

        <div className="flex gap-3">
          <Link
            href={`/persons/${person.id}/edit`}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Edit
          </Link>
          <form action={deletePerson.bind(null, person.id)}>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
