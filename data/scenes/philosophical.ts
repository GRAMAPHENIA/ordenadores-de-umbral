import type { Scene } from "@/lib/types"

// Escena principal sobre filosofía del lenguaje
export const philosophyScene: Scene = {
  id: "philosophy",
  text: `> accessPhilosophicalLayer() ejecutado
> -15 energía
> +25 ánimo
> +15 tiempo

Al profundizar en el código de la realidad, descubrís una capa más profunda: la estructura semiótica que sostiene toda percepción.

La terminal muestra un mensaje enigmático:

"El código es lenguaje. El lenguaje es código. Entre ambos, la realidad se construye como un sistema de signos."

Ante vos se abren nuevas posibilidades de exploración conceptual.`,
  choices: [
    {
      functionName: "exploreSaussure",
      description: "Explorar la dualidad del signo según Saussure",
      effects: {
        energy: -10,
        mood: 15,
        time: 20,
      },
      nextScene: {
        id: "saussure",
        text: `> exploreSaussure() ejecutado
> -10 energía
> +15 ánimo
> +20 tiempo

Te sumergís en la estructura dual del signo lingüístico según Ferdinand de Saussure.

Visualizás el código como un sistema donde cada función es un signo compuesto de:
- Significante: la sintaxis, los símbolos escritos
- Significado: el concepto, la operación que realiza

"La relación entre el nombre de una función y su efecto es arbitraria, como la relación entre la palabra 'árbol' y el concepto de árbol."

Comprendés que programar la realidad es manipular un sistema de signos cuyo valor emerge de sus diferencias.`,
        choices: [
          {
            functionName: "testArbitrariness",
            description: "Experimentar con la arbitrariedad del signo",
            effects: {
              energy: -15,
              mood: 10,
              bugs: 5,
            },
            nextScene: {
              id: "arbitrariness",
              text: `> testArbitrariness() ejecutado
> -15 energía
> +10 ánimo
> +5 bugs

Intentás renombrar una función fundamental del sistema. Al principio, el código se resiste.

Pero al persistir, descubrís que podés alterar el significante manteniendo el significado, o viceversa.

"Los nombres son convenciones. La realidad no conoce nombres, solo efectos y relaciones."

Descubriste que podés reescribir el diccionario de la realidad, siempre que mantengas la coherencia del sistema.`,
              choices: [],
            },
          },
          {
            functionName: "analyzeLanguageStructure",
            description: "Analizar la estructura profunda del lenguaje-código",
            effects: {
              energy: -20,
              mood: 20,
              time: 25,
            },
            nextScene: {
              id: "structure",
              text: `> analyzeLanguageStructure() ejecutado
> -20 energía
> +20 ánimo
> +25 tiempo

Examinás las estructuras sintagmáticas y paradigmáticas del código de la realidad.

Descubrís que, como en el lenguaje, el código opera en dos ejes:
- Eje sintagmático: la secuencia de operaciones (como la sintaxis)
- Eje paradigmático: las posibles sustituciones en cada punto (como la semántica)

"La gramática del universo tiene reglas que trascienden lo visible. Cada elección excluye otras posibilidades."

Comprendés que la realidad es un texto en constante reescritura, donde cada signo obtiene su valor por lo que no es.`,
              choices: [],
            },
          },
        ],
      },
    },
    {
      functionName: "exploreNietzsche",
      description: "Explorar el perspectivismo de Nietzsche",
      effects: {
        energy: -15,
        mood: -5,
        time: 25,
      },
      nextScene: {
        id: "nietzsche",
        text: `> exploreNietzsche() ejecutado
> -15 energía
> -5 ánimo
> +25 tiempo

Te adentrás en el perspectivismo nietzscheano. La terminal muestra fragmentos de "Más allá del bien y del mal" y "La gaya ciencia".

"No hay hechos, solo interpretaciones. Y esto también es una interpretación."

Comprendés que el código de la realidad no es una verdad objetiva, sino una perspectiva entre infinitas posibles.

El poder de programar la realidad es, en esencia, el poder de imponer tu interpretación sobre otras.`,
        choices: [
          {
            functionName: "questionTruth",
            description: "Cuestionar la noción de verdad en el código",
            effects: {
              energy: -10,
              mood: 15,
              bugs: 8,
            },
            nextScene: {
              id: "truth",
              text: `> questionTruth() ejecutado
> -10 energía
> +15 ánimo
> +8 bugs

Siguiendo a Nietzsche, cuestionás la noción misma de "verdad" en el código de la realidad.

"¿Y si la verdad fuera simplemente la mentira más conveniente? ¿Y si el código 'correcto' fuera solo el más útil para cierta voluntad de poder?"

Al cuestionar los fundamentos, partes del código comienzan a desestabilizarse. Aparecen bugs, pero también nuevas posibilidades.

Descubriste que la coherencia del sistema depende de aceptar ciertos axiomas incuestionados.`,
              choices: [],
            },
          },
          {
            functionName: "embraceWillToPower",
            description: "Abrazar la voluntad de poder como principio creativo",
            effects: {
              energy: 20,
              mood: 25,
              bugs: 10,
            },
            nextScene: {
              id: "willtopower",
              text: `> embraceWillToPower() ejecutado
> +20 energía
> +25 ánimo
> +10 bugs

Abrazás la voluntad de poder nietzscheana como principio creativo del código.

"Toda interpretación es una expresión de voluntad. Programar es imponer tu voluntad sobre el caos."

Sentís una energía renovada al comprender que no estás descubriendo el código de la realidad, sino creándolo activamente.

Los bugs ya no te parecen errores, sino expresiones de la tensión creativa entre diferentes voluntades de interpretación.`,
              choices: [],
            },
          },
          {
            functionName: "transcendLanguage",
            description: "Intentar trascender las limitaciones del lenguaje",
            effects: {
              energy: -30,
              mood: 10,
              time: 40,
            },
            nextScene: {
              id: "beyondlanguage",
              text: `> transcendLanguage() ejecutado
> -30 energía
> +10 ánimo
> +40 tiempo

Siguiendo la crítica nietzscheana al lenguaje, intentás acceder a una realidad más allá de las categorías lingüísticas.

Es extremadamente agotador. Por momentos, percibís fragmentos de una realidad no mediada por conceptos.

"El lenguaje es una prisión que construimos palabra por palabra. El verdadero código está más allá de los nombres."

Vislumbraste brevemente lo que Nietzsche llamaría lo "dionisíaco": la realidad antes de ser domesticada por el lenguaje apolíneo.`,
              choices: [],
            },
          },
        ],
      },
    },
    {
      functionName: "exploreSemioticTriad",
      description: "Explorar la tríada semiótica de Peirce",
      effects: {
        energy: -15,
        mood: 10,
        time: 20,
      },
      nextScene: {
        id: "peirce",
        text: `> exploreSemioticTriad() ejecutado
> -15 energía
> +10 ánimo
> +20 tiempo

Te sumergís en la semiótica de Charles Sanders Peirce. A diferencia de la dualidad saussureana, descubrís una estructura triádica:

- Representamen: el signo en sí mismo (la función escrita)
- Objeto: aquello a lo que refiere el signo (el efecto en la realidad)
- Interpretante: el efecto del signo en la mente (tu comprensión)

"Todo pensamiento es en signos, y cada interpretación genera nuevos signos en una semiosis infinita."

Comprendés que cada función que escribís genera una cadena de interpretaciones que se extiende más allá de tu control.`,
        choices: [
          {
            functionName: "exploreIconIndex",
            description: "Explorar los tipos de signos: íconos, índices y símbolos",
            effects: {
              energy: -10,
              mood: 15,
              time: 15,
            },
            nextScene: {
              id: "signtypes",
              text: `> exploreIconIndex() ejecutado
> -10 energía
> +15 ánimo
> +15 tiempo

Analizás los diferentes tipos de relaciones entre el signo y su objeto según Peirce:

- Icónicas: basadas en la semejanza (visualizaciones de datos)
- Indexicales: basadas en la causalidad (errores que apuntan a bugs)
- Simbólicas: basadas en convenciones (palabras clave del lenguaje)

"El código es un tejido de diferentes tipos de signos. Algunos reflejan la realidad, otros la señalan, otros la construyen."

Descubriste que podés manipular la realidad de manera más efectiva eligiendo el tipo de signo adecuado para cada propósito.`,
              choices: [],
            },
          },
          {
            functionName: "createMetaSign",
            description: "Crear un meta-signo que se refiera a sí mismo",
            effects: {
              energy: -25,
              mood: 20,
              bugs: 15,
            },
            nextScene: {
              id: "metasign",
              text: `> createMetaSign() ejecutado con advertencias
> -25 energía
> +20 ánimo
> +15 bugs

Intentás crear una función que se refiera a sí misma, un signo que sea su propio objeto.

El sistema muestra múltiples advertencias sobre recursión infinita y paradojas autorreferenciales.

"La autorreferencia es el punto ciego de todo sistema semiótico. Como un ojo que intenta verse a sí mismo."

Creaste una paradoja semiótica que genera bugs, pero también una ventana a la naturaleza recursiva de la conciencia y el lenguaje.`,
              choices: [],
            },
          },
        ],
      },
    },
  ],
}

