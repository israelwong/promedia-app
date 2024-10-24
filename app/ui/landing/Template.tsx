import Card from './Card';
import Faq from './Faq';
import VideoPlayer from '../components/VideoPlayer';
import Navbar from './Navbar';
import CarruselFotos from './CarruselFotos';
import Link from 'next/link';
import TestimoniosSlide from './TestimoniosSlide';
import Leadform from './Leadform';
import BannerImage from './BannerImage';
import BannerVideo from './BannerVideo';
import LogosSlider from './LogosSlider';
import Footer from './Footer';
import Ubicacion from './Ubicacion';
import ListaVertical from './ListaVertical';
import Acordion from './Acordion';

interface NegocioProps {
  negocio: {
    id: number;
    name: string;
    description: string;
    correo?: string;
    telefono?: string;
    whatsapp?: string;
    direccion?: string;
    maps_url?: string;
    web_url?: string;
    maps_embed?: string;
    iconUrl: string;
    videoUrl?: string;
    slide_fotos?: string[];
    social_links?: {
      name: string;
      url: string;
    }[];
    faqs?: {
      question: string;
      answer: string;
    }[];
    slide_logos?: {
      titulo: string;
      url: string;
    }[],
    card?: {
      id: string;
      hook: string;
      hook_align: string;
      cta?: string;
      cta_align?: string;
      button_title?: string;
      button_url?: string;
      button_align?: string;
    },
    testimonios?: {
      nombre: string;
      testimonio: string;
      foto?: string;
    }[],
    lista: {
      titulo: string;
      items: {
        titulo: string;
        descripcion?:string;
        icon_type?: string;
        icon_content?: string;
      }[];
    }[],
  }

}

function Template({ negocio }: NegocioProps) {


  return (
    <div id='template' className=''>

    <div className="min-h-screen">
      <Navbar params={{
        name:negocio.name,
        description:negocio.description,
        iconUrl: negocio.iconUrl
        }} />

         {/* Lista Vertical Section */}
      {negocio.lista && negocio.lista.length > 0 && (
        <section>
          <ListaVertical lista={negocio.lista} />
        </section>
      )}

      <section>
        <Acordion 
          lista={negocio.faqs || []}
        />
      </section>

         {/* hero */}
      <section>
        <Card
          params={{
            id: 'hook paquete',
            hook: 'Vive una experiencia única en foto y video',
            hook_align: 'center',
            cta: 'Contrata hoy mismo tu paquete todo incluido con 10% de descuento. ¡Oferta limitada!',
            cta_align: 'center',
            button_title: 'Más información',
            button_url: `/landing/${negocio.name}/pasarela`,
            button_align: 'center'
          }}
        />
      </section>

      <section>
        <VideoPlayer
          src={negocio.videoUrl || ''}
          autoPlay={true}
          muted={true}
          loop={true}
        />
      </section>

      {/* Card */}
      <section>
        <Card
          params={{
            id: 'hook paquete 2',
            // hook: 'No lo pienses más, contrata tu paquete hoy mismo',
            // hook_align: 'center',
            cta: 'Contrata hoy mismo tu paquete todo incluido con 10% de descuento. ¡Oferta limitada!',
            cta_align: 'center',
            button_title: 'Más información',
            button_url: `/landing/${negocio.name}/pasarela`,
            button_align: 'center'
          }}
        />
      </section>


        {/* slide fotos */}
        {negocio.slide_fotos && (
        <section>
          <CarruselFotos id='casual' imagenes={negocio.slide_fotos} />
          <div className='text-center py-6'>
            <Link href={`/landing/${negocio.name}/galeria de fotos casuales`}
              className='text-center bg-blue-500 text-white p-3 rounded-md'
            >
              Mira todas las fotos
            </Link>
          </div>
        </section>
      )}

      {/* Logos Slider */}
      <section>
        <LogosSlider lista={negocio.slide_logos || []} />
      </section>

      {/* FAQ */}
      <section>
        <Faq lista={negocio.faqs || []} />
      </section>
      
      {/* banner video */}
      <section>
        <BannerVideo
          params={{
            nombre_negocio: negocio.name,
            title: "Adquiere hoy mismo tu cuadro de acrílico",
            description: 'Hermoso cuadro de acríloco 24x36" con entrega en 20 días habiles.',
            height: '500px',
            video_url: 'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/video/cuadro-acrilico.mp4',
            mask: true,
            mask_opacity: '.5',
            button_url: `/landing/${negocio.name}/cita`,
            button_title: 'Agendar sesión',
            title_align: 'center',
            button_align: 'center',
          }}
        />
      </section>

      {/* Suscripcion */}
      {/* Pasarela */}

      {/* Banner image */}
      <section>
        <BannerImage
          params={{
            nombre_negocio: negocio.name,
            title: "Agenda tu sesión hoy mismo",
            description: 'Agenda tu sesión hoy mismo y obtén las mejores fotos casuales.',
            height: '500px',
            image_url: 'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/casual/3.jpg',
            mask: true,
            mask_opacity: '.3',
            button_url: `/landing/${negocio.name}/cita`,
            button_title: 'Agendar sesión',
            title_align: 'left',
            button_align: 'left',
          }}
        />
      </section>

    

      {/* leadform,  */}
      <section>
        <Leadform id_negocio={negocio.id} />
      </section>

      {/*testimonios */}
      <section>
        <TestimoniosSlide 
          testimonios={negocio.testimonios}
        />
      </section>

      <section>
        <Ubicacion
          titulo="Estamos en Ojo de Agua, Estado de México"
          direccion="Cuitláhuac 11, Cuauhtemoc, 55760 Ojo de Agua, Méx."
          link_share="https://maps.app.goo.gl/Jb9PJLbctEN3tdgV8"
          iframeSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.7410204754765!2d-98.98552332374393!3d19.681051281652156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f32d7906e4cb%3A0x6d07d7896c0b89f2!2sProsocial%20Fotograf%C3%ADa%20y%20Video!5e0!3m2!1ses-419!2smx!4v1728259307988!5m2!1ses-419!2smx"
        />
      </section>

 {/* Footer */}
 <section>
        <Footer 
          negocio={negocio}
        />
      </section>
    </div>

    </div>
  );
}


export default Template;
