import { notFound } from 'next/navigation';
import { pieces, getPieceByPieceId } from '@/data/pieces';
import { PieceDetail } from '@/components/piece-detail';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return pieces.map((p) => ({ id: p.id }));
}

type PiecePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: PiecePageProps): Promise<Metadata> {
  const { id } = await params;
  const piece = getPieceByPieceId(id);
  if (!piece) return notFound();

  return {
    openGraph: {
      images: [
        {
          url: piece.imageSrc,
          alt: piece.alt,
        },
      ],
    },
  };
}

export default async function PiecePage({ params }: PiecePageProps) {
  const { id } = await params;
  const piece = getPieceByPieceId(id);
  if (!piece) return notFound();

  return (
    <div className="container mx-auto max-w-screen-sm px-3 py-2 sm:py-4">
      <PieceDetail piece={piece} />
    </div>
  );
}
