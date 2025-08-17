import { getPieceByPieceId } from '@/data/pieces';
import { notFound } from 'next/navigation';
import { PieceModalComponent } from './piece-modal.component';
import { pieces } from '@/data/pieces';

export async function generateStaticParams() {
  return pieces.map((p) => ({ id: p.id }));
}

type PieceInterceptedModalPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PieceInterceptedModalPage({
  params,
}: PieceInterceptedModalPageProps) {
  const { id } = await params;
  const piece = getPieceByPieceId(id);
  if (!piece) notFound();

  return <PieceModalComponent piece={piece} />;
}
