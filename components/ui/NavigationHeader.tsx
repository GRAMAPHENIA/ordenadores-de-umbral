"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

interface NavigationHeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  className?: string;
}

export function NavigationHeader({ 
  title, 
  showBackButton = true, 
  onBack,
  className = "" 
}: NavigationHeaderProps) {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }
    setIsExiting(true);
    setTimeout(() => {
      router.back();
    }, 200);
  };

  const handleHome = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push('/');
    }, 200);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleHome();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className={`flex items-center justify-between mb-6 ${className}`}>
      <div className="flex items-center space-x-2">
        {showBackButton && (
          <button
            onClick={handleBack}
            className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors text-teal-400 hover:text-teal-300"
            title="Volver"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        {title && (
          <h1 className="text-xl font-semibold text-teal-300">
            {title}
          </h1>
        )}
      </div>
      
      <button
        onClick={handleHome}
        className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors text-teal-400 hover:text-teal-300"
        title="Ir al inicio"
      >
        <Home className="w-5 h-5" />
      </button>
    </header>
  );
}
