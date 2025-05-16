"use client"

import { Button } from "@/components/ui/button"
import { useGameStore } from "@/lib/store"
import type { Choice as ChoiceType } from "@/lib/types"

export default function Choice({ choice }: { choice: ChoiceType }) {
  const { executeChoice } = useGameStore()

  // Crear una descripción de los efectos si existen
  let effectsText = ""
  if (choice.effects) {
    const effects = []
    if (choice.effects.energy) effects.push(`energía: ${choice.effects.energy > 0 ? "+" : ""}${choice.effects.energy}`)
    if (choice.effects.mood) effects.push(`ánimo: ${choice.effects.mood > 0 ? "+" : ""}${choice.effects.mood}`)
    if (choice.effects.time) effects.push(`tiempo: ${choice.effects.time > 0 ? "+" : ""}${choice.effects.time}`)
    if (choice.effects.bugs) effects.push(`bugs: ${choice.effects.bugs > 0 ? "+" : ""}${choice.effects.bugs}`)

    if (effects.length > 0) {
      effectsText = `// ${effects.join(", ")}`
    }
  }

  return (
    <Button
      variant="outline"
      className="w-full justify-start font-mono text-left"
      onClick={() => executeChoice(choice)}
    >
      <span className="flex justify-between w-full">
        <span>{choice.functionName}()</span>
        {effectsText && <span className="text-xs text-muted-foreground">{effectsText}</span>}
      </span>
    </Button>
  )
}
