"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { NavigationHeader } from "@/components/ui/NavigationHeader";

interface LevelCardProps {
  id: number;
  title: string;
  description: string;
  completedChallenges: number;
  totalChallenges: number;
  locked: boolean;
  onPlay?: () => void;
}

const LevelCard = ({
  id,
  title,
  description,
  completedChallenges,
  totalChallenges,
  locked,
  onPlay,
}: LevelCardProps) => {
  const progress = (completedChallenges / totalChallenges) * 100;
  
  return (
    <div
      className={`relative p-6 rounded-xl border-2 transition-all duration-200 ${
        locked
          ? 'border-slate-700/50 bg-slate-800/30'
          : 'border-teal-500/30 bg-slate-800/50 hover:border-teal-400/50 hover:bg-slate-700/50 cursor-pointer hover:shadow-lg hover:shadow-teal-500/10'
      }`}
      onClick={!locked ? onPlay : undefined}
    >
      {locked && (
        <div className="absolute inset-0 bg-slate-900/70 rounded-lg flex items-center justify-center">
          <Lock className="w-8 h-8 text-slate-500" />
        </div>
      )}
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h2 className={`text-xl font-semibold ${locked ? 'text-slate-500' : 'text-teal-300'}`}>
            {title}
          </h2>
          {!locked && (
            <div className="px-2 py-1 bg-teal-900/50 text-teal-300 text-xs rounded-full">
              Nivel {id}
            </div>
          )}
        </div>
        
        <p className={`text-sm mb-4 ${locked ? 'text-slate-500' : 'text-slate-300'}`}>
          {description}
        </p>
        
        {!locked && (
          <div className="mt-6">
            <div className="flex justify-between text-xs text-teal-300/80 mb-1">
              <span>Progreso</span>
              <span>{completedChallenges}/{totalChallenges} completados</span>
            </div>
            <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-teal-400 to-teal-600 h-2 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <button
              className="mt-4 w-full py-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-teal-500/20"
              onClick={(e) => {
                e.stopPropagation();
                if (onPlay) onPlay();
              }}
            >
              {completedChallenges > 0 ? 'Continuar' : 'Comenzar'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function NivelesPage() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);
  
  const handlePlayLevel = (levelId: number) => {
    setIsExiting(true);
    setTimeout(() => {
      router.push(`/nivel/${levelId}`);
    }, 200);
  };
  
  const levels = [
    {
      id: 1,
      title: 'Introducción',
      description: 'Aprende los conceptos básicos de programación y familiarízate con el entorno.',
      completedChallenges: 2,
      totalChallenges: 5,
      locked: false
    },
    {
      id: 2,
      title: 'Variables',
      description: 'Domina el uso de variables para almacenar y manipular datos.',
      completedChallenges: 0,
      totalChallenges: 6,
      locked: false
    },
    {
      id: 3,
      title: 'Estructuras de Control',
      description: 'Aprende a controlar el flujo de tu programa con condicionales y bucles.',
      completedChallenges: 0,
      totalChallenges: 7,
      locked: true
    },
    {
      id: 4,
      title: 'Funciones',
      description: 'Organiza tu código en bloques reutilizables con funciones.',
      completedChallenges: 0,
      totalChallenges: 5,
      locked: true
    },
    {
      id: 5,
      title: 'Estructuras de Datos',
      description: 'Trabaja con colecciones de datos como arreglos y objetos.',
      completedChallenges: 0,
      totalChallenges: 6,
      locked: true
    },
    {
      id: 6,
      title: 'Programación Orientada a Objetos',
      description: 'Aprende los principios de la programación orientada a objetos.',
      completedChallenges: 0,
      totalChallenges: 8,
      locked: true
    }
  ];

  return (
    <div className={`min-h-screen flex flex-col p-6 transition-opacity duration-200 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      <NavigationHeader title="SELECCIONA UN NIVEL" />
      
      <div className="max-w-6xl mx-auto w-full mt-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-teal-400 mb-2">Niveles de Aprendizaje</h1>
          <p className="text-teal-300/70">
            Completa los niveles en orden para dominar los conceptos de programación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((level) => (
            <LevelCard
              key={level.id}
              id={level.id}
              title={level.title}
              description={level.description}
              completedChallenges={level.completedChallenges}
              totalChallenges={level.totalChallenges}
              locked={level.locked}
              onPlay={() => handlePlayLevel(level.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
