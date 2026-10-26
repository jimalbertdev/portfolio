import { Link } from 'react-router-dom'
import { casePage, pick, type CaseStudy } from '../content'
import { useLanguage } from '../lib/useLanguage'
import { ArrowUpRight } from './Icons'

export function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  const { language } = useLanguage()

  return (
    <Link
      to={`/casos/${study.slug}`}
      className="group card relative flex h-full flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.055]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative flex items-center justify-between gap-4">
        <span className="font-mono text-[11px] text-slate-600">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="chip">{pick(study.highlight, language)}</span>
      </div>

      <div className="relative mt-10 flex-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
          {pick(study.company, language)}
        </p>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-white transition group-hover:text-accent-300">
          {pick(study.title, language)}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{pick(study.summary, language)}</p>
      </div>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {pick(study.tags, language).map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>

      <div className="relative mt-8 flex items-center justify-between border-t border-white/5 pt-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-600">
          {pick(study.period, language)}
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
          {pick(casePage.viewCase, language)}
          <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-300" />
        </span>
      </div>
    </Link>
  )
}
