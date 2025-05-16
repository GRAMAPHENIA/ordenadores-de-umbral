"use client"

import type React from "react"

import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface PhilosophicalTooltipProps {
  term: string
  concept: string
  author?: string
  children: React.ReactNode
}

export default function PhilosophicalTooltip({ term, concept, author, children }: PhilosophicalTooltipProps) {
  const [open, setOpen] = useState(false)

  return (
    <TooltipProvider>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <span
            className={author?.includes("Nietzsche") ? "nietzsche-term" : "semiotic-term"}
            onClick={() => setOpen(true)}
          >
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <div className="space-y-1">
            <p className="font-bold">{term}</p>
            <p className="text-sm">{concept}</p>
            {author && <p className="text-xs italic">— {author}</p>}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
