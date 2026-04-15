import { getPerson, updatePerson } from "@/lib/actions";
import PersonForm from "@/components/PersonForm";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EditPersonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const person = await getPerson(id);

  if (!person) notFound();

  const updateWithId = updatePerson.bind(null, id);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Link href={`/persons/${id}`} className="text-blue-500 hover:underline text-sm mb-4 inline-block">
        &larr; Back to {person.name}
      </Link>
      <h1 className="text-2xl font-bold text-zinc-900 mb-6">Edit {person.name}</h1>
      <PersonForm person={person} action={updateWithId} submitLabel="Save Changes" />
    </div>
  );
}
