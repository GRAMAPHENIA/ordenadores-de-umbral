"use client";

import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";

// Importación dinámica del MainMenu para asegurar que se cargue solo en el cliente
const MainMenu = dynamic(
  () => import("@/components/game/main-menu"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black">
      <Card className="w-full max-w-3xl terminal-container min-h-[400px] flex flex-col">
        <MainMenu onStart={() => {}} />
      </Card>
    </main>
  );
}
