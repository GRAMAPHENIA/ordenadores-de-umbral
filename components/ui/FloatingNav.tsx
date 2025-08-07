"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Home, Layers, Award, Settings } from "lucide-react";
import { LucideIcon } from "lucide-react";

type NavItem = {
  name: string;
  path: string;
  icon: LucideIcon;
  description: string;
  disabled?: boolean;
};

const navItems: NavItem[] = [
  { 
    name: 'Inicio', 
    path: '/', 
    icon: Home,
    description: 'Menú principal'
  },
  { 
    name: 'Niveles', 
    path: '/niveles', 
    icon: Layers,
    description: 'Selección de niveles'
  },
  { 
    name: 'Logros', 
    path: '/logros', 
    icon: Award,
    description: 'Tus logros desbloqueados'
  },
  { 
    name: 'Insignias', 
    path: '/insignias', 
    icon: Award,
    description: 'Colección de insignias'
  },
  { 
    name: 'Configuración', 
    path: '/configuracion', 
    icon: Settings,
    disabled: true,
    description: 'Ajustes del sistema'
  },
];

export function FloatingNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const handleNavigation = (path: string) => {
    if (path !== pathname) {
      router.push(path);
    }
  };

  return (
    <div className="fixed bottom-16 right-4 z-50 flex flex-col items-end space-y-2">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        const Icon = item.icon;
        
        return (
          <div key={item.path} className="relative group">
            <button
              onClick={() => !item.disabled && handleNavigation(item.path)}
              disabled={item.disabled}
              onMouseEnter={() => setActiveTooltip(item.path)}
              onMouseLeave={() => setActiveTooltip(null)}
              className={`
                w-10 h-10 flex items-center justify-center rounded-lg
                ${isActive 
                  ? 'bg-primary text-black' 
                  : 'bg-black/90 text-primary hover:bg-primary/20'}
                ${item.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
                border border-primary/50 shadow-md
                transition-all duration-200
                hover:scale-110 hover:shadow-primary/30
                backdrop-blur-sm
              `}
              aria-label={item.name}
              aria-disabled={item.disabled}
            >
              <Icon className="w-5 h-5" />
            </button>
            
            {/* Tooltip */}
            {activeTooltip === item.path && (
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2">
                <div className="bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap border border-primary/30">
                  <div className="font-bold text-primary">{item.name}</div>
                  <div className="text-primary/70 text-[10px]">{item.description}</div>
                </div>
                <div className="absolute right-0 top-1/2 w-2 h-2 bg-black/90 transform translate-x-1/2 -translate-y-1/2 rotate-45 border-r border-t border-primary/30"></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
