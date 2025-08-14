'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import {
  groups,
  groupedPieces,
  type GroupName,
  type Piece,
} from '@/data/pieces';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9 3a1 1 0 1 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H3a1 1 0 1 1 0-2h6V3z" />
    </svg>
  );
}

function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4 10a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" />
    </svg>
  );
}

type GalleryGroupProps = {
  groupName: GroupName;
  title: string;
  photoSrc: string;
  items: Piece[];
};

type ModalImageProps = {
  src: string;
  alt: string;
  /**
   * This prop should only receive `button` elements.
   */
  triggerContent: React.ReactElement<React.ComponentProps<'button'>, 'button'>;
};

function ModalImage({ src, alt, triggerContent }: ModalImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerContent}</DialogTrigger>
      <DialogContent className="p-2 bg-neutral-100 dark:bg-neutral-900 border-0 h-[95vh] max-h-[700px] sm:max-h-[950px] flex items-center justify-center">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogDescription className="sr-only">{alt}</DialogDescription>
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 90vw, 950px"
            className="object-contain rounded-md"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

const AnimatedLink = motion(Link);

function GalleryGroup({
  groupName,
  title,
  photoSrc,
  items,
}: GalleryGroupProps) {
  const [open, setOpen] = useState(false);
  const firstTwo = items.slice(0, 2);
  const rest = items.slice(2);

  return (
    <section
      id={`group-${groupName}`}
      aria-labelledby={`group-${groupName}`}
      className="scroll-mt-16"
    >
      <Link href={`#group-${groupName}`}>
        <h3 className="text-lg text-center sm:text-2xl font-semibold">
          {title}
        </h3>
      </Link>

      <ModalImage
        src={photoSrc}
        alt={`${title} modelo`}
        triggerContent={
          <button
            type="button"
            aria-label="Ampliar imagen del modelo"
            className="relative mt-4 w-4/5 mx-auto max-w-[400px] block aspect-[3/4] overflow-hidden rounded-sm bg-neutral-100 shadow-sm"
          >
            <Image
              src={photoSrc}
              alt={`${title} modelo`}
              fill
              sizes="(max-width: 640px) 100vw, 100vw"
              className="object-cover"
              priority
            />
          </button>
        }
      />

      <Collapsible open={open} onOpenChange={setOpen}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 mt-4">
          {firstTwo.map((p) => (
            <Link
              key={p.id}
              href={`/pieces/${p.id}`}
              className="group relative block aspect-[3/4] overflow-hidden rounded-sm bg-neutral-100 shadow-sm"
              aria-label={`Ver ${p.alt || p.id}`}
            >
              <Image
                src={p.imageSrc || '/placeholder.svg'}
                alt={p.alt || p.id}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={p.priority ?? false}
              />
            </Link>
          ))}

          <CollapsibleContent className="contents">
            <AnimatePresence>
              {open &&
                rest.map((p, index) => (
                  <AnimatedLink
                    href={`/pieces/${p.id}`}
                    className="group relative block aspect-[3/4] overflow-hidden rounded-sm bg-neutral-100 shadow-sm"
                    aria-label={`Ver ${p.alt || p.id}`}
                    key={p.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.05 * (index % 3),
                      ease: 'easeOut',
                    }}
                  >
                    <Image
                      src={p.imageSrc || '/placeholder.svg'}
                      alt={p.alt || p.id}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={p.priority ?? false}
                    />
                  </AnimatedLink>
                ))}
            </AnimatePresence>
          </CollapsibleContent>
        </div>

        {rest.length > 0 && (
          <div className="mt-4 flex justify-center items-center">
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="rounded-full">
                {open ? (
                  <span className="inline-flex items-center gap-2">
                    <MinusIcon className="size-4" /> Ver menos
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <PlusIcon className="size-4" /> Ver más
                  </span>
                )}
              </Button>
            </CollapsibleTrigger>
          </div>
        )}
      </Collapsible>
    </section>
  );
}

export function GroupedGalleries() {
  const orderedGroups = groups; // keeps desired order from data

  return (
    <div className="space-y-20">
      {orderedGroups.map((g) => (
        <GalleryGroup
          key={g.name}
          groupName={g.name}
          title={g.title}
          photoSrc={g.photoSrc}
          items={groupedPieces[g.name]}
        />
      ))}
    </div>
  );
}
