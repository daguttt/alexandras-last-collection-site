export type Photo = {
  id: string;
  src: string;
  alt: string;
  priority?: boolean;
};

export const photos: Photo[] = [
  {
    id: '1',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndDdNH5EXnMNEoRlXfxQ8ZqKgedwc1sSO9aBrA',
    alt: 'Collar de plata con dije lágrima de ojo de tigre.',
    priority: true,
  },
  {
    id: '2',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndmlH6LRPaEePBonaFSs7tqcQ5w1lAikd0HDjg',
    alt: 'Anillo ajustable de plata con dos piedras de ojo de tigre y cristales.',
    priority: true,
  },
  {
    id: '3',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndCYUM2zh0sgPRQy5hJNBlW4MowzxmbqYL7C1K',
    alt: 'Detalle del dije lágrima de ojo de tigre y broche de la cadena en plata.',
    priority: true,
  },
  {
    id: '4',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndhOXuRtsxJwer8LqKQfUpPAv3Zna9bB21zW5t',
    alt: 'Anillo de plata tejido con piedra blanca forma marquise y cristales.',
  },
  {
    id: '5',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndOQ1PunTSHEkYL6b4WhdfN9oyVqPK7CnFRXAc',
    alt: 'Collar de plata con dije lágrima facetada oscura y acentos dorados.',
  },
  {
    id: '6',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndCp25sh0sgPRQy5hJNBlW4MowzxmbqYL7C1KS',
    alt: 'Aretes colgantes de plata con cristales color ámbar.',
  },
  {
    id: '7',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7nd0RleQvmXN7ndskBjKalIr8uFTefZLchigtVw',
    alt: 'Pulsera de plata con dije corazón de ojo de tigre.',
  },
  {
    id: '8',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndmcdsVTaEePBonaFSs7tqcQ5w1lAikd0HDjgN',
    alt: 'Collar de plata con dije corazón translúcido y cuentas.',
  },
  {
    id: '9',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndi9QH15klwOv91LyzIbHxA7XopPJfsg3SKdB8',
    alt: 'Collar de plata con dije lágrima de ojo de tigre y cuentas marrones.',
  },
  {
    id: '10',
    src: 'https://n9sc1cejje.ufs.sh/f/0vYCcHmXN7ndMiwI1mVPfqkU5RLgJhD7laYCtWxwNi4QzOAp',
    alt: 'Pulsera de plata con cuentas en blanco y negro y cristales.',
  },
];

export function getPhotoById(id: string) {
  return photos.find((p) => p.id === id);
}
