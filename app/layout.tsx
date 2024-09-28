import type { Metadata } from "next";
import Navbar from "@/app/ui/main/Navbar";
import Footer from "@/app/ui/main/Footer";
import { ThemeProvider } from "@/app/ui/theme-provider";
import Script from 'next/script';
import "@/app/globals.css";

// import { GoogleTagManager } from '@next/third-parties/google'

// import TagManager from '@sooro-io/react-gtm-module'
// const tagManagerArgs = {gtmId: 'GTM-M9ZT7HQ9'}
// TagManager.initialize(tagManagerArgs)

// end changes

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

        {(process.env.NODE_ENV === 'production') &&
        <script dangerouslySetInnerHTML={{
          __html: `(function (w, d, s, l, i) {
                  w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                  var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                  j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-M9ZT7HQ9' + i + dl; f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-M9ZT7HQ9');`
        }}></script>
        }

      </head>

      {/* <GoogleTagManager gtmId="GTM-M9ZT7HQ9" /> */}
      <body className={`antialiased bg-black`}>

      {(process.env.NODE_ENV === 'production') &&
        <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M9ZT7HQ9" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}></noscript>
      }

        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
