type ScoreRingProps = {
  score: number
  label: string
}

export function ScoreRing({ score, label }: ScoreRingProps) {
  const clamped = Math.max(0, Math.min(100, Math.round(score)))
  const color = clamped >= 90 ? '#34d399' : clamped >= 50 ? '#fbbf24' : '#f87171'

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative h-24 w-24 rounded-full p-[6px]"
        style={{
          background: `conic-gradient(${color} ${clamped * 3.6}deg, rgba(255,255,255,0.08) 0)`,
        }}
        role="img"
        aria-label={`${label}: ${clamped} de 100`}
      >
        <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-ink-950">
          <span className="text-2xl font-bold text-white">{clamped}</span>
          <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-slate-500">/100</span>
        </div>
      </div>
      <span className="text-center font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500">
        {label}
      </span>
    </div>
  )
}
