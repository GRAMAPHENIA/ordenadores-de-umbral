"use client";

import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, CheckCircle, ChevronRight, Lightbulb } from "lucide-react";
import { useState } from "react";

export default function ChallengePage() {
  const params = useParams();
  const router = useRouter();
  const levelId = parseInt(params.id as string);
  const challengeId = parseInt(params.challengeId as string);
  
  const [showHint, setShowHint] = useState(false);
  const [code, setCode] = useState('// Escribe tu código aquí\nconsole.log("¡Hola, mundo!");');
  const [output, setOutput] = useState<string | null>(null);
  
  // Datos de ejemplo para el desafío
  const challengeData = {
    id: challengeId,
    title: `Desafío ${challengeId}: ${challengeId === 1 ? 'Primeros Pasos' : 
             challengeId === 2 ? 'Variables y Operaciones' : 'Conceptos Básicos'}`,
    description: challengeId === 1 
      ? 'Escribe un programa que imprima "¡Hola, mundo!" en la consola.'
      : 'Crea dos variables, asígnales valores y muéstralas en la consola.',
    hint: challengeId === 1 
      ? 'Usa console.log() para imprimir en la consola.'
      : 'Recuerda declarar las variables con let o const.',
    solution: challengeId === 1 
      ? 'console.log("¡Hola, mundo!");'
      : 'let nombre = "TuNombre";\nlet edad = 25;\nconsole.log(nombre, edad);',
    nextChallenge: challengeId < 5 ? challengeId + 1 : null
  };

  const handleRunCode = () => {
    try {
      // En un entorno real, esto se ejecutaría en un sandbox seguro
      // Esto es solo para demostración
      if (challengeId === 1) {
        setOutput("¡Hola, mundo!");
      } else if (challengeId === 2) {
        setOutput("TuNombre 25");
      } else {
        setOutput("Salida del código ejecutado");
      }
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    }
  };

  const handleSubmit = () => {
    // Verificar si el código es correcto (en un caso real, habría una verificación más robusta)
    const isCorrect = challengeId === 1 
      ? code.includes('console.log("¡Hola, mundo!");')
      : code.includes('let') || code.includes('const');
    
    if (isCorrect) {
      alert('¡Correcto! Has completado este desafío.');
      // Aquí iría la lógica para marcar el desafío como completado
    } else {
      alert('El código no cumple con los requisitos. ¡Sigue intentándolo!');
    }
  };

  const goToNextChallenge = () => {
    if (challengeData.nextChallenge) {
      router.push(`/nivel/${levelId}/desafio/${challengeData.nextChallenge}`);
    } else {
      router.push(`/nivel/${levelId}`);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <div className="mb-6">
        <button 
          onClick={() => router.push(`/nivel/${levelId}`)}
          className="flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Volver al nivel {levelId}
        </button>
        
        <h1 className="text-2xl font-bold text-primary mb-2">{challengeData.title}</h1>
        <p className="text-primary/80 mb-6">{challengeData.description}</p>
        
        <div className="flex items-center space-x-2 mb-6">
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center text-sm text-primary/70 hover:text-primary"
          >
            <Lightbulb className="w-4 h-4 mr-1" />
            {showHint ? 'Ocultar pista' : 'Mostrar pista'}
          </button>
        </div>
        
        {showHint && (
          <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="text-yellow-700 dark:text-yellow-400">{challengeData.hint}</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-black/50 border border-primary/20 rounded-lg overflow-hidden">
            <div className="bg-black/30 px-4 py-2 border-b border-primary/20 flex justify-between items-center">
              <span className="font-mono text-sm text-primary/80">editor.js</span>
              <div className="flex space-x-2">
                <button 
                  onClick={handleRunCode}
                  className="text-xs px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary rounded"
                >
                  Ejecutar
                </button>
                <button 
                  onClick={handleSubmit}
                  className="text-xs px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded"
                >
                  Enviar
                </button>
              </div>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 bg-black/30 text-green-400 font-mono p-4 outline-none resize-none"
              spellCheck="false"
            />
          </div>
          
          <div className="bg-black/30 border border-primary/20 rounded-lg overflow-hidden">
            <div className="bg-black/30 px-4 py-2 border-b border-primary/20">
              <span className="font-mono text-sm text-primary/80">Consola</span>
            </div>
            <div className="p-4 h-32 overflow-auto bg-black/20 font-mono text-sm">
              {output ? (
                <pre className="text-green-400">{output}</pre>
              ) : (
                <p className="text-primary/50">Ejecuta el código para ver la salida...</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-black/30 border border-primary/20 rounded-lg p-4">
            <h3 className="text-lg font-medium text-primary mb-3">Instrucciones</h3>
            <div className="prose prose-invert max-w-none text-primary/80">
              {challengeId === 1 ? (
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Escribe <code className="bg-black/50 px-1 rounded">console.log("¡Hola, mundo!");</code> en el editor.</li>
                  <li>Haz clic en "Ejecutar" para probar tu código.</li>
                  <li>Si ves el mensaje "¡Hola, mundo!" en la consola, haz clic en "Enviar" para completar el desafío.</li>
                </ol>
              ) : (
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Crea dos variables: una para tu nombre y otra para tu edad.</li>
                  <li>Asigna valores a estas variables.</li>
                  <li>Usa <code className="bg-black/50 px-1 rounded">console.log()</code> para mostrar los valores en la consola.</li>
                  <li>Haz clic en "Ejecutar" para probar tu código.</li>
                  <li>Si ves los valores correctamente, haz clic en "Enviar".</li>
                </ol>
              )}
            </div>
          </div>
          
          <div className="bg-black/30 border border-primary/20 rounded-lg p-4">
            <h3 className="text-lg font-medium text-primary mb-3">Consejos</h3>
            <ul className="list-disc pl-5 space-y-1 text-primary/80">
              <li>Recuerda terminar cada instrucción con punto y coma (;).</li>
              <li>Las cadenas de texto van entre comillas (" ").</li>
              <li>Usa la pista si necesitas ayuda.</li>
            </ul>
          </div>
          
          {challengeData.nextChallenge && (
            <button
              onClick={goToNextChallenge}
              className="w-full mt-4 flex items-center justify-center px-4 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
            >
              Siguiente desafío <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
