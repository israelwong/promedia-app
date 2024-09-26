import Link from "next/link"
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
return (
<footer className="bg-muted py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
    {/* Logo y descripción */}
    <div className="mb-8 md:mb-0 md:w-1/3">
      <Link href="/" className="flex items-center">
        <span className="sr-only">Tu Empresa</span>
        <svg
          className="h-8 w-auto"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="20" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8ZM6 20C6 12.268 12.268 6 20 6C27.732 6 34 12.268 34 20C34 27.732 27.732 34 20 34C12.268 34 6 27.732 6 20Z"
            fill="white"
          />
        </svg>
      </Link>
      <p className="mt-2 text-sm text-muted-foreground">
        Ofrecemos soluciones innovadoras para tu negocio. Nuestro compromiso es tu éxito.
      </p>
    </div>

    {/* Enlaces y redes sociales */}
    <div className="flex flex-wrap md:w-2/3 justify-end">
      {/* Enlaces */}
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8 md:mb-0">
        <h3 className="text-sm font-semibold mb-4">Empresa</h3>
        <ul className="space-y-2">
          <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">Sobre Nosotros</Link></li>
          <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">Carreras</Link></li>
          <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contacto</Link></li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8 md:mb-0">
        <h3 className="text-sm font-semibold mb-4">Servicios</h3>
        <ul className="space-y-2">
          <li><Link href="/services/web" className="text-sm text-muted-foreground hover:text-foreground">Desarrollo Web</Link></li>
          <li><Link href="/services/mobile" className="text-sm text-muted-foreground hover:text-foreground">Apps Móviles</Link></li>
          <li><Link href="/services/consulting" className="text-sm text-muted-foreground hover:text-foreground">Consultoría</Link></li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8 md:mb-0">
        <h3 className="text-sm font-semibold mb-4">Legal</h3>
        <ul className="space-y-2">
          <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacidad</Link></li>
          <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Términos</Link></li>
        </ul>
      </div>

      {/* Redes sociales */}
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
        <h3 className="text-sm font-semibold mb-4">Síguenos</h3>
        <div className="flex space-x-4">
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Facebook</span>
            {/* <Facebook className="h-6 w-6" /> */}
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Twitter</span>
            {/* <Twitter className="h-6 w-6" /> */}
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Instagram</span>
            {/* <Instagram className="h-6 w-6" /> */}
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">LinkedIn</span>
            {/* <Linkedin className="h-6 w-6" /> */}
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* Derechos de autor */}
  <div className="mt-8 pt-8 border-t border-muted-foreground/10">
    <p className="text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
    </p>
  </div>
</footer>
)
}