import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GroupedGalleries } from '@/components/grouped-galleries.component';

export const metadata = {
  title: 'Colección actual • Alexandra Ortiz',
  description: 'Joyería artesanal, ediciones únicas.',
};

export default async function Page() {
  return (
    <>
      <section
        className="bg-white flex items-center justify-center text-gray-900 relative overflow-hidden"
        style={{ height: '75vh' }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary to-primary-dark rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-16 right-16 w-80 h-80 bg-gradient-to-tl from-primary-dark to-primary rounded-full blur-3xl opacity-15"></div>

        <div className="text-center z-10 max-w-2xl px-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight font-fogtwono5">
            Conoce nuestra última colección
          </h1>
          <p className="text-lg sm:text-xl font-light mb-8 opacity-80 leading-relaxed">
            Piezas unicas y exclusivas forjadas a mano en materiales nobles como
            la plata 950, oro de 18 quilates y engastes en{' '}
            <a
              href="https://www.swarovski.com/en-AA/"
              rel="noopener noreferrer"
              className="underline"
              target="_blank"
            >
              swarovski
            </a>{' '}
            hacen parte de cada una de nuestras joyas
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-white hover:bg-primary-dark font-semibold px-8 py-3 text-lg"
          >
            <Link href="#gallery">Ver colección</Link>
          </Button>
        </div>
      </section>

      <section
        id="gallery"
        aria-labelledby="gallery-heading"
        className="container mx-auto max-w-screen-sm px-3 py-4 sm:py-6 scroll-mt-16"
      >
        <h2
          id="gallery-heading"
          className="uppercase text-5xl text-center font-fogtwono5"
        >
          Miracles Collection 2025
        </h2>
        <div className="mt-6">
          <GroupedGalleries />
        </div>
      </section>
    </>
  );
}
