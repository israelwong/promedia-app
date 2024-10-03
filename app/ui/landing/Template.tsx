import Hero from './Hero';
import Faq from './Faq';
import VideoPlayer from '../components/VideoPlayer';
import Navbar from './Navbar';
import SlideFotos from './SlideFotos';
import Link from 'next/link';
// import TestimoniosSlide from './TestimoniosSlide';
import Leadform from './Leadform';

interface Negocio {
  id: number;
  name: string;
  description: string;
  iconUrl: string;
  videoUrl?: string;
  showHero?: boolean;
  showFaq?: boolean;
  slide_fotos?: string[];
}

interface Props {
  negocio: Negocio;
}

function Template({ negocio }: Props) {

  return (
    <div className="bg-gray-100/50 min-h-screen">

      <Navbar negocio={negocio} />

      {/* leadform */}
      <section>
          <Leadform id_negocio={negocio.id} />
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

        {/*testimonios */}
        {/* <section>
          <TestimoniosSlide />
        </section> */}
        

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

            <div className="px-5 py-10 space-y-6">
        {negocio.showHero && (
          <section>
            <Hero />
          </section>
        )}

        {negocio.showFaq && (
          <section>
            <Faq />
          </section>
        )}
      </div>
    </div>
  );
}

export default Template;