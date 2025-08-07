"use client";

import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, Home, CheckCircle, Lock } from "lucide-react";

export default function LevelPage() {
  const params = useParams();
  const router = useRouter();
  const levelId = parseInt(params.id as string);
  
  // Datos de ejemplo para el nivel
  const levelData = {
    id: levelId,
    title: levelId === 1 ? 'Introducción a la Programación' : 
           levelId === 2 ? 'Variables y Tipos de Datos' :
           `Nivel ${levelId}`,
    description: levelId === 1 ? 'Aprende los conceptos básicos de programación.' :
                levelId === 2 ? 'Domina el uso de variables para almacenar información.' :
                `Contenido del Nivel ${levelId}`,
    challenges: [
      { id: 1, title: '¿Qué es la programación?', completed: levelId === 1 },
      { id: 2, title: 'Hola Mundo', completed: levelId === 1 },
      { id: 3, title: 'Variables y constantes', completed: levelId === 1 },
      { id: 4, title: 'Tipos de datos básicos', completed: levelId === 1 },
      { id: 5, title: 'Operadores aritméticos', completed: levelId === 1 },
    ].slice(0, levelId === 1 ? 5 : 3) // Mostrar más desafíos en niveles superiores
  };

  const handleStartChallenge = (challengeId: number) => {
    // Navegar al desafío específico
    router.push(`/nivel/${levelId}/desafio/${challengeId}`);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="mb-6">
        <button 
          onClick={() => router.push('/niveles')}
          className="flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Volver a niveles
        </button>
        
        <h1 className="text-3xl font-bold text-primary mb-2">{levelData.title}</h1>
        <p className="text-primary/80">{levelData.description}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-primary/90">Desafíos</h2>
        <div className="space-y-3">
          {levelData.challenges.map((challenge) => (
            <div 
              key={challenge.id}
              onClick={() => handleStartChallenge(challenge.id)}
              className={`
                p-4 rounded-lg border cursor-pointer transition-all
                ${challenge.completed 
                  ? 'bg-primary/5 border-primary/30 hover:border-primary/50' 
                  : 'bg-black/30 border-primary/20 hover:border-primary/40'}
              `}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {challenge.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-primary/50 mr-3" />
                  )}
                  <span className={challenge.completed ? 'text-primary' : 'text-primary/80'}>
                    {challenge.title}
                  </span>
                </div>
                {!challenge.completed && (
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {challenge.id === 1 ? 'Comenzar' : 'Bloqueado'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-4 bg-black/30 border border-primary/20 rounded-lg">
        <h3 className="text-lg font-medium text-primary mb-2">Consejos</h3>
        <ul className="text-primary/80 space-y-2 text-sm">
          <li>• Completa los desafíos en orden para desbloquear los siguientes.</li>
          <li>• No te saltes las explicaciones, son fundamentales para entender los conceptos.</li>
          <li>• Si te atascas, usa las pistas disponibles.</li>
        </ul>
      </div>
    </div>
  );
}
