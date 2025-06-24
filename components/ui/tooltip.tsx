"use client"

import { useState, useRef, useEffect, ReactNode } from "react"

interface TooltipProps {
  children: ReactNode
  content: ReactNode
  className?: string
}

export function Tooltip({ children, content, className = "" }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const tooltipRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect()
      const tooltipRect = tooltipRef.current.getBoundingClientRect()
      
      // Calcular posición vertical
      const top = triggerRect.bottom + window.scrollY + 5
      
      // Calcular posición horizontal asegurando que no se salga de la pantalla
      let left = triggerRect.left + (triggerRect.width / 2) + window.scrollX
      
      // Ajustar si el tooltip se sale por la derecha
      const rightEdge = left + (tooltipRect.width / 2)
      if (rightEdge > window.innerWidth + window.scrollX) {
        left = window.innerWidth + window.scrollX - tooltipRect.width / 2 - 10
      }
      
      // Ajustar si el tooltip se sale por la izquierda
      const leftEdge = left - (tooltipRect.width / 2)
      if (leftEdge < window.scrollX) {
        left = tooltipRect.width / 2 + window.scrollX + 10
      }

      setPosition({ top, left })
    }
  }, [isVisible])

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        className={`inline-block ${className}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>

      {isVisible && (
        <div
          ref={tooltipRef}
          className="fixed z-50 px-3 py-2 text-sm text-white bg-gray-800 rounded-md shadow-lg whitespace-nowrap transform -translate-x-1/2"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
          {content}
          <div className="absolute w-3 h-3 -top-1.5 left-1/2 -translate-x-1/2 rotate-45 bg-gray-800" />
        </div>
      )}
    </div>
  )
}
