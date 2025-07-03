"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Info, Code } from "lucide-react";

interface StartButtonsProps {
  onStart: () => void;
  onShowAbout: () => void;
  onShowCredits: () => void;
}

export default function StartButtons({
  onStart,
  onShowAbout,
  onShowCredits,
}: StartButtonsProps) {
  const router = useRouter();

  const handleStart = () => {
    onStart();
    router.push('/ordenador-de-umbral');
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center space-y-4">
      <Button 
        onClick={handleStart} 
        className="w-48 h-12 text-lg" 
        variant="default"
      >
        COMENZAR
      </Button>

      <Button onClick={onShowAbout} variant="ghost" className="w-48 text-sm">
        <Info className="mr-2 h-4 w-4" />
        Documentos
      </Button>

      <Button onClick={onShowCredits} variant="ghost" className="w-48 text-sm">
        <Code className="mr-2 h-4 w-4" />
        Créditos
      </Button>
    </div>
  );
}
