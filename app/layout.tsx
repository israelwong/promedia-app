import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/app/ui/main/Navbar";
import Footer from "@/app/ui/main/Footer";
import { ThemeProvider } from "@/app/ui/theme-provider";

export const metadata: Metadata = {
  title: {
    template: '%s | ProMedia',
    default: 'Bienvenido',
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
      <body className={`antialiased bg-black`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
