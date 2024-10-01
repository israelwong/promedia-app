import type { Metadata } from "next";
// import Hero from "@/app/ui/main/home/Hero";
import Multimedia from "./ui/home/Multimedia";
// import HookServicios from "./ui/main/home/HookServicios";
import Marketing from "./ui/home/Marketing";
import Websites from "./ui/home/Websites";
import Pasarela from "./ui/home/Pasarela";
import LogosClientes from "./ui/components/LogosClientes";

export const metadata: Metadata = {
  title: 'Bienvenido | ProMedia',
  description: 'Comercialización Digital y Producción de Medios Audiovisuales.',
  metadataBase: new URL('https://promedia.mx'),
};

export default function Home() {
  return (
    <div className="mx-auto">
      {/* <section>
        <Hero />
      </section> */}

      {/* <section>
        <div className="mt-16 mb-8">
        <HookServicios />
        </div>
      </section> */}

      <section>
        <Multimedia />
      </section>

      <section>
        <Marketing />
      </section>

      <section>
        <Websites />
      </section>

      <section>
        <Pasarela />
      </section>

      <section className="mt-10">
        <LogosClientes />
      </section>

    </div>
  );
}