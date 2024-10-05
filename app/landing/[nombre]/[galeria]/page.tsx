import React from 'react';
import { getGalleryByBussinesAlbum } from '@/lib/actions';
import Galeria from '@/app/ui/landing/Galeria';
import NotFoundGaleria from '@/app/ui/landing/galeria/NotFound';
import BtnCerrar from '@/app/ui/landing/BtnCerrar';

interface pageProps {
  params: {
    nombre: string;
    galeria: string;
  };
}

async function page({ params }: pageProps) {
  
  //obtenemos el nombrel del negocio y el nombre de la galeria
  // el parametro nombre se obtiene de la tura dinámica [nombre]/page.tsx
  // el paremero galeria se obtiene de la url dinamica

  const negocio = params.nombre;
  const galeria = params.galeria.replace(/%20/g, ' ');

  try {
    const album = await getGalleryByBussinesAlbum(negocio, galeria);
    // console.log(album);
    return (
      <>
        <div>

            <Galeria
              urls={album}
              rowHeight={400}
            />
            <BtnCerrar url={`/landing/${negocio}`} />
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
    return (
      <NotFoundGaleria negocio={negocio} />
    );
  }
}

export default page;