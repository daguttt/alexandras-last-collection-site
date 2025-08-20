'use client';

import Image from 'next/image';
import { useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { Piece } from '@/data/pieces';
import { cx } from 'class-variance-authority';

export function PieceDetail({
  piece,
  inModal = false,
}: {
  piece: Piece;
  inModal?: boolean;
}) {
  const pageUrl = useMemo(() => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/pieces/${piece.id}`;
    }
    return `/pieces/${piece.id}`;
  }, [piece.id]);

  const handleWhatsAppClick = useCallback(() => {
    const text = `Hola Alexandra, ¡me encanta la pieza con el código: ${piece.id}!\n\nEnlace de la pieza: ${pageUrl}\n`;
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;
    window.open(href, '_blank', 'noopener,noreferrer');
  }, [pageUrl]);

  return (
    <div className="relative rounded-md">
      <div
        className={cx(
          'relative mx-auto w-full bg-neutral-100 touch-manipulation',
          inModal && 'max-h-[80vh] overflow-y-auto'
        )}
      >
        <div className="relative aspect-[3/4]">
          <Image
            src={piece.imageSrc}
            alt={piece.alt}
            fill
            sizes="(max-width: 640px) 100vw, 600px"
            className="object-contain transition-transform duration-300"
            priority
          />
        </div>
      </div>

      {/* Sticky CTA (matches wireframe). We keep it inside modal too for consistency. */}
      <div className={`bottom-0 mt-3 ${inModal ? 'relative' : 'sticky'}`}>
        <div className="flex items-center gap-2 rounded-xl bg-background p-2 shadow-none border-0">
          <Button
            className="h-12 flex-1 text-base"
            onClick={handleWhatsAppClick}
          >
            ¡La quiero!
          </Button>
        </div>
      </div>
    </div>
  );
}
