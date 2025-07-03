"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Power, AlertTriangle, MessageSquare, BarChart2, Shield, X, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

type Scene = {
  id: string;
  text: string;
  options: {
    text: string;
    nextScene: string;
    action?: () => void;
  }[];
};

const scenes: Record<string, Scene> = {
  start: {
    id: 'start',
    text: 'SISTEMA DE REALIDAD VIRTUAL - VERSIÓN 1.0.0\n\nBienvenido al Umbral.\n\nLa simulación ha comenzado.\n\nEres un operador de realidad en un futuro distópico. Tu trabajo es mantener el equilibrio entre las dimensiones.\n\n¿Estás listo para comenzar?',
    options: [
      { text: 'INICIAR SIMULACIÓN', nextScene: 'scene1' },
      { text: 'SALIR', nextScene: 'exit' }
    ]
  },
  scene1: {
    id: 'scene1',
    text: 'La sala de control está en silencio. Las pantallas muestran fluctuaciones dimensionales inusuales.\n\n¿Qué acción tomas?',
    options: [
      { text: 'ANALIZAR FLUCTUACIONES', nextScene: 'analyze' },
      { text: 'ACTIVAR PROTOCOLO SEGURIDAD', nextScene: 'security' },
      { text: 'REVISAR MENSAJES', nextScene: 'messages' }
    ]
  },
  // Agrega más escenas según sea necesario
  exit: {
    id: 'exit',
    text: 'Saliendo del sistema...',
    options: []
  }
};

export default function ConsoleUI() {
  const router = useRouter();
  const [currentScene, setCurrentScene] = useState<Scene>(scenes.start);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const consoleRef = useRef<HTMLDivElement>(null);

  // Efecto para el teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showOptions) return;
      
      switch (e.key) {
        case 'ArrowUp':
          setSelectedIndex(prev => Math.max(0, prev - 1));
          break;
        case 'ArrowDown':
          setSelectedIndex(prev => Math.min((currentScene.options.length - 1), prev + 1));
          break;
        case 'Enter':
          if (currentScene.options[selectedIndex]) {
            handleOptionSelect(currentScene.options[selectedIndex]);
          }
          break;
        case 'Escape':
          router.push('/');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, showOptions, currentScene]);

  // Efecto para el auto-scroll
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [displayText, showOptions]);

  // Efecto para la animación de escritura
  useEffect(() => {
    setDisplayText('');
    setIsTyping(true);
    setShowOptions(false);
    
    let currentIndex = 0;
    const text = currentScene.text;
    
    const typeWriter = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typeWriter);
        setIsTyping(false);
        if (currentScene.options.length > 0) {
          setShowOptions(true);
          setSelectedIndex(0);
        } else if (currentScene.id === 'exit') {
          setTimeout(() => router.push('/'), 1000);
        }
      }
    }, 30);
    
    return () => clearInterval(typeWriter);
  }, [currentScene]);

  const handleOptionSelect = useCallback((option: { nextScene: string; action?: () => void }) => {
    if (option.action) option.action();
    if (scenes[option.nextScene]) {
      setCurrentScene(scenes[option.nextScene]);
    }
  }, []);

  const getIconForOption = (text: string) => {
    if (text.includes('INICIAR')) return <Power className="w-4 h-4 mr-2" />;
    if (text.includes('SALIR')) return <X className="w-4 h-4 mr-2" />;
    if (text.includes('ANALIZAR')) return <BarChart2 className="w-4 h-4 mr-2" />;
    if (text.includes('SEGURIDAD')) return <Shield className="w-4 h-4 mr-2" />;
    if (text.includes('MENSAJES')) return <MessageSquare className="w-4 h-4 mr-2" />;
    if (text.includes('PELIGRO')) return <AlertTriangle className="w-4 h-4 mr-2" />;
    return <ChevronRight className="w-4 h-4 mr-2" />;
  };

  return (
    <div className="fixed inset-0 bg-black text-teal-400 font-mono flex flex-col overflow-hidden">
      {/* Efecto de escaneo */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto w-full h-full flex flex-col p-4">
        {/* Encabezado de la consola */}
        <div className="border-b border-teal-400/30 pb-2 mb-4 flex-shrink-0">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-teal-400"></div>
            <div className="ml-4 text-sm text-teal-400/80 font-medium">terminal@umbral:~</div>
          </div>
        </div>
        
        {/* Contenido de la consola */}
        <div 
          ref={consoleRef}
          className="flex-1 overflow-y-auto mb-4 border border-teal-400/20 p-4 bg-black/30 backdrop-blur-sm rounded-md shadow-lg shadow-teal-400/10 whitespace-pre-line overflow-auto"
        >
          <div className="min-h-full flex flex-col">
            <div className="flex-1">
              <p className="text-teal-400 font-mono text-sm leading-relaxed">
                {displayText}
                {isTyping && (
                  <span className="inline-block w-2 h-5 bg-teal-400 ml-1 align-middle animate-pulse"></span>
                )}
              </p>
            </div>
          </div>
        </div>
        
        {/* Opciones de diálogo */}
        {showOptions && currentScene.options.length > 0 && (
          <div className="mt-auto pt-4 border-t border-teal-400/20 flex-shrink-0">
            <div className="space-y-2">
              {currentScene.options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full text-left px-4 py-3 border-2 transition-all duration-200 flex items-center ${
                    selectedIndex === index
                      ? 'border-teal-400 bg-teal-400/10 text-teal-300 shadow-lg shadow-teal-400/20'
                      : 'border-teal-400/30 hover:border-teal-400/60 hover:bg-teal-400/5 text-teal-400/80 hover:text-teal-300'
                  } rounded-md`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {getIconForOption(option.text)}
                  <span className="font-medium text-sm">{option.text}</span>
                  {selectedIndex === index && (
                    <span className="ml-auto flex items-center text-xs text-teal-400/70">
                      <span className="mr-1">ENTER</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Instrucciones */}
        <div className="mt-4 text-center text-xs text-teal-400/50 flex justify-between items-center">
          {showOptions ? (
            <div className="flex items-center justify-center w-full space-x-4">
              <span className="flex items-center">
                <ChevronUp className="w-3 h-3 mr-1" />
                <ChevronDown className="w-3 h-3 mr-2" />
                Navegar
              </span>
              <span className="flex items-center">
                <span className="px-2 py-0.5 bg-teal-400/10 border border-teal-400/20 rounded mr-1">ENTER</span>
                Seleccionar
              </span>
              <span className="flex items-center">
                <span className="px-2 py-0.5 bg-teal-400/10 border border-teal-400/20 rounded mr-1">ESC</span>
                Salir
              </span>
            </div>
          ) : (
            <p className="w-full text-center">Cargando siguiente secuencia...</p>
          )}
        </div>
      </div>
    </div>
  );
}
