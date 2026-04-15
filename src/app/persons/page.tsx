import Link from "next/link";
import { getPersons } from "@/lib/actions";

export default async function PersonsPage() {
  const persons = await getPersons();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Persons</h1>
          <p className="text-zinc-500 text-sm mt-1">
            {persons.length} {persons.length === 1 ? "person" : "people"} in the database
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/"
            className="border border-zinc-300 hover:bg-zinc-50 text-zinc-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Back to CV
          </Link>
          <Link
            href="/persons/new"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Add Person
          </Link>
        </div>
      </div>

      {persons.length === 0 ? (
        <div className="text-center py-16 bg-zinc-50 rounded-lg">
          <p className="text-zinc-500 mb-4">No persons found</p>
          <Link
            href="/persons/new"
            className="text-blue-500 hover:underline text-sm font-medium"
          >
            Add the first person
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {persons.map((person) => (
            <Link
              key={person.id}
              href={`/persons/${person.id}`}
              className="block bg-white border border-zinc-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-semibold text-zinc-900">{person.name}</h2>
                  <p className="text-zinc-500 text-sm">{person.email}</p>
                  {person.bio && (
                    <p className="text-zinc-600 text-sm mt-2 line-clamp-2">{person.bio}</p>
                  )}
                </div>
                {person.phone && (
                  <span className="text-zinc-400 text-sm shrink-0 ml-4">{person.phone}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
