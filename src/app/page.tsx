import listNotes from "@/actions/listNotes"
import CreateNoteDialog from "@/components/create-note-dialog"
import NoteCard from "@/components/note-card"

export default async function Home() {
  const notes = await listNotes()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12">
      <div className="flex flex-col gap-4 self-start">
        <h1 className="text-6xl font-bold">scratchpad</h1>
        <h3>your own personal note keeper</h3>
        <CreateNoteDialog />
        <div className="flex gap-4 flex-wrap">
          {notes.map((note) => (
            <NoteCard key={note.id} {...note} />
          ))}
        </div>
      </div>
    </main>
  )
}
