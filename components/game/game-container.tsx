"use client"

import { useGameStore } from "@/lib/store"
import MainMenu from "@/components/game/main-menu"
import useGameMenu from "@/components/game/hooks/useGameMenu"
import GameContent from "@/components/game/ui/GameContent"

/**
 * Contenedor principal del juego que coordina las diferentes partes del juego
 * y maneja la navegación entre estados.
 */
export default function GameContainer() {
  const { currentScene } = useGameStore()
  const { showMenu, startGame } = useGameMenu()

  if (showMenu) {
    return <MainMenu onStart={startGame} />
  }

  return <GameContent currentScene={currentScene} />
}
