import type { Metadata } from 'next';

interface Negocio {
  name: string;
  description: string;
  iconUrl: string;
}

export function generateMetadataFromBusiness(negocio: Negocio): Metadata {
  return {
    title: `${negocio.name} - Perfil`,
    description: negocio.description,
    icons: {
      icon: [
        { url: negocio.iconUrl, sizes: '32x32', type: 'image/png' },
        { url: negocio.iconUrl, sizes: '16x16', type: 'image/png' },
      ],
    },
  };
}