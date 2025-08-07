import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ORDENADORES_DE_UMBRAL.EXE",
  description: "Sistema de Aprendizaje de Principios de Software",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-black text-green-400 font-mono">
        {/* Efecto de ruido CRT */}
        <div className="fixed inset-0 pointer-events-none bg-[url('/crt-noise.png')] opacity-10 mix-blend-overlay z-50"></div>
        
        {/* Contenido principal */}
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">
            {children}
          </main>
        </div>
        
        {/* Efectos visuales */}
        <div className="fixed inset-0 border-4 border-green-500/10 pointer-events-none z-40"></div>
        <div className="fixed inset-0 shadow-[inset_0_0_30px_5px_rgba(57,255,20,0.1)] pointer-events-none z-30"></div>
      </body>
    </html>
  );
}
