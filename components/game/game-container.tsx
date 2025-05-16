"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Scene from "@/components/game/scene"
import MainMenu from "@/components/game/main-menu"
import { useGameStore } from "@/lib/store"
import { introScene } from "@/data/scenes/intro"

export default function GameContainer() {
  const { currentScene, loadScene, initialized, energy, mood, time, bugs, resetGame } = useGameStore()
  const [showMenu, setShowMenu] = useState(true)

  useEffect(() => {
    // Resetear el juego cuando volvemos al menú principal
    if (showMenu) {
      resetGame()
    }
  }, [showMenu, resetGame])

  // Añadir event listener para la tecla Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !showMenu) {
        setShowMenu(true)
      }
    }

    // Añadir el event listener
    window.addEventListener("keydown", handleKeyDown)

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [showMenu])

  const startGame = () => {
    loadScene(introScene)
    setShowMenu(false)
  }

  const returnToMenu = () => {
    setShowMenu(true)
  }

  // Mostrar el menú principal
  if (showMenu) {
    return <MainMenu onStart={startGame} />
  }

  // Mostrar pantalla de carga
  if (!currentScene) {
    return (
      <Card className="w-full max-w-3xl terminal-container">
        <CardContent className="p-6">
          <p className="terminal-text">Cargando...</p>
        </CardContent>
      </Card>
    )
  }

  // Mostrar el juego
  return (
    <Card className="w-full max-w-3xl terminal-container">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold terminal-text">Ordenadores de Umbral</h1>
          <div className="flex space-x-4 items-center">
            <StatusIndicator label="Energía" value={energy} />
            <StatusIndicator label="Ánimo" value={mood} />
            <StatusIndicator label="Tiempo" value={time} />
            <StatusIndicator label="Bugs" value={bugs} />
            <button
              onClick={returnToMenu}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
              title="Volver al menú principal"
            >
              [ESC]
            </button>
          </div>
        </div>
        <Separator className="mb-4" />
        <Scene />
      </CardContent>
    </Card>
  )
}

function StatusIndicator({ label, value }: { label: string; value: number }) {
  // Determinar el color basado en el valor
  let valueColor = "text-primary"
  if (value < 30) valueColor = "text-destructive"
  else if (value < 60) valueColor = "text-yellow-500"

  // Para bugs, invertir la lógica de colores
  if (label === "Bugs") {
    if (value > 10) valueColor = "text-destructive"
    else if (value > 5) valueColor = "text-yellow-500"
    else valueColor = "text-primary"
  }

  return (
    <div className="text-xs">
      <span className="text-muted-foreground">{label}: </span>
      <span className={valueColor}>{value}</span>
    </div>
  )
}
