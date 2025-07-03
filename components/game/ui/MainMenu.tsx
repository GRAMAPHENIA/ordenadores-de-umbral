"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Power, X, Settings, Info, Play, ChevronRight } from "lucide-react";

type MenuItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
};

export default function MainMenu() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [
    {
      id: 'start',
      label: 'INICIAR SIMULACIÓN',
      icon: <Play className="w-5 h-5" />,
      action: () => router.push('/ordenador-de-umbral')
    },
    {
      id: 'settings',
      label: 'CONFIGURACIÓN',
      icon: <Settings className="w-5 h-5" />,
      action: () => {}
    },
    {
      id: 'about',
      label: 'ACERCA DE',
      icon: <Info className="w-5 h-5" />,
      action: () => {}
    },
    {
      id: 'exit',
      label: 'SALIR',
      icon: <Power className="w-5 h-5" />,
      action: () => {
        if (typeof window !== 'undefined') {
          window.close();
        }
      }
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          setSelectedIndex(prev => (prev - 1 + menuItems.length) % menuItems.length);
          break;
        case 'ArrowDown':
          setSelectedIndex(prev => (prev + 1) % menuItems.length);
          break;
        case 'Enter':
          menuItems[selectedIndex].action();
          break;
        case 'Escape':
          setIsExiting(true);
          setTimeout(() => router.push('/'), 500);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4 transition-opacity duration-500">
      {/* Efecto de escaneo sutil */}
      <div className="absolute inset-0 opacity-5 bg-[url('/grid.svg')] pointer-events-none"></div>
      
      {/* Efecto de ruido */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogIzAwMDsiPjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAiLz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iMiwyIi8+PC9zdmc+')] opacity-5 pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-2xl">
        {/* Título */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500 mb-2">
            UMBRAL
          </h1>
          <p className="text-teal-400/80 text-sm tracking-widest">SISTEMA DE SIMULACIÓN</p>
        </div>

        {/* Menú */}
        <div className="space-y-2 mb-12">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={item.action}
              onMouseEnter={() => setSelectedIndex(index)}
              className={`w-full flex items-center justify-between p-4 transition-all duration-200 border-l-4 ${
                selectedIndex === index
                  ? 'border-teal-400 bg-teal-400/10 text-teal-300 shadow-lg shadow-teal-400/10'
                  : 'border-transparent hover:border-teal-400/30 hover:bg-teal-400/5 text-teal-400/80 hover:text-teal-300'
              }`}
            >
              <div className="flex items-center">
                <span className="mr-3 text-teal-400">
                  {item.icon}
                </span>
                <span className="text-lg font-medium tracking-wider">
                  {item.label}
                </span>
              </div>
              {selectedIndex === index && (
                <ChevronRight className="w-5 h-5 text-teal-400 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-teal-400/50 text-xs tracking-wider">
          <p>© {new Date().getFullYear()} SISTEMA UMBRAL</p>
          <p className="mt-1 flex items-center justify-center gap-2">
            <span className="flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1 animate-pulse"></span>
              SISTEMA EN LÍNEA
            </span>
            <span>•</span>
            <span>VERSIÓN 1.0.0</span>
          </p>
        </div>
      </div>

      {/* Efecto de borde */}
      <div className="absolute inset-4 border border-teal-400/20 pointer-events-none"></div>
      <div className="absolute inset-6 border border-teal-400/10 pointer-events-none"></div>
      
      {/* Instrucciones */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-xs text-teal-400/50 tracking-wider">
          <span className="inline-block px-2 py-1 bg-teal-400/10 rounded mr-2">↑↓</span>
          <span className="mr-4">NAVEGAR</span>
          <span className="inline-block px-2 py-1 bg-teal-400/10 rounded mr-2">ENTER</span>
          <span>SELECCIONAR</span>
        </p>
      </div>
    </div>
  );
}
