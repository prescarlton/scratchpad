"use client"
import { Note } from "@prisma/client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { MoreVertical } from "lucide-react"
import { Button } from "./ui/button"
import deleteNote from "@/actions/deleteNote"
import { mutate } from "swr"
import { toast } from "sonner"

interface EditNoteMenuProps {
  id: Note["id"]
}
const EditNoteMenu = ({ id }: EditNoteMenuProps) => {
  const onClickDelete = async () => {
    await deleteNote({ id }).then(() => {
      toast.success("note deleted")
      mutate("list-notes")
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" className="absolute top-2 right-2">
          <MoreVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Edit Note</DropdownMenuItem>
        <DropdownMenuItem className="text-red-400" onClick={onClickDelete}>
          Delete Note
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default EditNoteMenu
