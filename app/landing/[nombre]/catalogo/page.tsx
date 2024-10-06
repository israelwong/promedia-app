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
      Grid de productos
    </div>
  )
}

export default page
