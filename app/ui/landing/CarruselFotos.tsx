"use client";
import { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";

interface CarruselFotosProps {
  imagenes: string[];
  id: string; // Añadir un identificador único
}

export default function CarruselFotos({ imagenes, id }: CarruselFotosProps) {

  useEffect(() => {
    const selector = `.glide-fotos-evento-${id}`;
    const glideFotosEvento = new Glide(selector, {
      type: "carousel",
      focusAt: "center",
      perView: 4,
      autoplay: 3200,
      animationDuration: 700,
      gap: 0,
      breakpoints: {
        1024: {
          perView: 4,
        },
        640: {
          perView: 1.2,
        },
      },
    });

    glideFotosEvento.mount();

    return () => {
      glideFotosEvento.destroy();
    };
  }, [id]);

  return (
    <div className={`glide-fotos-evento-${id} relative w-full h-fit`}>
      <div className="overflow-hidden" data-glide-el="track">
        <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
          {imagenes.map((imagen, index) => (
            <li key={index}>
              <Image
                src={imagen}
                alt={`Imagen ${index + 1}`}
                width={500} // Ajusta el ancho según sea necesario
                height={500} // Ajusta el alto según sea necesario
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
