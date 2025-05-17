"use client"

interface CodeFragmentProps {
  text: string
  className?: string
}

export default function CodeFragment({ text, className }: CodeFragmentProps) {
  return (
    <div className={`code-fragment text-muted-foreground ${className || ''}`}>
      {text}
    </div>
  )
}
