"use client"

import { Button } from "@/components/ui/button"
import { useGameStore } from "@/lib/store"
import type { Choice as ChoiceType } from "@/lib/types"
import Image from "next/image"

const EffectItem = ({
  icon,
  alt,
  value,
}: {
  icon: string
  alt: string
  value: number
}) => (
  <div className="flex items-center">
    <Image src={icon} alt={alt} width={20} height={20} className="w-4 h-4" />
    <span className={value > 0 ? "text-teal-400" : "text-rose-500"}>{value}</span>
  </div>
)

export default function Choice({ choice }: { choice: ChoiceType }) {
  const { executeChoice } = useGameStore()

  const effects = choice.effects
    ? [
        choice.effects.energy && (
          <EffectItem key="energy" icon="/icons/energy.svg" alt="Energía" value={choice.effects.energy} />
        ),
        choice.effects.mood && (
          <EffectItem key="mood" icon="/icons/mood.svg" alt="Ánimo" value={choice.effects.mood} />
        ),
        choice.effects.time && (
          <EffectItem key="time" icon="/icons/time.svg" alt="Tiempo" value={choice.effects.time} />
        ),
        choice.effects.bugs && (
          <EffectItem key="bugs" icon="/icons/bugs.svg" alt="Bugs" value={choice.effects.bugs} />
        ),
      ].filter(Boolean)
    : []

  return (
    <Button
      variant="outline"
      onClick={() => executeChoice(choice)}
      className="w-full flex flex-col md:flex-row md:justify-between items-start text-left"
    >
      <div className="flex items-start md:items-center w-full">
        <span className="flex-1">{choice.functionName}()</span>
        <div className="flex gap-4 text-xs md:mt-0 md:ml-4">{effects}</div>
      </div>
    </Button>
  )
}
