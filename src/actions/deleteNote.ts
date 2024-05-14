import { prisma } from "@/prismaClient"
import { Note } from "@prisma/client"

interface DeleteNoteParams {
  id: Note["id"]
}

export default async function deleteNote({ id }: DeleteNoteParams) {
  return await prisma.note.delete({ where: { id } })
}
