export type Photo = {
  id: string
  src: string
  alt: string
  priority?: boolean
}

export const photos: Photo[] = [
  {
    id: "1",
    src: "/images/tigereye-tear-pendant-chain.png",
    alt: "Collar de plata con dije lágrima de ojo de tigre.",
    priority: true,
  },
  {
    id: "2",
    src: "/images/tigereye-double-ring.jpeg",
    alt: "Anillo ajustable de plata con dos piedras de ojo de tigre y cristales.",
    priority: true,
  },
  {
    id: "3",
    src: "/images/tigereye-tear-pendant-detail.jpeg",
    alt: "Detalle del dije lágrima de ojo de tigre y broche de la cadena en plata.",
    priority: true,
  },
  {
    id: "4",
    src: "/images/white-marquise-ring.jpg",
    alt: "Anillo de plata tejido con piedra blanca forma marquise y cristales.",
  },
  {
    id: "5",
    src: "/images/dark-teardrop-necklace.jpeg",
    alt: "Collar de plata con dije lágrima facetada oscura y acentos dorados.",
  },
  {
    id: "6",
    src: "/images/amber-crystal-earrings.jpeg",
    alt: "Aretes colgantes de plata con cristales color ámbar.",
  },
  {
    id: "7",
    src: "/images/tigereye-heart-bracelet.jpeg",
    alt: "Pulsera de plata con dije corazón de ojo de tigre.",
  },
  {
    id: "8",
    src: "/images/translucent-heart-necklace.jpeg",
    alt: "Collar de plata con dije corazón translúcido y cuentas.",
  },
  {
    id: "9",
    src: "/images/tigereye-tear-necklace.jpeg",
    alt: "Collar de plata con dije lágrima de ojo de tigre y cuentas marrones.",
  },
  {
    id: "10",
    src: "/images/bicolor-beads-bracelet.jpeg",
    alt: "Pulsera de plata con cuentas en blanco y negro y cristales.",
  },
]

export function getPhotoById(id: string) {
  return photos.find((p) => p.id === id)
}
