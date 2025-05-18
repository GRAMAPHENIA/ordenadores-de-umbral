import { useState } from "react";

interface MenuState {
  showCredits: boolean;
  showAbout: boolean;
  setShowCredits: (show: boolean) => void;
  setShowAbout: (show: boolean) => void;
}

export default function useMenuState() {
  const [showCredits, setShowCredits] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return { showCredits, showAbout, setShowCredits, setShowAbout };
}
