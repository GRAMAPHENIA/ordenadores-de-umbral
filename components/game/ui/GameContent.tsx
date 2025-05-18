"use client";

import { Card, CardContent } from "@/components/ui/card";
import Scene from "@/components/game/scene";
import GameHeader from "@/components/game/header/game-header";
import LoadingState from "@/components/game/ui/LoadingState";

interface GameContentProps {
  currentScene: any; // Ajustar el tipo según tu store
}

function GameContent({ currentScene }: GameContentProps) {
  if (!currentScene) {
    return <LoadingState />;
  }

  return (
    <Card className="w-full max-w-3xl terminal-container">
      <CardContent className="p-6">
        <GameHeader />
        <Scene />
      </CardContent>
    </Card>
  );
}

export default GameContent;
