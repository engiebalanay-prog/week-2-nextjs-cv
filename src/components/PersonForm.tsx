"use client";

import type { PersonModel } from "@/generated/prisma/models";

type Props = {
  person?: PersonModel | null;
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
};

export default function PersonForm({ person, action, submitLabel }: Props) {
  return (
    <form action={action} className="space-y-5 max-w-xl">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">
          Name *
        </label>
        <input
          id="name"
          name="name"
          required
          defaultValue={person?.name ?? ""}
          className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          defaultValue={person?.email ?? ""}
          className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            defaultValue={person?.phone ?? ""}
            className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-zinc-700 mb-1">
            Address
          </label>
          <input
            id="address"
            name="address"
            defaultValue={person?.address ?? ""}
            className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-zinc-700 mb-1">
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          rows={3}
          defaultValue={person?.bio ?? ""}
          className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="photo" className="block text-sm font-medium text-zinc-700 mb-1">
          Photo URL
        </label>
        <input
          id="photo"
          name="photo"
          defaultValue={person?.photo ?? ""}
          placeholder="https://example.com/photo.jpg"
          className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="github" className="block text-sm font-medium text-zinc-700 mb-1">
            GitHub
          </label>
          <input
            id="github"
            name="github"
            defaultValue={person?.github ?? ""}
            placeholder="username"
            className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-zinc-700 mb-1">
            LinkedIn
          </label>
          <input
            id="linkedin"
            name="linkedin"
            defaultValue={person?.linkedin ?? ""}
            placeholder="username"
            className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-zinc-700 mb-1">
            Website
          </label>
          <input
            id="website"
            name="website"
            defaultValue={person?.website ?? ""}
            placeholder="https://example.com"
            className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          {submitLabel}
        </button>
        <a
          href="/persons"
          className="border border-zinc-300 hover:bg-zinc-50 text-zinc-700 px-5 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}
