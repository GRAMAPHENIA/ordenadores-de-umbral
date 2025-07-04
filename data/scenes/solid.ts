import type { Scene } from "@/lib/types"

// Primero definimos la estructura base de la escena de menú
const menuScene: Scene = {
  id: "tutorial-menu",
  text: `> MENÚ PRINCIPAL

Bienvenido al módulo de aprendizaje de principios SOLID.

Selecciona una opción para continuar:`,
  choices: []
};

// Luego definimos la escena de SRP
const srpScene: Scene = {
  id: "srp-level",
  text: `> Cargando: Principio de Responsabilidad Única (SRP)
> -5 energía
> +5 ánimo

"Una clase debe tener una única razón para cambiar, lo que significa que debe tener una sola responsabilidad."

Ves una clase llamada 'Usuario' que maneja tanto la autenticación como el envío de correos electrónicos. Claramente está violando el SRP.

"¿Cómo podrías refactorizar esta clase para que cumpla con el principio de responsabilidad única?"`,
  choices: [
    {
      functionName: "refactorSRP1",
      description: "Dividir en dos clases: Usuario y EmailService",
      effects: {
        energy: -10,
        mood: 15,
        bugs: -5
      },
      nextScene: {
        id: "srp-success",
        text: `> Refactorización exitosa
> -10 energía
> +15 ánimo
> -5 bugs

¡Correcto! Has separado las responsabilidades en dos clases distintas:

1. Usuario: maneja los datos del usuario
2. EmailService: maneja el envío de correos

"Excelente trabajo. Al separar estas responsabilidades, tu código será más fácil de mantener y probar."`,
        choices: [
          {
            functionName: "continueToOCP",
            description: "Continuar con el siguiente principio (OCP)",
            effects: {
              energy: -5,
              mood: 5
            }
          }
        ]
      }
    }
  ]
};

