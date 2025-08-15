export type GroupName = 'tigereye-gemstone' | 'moon-stone-and-ruby-spinel';

export type Piece = {
  id: string;
  imageSrc: string;
  alt: string;
  filename: string;
  group: GroupName;
  priority?: boolean;
};

export type Group = {
  name: GroupName;
  photoSrc: string;
  title: string;
};

export const tigereyeGemstoneGroup: Group = {
  title: 'Piedra preciosa Ojo de Tigre',
  name: 'tigereye-gemstone',
  photoSrc:
    'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7nd5vwPTWHYWeqFfxOHMymSBkY4KpRtXaiIZolg',
};

// Preciosa Piedra Luna y Espinela
export const moonStoneAndRubySpinelGroup: Group = {
  title: 'Piedra preciosa: Piedra Luna y Espinela',
  name: 'moon-stone-and-ruby-spinel',
  photoSrc:
    'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndk2P0vxouM284B6yQmVL71g5FdSrlR3bfaUqH',
};

export const groups: Group[] = [
  tigereyeGemstoneGroup,
  moonStoneAndRubySpinelGroup,
];

export const pieces: Piece[] = [
  {
    id: 'MC-09',
    imageSrc:
      'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndDdNH5EXnMNEoRlXfxQ8ZqKgedwc1sSO9aBrA',
    alt: 'Collar de plata con dije lágrima de ojo de tigre.',
    filename: 'tigereye-tear-pendant-chain.png',
    group: 'tigereye-gemstone',
    priority: true,
  },
  {
    id: 'MC-14',
    imageSrc:
      'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7nd0RleQvmXN7ndskBjKalIr8uFTefZLchigtVw',
    alt: 'Pulsera de plata con dije corazón de ojo de tigre.',
    filename: 'tigereye-heart-bracelet.jpeg',
    group: 'tigereye-gemstone',
  },
  {
    id: 'MC-17',
    imageSrc:
      'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndsOp8zG0y2qDKvJb9nZXQ4cRmxfrkWMidwtIV',
    alt: '',
    filename: 'MC-17.jpg',
    group: 'tigereye-gemstone',
  },
  {
    id: 'MC-19',
    imageSrc:
      'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7nd9dtCFHDXG0BsWaEl34wT7AIhPvpQVOf6tzoC',
    alt: '',
    filename: 'MC-19.jpg',
    group: 'tigereye-gemstone',
  },
  {
    id: 'MC-11',
    imageSrc:
      'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndJ9xhuuCIq9BlgDPNk0VFTKX7EndbwOuYHAtr',
    alt: '',
    filename: 'MC-11.jpg',
    group: 'tigereye-gemstone',
  },
  {
    id: 'MC-15',
    imageSrc:
      'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndD1dByqXnMNEoRlXfxQ8ZqKgedwc1sSO9aBrA',
    alt: '',
    filename: 'MC-15.jpg',
    group: 'tigereye-gemstone',
  },
  {
    id: 'MC-18',
    imageSrc:
      'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7nd0F1ZO2mXN7ndskBjKalIr8uFTefZLchigtVw',
    alt: '',
    filename: 'MC-18.jpg',
    group: 'tigereye-gemstone',
  },
  {
    id: 'MC-22',
    imageSrc:
      'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndUiKwUe9xXqjCaAglvkTzOsYc3W1DZLwH2iF6',
    alt: '',
    filename: 'MC-22.jpg',
    group: 'moon-stone-and-ruby-spinel',
  },
  {
    id: 'MC-27',
    imageSrc:
      'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndXf1kDLt415KfRkjrAiSxcL7MNnFpUZ6zugdY',
    alt: '',
    filename: 'MC-27.jpg',
    group: 'moon-stone-and-ruby-spinel',
  },
  {
    id: 'MC-28',
    imageSrc:
      'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndOZRE9guTSHEkYL6b4WhdfN9oyVqPK7CnFRXA',
    alt: '',
    filename: 'MC-28.jpg',
    group: 'moon-stone-and-ruby-spinel',
  },
  {
    id: 'MC-23',
    imageSrc:
      'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndbSUzJ3k3BicU8HqE1kOeNbrCFDjPQmM59SR6',
    alt: '',
    filename: 'MC-23.webp',
    group: 'moon-stone-and-ruby-spinel',
  },
];

export const groupedPieces = Object.groupBy(pieces, (p) => p.group) as Record<
  GroupName,
  Piece[]
>;

export function getPieceByPieceId(pieceId: string) {
  return pieces.find((p) => p.id === pieceId);
}
