import "@/app/globals.css";
import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es" className="bg-black">

      <head>
        <Script src="https://kit.fontawesome.com/74d1405387.js"/>
      </head>

      <body className={`antialiased`}>
          {children}
      </body>
    </html>
  );
}
