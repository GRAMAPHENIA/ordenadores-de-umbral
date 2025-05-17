"use client"

import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import StatusIndicator from "../status/status-indicator"
import { useGameStore } from "@/lib/store"

const transitionStyles = {
  transition: "all 0.3s ease-in-out",
  opacity: 1,
  transform: "translateY(0)"
}

const transitionStylesOut = {
  opacity: 0,
  transform: "translateY(-20px)"
}

/**
 * Componente que representa la cabecera del juego con el título y los indicadores de estado
 */
export default function GameHeader() {
  const { energy, mood, time, bugs } = useGameStore()
  const [showMenu, setShowMenu] = useState(false)

  /**
   * Maneja el retorno al menú principal
   * - Muestra el menú principal
   * - Resetea el juego
   */
  const handleReturnToMenu = () => {
    setShowMenu(true)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold terminal-text">Ordenadores de Umbral</h1>
        <div className="flex space-x-4 items-center">
          <StatusIndicator label="Energía" value={energy} />
          <StatusIndicator label="Ánimo" value={mood} />
          <StatusIndicator label="Tiempo" value={time} />
          <StatusIndicator label="Bugs" value={bugs} />
          <button
            onClick={handleReturnToMenu}
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
            title="Volver al menú principal"
            aria-label="Volver al menú principal"
          >
            [ESC]
          </button>
        </div>
      </div>
      <Separator />
    </div>
  )
}
