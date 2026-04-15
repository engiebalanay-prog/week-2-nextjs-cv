import PersonForm from "@/components/PersonForm";
import { createPerson } from "@/lib/actions";
import Link from "next/link";

export default function NewPersonPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Link href="/persons" className="text-blue-500 hover:underline text-sm mb-4 inline-block">
        &larr; Back to Persons
      </Link>
      <h1 className="text-2xl font-bold text-zinc-900 mb-6">Add New Person</h1>
      <PersonForm action={createPerson} submitLabel="Create Person" />
    </div>
  );
}
