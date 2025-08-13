import { notFound } from 'next/navigation';
import { pieces, getPieceByPieceId } from '@/data/pieces';
import { PhotoDetail } from '@/components/photo-detail';

export async function generateStaticParams() {
  return pieces.map((p) => ({ pieceId: p.id }));
}

export default async function PhotoPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const photo = getPieceByPieceId(id);
  if (!photo) return notFound();

  return (
    <div className="container mx-auto max-w-screen-sm px-3 py-2 sm:py-4">
      <PhotoDetail photo={photo} />
    </div>
  );
}
