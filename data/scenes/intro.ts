import type { Scene } from "@/lib/types";
import { scene1, scene2, scene3 } from "./scenes";
import { philosophyScene } from "./philosophical";
import { solidIntroScene } from "./solid";

export const introScene: Scene = {
  id: "intro",
  text: `> Terminal iniciada
> Sistema operativo: GraphOS v1.0.0
> Usuario: Programador

Bienvenido al simulador de programación trascendental. Este entorno te permitirá explorar los fundamentos del desarrollo de software de una manera única.

¿Qué te gustaría explorar primero?`,
  choices: [
    {
      functionName: "startWithSOLID",
      description: "Aprender los principios SOLID",
      effects: {
        energy: 10,
        mood: 10,
        time: 0,
      },
      nextScene: solidIntroScene,
    },
    {
      functionName: "getCoffee",
      description: "Invocar un café en tu realidad",
      effects: {
        energy: 20,
        mood: 5,
        time: 10,
      },
      nextScene: scene1,
    },
    {
      functionName: "debugSelf",
      description: "Explorar conceptos filosóficos",
      effects: {
        energy: -5,
        mood: 10,
        time: 20,
      },
      nextScene: philosophyScene,
    },
    {
      functionName: "accessPhilosophicalLayer",
      description: "Accedé a la capa filosófica del código de la realidad",
      effects: {
        energy: -15,
        mood: 25,
        time: 15,
      },
      nextScene: philosophyScene,
    },
  ],
};
