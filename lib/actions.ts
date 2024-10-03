// lib/database.ts

export async function getBusinessByName(nombre: string) {
    
    // Simulación de datos de negocio
    const businesses = [
        {
            id: 1,
            name: 'prosocial',
            description: 'Comercialización Digital y Producción de Medios Audiovisuales.',
            iconUrl: 'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/logos/isotipo_gris.svg'
        },
        {
            id: 2,
            name: 'astro',
            description: 'Innovación y Tecnología para el Futuro.',
            iconUrl: 'https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_tecnologias/astro.svg'
        },
        {
            id: 2,
            name: 'tailwind',
            description: 'Innovación y Tecnología para el Futuro.',
            iconUrl: 'https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_tecnologias/tailwindcss-icon-svgrepo-com.svg'
        }
    ];
    // Buscar el negocio por nombre
    const business = businesses.find(b => b.name.toLowerCase() === nombre.toLowerCase());
    return  business;
}