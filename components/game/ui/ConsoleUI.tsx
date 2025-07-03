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
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-teal-400 font-mono flex flex-col overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogIzAwMDsiPjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAiLz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iMiwyIi8+PC9zdmc+')] opacity-5 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto w-full h-full flex flex-col p-6">
        {/* Título */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500 mb-2">
            CONSOLA UMBRAL
          </h1>
          <p className="text-teal-400/80 text-sm tracking-widest">MÓDULO DE SIMULACIÓN</p>
        </div>
        
        {/* Contenido de la consola */}
        <div 
          ref={consoleRef}
          className="flex-1 overflow-y-auto mb-6 border-2 border-teal-400/20 p-6 bg-black/30 backdrop-blur-sm shadow-lg shadow-teal-400/10 whitespace-pre-line overflow-auto"
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
          <div className="mt-auto pt-6 border-t-2 border-teal-400/20 flex-shrink-0">
            <p className="text-teal-400/80 text-sm mb-4 tracking-wider">SELECCIONA UNA OPCIÓN:</p>
            <div className="space-y-3">
              {currentScene.options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full text-left px-6 py-4 border-l-4 transition-all duration-200 flex items-center ${
                    selectedIndex === index
                      ? 'border-teal-400 bg-teal-400/10 text-teal-300 shadow-lg shadow-teal-400/10'
                      : 'border-transparent hover:border-teal-400/30 hover:bg-teal-400/5 text-teal-400/80 hover:text-teal-300'
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  <div className="flex items-center">
                    <span className="mr-4 text-teal-400">
                      {getIconForOption(option.text)}
                    </span>
                    <span className="text-lg font-medium tracking-wider">
                      {option.text}
                    </span>
                  </div>
                  {selectedIndex === index && (
                    <ChevronRight className="ml-auto w-5 h-5 text-teal-400 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Instrucciones */}
        <div className="mt-6 text-center">
          <p className="text-xs text-teal-400/50 tracking-wider">
            <span className="inline-block px-2 py-1 bg-teal-400/10 rounded mr-2">↑↓</span>
            <span className="mr-4">NAVEGAR</span>
            <span className="inline-block px-2 py-1 bg-teal-400/10 rounded mr-2">ENTER</span>
            <span>SELECCIONAR</span>
          </p>
        </div>
        
        {/* Estado del sistema */}
        <div className="mt-4 text-center text-teal-400/50 text-xs">
          <p className="flex items-center justify-center gap-2">
            <span className="flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1 animate-pulse"></span>
              SISTEMA EN LÍNEA
            </span>
            <span>•</span>
            <span>VERSIÓN 1.0.0</span>
          </p>
        </div>
      </div>
      {/* Efecto de borde */}
      <div className="absolute inset-4 border border-teal-400/20 pointer-events-none"></div>
      <div className="absolute inset-6 border border-teal-400/10 pointer-events-none"></div>
    </div>
  );
}
