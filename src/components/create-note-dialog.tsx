"use client"
import { PlusIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useState } from "react"
import createNote from "@/actions/createNote"
import { toast } from "./ui/use-toast"

const CreateNoteDialog = () => {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = async () => {
    setLoading(true)
    await createNote({ title, content }).then((res) => {
      toast({ title: "Note created", description: "Your note was created." })
    })
    setLoading(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="self-start gap-2" loading={loading}>
          <PlusIcon /> New Note
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          <DialogHeader>new note</DialogHeader>
        </DialogTitle>
        <Input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="content"
          rows={8}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-end mt-auto">
          <Button onClick={handleSubmit}>Create</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default CreateNoteDialog
