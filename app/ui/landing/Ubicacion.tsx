import Link from 'next/link';
import React from 'react';

interface UbicacionProps {
    titulo:string;
    link_share:string
    direccion: string;
    iframeSrc: string;
}

function Ubicacion({ titulo, link_share, direccion, iframeSrc }: UbicacionProps) {
  return (
    <div className='py-5'>
      <div className='p-5'>
        <div className='pb-3'>
          <h1 className='text-2xl font-semibold text-gray-400'>Donde estamos ubicados</h1>
          <h2 className='text-gray-600 font-semibold'>{titulo}</h2>
          <p>{direccion}</p>
        </div>
        <div className="relative overflow-hidden" style={{ paddingTop: '100%' }}>
          <iframe
            src={iframeSrc}
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

<div className='flex w-full py-2'>

        <Link 
        href={link_share} target='_blank'
        className="p-3 text-white bg-blue-500 w-full text-center rounded-md">
            Ver en Google Maps  
        </Link>
</div>


      </div>
    </div>
  );
}

export default Ubicacion;