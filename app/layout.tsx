import type React from "react";
import type { Metadata } from "next/types";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ordenadores de Umbral",
  description: "Un juego narrativo donde el código modifica la realidad",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-mono bg-black text-teal-500 scrollbar-custom`}>
        {children}
      </body>
    </html>
  );
}
