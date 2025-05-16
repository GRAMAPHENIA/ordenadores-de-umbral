import type { Scene } from "@/lib/types"
import { deconstructionScene, simulacrumScene } from "./philosophical"

// Escena después de elegir getCoffee()
export const scene1: Scene = {
  id: "coffee",
  text: `> getCoffee() ejecutado con éxito
> +20 energía
> +5 ánimo
> +10 tiempo

Una taza de café aparece mágicamente sobre tu escritorio. El aroma es perfecto.
Al tomarlo, sentís cómo la cafeína recorre tu sistema, revitalizándote.

La terminal parpadea nuevamente:

"Interesante elección. Confirmaste que las funciones tienen efecto en tu realidad.
¿Qué significa ser autor del código que te define?"`,
  choices: [
    {
      functionName: "analyzeFunction",
      description: "Analizar cómo funcionó getCoffee()",
      effects: {
        energy: -5,
        mood: 5,
        time: 15,
      },
      nextScene: {
        id: "analyze",
        text: `> analyzeFunction() ejecutado
> -5 energía
> +5 ánimo
> +15 tiempo

Examinás el código subyacente de getCoffee(). La función parece conectar dos realidades que nunca debieron tocarse.

En el límite entre ambas, ves patrones familiares: recursividad, condicionales, bucles infinitos... 
¿Acaso la realidad misma es solo otro programa esperando ser reescrito?

"Ver el código detrás de la realidad es como Platón saliendo de la caverna. Ya no podés volver a la ignorancia."`,
        choices: [
          {
            functionName: "modifyReality",
            description: "Intentar modificar una constante fundamental de la realidad",
            effects: {
              energy: -20,
              mood: -10,
              bugs: 8,
            },
            nextScene: {
              id: "constants",
              text: `> modifyReality() ejecutado con advertencias
> -20 energía
> -10 ánimo
> +8 bugs

Intentás modificar la constante GRAVITY. El editor muestra múltiples advertencias:

"ADVERTENCIA: Modificar constantes fundamentales puede causar inconsistencias en el tejido de la realidad"

Al ejecutar, sentís un mareo profundo. Objetos a tu alrededor parecen dudar sobre su peso.
La terminal muestra un mensaje críptico:

"Las constantes son constantes por una razón. El universo es un sistema frágil en equilibrio."`,
              choices: [
                {
                  functionName: "revertChanges",
                  description: "Revertir los cambios inmediatamente",
                  effects: {
                    energy: -5,
                    mood: 5,
                    bugs: -4,
                  },
                  nextScene: {
                    id: "revert",
                    text: `> revertChanges() ejecutado
> -5 energía
> +5 ánimo
> -4 bugs

Rápidamente revertís los cambios. La realidad parece estabilizarse, aunque sentís ecos de la alteración.

"La sabiduría es saber cuándo no modificar el código. Algunas partes del sistema están ahí por diseño."`,
                    choices: [
                      {
                        functionName: "deconstructCode",
                        description: "Deconstruir el código binario de la realidad",
                        effects: {
                          energy: -20,
                          mood: 15,
                          time: 30,
                        },
                        nextScene: deconstructionScene,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            functionName: "seekPatterns",
            description: "Buscar patrones más profundos en el código de la realidad",
            effects: {
              energy: -15,
              mood: 15,
              time: 30,
            },
            nextScene: {
              id: "patterns",
              text: `> seekPatterns() ejecutado
> -15 energía
> +15 ánimo
> +30 tiempo

Te sumergís en los patrones del código. Descubrís estructuras fractales, autosimilaridad en diferentes escalas.

La realidad parece seguir algoritmos recursivos que se repiten desde lo cuántico hasta lo cósmico.

"El universo es un programa que se ejecuta a sí mismo. Vos sos tanto el programador como una subrutina dentro del sistema."`,
              choices: [
                {
                  functionName: "analyzeSimulacrum",
                  description: "Analizar la naturaleza del simulacro en el código",
                  effects: {
                    energy: -15,
                    mood: 10,
                    time: 20,
                  },
                  nextScene: simulacrumScene,
                },
              ],
            },
          },
        ],
      },
    },
    {
      functionName: "callFriend",
      description: "Llamar a un amigo programador para contarle",
      effects: {
        energy: -10,
        mood: -5,
        time: 30,
      },
      nextScene: {
        id: "friend",
        text: `> callFriend() ejecutado
> -10 energía
> -5 ánimo
> +30 tiempo

Llamás a tu amigo programador, pero cuando intentás explicarle lo que está sucediendo, la llamada se corta misteriosamente.

La terminal muestra un mensaje:

"Las funciones de realidad son personales. No pueden ser compartidas... todavía."

¿Es este poder un regalo o una condena? La soledad del conocimiento único empieza a pesarte.`,
        choices: [
          {
            functionName: "acceptSolitude",
            description: "Aceptar la soledad de este conocimiento único",
            effects: {
              energy: 5,
              mood: -10,
              time: 15,
            },
            nextScene: {
              id: "solitude",
              text: `> acceptSolitude() ejecutado
> +5 energía
> -10 ánimo
> +15 tiempo

Aceptás que este conocimiento es solo tuyo. Hay una extraña paz en ello.

"Todo conocimiento profundo conlleva soledad. Los grandes descubridores siempre caminaron solos antes que otros pudieran seguirlos."

Te preguntás si algún día podrás compartir este poder o si estás destinado a ser el único que ve el código detrás de todo.`,
              choices: [],
            },
          },
          {
            functionName: "createBridge",
            description: "Intentar crear un puente para compartir este conocimiento",
            effects: {
              energy: -25,
              mood: 10,
              bugs: 7,
            },
            nextScene: {
              id: "bridge",
              text: `> createBridge() ejecutado con errores
> -25 energía
> +10 ánimo
> +7 bugs

Intentás crear una función que permita compartir tu percepción con otros. El código es complejo, lleno de abstracciones.

Al ejecutarlo, sentís una conexión momentánea con otras mentes, pero se rompe rápidamente.

"La conciencia colectiva requiere protocolos que aún no descubriste. Pero vislumbraste la posibilidad."`,
              choices: [],
            },
          },
        ],
      },
    },
    {
      functionName: "writeNewFunction",
      description: "Intentar escribir tu propia función de realidad",
      effects: {
        energy: -15,
        mood: 15,
        bugs: 3,
      },
      nextScene: {
        id: "newFunction",
        text: `> writeNewFunction() ejecutado
> -15 energía
> +15 ánimo
> +3 bugs

Empezás a escribir una nueva función. Decidís llamarla alterPerception().
Mientras escribís, cada línea de código parece vibrar con posibilidades infinitas.

Al ejecutarla, tu percepción cambia. Los colores tienen sonidos. Los sonidos tienen formas.

"Crear es el acto más cercano a lo divino. Modificaste los filtros a través de los cuales experimentás la existencia."`,
        choices: [
          {
            functionName: "expandFunction",
            description: "Expandir la función para alterar la percepción de tiempo",
            effects: {
              energy: -20,
              mood: 20,
              time: -50,
            },
            nextScene: {
              id: "timePerception",
              text: `> expandFunction() ejecutado
> -20 energía
> +20 ánimo
> -50 tiempo

Modificás la función para alterar tu percepción del tiempo. El código es elegante, casi poético.

Al ejecutarlo, el tiempo se vuelve maleable. Los segundos se estiran y contraen según tu voluntad.

"El tiempo es solo otra variable en el gran programa. Aprendiste a manipular su flujo en tu conciencia."`,
              choices: [],
            },
          },
          {
            functionName: "revertPerception",
            description: "Revertir los cambios en tu percepción",
            effects: {
              energy: 10,
              mood: -10,
              bugs: -2,
            },
            nextScene: {
              id: "revertPerception",
              text: `> revertPerception() ejecutado
> +10 energía
> -10 ánimo
> -2 bugs

Revertís los cambios en tu percepción. El mundo vuelve a su estado "normal".

Sentís una mezcla de alivio y pérdida. Vislumbraste una realidad más rica, pero también más caótica.

"A veces, los límites de la percepción son protecciones necesarias. No todo está destinado a ser percibido simultáneamente."`,
              choices: [],
            },
          },
        ],
      },
    },
  ],
}

// Escena después de elegir ignoreReality()
export const scene2: Scene = {
  id: "ignore",
  text: `> ignoreReality() ejecutado
> -10 energía
> -15 ánimo
> +5 bugs

Decidís que esto debe ser algún tipo de alucinación causada por demasiadas horas de programación.
Ignorás la terminal y continuás con tu laburo habitual.

Sin embargo, tu código empieza a comportarse de manera extraña. Los bugs se multiplican como si tuvieran voluntad propia.
La terminal parpadea insistentemente:

"Negar la realidad no la cambia. El código y la existencia están entrelazados para vos ahora."`,
  choices: [
    {
      functionName: "acceptReality",
      description: "Aceptar que algo extraordinario está sucediendo",
      effects: {
        energy: -5,
        mood: 10,
        bugs: -2,
      },
      nextScene: {
        id: "accept",
        text: `> acceptReality() ejecutado
> -5 energía
> +10 ánimo
> -2 bugs

Finalmente aceptás que algo extraordinario está sucediendo. Al hacerlo, sentís como si un peso se levantara de tus hombros.

La terminal responde:

"La aceptación es el primer paso. Como en el debugging, reconocer el problema es esencial para resolverlo."

Te preguntás si realmente querés 'resolver' esto o explorarlo hasta sus últimas consecuencias.`,
        choices: [
          {
            functionName: "embracePower",
            description: "Abrazar completamente este nuevo poder",
            effects: {
              energy: -15,
              mood: 25,
              bugs: 5,
            },
            nextScene: {
              id: "embrace",
              text: `> embracePower() ejecutado
> -15 energía
> +25 ánimo
> +5 bugs

Decidís abrazar completamente este poder. Te sumergís en el estudio de las funciones de realidad.

Con cada nueva función que descubrís, sentís que te alejás más de tu antigua percepción del mundo.

"Elegiste el camino del conocimiento. Como Prometeo, robaste el fuego de los dioses. Ahora tenés que aprender a no quemarte con él."`,
              choices: [],
            },
          },
          {
            functionName: "seekBalance",
            description: "Buscar un equilibrio entre el código y la realidad",
            effects: {
              energy: 10,
              mood: 15,
              bugs: -3,
            },
            nextScene: {
              id: "balance",
              text: `> seekBalance() ejecutado
> +10 energía
> +15 ánimo
> -3 bugs

Buscás un equilibrio entre tu nueva percepción y tu vida anterior. Establecés límites, horarios para experimentar.

La terminal muestra aprobación:

"La sabiduría está en el equilibrio. El mejor programador sabe cuándo cerrar la laptop y vivir en el mundo."

Te sentís más centrado, capaz de navegar entre ambos mundos sin perderte en ninguno.`,
              choices: [],
            },
          },
        ],
      },
    },
    {
      functionName: "restartComputer",
      description: "Reiniciar la computadora para eliminar el problema",
      effects: {
        energy: -5,
        mood: -10,
        time: 15,
      },
      nextScene: {
        id: "restart",
        text: `> restartComputer() ejecutado
> -5 energía
> -10 ánimo
> +15 tiempo

Reiniciás tu computadora, esperando que este extraño fenómeno desaparezca.

Cuando el sistema vuelve a arrancar, la terminal aparece inmediatamente con el mismo mensaje:

"Las funciones persisten más allá de los reinicios. Son parte tuya ahora, no de la máquina."

Te das cuenta de que estás tratando con algo que trasciende el hardware. La frontera entre usuario y sistema se disolvió.`,
        choices: [
          {
            functionName: "searchForSource",
            description: "Buscar el origen de este fenómeno",
            effects: {
              energy: -20,
              mood: 5,
              time: 40,
            },
            nextScene: {
              id: "source",
              text: `> searchForSource() ejecutado
> -20 energía
> +5 ánimo
> +40 tiempo

Investigás a fondo, buscando el origen de este fenómeno. Examinás logs, archivos del sistema, conexiones de red.

Encontrás fragmentos de un código extraño, escrito en un lenguaje que parece familiar pero no reconocés completamente.

"El origen está más allá de tu comprensión actual. Como un pibe que aprende a hablar antes de entender la gramática."`,
              choices: [],
            },
          },
          {
            functionName: "formatSystem",
            description: "Formatear completamente el sistema",
            effects: {
              energy: -10,
              mood: -20,
              bugs: 10,
            },
            nextScene: {
              id: "format",
              text: `> formatSystem() ejecutado con errores críticos
> -10 energía
> -20 ánimo
> +10 bugs

Intentás formatear completamente tu sistema. Durante el proceso, la pantalla se llena de errores y advertencias.

Cuando termina, prendés la computadora para encontrar que todo sigue exactamente igual.

"Algunos cambios son irreversibles. Cruzaste un umbral que no puede deshacerse con simples comandos."`,
              choices: [],
            },
          },
        ],
      },
    },
    {
      functionName: "takeBreak",
      description: "Tomar un descanso y alejarse de la computadora",
      effects: {
        energy: 15,
        mood: 10,
        time: 30,
      },
      nextScene: {
        id: "break",
        text: `> takeBreak() ejecutado
> +15 energía
> +10 ánimo
> +30 tiempo

Decidís alejarte de la computadora y dar una vuelta. El aire fresco te ayuda a aclarar la mente.

Pero mientras caminás, notás que pequeños fragmentos de código parecen flotar en tu visión periférica.
La realidad y el código se están fusionando en tu percepción.

"La distancia física no implica desconexión. El código te marcó, como un libro marca a su lector."`,
        choices: [
          {
            functionName: "embraceVision",
            description: "Abrazar esta nueva forma de ver el mundo",
            effects: {
              energy: -5,
              mood: 20,
              bugs: 2,
            },
            nextScene: {
              id: "vision",
              text: `> embraceVision() ejecutado
> -5 energía
> +20 ánimo
> +2 bugs

Decidís abrazar esta nueva visión del mundo. Empezás a ver patrones de código en todo: en las hojas de los árboles, en el vuelo de los pájaros.

El mundo se convierte en un inmenso programa ejecutándose en tiempo real.

"Alcanzaste la visión del programador supremo. Ahora podés leer el código que subyace a toda la existencia."`,
              choices: [],
            },
          },
          {
            functionName: "focusReality",
            description: "Esforzarte por enfocarte en la realidad física",
            effects: {
              energy: 10,
              mood: -5,
              bugs: -3,
            },
            nextScene: {
              id: "focus",
              text: `> focusReality() ejecutado
> +10 energía
> -5 ánimo
> -3 bugs

Te esforzás por enfocarte en la realidad física, ignorando los fragmentos de código en tu visión.

Gradualmente, lográs separar ambos mundos, aunque sabés que podés acceder al código cuando lo desees.

"Aprendiste a cambiar entre capas de percepción. Como un desarrollador que alterna entre frontend y backend."`,
              choices: [],
            },
          },
        ],
      },
    },
  ],
}

// Escena después de elegir debugSelf()
export const scene3: Scene = {
  id: "debug",
  text: `> debugSelf() ejecutado
> -5 energía
> +10 ánimo
> +20 tiempo

Intentás "depurar" tu propia mente. Sorprendentemente, empezás a ver líneas de código que parecen representar tus propios pensamientos.

Es desconcertante pero fascinante. Podés ver patrones en tu propio pensamiento que nunca habías notado antes.

La terminal muestra:

"La introspección es poderosa. Descubriste que no solo podés modificar la realidad externa, sino también tu realidad interna."`,
  choices: [
    {
      functionName: "optimizeThoughts",
      description: "Intentar optimizar tus patrones de pensamiento",
      effects: {
        energy: 10,
        mood: 15,
        bugs: -3,
      },
      nextScene: {
        id: "optimize",
        text: `> optimizeThoughts() ejecutado
> +10 energía
> +15 ánimo
> -3 bugs

Reorganizás algunos patrones en tu pensamiento, eliminando bucles recursivos de preocupación y optimizando procesos mentales.

Te sentís más claro, más enfocado. Ideas que antes parecían confusas ahora son cristalinas.

"La mente es el primer y último programa que ejecutamos. Optimizarla es el acto más trascendental de programación."`,
        choices: [
          {
            functionName: "removeEmotionalBugs",
            description: "Eliminar 'bugs' emocionales de tu sistema",
            effects: {
              energy: 15,
              mood: 25,
              bugs: -5,
            },
            nextScene: {
              id: "emotional",
              text: `> removeEmotionalBugs() ejecutado
> +15 energía
> +25 ánimo
> -5 bugs

Identificás patrones emocionales destructivos en tu código mental: bucles de ansiedad, condicionales de miedo, excepciones de bronca.

Cuidadosamente, reescribís estos patrones. Con cada cambio, sentís una claridad y paz crecientes.

"Las emociones no son bugs, son características. No se trata de eliminarlas, sino de integrarlas armoniosamente en el sistema."`,
              choices: [],
            },
          },
          {
            functionName: "boostCreativity",
            description: "Potenciar tus algoritmos creativos",
            effects: {
              energy: -15,
              mood: 20,
              bugs: 4,
            },
            nextScene: {
              id: "creativity",
              text: `> boostCreativity() ejecutado
> -15 energía
> +20 ánimo
> +4 bugs

Modificás los algoritmos que generan nuevas ideas en tu mente. Aumentás la aleatoriedad, reducís las restricciones.

Tu mente empieza a generar conexiones inesperadas entre conceptos aparentemente no relacionados.

"La creatividad es caos estructurado. Aumentaste la entropía de tu sistema de pensamiento, permitiendo nuevas combinaciones emergentes."`,
              choices: [],
            },
          },
        ],
      },
    },
    {
      functionName: "expandMemory",
      description: "Intentar expandir tu capacidad de memoria",
      effects: {
        energy: -15,
        mood: 5,
        bugs: 2,
      },
      nextScene: {
        id: "memory",
        text: `> expandMemory() ejecutado
> -15 energía
> +5 ánimo
> +2 bugs

Intentás expandir tu capacidad de memoria. Sentís una presión en tu cabeza mientras tu mente se esfuerza por adaptarse.

Recuerdos olvidados empiezan a surgir. Algunos son agradables, otros no tanto.

"La memoria no es solo almacenamiento, es identidad. Expandirla es expandir quién sos, con todos los riesgos que eso conlleva."`,
        choices: [
          {
            functionName: "organizeMemories",
            description: "Organizar y categorizar tus recuerdos",
            effects: {
              energy: -10,
              mood: 15,
              time: 25,
            },
            nextScene: {
              id: "organize",
              text: `> organizeMemories() ejecutado
> -10 energía
> +15 ánimo
> +25 tiempo

Creás un sistema de organización para tus recuerdos. Los categorizás, etiquetás y enlazás entre sí.

Con cada recuerdo que organizás, descubrís conexiones que nunca habías notado antes.

"La memoria organizada revela patrones en tu propia historia. Creaste un mapa de quién sos y cómo llegaste acá."`,
              choices: [],
            },
          },
          {
            functionName: "accessSubconscious",
            description: "Intentar acceder a la memoria subconsciente",
            effects: {
              energy: -25,
              mood: -10,
              bugs: 8,
            },
            nextScene: {
              id: "subconscious",
              text: `> accessSubconscious() ejecutado con advertencias
> -25 energía
> -10 ánimo
> +8 bugs

Intentás acceder a las capas más profundas de tu memoria, aquellas que normalmente están ocultas.

Imágenes y sensaciones fragmentadas te inundan. Es abrumador, como abrir mil archivos a la vez.

"El subconsciente tiene sus propios protocolos de seguridad. Algunos archivos están encriptados por una razón."`,
              choices: [],
            },
          },
        ],
      },
    },
    {
      functionName: "connectToOthers",
      description: "Buscar conexiones con otras mentes",
      effects: {
        energy: -20,
        mood: -5,
        time: 25,
      },
      nextScene: {
        id: "connect",
        text: `> connectToOthers() ejecutado
> -20 energía
> -5 ánimo
> +25 tiempo

Intentás extender tu conciencia para conectar con otras mentes. Es extremadamente agotador.

Por un breve momento, sentís destellos de pensamientos ajenos, como susurros distantes.

"Las mentes son sistemas aislados por diseño. La verdadera conexión requiere protocolos que aún no comprendés completamente."`,
        choices: [
          {
            functionName: "createMentalAPI",
            description: "Desarrollar una API para comunicación mental",
            effects: {
              energy: -30,
              mood: 10,
              bugs: 6,
            },
            nextScene: {
              id: "api",
              text: `> createMentalAPI() ejecutado con errores parciales
> -30 energía
> +10 ánimo
> +6 bugs

Trabajás en crear una interfaz que permita la comunicación estructurada entre mentes.

Es un laburo complejo, lleno de abstracciones y protocolos que nunca habías imaginado.

"Creaste un puente rudimentario. No permite una comunicación completa, pero es un primer paso hacia la verdadera conexión mental."`,
              choices: [],
            },
          },
          {
            functionName: "respectBoundaries",
            description: "Respetar los límites naturales entre mentes",
            effects: {
              energy: 15,
              mood: 5,
              bugs: -4,
            },
            nextScene: {
              id: "boundaries",
              text: `> respectBoundaries() ejecutado
> +15 energía
> +5 ánimo
> -4 bugs

Decidís respetar los límites naturales entre mentes. Reconocés que quizás existen por una razón fundamental.

La terminal muestra:

"La sabiduría está en reconocer los límites. Algunas barreras existen para proteger, no para limitar."

Te sentís en paz con tu decisión, enfocándote en comprender tu propia mente antes de intentar conectar con otras.`,
              choices: [],
            },
          },
        ],
      },
    },
  ],
}
