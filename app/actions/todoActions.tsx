"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";
import { title } from "process";

export async function create(formData: FormData) {
  const input = formData.get("input") as string;

  await prisma.todo.create({
    data: {
      title: input,
    },
  });
}


//Probando subir los cambios