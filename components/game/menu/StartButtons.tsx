"use client";

import { Button } from "@/components/ui/button";
import { Info, Code } from "lucide-react";

interface StartButtonsProps {
  onStart: () => void;
  onShowAbout: () => void;
  onShowCredits: () => void;
}

export default function StartButtons({ onStart, onShowAbout, onShowCredits }: StartButtonsProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center space-y-4">
      <Button onClick={onStart} className="w-48 h-12 text-lg font-bold pulse-animation" variant="default">
        COMENZAR
      </Button>

      <div className="mt-8 space-y-2">
        <Button onClick={onShowAbout} variant="ghost" className="w-48 text-sm">
          <Info className="mr-2 h-4 w-4" />
          Documentos
        </Button>

        <Button onClick={onShowCredits} variant="ghost" className="w-48 text-sm">
          <Code className="mr-2 h-4 w-4" />
          Créditos
        </Button>
      </div>
    </div>
  );
}