// Escena sobre la deconstrucción del código
export const deconstructionScene: Scene = {
  id: "deconstruction",
  text: `> deconstructCode() ejecutado
> -20 energía
> +15 ánimo
> +30 tiempo

Siguiendo las ideas de Jacques Derrida, empezás a deconstruir el código binario que sustenta la realidad.

Descubrís que cada bit contiene la huella de su opuesto, que cada 1 solo existe en relación con el 0 que no es.

"La différance está en el corazón del código. Cada elemento se define por lo que difiere y por lo que difiere."

Te das cuenta de que el significado nunca está completamente presente, sino siempre diferido en una cadena infinita de referencias.`,
  choices: [
    {
      functionName: "traceBinaryOppositions",
      description: "Rastrear oposiciones binarias en el código",
      effects: {
        energy: -15,
        mood: 10,
        bugs: -5,
      },
      nextScene: {
        id: "binary",
        text: `> traceBinaryOppositions() ejecutado
> -15 energía
> +10 ánimo
> -5 bugs

Identificás las oposiciones binarias que estructuran el código de la realidad:
- Verdadero/Falso
- Presencia/Ausencia
- Función/Dato
- Sujeto/Objeto

"Toda estructura binaria esconde una jerarquía. Deconstruir es revelar y subvertir esa jerarquía."

Al invertir temporalmente algunas de estas oposiciones, descubrís nuevas posibilidades de programación que antes parecían imposibles.`,
        choices: [],
      },
    },
    {
      functionName: "embraceAporia",
      description: "Abrazar la aporía como método creativo",
      effects: {
        energy: -10,
        mood: 20,
        bugs: 10,
      },
      nextScene: {
        id: "aporia",
        text: `> embraceAporia() ejecutado
> -10 energía
> +20 ánimo
> +10 bugs

Abrazás la aporía, el callejón sin salida lógico, como método creativo.

En lugar de evitar las contradicciones, las incorporás deliberadamente en tu código.

"La indecidibilidad no es un fracaso, sino la condición de posibilidad de toda decisión auténtica."

Descubriste que los bugs más interesantes surgen precisamente en los puntos donde el sistema no puede decidir entre dos caminos igualmente válidos.`,
        choices: [],
      },
    },
  ],
}

