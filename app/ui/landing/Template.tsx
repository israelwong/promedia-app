import Card from './Card';
import Faq from './Faq';
import VideoPlayer from '../components/VideoPlayer';
import Navbar from './Navbar';
import SlideFotos from './SlideFotos';
import Link from 'next/link';
import TestimoniosSlide from './TestimoniosSlide';
import Leadform from './Leadform';
import BannerImage from './BannerImage';
import SidebarButtons from './SidebarButtons';
import BannerVideo from './BannerVideo';
import LogosSlider from './LogosSlider';
import Footer from './Footer';


interface Negocio {
  id: number;
  name: string;
  description: string;
  iconUrl: string;
  videoUrl?: string;
  showHero?: boolean;
  showFaq?: boolean;
  slide_fotos?: string[];
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
  }
}

interface Props {
  negocio: Negocio;
}

function Template({ negocio }: Props) {

  return (
    <div className="bg-gray-100/50 min-h-screen">

      <Navbar negocio={negocio} />
      <SidebarButtons />

      {/* Footer */}
      <section>
      <Footer id={1} />
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
      
      {/* FAQ */}
      <section>
        <Faq lista={negocio.faqs || []} />
      </section>

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

      {/* Logos Slider */}
      <section>
        <LogosSlider lista={negocio.slide_logos || []} />
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
      {/* Catalogo */}
      {/* producto */}
      {/* botones de contacto flotantes derecha */}
      {/* botones flotante */}

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

      {/* slide fotos */}
      {negocio.slide_fotos && (
        <section>
          <SlideFotos id='casual' imagenes={negocio.slide_fotos} />

          <div className='text-center py-6'>

            <Link href={`/landing/${negocio.name}/galeria de fotos casuales`}
              className='text-center bg-blue-500 text-white p-3 rounded-md'
            >
              Mira todas las fotos
            </Link>
          </div>
        </section>
      )}

      {/* leadform,  */}
      <section>
        <Leadform id_negocio={negocio.id} />
      </section>

      {/* video plarwe */}
      {negocio.videoUrl && (
        <section>
          <VideoPlayer
            src={negocio.videoUrl}
            autoPlay={true}
            muted={true}
            loop={true}
          />
        </section>
      )}


      {/*testimonios */}
      <section>
        <TestimoniosSlide />
      </section>

    </div>
  );
}

export default Template;