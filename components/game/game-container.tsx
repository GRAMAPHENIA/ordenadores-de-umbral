"use client"

import { useGameStore } from "@/lib/store"
import { useEffect, useRef, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import dynamic from "next/dynamic"
import LoadingScreen from "./ui/LoadingScreen"
import ConsoleUI from "./ui/ConsoleUI"

// Importación dinámica para cargar el contenido del juego solo cuando sea necesario
const GameContent = dynamic(() => import("./ui/GameContent"), {
  loading: () => (
    <div className="flex items-center justify-center h-64">
      <p className="text-teal-400">Cargando experiencia...</p>
    </div>
  ),
  ssr: false,
})

/**
 * Contenedor principal del juego que coordina las diferentes partes del juego
 * y maneja la navegación entre estados.
 */
export default function GameContainer() {
  const router = useRouter()
  const pathname = usePathname()
  const initialized = useGameStore((state) => state.initialized)
  const initializeGame = useGameStore((state) => state.initializeGame)
  const showMainMenu = useGameStore((state) => state.showMainMenu)
  const toggleMainMenu = useGameStore((state) => state.toggleMainMenu)
  const currentScene = useGameStore((state) => state.currentScene)
  const gameContainerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Inicializar el juego al montar el componente
  useEffect(() => {
    if (!initialized) {
      initializeGame()
    }
  }, [initializeGame, initialized])

  // Manejador de teclado para mostrar/ocultar menú con ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (pathname === '/ordenador-de-umbral') {
          router.push('/')
        } else {
          toggleMainMenu()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleMainMenu, pathname, router])

  // Manejar el enfoque del teclado
  useEffect(() => {
    if (gameContainerRef.current) {
      gameContainerRef.current.focus()
    }
  }, [])

  // Mostrar pantalla de carga si está cargando
  if (isLoading) {
    return (
      <LoadingScreen onComplete={() => {
        setIsLoading(false);
        // Inicializar el juego cuando la carga esté completa
        if (!initialized) {
          initializeGame();
        }
      }} />
    );
  }

  // Si estamos en la ruta del juego, mostrar la consola
  if (pathname === '/ordenador-de-umbral') {
    return <ConsoleUI />;
  }

  // En la página principal, no mostramos nada aquí ya que MainMenu se maneja en page.tsx
  return null
}
