"use client";

import { Button } from "@/components/ui/button";
import { useGameStore } from "@/lib/store";
import type { Choice as ChoiceType } from "@/lib/types";
import EffectItem from "@/components/game/effects/EffectItem";
import { getEffects } from "@/lib/effects";

export default function Choice({ choice }: { choice: ChoiceType }) {
  const { executeChoice } = useGameStore();

  const effects = choice.effects ? getEffects(choice.effects).map(effect => (
    <EffectItem key={effect.type} type={effect.type} value={effect.value} />
  )) : [];

  return (
    <Button
      variant="outline"
      onClick={() => executeChoice(choice)}
      className="w-full flex flex-col md:flex-row md:justify-between items-start text-left"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center w-full">
        <span className="flex-1">{choice.functionName}()</span>
        <div className="flex gap-4 text-xs md:mt-0 md:ml-4">{effects}</div>
      </div>
    </Button>
  );
}
