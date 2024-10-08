// lib/database.ts

// Simulación de datos de negocio
const businesses = [
    {
        id: 1,
        iconUrl: 'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/logos/isotipo_gris.svg',
        name: 'prosocial',
        description: "ProSocial es una empresa dedicada a la comercialización digital y producción de medios audiovisuales. Nuestro objetivo es ayudar a las empresas a mejorar su presencia en línea y atraer a más clientes a través de contenido de alta calidad.",
        correo: "contacto@prosocial.mx",
        telefono: "5555555555",
        direccion: "Cuitláhuac 123, Col. Progreso Nacional, CDMX",
        maps_url: "https://goo.gl/maps/1Q7a4XwXjU4jXq6r9",
        maps_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3756.741027080812!2d-98.982948!3d19.681051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f32d7906e4cb%3A0x6d07d7896c0b89f2!2sProsocial%20Fotograf%C3%ADa%20y%20Video!5e0!3m2!1ses-419!2smx!4v1728320627479!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        web_url: "https://www.prosocial.mx",
        whatsapp: "5555555555",
            videoUrl: 'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/video/hero-30fps.webm?t=2024-09-28T23%3A53%3A21.149Z',
        navbar:{
            name: 'ProSocial',
            description: 'Innovación y Tecnología para el Futuro.',
            iconUrl: 'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/logos/isotipo_gris.svg',
        },
        secciones:[
            {
                section_name: 'Hero',
                content_type: 'video',
                style_wrap_bg: 'py-5',
                style_wrap_padding: 'p-5',
                style_wrap_margin: 'm-5',
                style_warp_rounded: 'rounded-b-3xl',
                style_content_paddig: 'pb-3',
                style_content_bg: 'bg-white',
                style_content_border: 'border-b-2',
                content:[
                    {
                        title: 'Prosocial',
                        description: 'ProSocial es una empresa dedicada a la comercialización digital y producción de medios audiovisuales. Nuestro objetivo es ayudar a las empresas a mejorar su presencia en línea y atraer a más clientes a través de contenido de alta calidad.',
                        button_url: '/landing/prosocial/cita',
                        button_title: 'Agendar sesión',
                        button_align: 'center',
                        title_align: 'center',
                        mask: true,
                        mask_opacity: '.5',
                        video_url: 'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/video/cuadro-acrilico.mp4',
                    }
                ]      
            }
        ],
        lista:
            [
                {
                    titulo: "Por que contratarnos",
                    items: [
                        {
                            titulo: "Calidad de servicio",
                            descripcion: "Contamos con un equipo de profesionales con experiencia en el mercado.",
                        },
                        {
                            titulo: "Atención personalizada",
                            descripcion: "Nos preocupamos por cada detalle para que tu experiencia sea única."
                        },
                        {
                            titulo: "Precios accesibles",
                            descripcion: "Ofrecemos precios accesibles para que puedas obtener el mejor servicio."
                        },
                        {
                            titulo: "Experiencia en el mercado",
                            descripcion: "Contamos con más de 10 años de experiencia en el mercado."
                        }
                    ]
                }
            ]
        ,
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
                nombre: 'galeria de fotos casuales',
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
                nombre: 'galeria de fotos de vestido',
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

                titulo: "Instituto Politécnico Nacional",
                url: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/IPN.svg"
            },
            {

                titulo: "Universidad Insurgentes",
                url: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/UIN.svg",
            },
            {

                titulo: "Tec Milenio",
                url: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/TecMilenio.svg",
            },
            {

                titulo: "Gobierno del Estado de Mexico",
                url: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/EdoMex.svg",
            },
            {

                titulo: "Grupo Concentra",
                url: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Grupo-Concentra.svg",
            },
            {

                titulo: "Telefónica Movistar",
                url: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Movistar.svg",
            },
            {

                titulo: "Inmobiliarias Vinte",
                url: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Vinte.svg",
            },
            {

                titulo: "Inmobiliaria DaVivir",
                url: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/DaVivir.svg"
            },
            {

                titulo: "Periódico El Universal",
                url: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/el-universal.svg"
            },
            {

                titulo: "Gobierno de Mexico",
                url: "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Goberno-de-mexico.svg"
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
        ],
        social_links: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/prosocialmx"
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/prosocialmx"
            },
            {
                name: "X",
                url: "https://www.twitter.com/prosocialmx"
            },
            {
                name: "Youtube",
                url: "https://www.twitter.com/prosocialfifteens"
            },
            {
                name: "TikTok",
                url: "https://www.twitter.com/prosocialmx"
            },
            {
                name: "Spotify",
                url: "https://www.twitter.com/prosocial_podcasts"
            },
        ],
        testimonios: [
            {
                foto: "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/evento/10.jpg",
                nombre: "Juan Perez",
                testimonio: "Excelente servicio, muy profesionales y atentos."
            },
            {
                foto: "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/evento/9.jpg",
                nombre: "Memo Perez",
                testimonio: "Excelente servicio, muy profesionales y atentos."
            },
            {
                foto: "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/evento/8.jpg",
                nombre: "Maria Perez",
                testimonio: "Excelente servicio, muy profesionales y atentos."
            },
            {
                foto: "https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/evento/7.jpg",
                nombre: "Roberto Perez",
                testimonio: "Excelente servicio, muy profesionales y atentos."
            },
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