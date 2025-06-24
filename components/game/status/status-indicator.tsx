"use client"

import { Tooltip } from "@/components/ui/tooltip"

/**
 * Tipos para las etiquetas de estado permitidas en el juego
 */
export type StatusLabel = 'Energía' | 'Ánimo' | 'Tiempo' | 'Bugs';

/**
 * Mapeo de íconos para cada estado del juego
 */
export const statusIcons: Record<StatusLabel, string> = {
  "Energía": "/icons/energy.svg",
  "Ánimo": "/icons/mood.svg",
  "Tiempo": "/icons/time.svg",
  "Bugs": "/icons/bugs.svg"
}

/**
 * Componente que muestra un indicador de estado con su valor y color correspondiente
 * 
 * @param label - Etiqueta del estado (Energía, Ánimo, Tiempo o Bugs)
 * @param value - Valor numérico del estado
 */
export default function StatusIndicator({ 
  label, 
  value 
}: { 
  label: StatusLabel; 
  value: number 
}) {
  // Determinar el color basado en el valor
  let valueColor = "text-primary"
  
  // Lógica especial para Bugs (inversa a los demás estados)
  if (label === "Bugs") {
    if (value > 10) valueColor = "text-destructive"
    else if (value > 5) valueColor = "text-yellow-500"
    else valueColor = "text-primary"
  } else {
    // Para los demás estados
    if (value < 30) valueColor = "text-destructive"
    else if (value < 60) valueColor = "text-yellow-500"
  }

  const iconPath = statusIcons[label]

  return (
    <Tooltip 
      content={
        <div className="flex items-center gap-2">
          <span>{label}:</span>
          <span className={`font-medium ${valueColor}`}>{value}</span>
        </div>
      }
    >
      <div className="group flex flex-col items-center gap-1 text-xs cursor-help">
        {iconPath && (
          <div className="w-6 h-6 flex items-center justify-center">
            <img
              src={iconPath}
              alt={label}
              className="w-6 h-6 transition-all duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.75)]"
            />
          </div>
        )}
      </div>
    </Tooltip>
  )
}
