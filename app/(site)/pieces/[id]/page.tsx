import { notFound } from 'next/navigation';
import { pieces, getPieceByPieceId } from '@/data/pieces';
import { PieceDetail } from '@/components/piece-detail';

export async function generateStaticParams() {
  return pieces.map((p) => ({ id: p.id }));
}

export default async function PiecePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const piece = getPieceByPieceId(id);
  if (!piece) return notFound();

  return (
    <div className="container mx-auto max-w-screen-sm px-3 py-2 sm:py-4">
      <PieceDetail piece={piece} />
    </div>
  );
}
