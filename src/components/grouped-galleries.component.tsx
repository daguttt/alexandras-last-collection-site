'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import {
  groups,
  groupedPieces,
  type GroupName,
  type Piece,
} from '@/data/pieces';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

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

type GalleryItemProps = {
  piece: Piece;
};
function GalleryItem({
  piece,
  ref,
}: GalleryItemProps & { ref?: RefObject<HTMLAnchorElement> }) {
  return (
    <Link
      ref={ref}
      key={piece.id}
      href={`/pieces/${piece.id}`}
      className="group relative block aspect-[3/4] overflow-hidden rounded-sm bg-neutral-100 shadow-sm"
      aria-label={`Ver ${piece.alt || piece.id}`}
      scroll={false}
    >
      <Image
        src={piece.imageSrc || '/placeholder.svg'}
        alt={piece.alt || piece.id}
        fill
        sizes="(max-width: 640px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority={piece.priority ?? false}
      />
    </Link>
  );
}

function useGalleryContainerHeight({
  shouldObserve,
}: {
  shouldObserve: boolean;
}) {
  const firstGalleryItemRef = useRef<HTMLElement>(null);
  const [galleryContainerHeight, setGalleryContainerHeight] =
    useState<number>(200);

  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null;
    if (firstGalleryItemRef.current && shouldObserve) {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const itemHeight = entry.contentBoxSize[0].inlineSize;
          const newHeight = Math.max(itemHeight * 1.8, 200);

          setGalleryContainerHeight(newHeight);
        }
      });
      resizeObserver.observe(firstGalleryItemRef.current);
    }
    return () => {
      resizeObserver?.disconnect();
    };
  }, []);

  return {
    firstGalleryItemRef,
    galleryContainerHeight,
  };
}

const galleryGroupVariants = {
  open: {
    height: 'auto',
  },
  closed: {
    height: 'var(--gallery-to-height)',
  },
};

type GalleryGroupProps = {
  groupName: GroupName;
  title: string;
  photoSrc: string;
  pieces: Piece[];
};
function GalleryGroup({
  groupName,
  title,
  photoSrc,
  pieces,
}: GalleryGroupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const [firstPiece, ...restPieces] = pieces;

  const enoughPiecesToHide = pieces.length > 3;
  const shouldHidePieces = !isOpen && enoughPiecesToHide;

  const { firstGalleryItemRef, galleryContainerHeight } =
    useGalleryContainerHeight({ shouldObserve: enoughPiecesToHide });

  const handleGalleryOpenChange = (open: boolean) => {
    if (!open) {
      router.push(`#group-${groupName}`);
    }
    setIsOpen(open);
  };

  return (
    <section
      id={`group-${groupName}`}
      aria-labelledby={`group-${groupName}`}
      className="scroll-mt-16"
    >
      <Link href={`#group-${groupName}`}>
        <h3 className="text-lg text-center sm:text-2xl font-semibold font-fogtwono5">
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

      <div
        className="relative"
        style={
          {
            '--gallery-to-height': `${galleryContainerHeight}px`,
          } as CSSProperties
        }
      >
        <motion.div
          id={`group-${groupName}-gallery`}
          variants={galleryGroupVariants}
          initial={false}
          animate={shouldHidePieces ? 'closed' : 'open'}
          transition={{ duration: 0.4 }}
          className={cn(
            'grid grid-cols-2 sm:grid-cols-3 auto-rows-min gap-1 sm:gap-2 mt-4 relative pb-2 overflow-hidden'
          )}
        >
          {shouldHidePieces && (
            <div
              className={cn(
                'absolute bottom-0 left-0 right-0 h-[30%] z-10 bg-background',
                !isOpen && 'mask-t-to-80%'
              )}
            />
          )}
          <GalleryItem
            piece={firstPiece}
            ref={firstGalleryItemRef as RefObject<HTMLAnchorElement>}
          />
          {restPieces.map((p) => (
            <GalleryItem key={p.id} piece={p} />
          ))}
        </motion.div>
      </div>
      {enoughPiecesToHide && (
        <div className="mt-4 flex justify-center items-center">
          <Button
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-controls={`group-${groupName}-gallery`}
            variant="outline"
            className="rounded-full"
            onClick={() => handleGalleryOpenChange(!isOpen)}
          >
            {isOpen ? (
              <span className="inline-flex items-center gap-2">
                <MinusIcon className="size-4" /> Ver menos
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <PlusIcon className="size-4" /> Ver más
              </span>
            )}
          </Button>
        </div>
      )}
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
          pieces={groupedPieces[g.name]}
        />
      ))}
    </div>
  );
}
