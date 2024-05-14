import { prisma } from "@/prismaClient"

export default async function listNotes() {
  return await prisma.note.findMany()
}
