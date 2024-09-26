import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Comercialización Digital y Producción de Medios Audiovisuales.',
  metadataBase: new URL('https://promedia.mx'),
};


function page() {
  return (
    <div>
      Servicios
    </div>
  )
}

export default page
