import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Comercialización Digital y Producción de Medios Audiovisuales.',
  metadataBase: new URL('https://promedia.mx'),
};


function Page() {
  return (
    <div>
      Nosotros
    </div>
  )
}

export default Page
