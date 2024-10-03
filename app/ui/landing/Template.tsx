import Hero from './Hero';
import Faq from './Faq';

import Navbar from './Navbar';

interface Negocio {
  name: string;
  description: string;
  iconUrl: string;
}

interface Props {
  negocio: Negocio;
}

function Template({ negocio }: Props) {
  return (
      <div className='bg-gray-100/50  h-screen'>
      <Navbar negocio={negocio} />
    <div className='px-5 py-10 space-y-6'>
      <section>

        
      </section>

      <section>
        <Hero />
      </section>
      
      <section>
        <Faq />
      </section>
    </div>
    </div>
  );
}

export default Template;