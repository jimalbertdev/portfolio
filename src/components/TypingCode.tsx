import { useEffect, useRef, useState } from 'react'

export type CodeToken = {
  text: string
  className?: string
}

type TypingCodeProps = {
  tokens: CodeToken[]
  className?: string
  speed?: number
}

export function TypingCode({ tokens, className = '', speed = 30 }: TypingCodeProps) {
  const fullText = tokens.map((token) => token.text).join('')
  const [reducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [count, setCount] = useState(reducedMotion ? fullText.length : 0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reducedMotion) {
      return
    }

    const element = ref.current
    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [reducedMotion])

  useEffect(() => {
    if (!started || reducedMotion) {
      return
    }

    let index = 0
    const interval = window.setInterval(() => {
      index = Math.min(index + 3, fullText.length)
      setCount(index)

      if (index >= fullText.length) {
        window.clearInterval(interval)
      }
    }, speed)

    return () => window.clearInterval(interval)
  }, [started, reducedMotion, fullText.length, speed])

  const renderedTokens = tokens.map((token, index) => {
    const start = tokens
      .slice(0, index)
      .reduce((total, current) => total + current.text.length, 0)
    const visibleText = token.text.slice(0, Math.max(0, count - start))

    if (!visibleText) {
      return null
    }

    return (
      <span key={`${index}-${token.text}`} className={token.className}>
        {visibleText}
      </span>
    )
  })

  return (
    <div ref={ref} className={`relative ${className}`}>
      <pre className="invisible whitespace-pre-wrap" aria-hidden="true">
        {fullText}
      </pre>

      <pre className="absolute inset-0 overflow-hidden whitespace-pre-wrap" aria-hidden="true">
        {renderedTokens}
      </pre>

      <pre className="sr-only whitespace-pre-wrap">{fullText}</pre>

      <div className="mt-1 flex items-center gap-1.5 text-slate-600" aria-hidden="true">
        <span>$</span>
        <span className="typing-cursor" />
      </div>
    </div>
  )
}
