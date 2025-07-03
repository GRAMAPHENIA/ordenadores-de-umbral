"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Pequeño retraso para la animación
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Ajusta la velocidad de carga aquí

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="w-full max-w-md px-8">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-mono text-teal-400 mb-2">CARGANDO SISTEMA</h2>
          <p className="text-sm text-gray-400">Inicializando módulos de realidad...</p>
        </div>
        
        {/* Barra de progreso */}
        <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-teal-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <div className="mt-2 text-right">
          <span className="text-xs font-mono text-teal-300">
            {progress}%
          </span>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 font-mono">
            © 2024 SISTEMA UMBRAL v1.0.0
          </p>
        </div>
      </div>
    </div>
  );
}
