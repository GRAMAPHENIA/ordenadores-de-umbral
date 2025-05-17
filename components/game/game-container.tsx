"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { default as Scene } from "@/components/game/scene"
import { default as MainMenu } from "@/components/game/main-menu"
import { useGameStore } from "@/lib/store"
import { introScene } from "@/data/scenes/intro"
import GameHeader from "./header/game-header"

/**
 * Contenedor principal del juego que maneja la lógica global y la navegación
 * entre el menú principal y la escena del juego.
 */
export default function GameContainer() {
  const { currentScene, loadScene, resetGame } = useGameStore()
  const [showMenu, setShowMenu] = useState(true)

  /**
   * Resetear el juego cuando se muestra el menú principal
   * - Resetea todos los estados del juego
   * - Limpia la escena actual
   */
  useEffect(() => {
    if (showMenu) {
      resetGame()
    }
  }, [showMenu, resetGame])

  /**
   * Manejar el evento de tecla Escape
   * - Permite volver al menú principal desde cualquier escena
   * - Solo funciona cuando no se está en el menú principal
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !showMenu) {
        setShowMenu(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [showMenu])

  /**
   * Iniciar el juego desde el menú principal
   * - Carga la escena de introducción
   * - Oculta el menú principal
   */
  const startGame = () => {
    loadScene(introScene)
    setShowMenu(false)
  }

  if (showMenu) {
    return <MainMenu onStart={startGame} />
  }

  if (!currentScene) {
    return (
      <Card className="w-full max-w-3xl terminal-container">
        <CardContent className="p-6">
          <p className="terminal-text">Cargando...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-3xl terminal-container">
      <CardContent className="p-6">
        <GameHeader />
        <Scene />
      </CardContent>
    </Card>
  )
}
