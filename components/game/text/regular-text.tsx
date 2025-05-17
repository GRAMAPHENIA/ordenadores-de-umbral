"use client"

interface RegularTextProps {
  text: string
  className?: string
}

export default function RegularText({ text, className }: RegularTextProps) {
  return <div className={`my-1 ${className || ''}`}>{text}</div>
}
