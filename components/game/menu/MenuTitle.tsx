"use client";

import { Terminal } from "lucide-react";

export default function MenuTitle() {
  return (
    <div className="text-center mb-8 mt-4">
      <div className="flex justify-center mb-2">
        <Terminal className="h-12 w-12 text-primary" />
      </div>
      <h1 className="text-4xl font-bold terminal-text mb-2">Ordenadores de Umbral</h1>
      <p className="text-muted-foreground text-sm">Narrativas v 0.1</p>
    </div>
  );
}
