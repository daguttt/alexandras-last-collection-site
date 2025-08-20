'use client';

import { PieceDetail } from '@/components/piece-detail';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Piece } from '@/data/pieces';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function PieceModalComponent({ piece }: { piece: Piece }) {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, [piece.id]);

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) router.back();
      }}
    >
      <DialogContent className="p-2 max-w-[95vw] sm:max-w-lg bg-background">
        <DialogTitle className="sr-only">{piece.alt}</DialogTitle>
        <DialogDescription className="sr-only">{piece.alt}</DialogDescription>
        <PieceDetail piece={piece} inModal />
      </DialogContent>
    </Dialog>
  );
}
