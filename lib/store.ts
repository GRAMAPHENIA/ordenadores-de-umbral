"use client"

import { create } from "zustand"
import type { Scene, Choice } from "@/lib/types"

interface GameState {
  // Estado del jugador
  energy: number
  mood: number
  time: number
  bugs: number

  // Estado del juego
  currentScene: Scene | null
  sceneHistory: Scene[]
  initialized: boolean

  // Acciones
  loadScene: (scene: Scene) => void
  executeChoice: (choice: Choice) => void
  updatePlayerState: (updates: Partial<PlayerState>) => void
  resetGame: () => void
}

interface PlayerState {
  energy: number
  mood: number
  time: number
  bugs: number
}

export const useGameStore = create<GameState>((set, get) => ({
  // Estado inicial del jugador
  energy: 50,
  mood: 50,
  time: 0,
  bugs: 0,

  // Estado inicial del juego
  currentScene: null,
  sceneHistory: [],
  initialized: false,

  // Acciones
  loadScene: (scene: Scene) => {
    set({
      currentScene: scene,
      sceneHistory: [...get().sceneHistory, scene],
      initialized: true,
    })
  },

  executeChoice: (choice: Choice) => {
    // Aplicar efectos al estado del jugador
    if (choice.effects) {
      get().updatePlayerState(choice.effects)
    }

    // Cargar la siguiente escena si existe
    if (choice.nextScene) {
      // Si la escena no tiene opciones, agregar una opción para continuar
      if (choice.nextScene.choices.length === 0) {
        choice.nextScene.choices = [
          {
            functionName: "continue",
            description: "Continuar explorando",
            effects: {
              energy: 5,
              time: 10,
            },
            nextScene: {
              id: "continue",
              text: `> continue() ejecutado
> +5 energía
> +10 tiempo

Decides continuar tu exploración de este nuevo poder.

"Cada elección te lleva más profundo en el laberinto del código y la realidad. ¿Hasta dónde llegarás?"

La terminal parpadea, esperando tu próximo comando...`,
              choices: [
                {
                  functionName: "returnToStart",
                  description: "Volver al principio",
                  effects: {
                    energy: 20,
                    mood: 10,
                    time: -30,
                  },
                  nextScene: get().sceneHistory[0] || null,
                },
              ],
            },
          },
        ]
      }
      get().loadScene(choice.nextScene)
    }
  },

  updatePlayerState: (updates: Partial<PlayerState>) => {
    set((state) => ({
      energy: clampValue(updates.energy !== undefined ? updates.energy + state.energy : state.energy),
      mood: clampValue(updates.mood !== undefined ? updates.mood + state.mood : state.mood),
      time: updates.time !== undefined ? updates.time + state.time : state.time,
      bugs: updates.bugs !== undefined ? updates.bugs + state.bugs : state.bugs,
    }))
  },

  resetGame: () => {
    set({
      energy: 50,
      mood: 50,
      time: 0,
      bugs: 0,
      currentScene: null,
      sceneHistory: [],
      initialized: false,
    })
  },
}))

// Función auxiliar para mantener los valores entre 0 y 100
function clampValue(value: number): number {
  return Math.max(0, Math.min(100, value))
}
