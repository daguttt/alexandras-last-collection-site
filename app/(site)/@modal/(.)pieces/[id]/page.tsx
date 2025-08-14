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
import { PieceDetail } from '@/components/piece-detail';

export default function PieceInterceptedModalPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const [open, setOpen] = useState(true);

  const piece = getPieceByPieceId(params.id);

  useEffect(() => {
    setOpen(true);
  }, [params.id]);

  if (!piece) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) router.back();
      }}
    >
      <DialogContent className="p-0 max-w-[95vw] sm:max-w-lg bg-white">
        <DialogTitle className="sr-only">{piece.alt}</DialogTitle>
        <DialogDescription className="sr-only">{piece.alt}</DialogDescription>
        <PieceDetail piece={piece} inModal />
      </DialogContent>
    </Dialog>
  );
}
