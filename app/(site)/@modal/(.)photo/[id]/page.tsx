"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { getPhotoById } from "@/data/photos"
import { PhotoDetail } from "@/components/photo-detail"

export default function PhotoInterceptedModal() {
  const router = useRouter()
  const params = useParams<{ id: string }>()
  const [open, setOpen] = useState(true)

  const photo = getPhotoById(params.id)

  useEffect(() => {
    setOpen(true)
  }, [params.id])

  if (!photo) return null

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o)
        if (!o) router.back()
      }}
    >
      <DialogContent className="p-0 max-w-[95vw] sm:max-w-lg bg-white">
        <PhotoDetail photo={photo} inModal />
      </DialogContent>
    </Dialog>
  )
}
