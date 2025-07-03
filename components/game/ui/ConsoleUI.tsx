"use client";

import { useEffect, useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import type { Scene } from '@/lib/types';
import { solidIntroScene } from '@/data/scenes/solid';
import { Header } from '@/components/ui/header/Header';
import { Footer } from '@/components/ui/footer/Footer';

export default function ConsoleUI() {
  const router = useRouter();
  const [currentScene, setCurrentScene] = useState<Scene>(solidIntroScene);
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

    // Si la opción tiene una función especial, ejecutarla
    if (choice.functionName === 'skipTutorial') {
      const challengeScene = {
        id: 'challenge-start',
        text: `> DESAFÍO DE PRINCIPIOS SOLID

¡Bienvenido al desafío de principios SOLID!

Demuestra tu conocimiento sobre los principios fundamentales del diseño orientado a objetos.

¿Estás listo para comenzar?`,
        choices: [
          {
            functionName: 'startChallenge',
            description: '¡Sí, comenzar desafío!',
            nextScene: {
              id: 'challenge-srp',
              text: `> PRINCIPIO DE RESPONSABILIDAD ÚNICA (SRP)

¿Cuál de los siguientes ejemplos mejor representa el Principio de Responsabilidad Única?`,
              choices: [
                { 
                  functionName: 'srp-wrong1',
                  description: 'Una clase Usuario que maneja autenticación, envío de correos y generación de reportes',
                  nextScene: {
                    id: 'challenge-srp-feedback-wrong',
                    text: '❌ Incorrecto. Este es un ejemplo de lo que NO se debe hacer. Una clase no debería tener múltiples responsabilidades.',
                    choices: [
                      { functionName: 'retry-srp', description: 'Volver a intentar', nextScene: solidIntroScene }
                    ]
                  }
                },
                { 
                  functionName: 'srp-correct',
                  description: 'Una clase Usuario que solo maneja datos del usuario y otra clase Autenticador que maneja la autenticación',
                  nextScene: {
                    id: 'challenge-ocp',
                    text: `✅ ¡Correcto! Has identificado correctamente el Principio de Responsabilidad Única.

> PRINCIPIO ABIERTO/CERRADO (OCP)

¿Cuál es la mejor manera de extender el comportamiento de una clase sin modificar su código fuente?`,
                    choices: [
                      {
                        functionName: 'ocp-wrong1',
                        description: 'Modificar directamente la clase existente',
                        nextScene: {
                          id: 'ocp-feedback-wrong',
                          text: '❌ Incorrecto. Modificar directamente la clase existente puede introducir errores en el código que ya funciona.',
                          choices: [
                            { functionName: 'retry-ocp', description: 'Volver a intentar', nextScene: solidIntroScene }
                          ]
                        }
                      },
                      {
                        functionName: 'ocp-correct',
                        description: 'Crear una nueva clase que herede de la clase base',
                        nextScene: {
                          id: 'challenge-lsp',
                          text: `✅ ¡Excelente! La herencia es una forma de extender el comportamiento sin modificar el código existente.

> PRINCIPIO DE SUSTITUCIÓN DE LISKOV (LSP)

¿Qué principio se viola cuando una subclase no puede ser utilizada en lugar de su clase base sin alterar el comportamiento del programa?`,
                          choices: [
                            {
                              functionName: 'lsp-correct',
                              description: 'Principio de Sustitución de Liskov',
                              nextScene: {
                                id: 'challenge-completion',
                                text: `🎉 ¡Felicidades! Has completado el desafío de principios SOLID.

Has demostrado un excelente entendimiento de los principios fundamentales del diseño de software.

¿Qué te gustaría hacer ahora?`,
                                choices: [
                                  { functionName: 'back-to-main', description: 'Volver al menú principal', nextScene: solidIntroScene },
                                  { functionName: 'learn-more', description: 'Aprender más sobre SOLID', nextScene: solidIntroScene }
                                ]
                              }
                            },
                            {
                              functionName: 'lsp-wrong1',
                              description: 'Principio de Inversión de Dependencias',
                              nextScene: {
                                id: 'lsp-feedback-wrong',
                                text: '❌ No exactamente. El Principio de Inversión de Dependencias es diferente. ¡Sigue aprendiendo!',
                                choices: [
                                  { functionName: 'retry-lsp', description: 'Volver a intentar', nextScene: solidIntroScene }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                { 
                  functionName: 'srp-wrong2',
                  description: 'Una clase que tiene un solo método pero hace muchas cosas diferentes',
                  nextScene: {
                    id: 'challenge-srp-feedback-wrong2',
                    text: '❌ Casi. Aunque la clase tiene un solo método, si ese método hace muchas cosas diferentes, aún podría estar violando el SRP.',
                    choices: [
                      { functionName: 'retry-srp', description: 'Volver a intentar', nextScene: solidIntroScene }
                    ]
                  }
                }
              ]
            }
          },
          {
            functionName: 'backToMenu',
            description: 'Volver al menú principal',
            nextScene: solidIntroScene // Volver al inicio
          }
        ]
      };
      setCurrentScene(challengeScene);
      return;
    }

    // Si la opción tiene una acción de navegación
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
    <div className="w-full h-[calc(100vh-2rem)] bg-black text-teal-400 font-mono flex flex-col overflow-hidden text-sm">
      <Header currentSceneId={currentScene.id} energy={100} />

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

      <Footer />
    </div>
  );
}
