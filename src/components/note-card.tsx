import { Note } from "@prisma/client"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import EditNoteMenu from "./edit-note-menu"

const NoteCard = ({ title, content, id }: Note) => {
  return (
    <Card className="w-60 min-h-32 relative">
      <EditNoteMenu id={id} />

      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{content}</CardContent>
    </Card>
  )
}
export default NoteCard
