"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";
import { title } from "process";
import { Stringifier } from "postcss";

export async function create(formData: FormData) {
  const input = formData.get("input") as string;

  const message = formData.get("message") as string; //Acá llega el message, pero no lo puedo poner en el prisma porque me sale error

  if (!input.trim()) {
    return;
  }

  await prisma.todo.create({
    data: {
      title: input,
      mensaje : message
    },
  });

  revalidatePath("/");
}

export async function changeStatus(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const todo = await prisma.todo.findUnique({ where: { id: inputId } });

  if (!todo) {
    return;
  }

  const updatedStatus = !todo?.isCompleted;
  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      isCompleted: updatedStatus,
    },
  });
  revalidatePath("/");

  return updatedStatus;
}

export async function edit(formData: FormData) {
  const input = formData.get("newTitle") as string;
  const inputId = formData.get("inputId") as string;
  const messageEdit = formData.get("messageEdit") as string


  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      title: input,
      mensaje : messageEdit
    },
  });
  revalidatePath("/");
}


export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string

  await prisma.todo.delete({
    where : {
      id : inputId,
    },
  })

  revalidatePath("/")
}