export type GroupName = 'tigereye-gemstone' | 'moon-stone-and-ruby-spinel';

export type Piece = {
  id: string;
  src: string;
  alt: string;
  filename: string;
  group: GroupName;
  priority?: boolean;
};

export type Group = {
  name: GroupName;
  photoSrc: string;
};

export const tigereyeGemstoneGroup: Group = {
  name: 'tigereye-gemstone',
  photoSrc:
    'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7nd5vwPTWHYWeqFfxOHMymSBkY4KpRtXaiIZolg',
};

// Preciosa Piedra Luna y Espinela
export const moonStoneAndRubySpinelGroup: Group = {
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
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndDdNH5EXnMNEoRlXfxQ8ZqKgedwc1sSO9aBrA',
    alt: 'Collar de plata con dije lágrima de ojo de tigre.',
    filename: 'tigereye-tear-pendant-chain.png',
    group: 'tigereye-gemstone',
    priority: true,
  },
  {
    id: 'MC-14',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7nd0RleQvmXN7ndskBjKalIr8uFTefZLchigtVw',
    alt: 'Pulsera de plata con dije corazón de ojo de tigre.',
    filename: 'tigereye-heart-bracelet.jpeg',
    group: 'tigereye-gemstone',
  },
  {
    id: 'MC-17',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndsOp8zG0y2qDKvJb9nZXQ4cRmxfrkWMidwtIV',
    alt: '',
    filename: 'MC-17.jpg',
    group: 'tigereye-gemstone',
  },
  {
    id: 'MC-19',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7nd9dtCFHDXG0BsWaEl34wT7AIhPvpQVOf6tzoC',
    alt: '',
    filename: 'MC-19.jpg',
    group: 'tigereye-gemstone',
  },
  {
    id: 'MC-23',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndCDsATih0sgPRQy5hJNBlW4MowzxmbqYL7C1K',
    alt: '',
    filename: 'MC-23.jpg',
    group: 'tigereye-gemstone',
  },
  {
    id: 'MC-11',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndJ9xhuuCIq9BlgDPNk0VFTKX7EndbwOuYHAtr',
    alt: '',
    filename: 'MC-11.jpg',
    group: 'tigereye-gemstone',
  },
  {
    id: 'MC-15',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndD1dByqXnMNEoRlXfxQ8ZqKgedwc1sSO9aBrA',
    alt: '',
    filename: 'MC-15.jpg',
    group: 'tigereye-gemstone',
  },
  {
    id: 'MC-18',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7nd0F1ZO2mXN7ndskBjKalIr8uFTefZLchigtVw',
    alt: '',
    filename: 'MC-18.jpg',
    group: 'tigereye-gemstone',
  },
  {
    id: 'MC-22',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7nd0F1ZO2mXN7ndskBjKalIr8uFTefZLchigtVw',
    alt: '',
    filename: 'MC-22.jpg',
    group: 'moon-stone-and-ruby-spinel',
  },
  {
    id: 'MC-27',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7nd0F1ZO2mXN7ndskBjKalIr8uFTefZLchigtVw',
    alt: '',
    filename: 'MC-27.jpg',
    group: 'moon-stone-and-ruby-spinel',
  },
  {
    id: 'MC-28',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7nd0F1ZO2mXN7ndskBjKalIr8uFTefZLchigtVw',
    alt: '',
    filename: 'MC-28.jpg',
    group: 'moon-stone-and-ruby-spinel',
  },
  {
    id: 'MC-23',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndbSUzJ3k3BicU8HqE1kOeNbrCFDjPQmM59SR6',
    alt: '',
    filename: 'MC-23.webp',
    group: 'moon-stone-and-ruby-spinel',
  },
];

export const groupedPieces = Object.groupBy(pieces, (p) => p.group);

export function getPieceByPieceId(pieceId: string) {
  return pieces.find((p) => p.id === pieceId);
}
