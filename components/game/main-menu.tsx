"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import useMenuState from "./menu/useMenuState"
import MenuTitle from "./menu/MenuTitle"
import StartButtons from "./menu/StartButtons"
import CreditsScreen from "./menu/CreditsScreen"
import AboutScreen from "./menu/AboutScreen"

interface MainMenuProps {
  onStart: () => void
}

export default function MainMenu({ onStart }: MainMenuProps) {
  const { showCredits, showAbout, setShowCredits, setShowAbout } = useMenuState()

  return (
    <Card className="w-full max-w-3xl terminal-container min-h-[400px] flex flex-col">
      <CardContent className="p-6 flex-1 flex flex-col">
        <MenuTitle />

        <Separator className="mb-8" />

        {!showCredits && !showAbout ? (
          <StartButtons
            onStart={onStart}
            onShowAbout={() => setShowAbout(true)}
            onShowCredits={() => setShowCredits(true)}
          />
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
