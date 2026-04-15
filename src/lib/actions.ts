"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getPersons() {
  return prisma.person.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getPerson(id: string) {
  return prisma.person.findUnique({ where: { id } });
}

export async function createPerson(formData: FormData) {
  await prisma.person.create({
    data: {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      address: (formData.get("address") as string) || "",
      bio: (formData.get("bio") as string) || "",
      photo: (formData.get("photo") as string) || "",
      github: (formData.get("github") as string) || "",
      linkedin: (formData.get("linkedin") as string) || "",
      website: (formData.get("website") as string) || "",
    },
  });
  revalidatePath("/persons");
  redirect("/persons");
}

export async function updatePerson(id: string, formData: FormData) {
  await prisma.person.update({
    where: { id },
    data: {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      address: (formData.get("address") as string) || "",
      bio: (formData.get("bio") as string) || "",
      photo: (formData.get("photo") as string) || "",
      github: (formData.get("github") as string) || "",
      linkedin: (formData.get("linkedin") as string) || "",
      website: (formData.get("website") as string) || "",
    },
  });
  revalidatePath("/persons");
  redirect("/persons");
}

export async function deletePerson(id: string) {
  await prisma.person.delete({ where: { id } });
  revalidatePath("/persons");
  redirect("/persons");
}
