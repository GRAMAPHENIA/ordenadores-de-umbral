"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface AboutScreenProps {
  onBack: () => void;
}

export default function AboutScreen({ onBack }: AboutScreenProps) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold terminal-text">Documentos</h2>
        <Button variant="ghost" size="sm" onClick={onBack}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4 text-sm">
        <p>
          En <span className="text-primary font-bold">Ordenadores de Umbral</span>, sos un programador que descubre que
          puede invocar funciones JavaScript que afectan su vida cotidiana.
        </p>

        <p>
          Cada elección que tomes modificará tu realidad y abrirá nuevos caminos en la narrativa. Explorá las
          implicaciones existenciales de poder programar la realidad misma.
        </p>

        <div className="mt-4">
          <h3 className="text-primary font-bold mb-1">Cómo jugar</h3>
          <p className="text-muted-foreground">
            Seleccioná funciones para ejecutarlas y avanzar en la historia. Cada función afectará tus estadísticas:
            Energía, Ánimo, Tiempo y Bugs.
          </p>
        </div>
      </div>
    </div>
  );
}
