"use server"

import { prisma } from "@/prismaClient"

interface CreateNoteParams {
  title?: string
  content: string
}

export default async function createNote({ title, content }: CreateNoteParams) {
  return await prisma.note.create({
    data: {
      title,
      content,
    },
  })
}
