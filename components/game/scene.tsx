"use client"

import { useGameStore } from "@/lib/store"
import Choice from "@/components/game/choice"
import CodeFragment from "./text/code-fragment"
import Quote from "./text/quote"
import RegularText from "./text/regular-text"

export default function Scene() {
  const { currentScene } = useGameStore()

  if (!currentScene) return null

  // Procesar el texto para resaltar elementos existenciales y filosóficos
  const processedText = currentScene.text.split("\n").map((line, index) => {
    // Destacar mensajes de terminal
    if (line.startsWith(">")) {
      return (
        <CodeFragment key={index} text={line} />
      )
    }

    // Destacar citas entre comillas (ahora con estilo filosófico)
    if (line.includes('"') && line.split('"').length > 2) {
      const parts = line.split('"')
      const quoteType = line.includes("Nietzsche") ||
        line.includes("verdad") ||
        line.includes("interpretaci") ||
        line.includes("poder")
        ? 'philosophical'
        : 'existential'

      return (
        <div key={index} className="my-2">
          {parts[0]}
          <Quote text={parts[1]} type={quoteType} />
          {parts[2]}
        </div>
      )
    }

    // Texto normal
    return (
      <RegularText key={index} text={line} />
    )
  })

  return (
    <div className="space-y-6">
      <div className="space-y-4 terminal-text whitespace-pre-line">{processedText}</div>

      {currentScene.choices && currentScene.choices.length > 0 && (
        <div className="space-y-2 mt-6">
          <p className="text-sm text-muted-foreground">Funciones disponibles:</p>
          <div className="space-y-2">
            {currentScene.choices.map((choice, index) => (
              <Choice key={index} choice={choice} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
