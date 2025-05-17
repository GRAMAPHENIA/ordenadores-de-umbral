"use client"

interface TextProps {
  text: string
  className?: string
}

export function CodeFragment({ text, className }: TextProps) {
  return <div className={`code-fragment text-muted-foreground ${className || ''}`}>{text}</div>
}

export function PhilosophicalQuote({ text, className }: TextProps) {
  return (
    <div className={`philosophical-quote ${className || ''}`}>
      "{text}"
    </div>
  )
}

export function ExistentialQuote({ text, className }: TextProps) {
  return (
    <div className={`existential-quote ${className || ''}`}>
      "{text}"
    </div>
  )
}

export function RegularText({ text, className }: TextProps) {
  return <div className={`my-1 ${className || ''}`}>{text}</div>
}

export function TextLine({ text, className }: TextProps) {
  return <div className={`my-2 ${className || ''}`}>{text}</div>
}
