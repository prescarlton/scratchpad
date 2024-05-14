import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

interface NoteCardProps {
  title: string | null
  content: string
}

const NoteCard = ({ title, content }: NoteCardProps) => {
  return (
    <Card className="w-60 min-h-32">
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
