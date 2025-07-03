"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Power, ChevronRight } from "lucide-react";
import type { Scene } from "@/lib/types";
import { initialScene } from "@/data/scenes";

export default function ConsoleUI() {
  const router = useRouter();
  const [currentScene, setCurrentScene] = useState<Scene>(initialScene);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const consoleRef = useRef<HTMLDivElement>(null);

  // Manejador de teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showOptions) return;
      
      switch (e.key) {
        case 'ArrowUp':
          setSelectedIndex(prev => Math.max(0, prev - 1));
          break;
        case 'ArrowDown':
          setSelectedIndex(prev => 
            Math.min(currentScene.choices.length - 1, prev + 1)
          );
          break;
        case 'Enter':
          if (currentScene.choices[selectedIndex]) {
            handleSelectOption(selectedIndex);
          }
          break;
        case 'Escape':
          router.push('/');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showOptions, selectedIndex, currentScene.choices, router]);

  // Efecto para la animación de escritura
  useEffect(() => {
    if (!currentScene) return;
    
    let currentIndex = 0;
    const text = currentScene.text;
    setDisplayText('');
    setIsTyping(true);
    setShowOptions(false);

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setShowOptions(true);
        setSelectedIndex(0);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [currentScene]);

  // Manejar selección de opción
  const handleSelectOption = useCallback((index: number) => {
    const choice = currentScene.choices[index];
    if (!choice) return;

    // Aplicar efectos si los hay
    // Aquí podrías actualizar el estado del juego con los efectos

    // Navegar a la siguiente escena
    if (choice.nextScene) {
      setCurrentScene(choice.nextScene);
    }
  }, [currentScene]);

  // Desplazamiento automático al final del texto
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [displayText, showOptions]);

  return (
    <div className="w-full h-screen bg-black text-teal-400 font-mono flex flex-col overflow-hidden text-sm">
      {/* Barra de estado superior */}
      <div className="flex justify-between items-center p-2 text-xs border-b border-teal-900/50 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <Power className="w-3 h-3 text-teal-400" />
          <span className="text-teal-300 font-medium">GRAPHOS</span>
        </div>
        <div className="flex items-center space-x-3 text-teal-400/90">
          <span className="whitespace-nowrap">⚡ 100%</span>
          <span>•</span>
          <span className="whitespace-nowrap">MODO: APRENDIZAJE</span>
          <span>•</span>
          <span className="text-teal-300 whitespace-nowrap">{currentScene.id.toUpperCase().substring(0, 12)}</span>
        </div>
      </div>

      {/* Consola principal */}
      <div 
        ref={consoleRef}
        className="flex-1 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-teal-900/50 scrollbar-track-transparent"
      >
        <div className="max-w-4xl mx-auto">
          <div className="whitespace-pre-wrap break-words leading-relaxed text-base">
            {displayText}
            {isTyping && (
              <span className="inline-block w-1.5 h-4 bg-teal-400 ml-1 animate-pulse align-middle"></span>
            )}
          </div>

        {/* Opciones de diálogo */}
        {showOptions && (
          <div className="mt-6 space-y-2">
            {currentScene.choices.map((choice, index) => (
              <div 
                key={index}
                className={`flex items-center p-3 border rounded-lg ${
                  selectedIndex === index 
                    ? 'border-teal-400 bg-teal-900/30 text-teal-100' 
                    : 'border-teal-800 hover:border-teal-500 text-teal-400 hover:text-teal-300'
                } cursor-pointer transition-all duration-150`}
                onClick={() => handleSelectOption(index)}
              >
                <ChevronRight className={`w-4 h-4 mr-3 flex-shrink-0 ${
                  selectedIndex === index ? 'text-teal-300' : 'text-teal-500'
                }`} />
                <span className="text-sm">{choice.description || `[${index + 1}]`}</span>
              </div>
            ))}
          </div>
        )}
        </div>
      </div>

      {/* Barra de estado inferior */}
      <div className="mt-auto">
        <div className="h-px bg-teal-900/50 my-1"></div>
        <div className="flex justify-between items-center text-xs text-teal-500/80 py-2 px-4 bg-black/30">
          <div className="truncate pr-4">USUARIO: PROGRAMADOR</div>
          <div className="flex-shrink-0 px-4">TERMINAL: ACTIVA</div>
          <div className="truncate pl-4 text-teal-400">AYUDA: F1</div>
        </div>
      </div>
    </div>
  );
}
