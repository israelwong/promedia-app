import React from 'react'

interface pageProps {
  params: {
    nombre: string;
  };
}

function page( {params}: pageProps ) {

  console.log(params);
  
  return (
    <div>
      Pasarela de pago
    </div>
  )
}

export default page