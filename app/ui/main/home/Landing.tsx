'use client'
import { Fade } from "react-awesome-reveal";
import BtnBorderSolid from "@/app/ui/main/BtnBorderSolid";


function Landing() {
  return (
    <div>

<Fade>
    <section className="md:p-0 p-3">
      <div
        className="mx-auto
      max-w-screen-lg
      md:my-10 mb-0
      md:p-10 p-5
      bg-orange-950/20
      rounded-md border ring-red-400 border-orange-800"
      >
        <h1
          className="mx-auto text-center
        text-orange-400
        md:text-5xl text-2xl
        md:pb-10 pb-5"
        >
          Diseño web
        </h1>

        <div className="grid md:grid-cols-2 md:gap-5">
          <div className="text-center mb-6">
            <h2
              className="md:text-5xl text-4xl
          font-Bebas-Neue
          md:text-right text-center
          px-10
          leading-tight"
            >
              Una <span className="animate-pulse text-orange-400"
                >heramienta impresindible</span
              > para generar prospectos y cerrar ventas
            </h2>

            <div className="md:text-right text-center px-10 pt-5">
              <BtnBorderSolid
                id={"btn_web"}
                title={"Cotizar servicio"}
                message={"Me interesa cotizar el servicio una landing page"}
                colorborder={"border-orange-500"}
              />
            </div>
          </div>

          <div className="md:pr-5">
            
            <Fade>
              <p className="text-xl text-gray-200 max-w-xl mx-auto mb-4 font-extralight">
                Diseñamos <span className="font-bold text-orange-300">landing pages</span> funcionales y atractivas para conviertir visitantes en clientes potenciales
              </p>
            </Fade>

            <Fade cascade damping={.2}>
            <ul className="list-disc pl-4 text-gray-400 text-left">
              <li>Diseño atractivo y funcional</li>
              <li>Mesajes claros y llamados a la acción</li>
              <li>Implementación de todos los canales de comunicación</li>
              <li>Implementación de asistente virtual</li>
              <li>Enlace a todas tus redes sociales</li>
              <li>Formularios de clientes potenciales</li>
              <li>Metricas de visita</li>
            </ul>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  </Fade>
      
    </div>
  )
}

export default Landing
