import { useEffect, useState } from 'react'

type CounterProps = {
  value: string
  className?: string
  duration?: number
}

export function Counter({ value, className = '', duration = 1100 }: CounterProps) {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? Number(match[1]) : null
  const suffix = match?.[2] ?? ''
  const [reducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [current, setCurrent] = useState(reducedMotion ? (target ?? 0) : 0)

  useEffect(() => {
    if (target === null || reducedMotion) {
      return
    }

    const steps = 30
    let step = 0
    const interval = window.setInterval(() => {
      step += 1
      const progress = Math.min(step / steps, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(target * eased))

      if (progress >= 1) {
        window.clearInterval(interval)
      }
    }, duration / steps)

    return () => window.clearInterval(interval)
  }, [target, reducedMotion, duration])

  if (target === null) {
    return <span className={className}>{value}</span>
  }

  return (
    <span className={`tabular-nums ${className}`}>
      <span aria-hidden="true">
        {current}
        {suffix}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  )
}
