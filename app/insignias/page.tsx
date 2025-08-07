"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { AchievementBadge } from "@/components/ui/badges/AchievementBadge";
import { cn } from "@/lib/utils";

// Definir el tipo para las insignias
type Insignia = {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
  rareza: 'common' | 'rare' | 'epic' | 'legendary';
  desbloqueada: boolean;
};

// Datos de ejemplo - en un caso real, esto vendría del store
const insignias: Insignia[] = [
  {
    id: 'primer_paso_insignia',
    titulo: 'Primeros Pasos',
    descripcion: 'Completa el tutorial',
    icono: '👣',
    rareza: 'common',
    desbloqueada: true,
  },
  {
    id: 'experto_dry_insignia',
    titulo: 'Maestro del DRY',
    descripcion: 'Domina el principio DRY en todos los niveles',
    icono: '🧩',
    rareza: 'rare',
    desbloqueada: true,
  },
  {
    id: 'coleccionista_insignia',
    titulo: 'Coleccionista',
    descripcion: 'Desbloquea todas las insignias comunes',
    icono: '🏆',
    rareza: 'epic',
    desbloqueada: false,
  },
  {
    id: 'leyenda_insignia',
    titulo: 'Leyenda',
    descripcion: 'Completa todos los logros del juego',
    icono: '🌟',
    rareza: 'legendary',
    desbloqueada: false,
  }
];

