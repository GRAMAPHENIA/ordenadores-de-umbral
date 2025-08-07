"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Play, Layers, Award, Settings, Info } from "lucide-react";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
  description: string;
  disabled?: boolean;
}

export default function HomePage() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const menuItems: MenuItem[] = [
    {
      id: 'start',
      label: 'INICIAR SIMULACIÓN',
      icon: <Play className="w-6 h-6" />,
      path: '/ordenador-de-umbral',
      description: 'Comienza una nueva simulación desde el principio'
    },
    {
      id: 'levels',
      label: 'NIVELES',
      icon: <Layers className="w-6 h-6" />,
      path: '/niveles',
      description: 'Selecciona un nivel específico para jugar',
      disabled: false
    },
    {
      id: 'achievements',
      label: 'LOGROS',
      icon: <Award className="w-6 h-6" />,
      path: '/logros',
      description: 'Revisa tus logros desbloqueados',
      disabled: false
    },
    {
      id: 'settings',
      label: 'CONFIGURACIÓN',
      icon: <Settings className="w-6 h-6" />,
      path: '/configuracion',
      description: 'Ajustes del sistema',
      disabled: true
    },
    {
      id: 'about',
      label: 'ACERCA DE',
      icon: <Info className="w-6 h-6" />,
      path: '/acerca-de',
      description: 'Información sobre el proyecto',
      disabled: false
    }
  ];

  const handleNavigation = (path: string, disabled?: boolean) => {
    if (disabled) return;
    setIsExiting(true);
    setTimeout(() => {
      router.push(path);
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < menuItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : menuItems.length - 1));
      } else if (e.key === 'Enter') {
        const item = menuItems[selectedIndex];
        handleNavigation(item.path, item.disabled);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'} `}>
      <h1 className="text-4xl font-bold mb-12 text-center text-teal-400 font-mono tracking-wider">
        ORDENADORES_DE_UMBRAL.EXE
      </h1>
      
      <div className="w-full max-w-md space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.path, item.disabled)}
            className={`
              w-full flex items-center p-4 rounded-lg transition-all duration-200
              ${selectedIndex === index ? 'bg-teal-900/70 text-teal-300' : 'hover:bg-slate-800/50 text-slate-300'}
              ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              border border-teal-500/30
            `}
            disabled={item.disabled}
          >
            <div className="w-8">{item.icon}</div>
            <div className="text-left flex-1">
              <div className="font-medium">{item.label}</div>
              <div className="text-xs text-teal-300/70">{item.description}</div>
            </div>
            {selectedIndex === index && (
              <div className="text-teal-300 animate-pulse">→</div>
            )}
          </button>
        ))}
      </div>
      
      <div className="mt-12 text-center text-teal-400/60 text-sm">
        <p>Usa las flechas ↑ ↓ para navegar y Enter para seleccionar</p>
      </div>
    </div>
  );
}
