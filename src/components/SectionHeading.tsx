type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, className = '' }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-400">{description}</p> : null}
    </div>
  )
}
