import { getBusinessByName } from '@/lib/actions';
// import Template from '@/app/ui/landing/Template';
import { generateMetadataFromBusiness } from '@/lib/perfil-metadata';
import NotFoundLanding from '@/app/ui/landing/NotFoundLanding';

interface PageProps {
    params: { nombre: string };
}

async function buscar(nombre: string) {
    // Suponiendo que getBusinessByName ya obtiene toda la información necesaria del negocio
    const business = await getBusinessByName(nombre);
    return business;
}

export async function generateMetadata({ params }: PageProps) {
    const negocio = await buscar(params.nombre);
    if (!negocio) {
        return {
            title: 'Negocio no encontrado',
            description: 'El negocio solicitado no fue encontrado.',
        };
    }
    return generateMetadataFromBusiness(negocio);
}

async function Page({ params }: PageProps) {
    //! await new Promise((resolve) => setTimeout(resolve, 5000));

    const negocio = await buscar(params.nombre);
    if (!negocio) {
        return <NotFoundLanding />;
    }

    return (
        <div>
            {/* <Template negocio={negocio} /> */}
        </div>
    );
}

export default Page;