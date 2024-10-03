// lib/database.ts

// Simulación de datos de negocio
const businesses = [
    {
        id: 1,
        name: 'prosocial',
        description: 'Comercialización Digital y Producción de Medios Audiovisuales.',
        iconUrl: 'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/logos/isotipo_gris.svg',
        videoUrl: 'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/video/hero-30fps.webm?t=2024-09-28T23%3A53%3A21.149Z',
        slide_fotos: [
            "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//1.jpg",
            "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//2.jpg",
            "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//3.jpg",
            "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//4.jpg",
            "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//5.jpg",
            "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//6.jpg",
            "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//7.jpg",
            "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//8.jpg",
            "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//9.jpg",
            "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//10.jpg",
            "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//11.jpg",
            "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//12.jpg",
            "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//13.jpg",
        ],
        galeria: {
            'nombre': 'galeria de fotos casuales',
            imagenes:[
                "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//1.jpg",
                "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//2.jpg",
                "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//3.jpg",
                "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//4.jpg",
                "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//5.jpg",
                "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//6.jpg",
                "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//7.jpg",
                "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//8.jpg",
                "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//9.jpg",
                "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//10.jpg",
                "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//11.jpg",
                "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//12.jpg",
                "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual//13.jpg",
            ]
        }
    },
    {
        id: 2,
        name: 'astro',
        description: 'Innovación y Tecnología para el Futuro.',
        iconUrl: 'https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_tecnologias/astro.svg',
    },
    {
        id: 3,
        name: 'tailwind',
        description: 'Innovación y Tecnología para el Futuro.',
        iconUrl: 'https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_tecnologias/tailwindcss-icon-svgrepo-com.svg',
    }
];

export async function getBusinessByName(nombre: string) {
    
    // Buscar el negocio por nombre
    const business = businesses.find(b => b.name.toLowerCase() === nombre.toLowerCase());
    return business;
    
}

export async function getGalleryByBussinesAlbum(negocio: string,nombre_album: string) {

    // Buscar el negocio por nombre
    const business = businesses.find(b => b.name.toLowerCase() === negocio.toLowerCase());

    // Verificar si el negocio fue encontrado
    if (!business) {
        throw new Error(`Negocio con nombre "${negocio}" no encontrado.`);
    }

    // Verificar si el negocio tiene galería
    if (!business.galeria) {
        throw new Error(`Negocio "${negocio}" no tiene galería.`);
    }

    // si el nombre del album no coincide con el nombre de la galeria
    if (business.galeria.nombre.toLowerCase() !== nombre_album.toLowerCase()) {
        throw new Error(`Galería "${nombre_album}" no encontrada en el negocio "${negocio}".`);
    }

    return business.galeria.imagenes;
}