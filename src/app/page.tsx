"use client"
import listNotes from "@/actions/listNotes"
import CreateNoteDialog from "@/components/create-note-dialog"
import NoteCard from "@/components/note-card"
import { Skeleton } from "@/components/ui/skeleton"
import useSWR from "swr"

export default function Home() {
  const { data: notes, isLoading } = useSWR("list-notes", listNotes)
  return (
    <main className="flex min-h-screen flex-col px-24 py-12 gap-8">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-6xl font-bold">scratchpad</h1>
        <h3>your own personal note keeper</h3>
        <CreateNoteDialog />
      </div>
      <div className="flex gap-4 flex-wrap w-full">
        {isLoading ? (
          <Skeleton className="w-60 h-32 rounded-lg" />
        ) : (
          notes?.map((note) => <NoteCard key={note.id} {...note} />)
        )}
      </div>
    </main>
  )
}
