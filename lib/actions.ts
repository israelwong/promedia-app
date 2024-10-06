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
        galeria: [
            {
                'nombre': 'galeria de fotos casuales',
                imagenes: [
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
            },
            {
                'nombre': 'galeria de fotos de vestido',
                imagenes: [
                    'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/vestido/1.jpg',
                    'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/vestido/2.jpg',
                    'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/vestido/3.jpg',
                    'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/vestido/4.jpg',
                    'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/vestido/5.jpg',
                    'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/vestido/6.jpg',
                    'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/vestido/7.jpg',
                    'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/vestido/8.jpg',
                ]
            }
        ],
        slide_logos: [
            {
                
                titulo:"Instituto Politécnico Nacional",
                url:"https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/IPN.svg"
            },
            {
                
                titulo:"Universidad Insurgentes",
                url:"https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/UIN.svg",
            },
            {
                
                titulo:"Tec Milenio",
                url:"https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/TecMilenio.svg",
            },
            {

                titulo:"Gobierno del Estado de Mexico",
                url:"https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/EdoMex.svg",
            },
            {
                
                titulo:"Grupo Concentra",
                url:"https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Grupo-Concentra.svg",
            },
            {

                titulo:"Telefónica Movistar",
                url:"https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Movistar.svg",
            },
            {

                titulo:"Inmobiliarias Vinte",
                url:"https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Vinte.svg?t=2024-09-27T16%3A42%3A02.906Z",
            },
            {

                titulo:"Inmobiliaria DaVivir",
                url:"https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/DaVivir.svg"
            },
            {

                titulo:"Periódico El Universal",
                url:"https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/el-universal.svg"
            },
            {

                titulo:"Gobierno de Mexico",
                url:"https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Goberno-de-mexico.svg"
            }
        ],
        faqs: [
            {
                question: "How does TailwindCSS works?",
                answer: "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for className names, generating the corresponding styles and then writing them to a static CSS file."
            },
            {
                question: "How do I install TailwindCSS?",
                answer: "You can install TailwindCSS via npm, yarn, or by using a CDN. The recommended way is to use npm or yarn for better control over your build process."
            },
            {
                question: "How do I install TailwindCSS?",
                answer: "You can install TailwindCSS via npm, yarn, or by using a CDN. The recommended way is to use npm or yarn for better control over your build process."
            }
        ]
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

export async function getGalleryByBussinesAlbum(negocio: string, nombre_album: string) {

    // Buscar el negocio por nombre
    const business = businesses.find(b => b.name.toLowerCase() === negocio.toLowerCase());

    // Verificar si el negocio fue encontrado
    if (!business) {
        throw new Error(`Negocio con nombre "${negocio}" no encontrado.`);
    }

    // Verificar si el negocio tiene galerías
    if (!business.galeria || business.galeria.length === 0) {
        throw new Error(`Negocio "${negocio}" no tiene galerías.`);
    }

    // Buscar la galería por nombre dentro del negocio
    const galeria = business.galeria.find(g => g.nombre.toLowerCase() === nombre_album.toLowerCase());

    // Verificar si la galería fue encontrada
    if (!galeria) {
        throw new Error(`Galería "${nombre_album}" no encontrada en el negocio "${negocio}".`);
    }

    return galeria.imagenes;
}