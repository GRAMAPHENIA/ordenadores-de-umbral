"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Home, Trophy, BookOpen, Award } from "lucide-react";

const NAV_ITEMS = [
  {
    name: "Inicio",
    path: "/",
    icon: <Home className="h-5 w-5" />,
    helpText: "Volver al menú principal del juego"
  },
  {
    name: "Niveles",
    path: "/niveles",
    icon: <BookOpen className="h-5 w-5" />,
    helpText: "Explora y selecciona niveles para aprender nuevos conceptos"
  },
  {
    name: "Logros",
    path: "/logros",
    icon: <Trophy className="h-5 w-5" />,
    helpText: "Revisa tus logros desbloqueados"
  },
  {
    name: "Insignias",
    path: "/insignias",
    icon: <Award className="h-5 w-5" />,
    helpText: "Revisa tus insignias desbloqueadas"
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 border-b border-primary/30 z-50">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-2">
            <span className="text-primary font-bold text-xl tracking-tight text-glow">
              ORDENADORES_DE_UMBRAL.EXE
            </span>
            <div className="h-6 w-1.5 bg-primary animate-pulse"></div>
          </div>

          <div className="flex items-center space-x-1 bg-black/50 px-2 py-1 border border-primary/20">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "flex items-center px-3 py-1 text-sm font-mono border border-transparent hover:border-primary/50 transition-all duration-200",
                    isActive
                      ? "bg-primary/10 text-primary border-primary/50"
                      : "text-primary/70 hover:text-primary"
                  )}
                  title={item.helpText}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name.toUpperCase()}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center">
            <div className="flex items-center bg-black/50 px-3 py-1 border border-primary/20">
              <span className="text-primary text-sm font-mono">
                PUNTOS: <span className="text-primary/70">[</span><span className="text-yellow-400">0000</span><span className="text-primary/70">]</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Línea de estado */}
      <div className="h-1 bg-gradient-to-r from-primary via-green-700 to-primary animate-pulse"></div>
    </nav>
  );
}
