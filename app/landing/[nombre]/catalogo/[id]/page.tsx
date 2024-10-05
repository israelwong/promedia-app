import React from 'react'

interface pageProps {
  params: {
    nombre: string;
    id: string;
  };
}

function page( {params}: pageProps ) {  
  const id = params.id.replace(/%20/g, ' ');
  return (
    <div>
      Producto {id}
    </div>
  )
}

export default page