export default function InsigniasPage() {
  const [selectedBadge, setSelectedBadge] = useState<Insignia | null>(null);
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked'>('all');

  const filteredBadges = insignias.filter(insignia => {
    if (filter === 'unlocked') return insignia.desbloqueada;
    if (filter === 'locked') return !insignia.desbloqueada;
    return true;
  });

  const unlockedCount = insignias.filter(i => i.desbloqueada).length;
  const totalCount = insignias.length;
  const percentage = Math.round((unlockedCount / totalCount) * 100);

  // Efecto de escritura para el título
  const [displayedTitle, setDisplayedTitle] = useState("");
  const title = "SISTEMA_DE_INSIGNIAS";
  
  useEffect(() => {
    let i = 0;
    const typeTitle = () => {
      if (i < title.length) {
        setDisplayedTitle(prev => prev + title.charAt(i));
        i++;
        setTimeout(typeTitle, 50);
      }
    };
    
    const timer = setTimeout(typeTitle, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Encabezado con efecto de terminal */}
      <div className="border border-primary/30 bg-black/50 mb-6 p-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-primary/50 text-xs font-mono">
            {displayedTitle}<span className="animate-pulse">_</span>
          </div>
          <div className="w-10"></div>
        </div>
        
        <div className="border-t border-primary/20 pt-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-2 md:mb-0">
              <div className="text-primary font-mono text-sm">
                PROGRESO: <span className="text-yellow-400">[</span>
                {Array.from({ length: 20 }).map((_, i) => (
                  <span 
                    key={i} 
                    className={`inline-block w-1 h-3 mx-0.5 ${i < (percentage / 5) ? 'bg-primary' : 'bg-primary/10'}`}
                  ></span>
                ))}
                <span className="text-yellow-400">]</span> {percentage}%
              </div>
              <div className="text-primary/70 text-xs font-mono">
                {unlockedCount} DE {totalCount} INSIGNIAS DESBLOQUEADAS
              </div>
            </div>
            
            <div className="flex space-x-1 bg-black/50 p-1 rounded border border-primary/20">
              <button
                onClick={() => setFilter('all')}
                className={cn(
                  "px-3 py-1 text-xs font-mono border",
                  filter === 'all' 
                    ? 'border-primary bg-primary/20 text-primary' 
                    : 'border-transparent text-primary/50 hover:border-primary/30'
                )}
              >
                TODAS
              </button>
              <button
                onClick={() => setFilter('unlocked')}
                className={cn(
                  "px-3 py-1 text-xs font-mono border",
                  filter === 'unlocked' 
                    ? 'border-primary bg-primary/20 text-primary' 
                    : 'border-transparent text-primary/50 hover:border-primary/30'
                )}
              >
                DESBLOQUEADAS
              </button>
              <button
                onClick={() => setFilter('locked')}
                className={cn(
                  "px-3 py-1 text-xs font-mono border",
                  filter === 'locked' 
                    ? 'border-primary bg-primary/20 text-primary' 
                    : 'border-transparent text-primary/50 hover:border-primary/30'
                )}
              >
                BLOQUEADAS
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {filteredBadges.length === 0 ? (
        <div className="border border-primary/20 bg-black/30 p-8 text-center">
          <p className="text-primary/50 font-mono">NO SE ENCONTRARON INSIGNIAS</p>
          <p className="text-primary/30 text-sm mt-1">Intenta con otro filtro</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredBadges.map((insignia) => (
            <motion.div 
              key={insignia.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group relative"
              onClick={() => setSelectedBadge(insignia)}
            >
              <AchievementBadge
                icon={insignia.icono}
                title={insignia.titulo}
                description={insignia.descripcion}
                unlocked={insignia.desbloqueada}
                rarity={insignia.rareza}
                className="w-full h-full"
              />
              
              {/* Efecto de selección */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      )}

      {selectedBadge && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="border-2 border-primary/30 bg-black/90 p-0 max-w-md w-full relative z-10">
            {/* Barra de título del modal */}
            <div className="bg-black px-4 py-2 border-b border-primary/30 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-primary/70 text-xs font-mono">
                DETALLES_DE_INSIGNIA
              </div>
              <button 
                onClick={() => setSelectedBadge(null)}
                className="text-primary/50 hover:text-primary text-lg"
              >
                ×
              </button>
            </div>
            
            {/* Contenido del modal */}
            <div className="p-6">
              <div className="flex flex-col items-center mb-6">
                {/* Icono de la insignia */}
                <div className={`relative mb-4 ${selectedBadge.desbloqueada ? '' : 'opacity-50'}`}>
                  <div className="text-7xl">
                    {selectedBadge.icono}
                  </div>
                  {!selectedBadge.desbloqueada && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lock className="w-10 h-10 text-primary/50" />
                    </div>
                  )}
                </div>
                
                {/* Título y rareza */}
                <div className="text-center mb-4">
                  <h2 className={`text-2xl font-mono tracking-wider mb-2 ${
                    selectedBadge.desbloqueada ? 'text-primary' : 'text-primary/50'
                  }`}>
                    {selectedBadge.desbloqueada ? selectedBadge.titulo : 'INSIGNIA BLOQUEADA'}
                  </h2>
                  <span className={`inline-block px-3 py-1 text-xs font-mono border ${
                    selectedBadge.rareza === 'common' ? 'border-primary/30 text-primary/70' :
                    selectedBadge.rareza === 'rare' ? 'border-blue-500/50 text-blue-400' :
                    selectedBadge.rareza === 'epic' ? 'border-purple-500/50 text-purple-400' :
                    'border-yellow-500/50 text-yellow-400'
                  }`}>
                    {selectedBadge.rareza.toUpperCase()}
                  </span>
                </div>
                
                {/* Descripción */}
                <p className={`text-center mb-6 font-mono text-sm ${
                  selectedBadge.desbloqueada ? 'text-primary/80' : 'text-primary/50'
                }`}>
                  {selectedBadge.desbloqueada 
                    ? selectedBadge.descripcion 
                    : 'Completa los requisitos para desbloquear esta insignia'}
                </p>
                
                {/* Estado de desbloqueo */}
                <div className="w-full bg-black/50 border border-primary/20 p-3 text-center">
                  <p className="text-xs font-mono text-primary/50">
                    ESTADO: <span className={selectedBadge.desbloqueada ? 'text-green-400' : 'text-yellow-400'}>
                      {selectedBadge.desbloqueada ? 'DESBLOQUEADA' : 'BLOQUEADA'}
                    </span>
                  </p>
                </div>
              </div>
              
              {/* Botón de cierre */}
              <div className="flex justify-center">
                <button
                  onClick={() => setSelectedBadge(null)}
                  className="px-6 py-2 border border-primary/30 bg-black/50 text-primary font-mono text-sm
                             hover:bg-primary/10 hover:border-primary/50 transition-all duration-200
                             focus:outline-none focus:ring-1 focus:ring-primary/50"
                >
                  CERRAR [ESC]
                </button>
              </div>
            </div>
            
            {/* Efecto de borde */}
            <div className="absolute inset-0 border border-primary/10 pointer-events-none"></div>
          </div>
          
          {/* Fondo con efecto de ruido */}
          <div className="absolute inset-0 bg-[url('/crt-noise.svg')] opacity-10"></div>
        </div>
      )}
    </div>
  );
}
