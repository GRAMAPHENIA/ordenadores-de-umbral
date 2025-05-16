"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Terminal, Code, Info, X } from "lucide-react"

interface MainMenuProps {
  onStart: () => void
}

export default function MainMenu({ onStart }: MainMenuProps) {
  const [showCredits, setShowCredits] = useState(false)
  const [showAbout, setShowAbout] = useState(false)

  return (
    <Card className="w-full max-w-3xl terminal-container min-h-[400px] flex flex-col">
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="text-center mb-8 mt-4">
          <div className="flex justify-center mb-2">
            <Terminal className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold terminal-text mb-2">Ordenadores de Umbral</h1>
          <p className="text-muted-foreground text-sm">Un juego narrativo donde el código modifica la realidad</p>
        </div>

        <Separator className="mb-8" />

        {!showCredits && !showAbout ? (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <Button onClick={onStart} className="w-48 h-12 text-lg font-bold pulse-animation" variant="default">
              COMENZAR
            </Button>

            <div className="mt-8 space-y-2">
              <Button onClick={() => setShowAbout(true)} variant="ghost" className="w-48 text-sm">
                <Info className="mr-2 h-4 w-4" />
                Sobre el juego
              </Button>

              <Button onClick={() => setShowCredits(true)} variant="ghost" className="w-48 text-sm">
                <Code className="mr-2 h-4 w-4" />
                Créditos
              </Button>
            </div>
          </div>
        ) : showCredits ? (
          <CreditsScreen onBack={() => setShowCredits(false)} />
        ) : (
          <AboutScreen onBack={() => setShowAbout(false)} />
        )}

        <div className="text-center text-xs text-muted-foreground mt-8">
          <p>Durante el juego, presioná la tecla [ESC] para volver al menú principal</p>
        </div>
      </CardContent>
    </Card>
  )
}

function CreditsScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold terminal-text">Créditos</h2>
        <Button variant="ghost" size="sm" onClick={onBack}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <h3 className="text-primary font-bold mb-1">Concepto y Diseño</h3>
          <p className="text-muted-foreground">Un juego narrativo interactivo donde el código modifica la realidad</p>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-1">Tecnologías</h3>
          <p className="text-muted-foreground">Next.js, React, TypeScript, Tailwind CSS, Zustand</p>
        </div>

        <div>
          <h3 className="text-primary font-bold mb-1">Inspiración</h3>
          <p className="text-muted-foreground">La intersección entre programación, filosofía y narrativa interactiva</p>
        </div>
      </div>
    </div>
  )
}

function AboutScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold terminal-text">Sobre el juego</h2>
        <Button variant="ghost" size="sm" onClick={onBack}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4 text-sm">
        <p>
          En <span className="text-primary font-bold">Ordenadores de Umbral</span>, sos un programador que descubre que
          puede invocar funciones JavaScript que afectan su vida cotidiana.
        </p>

        <p>
          Cada elección que tomes modificará tu realidad y abrirá nuevos caminos en la narrativa. Explorá las
          implicaciones existenciales de poder programar la realidad misma.
        </p>

        <div className="mt-4">
          <h3 className="text-primary font-bold mb-1">Cómo jugar</h3>
          <p className="text-muted-foreground">
            Seleccioná funciones para ejecutarlas y avanzar en la historia. Cada función afectará tus estadísticas:
            Energía, Ánimo, Tiempo y Bugs.
          </p>
        </div>
      </div>
    </div>
  )
}
