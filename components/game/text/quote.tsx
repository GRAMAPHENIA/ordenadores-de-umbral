"use client"

interface QuoteProps {
  text: string
  type: 'philosophical' | 'existential'
  className?: string
}

export default function Quote({ text, type, className }: QuoteProps) {
  const baseClassName = type === 'philosophical' ? 'philosophical-quote' : 'existential-quote'
  
  return (
    <div className={`${baseClassName} ${className || ''}`}>
      "{text}"
    </div>
  )
}