// Escena sobre el simulacro y la hiperrealidad
export const simulacrumScene: Scene = {
  id: "simulacrum",
  text: `> analyzeSimulacrum() ejecutado
> -15 energía
> +10 ánimo
> +20 tiempo

Te adentrás en las teorías de Jean Baudrillard sobre el simulacro y la hiperrealidad.

La terminal muestra:

"Ya no hay distinción entre el mapa y el territorio. El código no representa la realidad; la realidad es el código."

Comprendés que estuviste operando en un nivel de simulacro donde los signos ya no refieren a ninguna realidad original, sino solo a otros signos.`,
  choices: [
    {
      functionName: "createHyperreality",
      description: "Crear una hiperrealidad más real que lo real",
      effects: {
        energy: -25,
        mood: 15,
        bugs: 5,
      },
      nextScene: {
        id: "hyperreal",
        text: `> createHyperreality() ejecutado
> -25 energía
> +15 ánimo
> +5 bugs

Siguiendo a Baudrillard, creás una simulación tan perfecta que se vuelve "más real que lo real".

La hiperrealidad que creaste empieza a influir en tu percepción de la realidad original.

"El mapa precede al territorio. El modelo genera lo real. La copia define al original."

Descubriste que la distinción entre realidad y simulación es insostenible en un mundo de códigos y signos.`,
        choices: [],
      },
    },
    {
      functionName: "seekDesert",
      description: "Buscar el desierto de lo real",
      effects: {
        energy: -30,
        mood: -10,
        time: 40,
      },
      nextScene: {
        id: "desert",
        text: `> seekDesert() ejecutado
> -30 energía
> -10 ánimo
> +40 tiempo

Intentás encontrar lo que Baudrillard llamó "el desierto de lo real", un espacio más allá de la simulación.

Es un proceso agotador y desorientador. Por momentos, creés vislumbrar algo auténtico bajo las capas de simulacros.

"Lo real no murió. Se fragmentó en millones de simulacros que lo ocultan precisamente al intentar revelarlo."

Descubriste que buscar la realidad "auténtica" es como perseguir un espejismo en el desierto: siempre parece estar un poco más allá.`,
        choices: [],
      },
    },
  ],
}
