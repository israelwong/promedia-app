import React from 'react'
import Link from 'next/link'

interface NotFoundGaleriaProps {
  negocio: string
}

function NotFoundGaleria({ negocio }: NotFoundGaleriaProps) {
  return (
    <div>

      <div className='flex flex-col items-center justify-center h-screen text-center mx-auto'>
        <div className='flex items-center justify-center'>
          <h1 className='text-xl'>404 &nbsp; </h1>
          <p className='text-xl'>| Galería no encontrada</p>
        </div>
        <div className='py-3'></div>
        <div className='mt-4'>
          <Link href={`/landing/${negocio}`} className='bg-blue-500 py-3 px-3 rounded-sm text-white text-sm'>
            Cerrar ventana
          </Link>
        </div>
      </div>

    </div>
  )
}

export default NotFoundGaleria