// Finalmente, definimos la escena de introducción
export const solidIntroScene: Scene = {
  id: "solid-intro",
  text: `> INICIANDO NIVEL: PRINCIPIOS SOLID
> Cargando módulo de diseño de software...

BIENVENIDO AL DESAFÍO DE PRINCIPIOS SOLID

Este nivel te presentará los cinco principios fundamentales del diseño orientado a objetos. Cada principio se presenta a través de ejemplos prácticos y desafíos de programación.

Los principios SOLID son la base para desarrollar software de calidad, mantenible y escalable. A lo largo de este nivel, podrás:

1. Comprender cada principio en profundidad
2. Identificar violaciones de estos principios
3. Aplicar soluciones siguiendo buenas prácticas

¿Cómo deseas proceder?`,
  choices: [
    {
      functionName: "startTutorial",
      description: "Iniciar el tutorial guiado (recomendado)",
      effects: {
        energy: -3,
        mood: 5,
      },
      nextScene: {
        id: "tutorial-start",
        text: `> TUTORIAL: INTRODUCCIÓN A LOS PRINCIPIOS SOLID

En este tutorial aprenderás los conceptos básicos de cada principio a través de ejemplos prácticos.

Cada principio se presenta con:
- Una explicación clara
- Un ejemplo de código problemático
- Opciones de solución
- Retroalimentación detallada

¿Listo para comenzar con el primer principio?`,
        choices: [
          {
            functionName: "startSRP",
            description: "Comenzar con el Principio de Responsabilidad Única (SRP)",
            effects: {
              energy: -5,
              mood: 5
            },
            nextScene: srpScene
          },
          {
            functionName: "skipToMenu",
            description: "Volver al menú principal",
            effects: {
              energy: -1,
              mood: 0
            },
            nextScene: menuScene
          }
        ]
      }
    },
    {
      functionName: "selectSRP",
      description: "Ir directamente al Principio de Responsabilidad Única (SRP)",
      effects: {
        energy: -5,
        mood: 5,
      },
      nextScene: {
        id: "srp-level",
        text: `> Cargando: Principio de Responsabilidad Única (SRP)
> -5 energía
> +5 ánimo

"Una clase debe tener una única razón para cambiar, lo que significa que debe tener una sola responsabilidad."

Ves una clase llamada 'Usuario' que maneja tanto la autenticación como el envío de correos electrónicos. Claramente está violando el SRP.

"¿Cómo podrías refactorizar esta clase para que cumpla con el principio de responsabilidad única?"`,
        choices: [
          {
            functionName: "refactorSRP1",
            description: "Dividir en dos clases: Usuario y EmailService",
            effects: {
              energy: -10,
              mood: 15,
              bugs: -5
            },
            nextScene: {
              id: "srp-success",
              text: `> Refactorización exitosa
> -10 energía
> +15 ánimo
> -5 bugs

¡Correcto! Has separado las responsabilidades en dos clases distintas:

1. Usuario: maneja los datos del usuario
2. EmailService: maneja el envío de correos

"Excelente trabajo. Al separar estas responsabilidades, tu código será más fácil de mantener y probar."

¿Quieres continuar con el siguiente principio?`,
              choices: [
                {
                  functionName: "nextPrincipleOCP",
                  description: "Continuar con el Principio Abierto/Cerrado (OCP)",
                  effects: {
                    energy: -5,
                    mood: 5
                  },
                  nextScene: {
                    id: "ocp-level",
                    text: `> Cargando: Principio Abierto/Cerrado (OCP)
> -5 energía
> +5 ánimo

"Las entidades de software deben estar abiertas para extensión pero cerradas para modificación."

Te encuentras con un sistema de procesamiento de pagos que necesita soportar múltiples métodos de pago. Actualmente, cada vez que se agrega un nuevo método, hay que modificar la clase principal.

"¿Cómo podrías rediseñar este sistema para que cumpla con el OCP?"`,
                    choices: [
                      {
                        functionName: "implementOCP",
                        description: "Usar el patrón Strategy para los métodos de pago",
                        effects: {
                          energy: -12,
                          mood: 18,
                          bugs: -8
                        },
                        nextScene: {
                          id: "ocp-success",
                          text: `> Refactorización exitosa
> -12 energía
> +18 ánimo
> -8 bugs

¡Perfecto! Has implementado el patrón Strategy, permitiendo que el sistema sea fácilmente extensible sin modificar el código existente.

"Ahora puedes agregar nuevos métodos de pago simplemente creando nuevas clases que implementen la interfaz de pago. El sistema está abierto para extensión pero cerrado para modificación."

¿Listo para el siguiente principio?`,
                          choices: [
                            {
                              functionName: "nextPrincipleLSP",
                              description: "Continuar con el Principio de Sustitución de Liskov (LSP)",
                              effects: {
                                energy: -5,
                                mood: 5
                              },
                              nextScene: {
                                id: "lsp-level",
                                text: `> Cargando: Principio de Sustitución de Liskov (LSP)
> -5 energía
> +5 ánimo

"Los objetos de un programa deberían ser reemplazables por instancias de sus subtipos sin alterar el correcto funcionamiento del programa."

Te encuentras con una jerarquía de clases donde la clase Pato tiene un método volar(). La clase PatoDeGoma hereda de Pato, pero no puede volar.

"¿Cómo resolverías esta violación del LSP?"`,
                                choices: [
                                  {
                                    functionName: "refactorLSP",
                                    description: "Usar composición en lugar de herencia",
                                    effects: {
                                      energy: -15,
                                      mood: 20,
                                      bugs: -10
                                    },
                                    nextScene: {
                                      id: "lsp-success",
                                      text: `> Refactorización exitosa
> -15 energía
> +20 ánimo
> -10 bugs

¡Excelente decisión! Has aplicado el principio de composición sobre herencia:

- Creaste una interfaz Volador
- La clase Pato ahora tiene una propiedad de tipo Volador
- PatoDeGoma puede existir sin violar el LSP

"Ahora el comportamiento de vuelo es independiente de la jerarquía de herencia, permitiendo mayor flexibilidad y evitando violaciones del LSP."

¿Siguiente principio?`,
                                      choices: [
                                        {
                                          functionName: "nextPrincipleISP",
                                          description: "Continuar con el Principio de Segregación de Interfaces (ISP)",
                                          effects: {
                                            energy: -5,
                                            mood: 5
                                          },
                                          nextScene: {
                                            id: "isp-level",
                                            text: `> Cargando: Principio de Segregación de Interfaces (ISP)
> -5 energía
> +5 ánimo

"Los clientes no deberían verse obligados a depender de interfaces que no usan."

Te encuentras con una interfaz enorme llamada 'Dispositivo' que tiene métodos como 'imprimir()', 'escanear()', 'fotocopiar()', 'enviarFax()', etc. Algunas clases que implementan esta interfaz dejan métodos vacíos porque no los necesitan.

"¿Cómo podrías refactorizar esto para seguir el ISP?"`,
                                            choices: [
                                              {
                                                functionName: "refactorISP",
                                                description: "Dividir en interfaces más pequeñas y específicas",
                                                effects: {
                                                  energy: -10,
                                                  mood: 15,
                                                  bugs: -7
                                                },
                                                nextScene: {
                                                  id: "isp-success",
                                                  text: `> Refactorización exitosa
> -10 energía
> +15 ánimo
> -7 bugs

¡Bien hecho! Has dividido la interfaz monolítica en interfaces más pequeñas y cohesivas:

- Imprimible: con método imprimir()
- Escaneable: con método escanear()
- Fax: con método enviarFax()
- Fotocopiadora: que puede implementar múltiples interfaces según sea necesario

"Ahora las clases solo implementan los métodos que realmente necesitan, siguiendo el principio de segregación de interfaces."

¿Listo para el último principio?`,
                                                  choices: [
                                                    {
                                                      functionName: "nextPrincipleDIP",
                                                      description: "Continuar con el Principio de Inversión de Dependencias (DIP)",
                                                      effects: {
                                                        energy: -5,
                                                        mood: 5
                                                      },
                                                      nextScene: {
                                                        id: "dip-level",
                                                        text: `> Cargando: Principio de Inversión de Dependencias (DIP)
> -5 energía
> +5 ánimo

"Los módulos de alto nivel no deben depender de los módulos de bajo nivel. Ambos deben depender de abstracciones."

Te encuentras con una clase de alto nivel que depende directamente de una implementación concreta de una base de datos. Esto hace que el código sea difícil de probar y mantener.

"¿Cómo podrías aplicar el DIP en este caso?"`,
                                                        choices: [
                                                          {
                                                            functionName: "refactorDIP",
                                                            description: "Introducir una interfaz de repositorio e inyección de dependencias",
                                                            effects: {
                                                              energy: -15,
                                                              mood: 20,
                                                              bugs: -10
                                                            },
                                                            nextScene: {
                                                              id: "dip-success",
                                                              text: `> Refactorización exitosa
> -15 energía
> +20 ánimo
> -10 bugs

¡Excelente trabajo! Has aplicado exitosamente el DIP:

1. Creaste una interfaz Repositorio
2. Implementaste la lógica de base de datos en una clase que implementa esta interfaz
3. Inyectaste la dependencia en la clase de alto nivel

"Ahora tu código es más flexible, fácil de probar y mantener. Los módulos de alto nivel dependen de abstracciones, no de implementaciones concretas."

¡Felicidades! Has completado el nivel de principios SOLID.`,
                                                              choices: []
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
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
            functionName: "refactorSRP2",
            description: "Mantener todo en una sola clase pero con métodos separados",
            effects: {
              energy: -8,
              mood: -10,
              bugs: 5
            },
            nextScene: {
              id: "srp-fail",
              text: `> Refactorización fallida
> -8 energía
> -10 ánimo
> +5 bugs

Aunque los métodos están separados, la clase sigue teniendo múltiples responsabilidades. Esto puede llevar a un código más difícil de mantener a medida que crece la aplicación.

"Recuerda: el principio de responsabilidad única se trata de separar responsabilidades en diferentes clases, no solo en diferentes métodos."

¿Quieres intentarlo de nuevo?`,
              choices: [
                {
                  functionName: "retrySRP",
                  description: "Intentar de nuevo con el SRP",
                  effects: {
                    energy: -5,
                    mood: 5
                  },
                  nextScene: {
                    id: "srp-retry",
                    text: `> Reintentando SRP...
> -5 energía
> +5 ánimo

Vuelves a la clase original. Recuerda: cada clase debe tener una única razón para cambiar. ¿Cómo podrías dividir las responsabilidades?`,
                    choices: [
                      {
                        functionName: "refactorSRP1",
                        description: "Dividir en dos clases: Usuario y EmailService",
                        effects: {
                          energy: -10,
                          mood: 15,
                          bugs: -5
                        },
                        nextScene: {
                          id: "srp-success-retry",
                          text: `> Refactorización exitosa
> -10 energía
> +15 ánimo
> -5 bugs

¡Perfecto! Ahora tienes dos clases, cada una con una única responsabilidad. Esto hace que el código sea más fácil de mantener y probar.

¿Listo para continuar con el siguiente principio?`,
                          choices: [
                            {
                              functionName: "nextPrincipleOCP",
                              description: "Continuar con el Principio Abierto/Cerrado",
                              nextScene: {
                                id: "ocp-level",
                                text: `> Cargando: Principio Abierto/Cerrado (OCP)
> -5 energía
> +5 ánimo

"Las entidades de software deben estar abiertas para extensión pero cerradas para modificación."

[Continuar con el flujo del juego...]`,
                                choices: []
                              }
                            }
                          ]
                        }
                      }
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
      functionName: "skipTutorial",
      description: "Saltar el tutorial e ir directamente al desafío",
      effects: {
        energy: -20,
        mood: -10,
        bugs: 10
      },
      nextScene: {
        id: "challenge-mode",
        text: `> Modo desafío activado
> -20 energía
> -10 ánimo
> +10 bugs

Has elegido el camino difícil. El sistema te presentará un código con múltiples violaciones SOLID. Tu tarea es identificarlas y corregirlas.

Buena suerte. Vas a necesitarla.`,
        choices: []
      }
    }
  ]
}
