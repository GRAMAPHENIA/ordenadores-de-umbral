"use client";

import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";

// Importación dinámica del MainMenu para asegurar que se cargue solo en el cliente
const MainMenu = dynamic(
  () => import('@/components/game/ui/MainMenu'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="animate-pulse text-teal-400">
        CARGANDO SISTEMA...
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <MainMenu />
  );
}
