import { notFound } from 'next/navigation';
import { photos, getPhotoById } from '@/data/photos';
import { PhotoDetail } from '@/components/photo-detail';

export async function generateStaticParams() {
  return photos.map((p) => ({ id: p.id }));
}

export default async function PhotoPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const photo = getPhotoById(id);
  if (!photo) return notFound();

  return (
    <div className="container mx-auto max-w-screen-sm px-3 py-2 sm:py-4">
      <PhotoDetail photo={photo} />
    </div>
  );
}
