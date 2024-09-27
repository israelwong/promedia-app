'use client'
import { Fade } from "react-awesome-reveal";
import BtnBorderSolid from "@/app/ui/main/BtnBorderSolid";

function Pasarela() {
  return (
    <div>
        <Fade>
    <section className="md:p-0 p-3">
      <div
        className="mx-auto max-w-screen-lg
    md:my-10 mb-5
    pt-10 bg-blue-950/20 rounded-md border ring-red-400 border-blue-800"
      >
        <h1
          className="mx-auto text-center
        md:text-5xl text-2xl
        md:pb-10 pb-5"
        >
          Pasarela de pago
        </h1>

        <div className="grid md:grid-cols-2 md:gap-5 md:p-0 p-3">
          <div className="text-center mb-6">
            <h2
              className="md:text-5xl text-3xl
          font-Bebas-Neue
          md:text-right text-center
          px-10
          leading-tight"
            >
              Una <span className="animate-pulse text-blue-300"
                >pasarela de pago</span> en tu web para cerrar más ventas
            </h2>

            <p
              className="text-xl text-gray-200 max-w-xl mx-auto mb-4 font-extralight px-10 md:text-right text-center"
            >
              Acepta todos los medios de pago en tu pagina web y ofrece MSI
            </p>
            <div className="md:text-right text-center px-10 pt-5 md:mb-0 mb-5">
              <BtnBorderSolid
                id={"btn_pasarela"}
                title={"Cotizar servicio"}
                message={"Me interesa cotizar la implementación de una pasarela de pago"}
                colorborder={"border-blue-500"}
              />
            </div>
          </div>

          <Fade cascade damping={.1}>

          
          <ul
            className="grid md:grid-cols-3 grid-cols-3 gap-1 h-auto md:pr-5 md:mb-10"
          >
            <li className="px-3 bg-white md:p-10 p-10">
              <img
                alt="American Express"
                src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_pasarela/amex.svg"
                className="md:h-12 h-12 w-fit object-fill mx-auto"
              />
            </li>
            <li className="px-3 bg-white md:p-10 p-10">
              <img
                alt="Visa"
                src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_pasarela/visa.svg?t=2024-09-27T02%3A00%3A19.909Z"
                className="md:h-16 h-12 w-fit object-fill mx-auto"
              />
            </li>
            <li className="px-3 bg-white md:p-10 p-10">
              <img
                alt="Master Card"
                src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_pasarela/mastercard.svg"
                className="md:h-16 h-10 w-fit object-fill mx-auto"
              />
            </li>

            <li className="px-3 bg-white md:p-10 p-10">
              <img
                alt="Farmacias del ahorro"
                src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_pasarela/farmacias-del-ahorro.svg"
                className="md:h-16 h-10 w-fit object-fill mx-auto"
              />
            </li>
            <li className="px-3 bg-white md:p-10 p-10">
              <img
                alt="7 Eleven"
                src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_pasarela/7Eleven.svg"
                className="md:h-12 h-12 w-fit object-fill mx-auto"
              />
            </li>
            <li className="px-3 bg-white md:p-10 p-10">
              <img
                alt="Circle K"
                src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_pasarela/circle-k.svg"
                className="md:h-12 h-12 w-fit object-fill mx-auto"
              />
            </li>
            <li className="px-3 bg-white md:p-10 p-10">
              <img
                alt="OXXO"
                src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_pasarela/oxxo.svg"
                className="md:h-12 h-12 w-fit object-fill mx-auto"
              />
            </li>
            <li className="px-3 bg-white md:p-10 p-10">
              <img
                alt="SPEI"
                src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/logos_pasarela/spei.svg?t=2024-09-27T02%3A00%3A10.655Z"
                className="md:h-12 h-12 w-fit object-fill mx-auto"
              />
            </li>
          </ul>
          </Fade>
        </div>
      </div>
    </section>
  </Fade>
    </div>
  )
}

export default Pasarela