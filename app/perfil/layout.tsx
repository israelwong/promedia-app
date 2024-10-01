import type { Metadata } from "next";
// import Navbar from "@/app/ui/main/Navbar";
// import Footer from "@/app/ui/main/Footer";
// import { ThemeProvider } from "@/app/ui/theme-provider";
import Script from 'next/script';
import "@/app/globals.css";

// import  {GoogleTagManager} from '@next/third-parties/google';


export const metadata: Metadata = {
  title: {
    template: '%s | ProMedia',
    default: 'Bienvenido | ProMedia',
  },
  description: 'Comercialización Digital y Producción de Medios Audiovisuales.',
  metadataBase: new URL('https://promedia.mx'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es" className="bg-black">

      <head>
        <link 
        rel="icon" 
        href="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/favicon_fullcolor.svg" 
        type="image/<generated>"
        sizes="<generated>"
        />

        <Script src="https://kit.fontawesome.com/74d1405387.js"/>


      </head>

      <body className={`antialiased bg-black text-white`}>
        {/* <ThemeProvider> */}
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        {/* </ThemeProvider> */}
        {/* <GoogleTagManager gtmId="GTM-M9ZT7HQ9" /> */}
      </body>
    </html>
  );
}
