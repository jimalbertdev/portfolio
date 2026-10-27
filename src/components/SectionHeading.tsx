type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
  as?: 'h1' | 'h2'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = '',
  as: Heading = 'h2',
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <Heading className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</Heading>
      {description ? <p className="mt-4 text-base leading-7 text-slate-400">{description}</p> : null}
    </div>
  )
}
