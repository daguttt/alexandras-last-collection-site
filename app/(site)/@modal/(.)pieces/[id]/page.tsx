'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { getPieceByPieceId } from '@/data/pieces';
import { PhotoDetail } from '@/components/photo-detail';

export default function PhotoInterceptedModal() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const [open, setOpen] = useState(true);

  const photo = getPieceByPieceId(params.id);

  useEffect(() => {
    setOpen(true);
  }, [params.id]);

  if (!photo) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) router.back();
      }}
    >
      <DialogContent className="p-0 max-w-[95vw] sm:max-w-lg bg-white">
        <DialogTitle className="sr-only">{photo.alt}</DialogTitle>
        <DialogDescription className="sr-only">{photo.alt}</DialogDescription>
        <PhotoDetail photo={photo} inModal />
      </DialogContent>
    </Dialog>
  );
}
