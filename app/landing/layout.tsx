import "@/app/globals.css";
import Script from 'next/script';
// import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script src="https://kit.fontawesome.com/74d1405387.js" />
      </head>
      <body className="antialiased">
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="black"
          enableSystem
          disableTransitionOnChange
        > */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}