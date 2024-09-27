'use client'
import { Fade } from "react-awesome-reveal";


function LogosClientes() {

    const logos_secundarios = [
        [

            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/IPN.svg",
            'Instituto Politécnico Nacional',
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/UIN.svg",
            "Universidad Insurgentes"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/TecMilenio.svg",
            "Tec Milenio"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/EdoMex.svg",
            "Gobierno del Estado de Mexico"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Grupo-Concentra.svg",
            "Grupo Concentra"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Movistar.svg",
            "Telefónica Movistar"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Vinte.svg?t=2024-09-27T16%3A42%3A02.906Z",
            "Inmobiliarias Vinte"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/DaVivir.svg",
            "Inmobiliaria DaVivir"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/el-universal.svg",
            "Periódico El Universal"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Goberno-de-mexico.svg",
            "Gobierno de Mexico"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Qantum.svg",
            "Elevadores Quantum"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Elipse-Hospital.svg",
            "Elipse Hospital"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/DIF-EdoMex.svg",
            "DIF Estado de Mexico"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/CAVM.svg",
            "Concretera CAVM"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Grupo-Aselac.svg",
            "Grupo Aselac"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/MKT-Solutions.svg",
            "MKT Solutions"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Jemiza.svg",
            "Distribuidora Jemiza"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/BTL.svg",
            "Equipo Médico BTL"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Odapas.svg",
            "Odapas Tecámas"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Angkor.svg",
            "Angkor gym"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/AquaMarvic.svg",
            "Acuatuca AquaMarvic"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/La-Antigua.svg",
            "Restaurante La Antigua"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Invierte-Bien.svg",
            "Inmobiliaria Invierte Bien"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/ProSocial.svg",
            "Fotografía y video Prosocial"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Verticca.svg",
            "Hotel Verticca"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Trevor.svg",
            "Trevot Cantina"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Finca-Dona-Eulalia.svg",
            "Finca Dona Eulalia"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Ferretip.svg",
            "Fereratip"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Orpoprint.svg?t=2024-09-27T16%3A39%3A14.226Z",
            "Orpoprint"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Ostore.svg",
            "Ostore"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Polenta.svg",
            "Restaurante Polenta"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Tecamac.svg",
            "Gobierno de Tecámac"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Andalucia.svg",
            "Jardín de eventos Andalucia"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Cesars-Gym-Strength.svg",
            "Cesars Gym Strength"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/CHIC.svg",
            "Chic Boutique"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Dancerias.svg",
            "Dancerías"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Dely-Estudio.svg",
            "Dely Estudio"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Denta3F.svg",
            "Denta 3D"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Lilibeth-escuela.svg",
            "Escuela Lilibeth"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Marsala.svg",
            "Jardín de eventos Marsala"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Rancho-El-Carmen.svg",
            "Rancho El Carmen"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/RH-Consultoria.svg",
            "RH Consultoría"
        ],
        [
            "https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_clientes/Tania-Sandoval.svg",
            "Tania Sandoval"
        ],

    ]

    return (
        <div className="pb-10 mx-auto text-center md:max-w-screen-lg max-w-screen-sm md:px-0 px-8">
            
            <div className="md:max-w-screen-sm mx-auto">
            <h1 className="font-Bebas-Neue text-5xl text-gray-700">
                Nuestros clientes
            </h1>
            <p className="md:text-2xl text-xl font-extralight text-gray-400 pb-5">
                Gracias a todos nuestros clientes por confiar en nosotros para crear sus proyectos digitales
            </p>
            </div>

            <Fade cascade duration={200} damping={.1}>

            <ul className="grid md:grid-cols-5 grid-cols-3 gap-1 h-auto">
                {
                    logos_secundarios.map((logo, index) => (
                        <li key={index} className="px-3 bg-gray-800/30 md:py-12 md:px-10 p-10">
                            <img src={logo[0]} alt={logo[1]} className="md:h-20 h-10 w-fit object-fill mx-auto" />

                        </li>
                    ))
                }
            </ul>
            </Fade>

        </div>
    )
}

export default LogosClientes
