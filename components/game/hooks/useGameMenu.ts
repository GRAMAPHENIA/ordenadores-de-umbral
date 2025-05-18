import { useEffect, useState } from "react";
import { useGameStore } from "@/lib/store";

export interface GameMenuState {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
  startGame: () => void;
}

export default function useGameMenu() {
  const [showMenu, setShowMenu] = useState(true);
  const { resetGame, loadScene } = useGameStore();
  const { introScene } = require("@/data/scenes/intro");

  // Resetear el juego cuando se muestra el menú
  useEffect(() => {
    if (showMenu) {
      resetGame();
    }
  }, [showMenu, resetGame]);

  // Manejar el evento de tecla Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !showMenu) {
        setShowMenu(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showMenu]);

  const startGame = () => {
    loadScene(introScene);
    setShowMenu(false);
  };

  return { showMenu, setShowMenu, startGame };
}
