import type { Scene } from "@/lib/types";
import { scene1, scene2, scene3 } from "./scenes";
import { philosophyScene } from "./philosophical";

export const introScene: Scene = {
  id: "intro",
  text: `> Terminal iniciada
> Sistema operativo: GraphOS v1.0.0
> Usuario: Programador

Estás trabajando en tu código durante horas cuando algo raro pasa. 
Tu terminal parpadea con un mensaje inusual:

"Las funciones que escribís modifican la realidad."

Al principio pensás que es una broma, algún easter egg en tu IDE. 
Pero entonces notás que hay nuevas funciones disponibles en tu entorno global.

¿Qué vas a hacer con este poder que desdibuja la línea entre creador y creación?`,
  choices: [
    {
      functionName: "getCoffee",
      description: "Invocá un café en tu realidad",
      effects: {
        energy: 20,
        mood: 5,
        time: 10,
      },
      nextScene: scene1,
    },
    {
      functionName: "ignoreReality",
      description: "Ignorá este fenómeno extraño y seguí laburando",
      effects: {
        energy: -10,
        mood: -15,
        bugs: 5,
      },
      nextScene: scene2,
    },
    {
      functionName: "debugSelf",
      description:
        "Intentá depurar tu propia mente para entender qué está pasando",
      effects: {
        energy: -5,
        mood: 10,
        time: 20,
      },
      nextScene: scene3,
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
