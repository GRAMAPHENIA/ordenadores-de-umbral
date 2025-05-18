"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CreditsScreenProps {
  onBack: () => void;
}

export default function CreditsScreen({ onBack }: CreditsScreenProps) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold terminal-text">Créditos</h2>
        <Button variant="ghost" size="sm" onClick={onBack}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <h3 className="text-primary font-bold mb-1">Concepto y Diseño</h3>
          <p className="text-muted-foreground">Un juego narrativo interactivo donde el código modifica la realidad</p>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-1">Tecnologías</h3>
          <p className="text-muted-foreground">Next.js, React, TypeScript, Tailwind CSS, Zustand</p>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-1">Inspiración</h3>
          <p className="text-muted-foreground">La intersección entre programación, filosofía y narrativa interactiva</p>
        </div>
      </div>
    </div>
  );
}
