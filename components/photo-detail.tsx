'use client';

import Image from 'next/image';
import { useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';

type Photo = {
  id: string;
  src: string;
  alt: string;
};

const WHATSAPP_NUMBER = '5215512345678'; // Mismo número que en el FAB. Cambia aquí también.

export function PhotoDetail({
  photo,
  inModal = false,
}: {
  photo: Photo;
  inModal?: boolean;
}) {
  const pageUrl = useMemo(() => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/photo/${photo.id}`;
    }
    return `/photo/${photo.id}`;
  }, [photo.id]);

  const imageUrl = useMemo(() => {
    if (typeof window !== 'undefined') {
      if (photo.src.startsWith('http')) return photo.src;
      return `${window.location.origin}${photo.src}`;
    }
    return photo.src;
  }, [photo.src]);

  const handleWhatsAppClick = useCallback(() => {
    const text = `Hola Alexandra, ¡me encanta esta pieza! 🧡\n\nEnlace de la pieza: ${pageUrl}\nImagen: ${imageUrl}`;
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;
    window.open(href, '_blank', 'noopener,noreferrer');
  }, [pageUrl, imageUrl]);

  return (
    <div className="relative">
      <div
        className={`relative mx-auto w-full overflow-hidden rounded-md bg-neutral-100`}
        style={{ touchAction: 'manipulation' }}
      >
        <div className="relative aspect-[3/4]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 640px) 100vw, 600px"
            className="object-contain transition-transform duration-300"
            priority
          />
        </div>
      </div>

      {/* Sticky CTA (matches wireframe). We keep it inside modal too for consistency. */}
      <div className={`bottom-0 mt-3 ${inModal ? 'relative' : 'sticky'}`}>
        <div className="flex items-center gap-2 rounded-xl bg-white p-2 shadow-none border-0">
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
