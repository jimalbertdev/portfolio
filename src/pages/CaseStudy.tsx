import { useEffect, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { casePage, cases, pick, site } from '../content'
import { useLanguage } from '../lib/useLanguage'
import { Footer } from '../components/Footer'
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from '../components/Icons'
import { Navbar } from '../components/Navbar'
import { Reveal } from '../components/Reveal'
import { SkipLink } from '../components/SkipLink'

function CaseBlock({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-slate-400">{children}</div>
    </section>
  )
}

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const { language } = useLanguage()
  const study = cases.find((item) => item.slug === slug)
  const studyIndex = study ? cases.findIndex((item) => item.slug === study.slug) : -1
  const nextStudy = study ? cases[(studyIndex + 1) % cases.length] : undefined

  useEffect(() => {
    document.title = study
      ? `${pick(study.title, language)} — ${site.name}`
      : `${pick(casePage.notFoundTitle, language)} — ${site.name}`
  }, [study, language])

  if (!study) {
    return (
      <>
        <SkipLink />
        <Navbar />
        <main id="contenido" className="flex min-h-[70vh] items-center pt-28">
          <div className="container-page text-center">
            <p className="eyebrow">404</p>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              {pick(casePage.notFoundTitle, language)}
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-400">
              {pick(casePage.notFoundText, language)}
            </p>
            <Link to="/" className="btn-primary mt-8">
              {pick(casePage.notFoundButton, language)}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="contenido" className="pt-28 sm:pt-32">
        <div className="container-page">
          <Reveal>
            <Link to="/casos" className="btn-ghost">
              <ArrowLeft className="h-4 w-4" />
              {pick(casePage.back, language)}
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="chip">{pick(study.highlight, language)}</span>
              {study.status ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {pick(study.status, language)}
                </span>
              ) : null}
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                {pick(study.company, language)}
              </span>
              <span className="text-slate-700">/</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                {pick(study.period, language)}
              </span>
            </div>

            <h1 className="mt-6 max-w-4xl text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              {pick(study.title, language)}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
              {pick(study.summary, language)}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {pick(study.tags, language).map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-14 grid gap-12 border-t border-white/5 pt-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-10">
              <Reveal>
                <CaseBlock eyebrow="01" title={pick(casePage.challenge, language)}>
                  <p>{pick(study.challenge, language)}</p>
                </CaseBlock>
              </Reveal>

              <Reveal>
                <CaseBlock eyebrow="02" title={pick(casePage.solution, language)}>
                  <p>{pick(study.solution, language)}</p>
                </CaseBlock>
              </Reveal>

              <Reveal>
                <CaseBlock eyebrow="03" title={pick(casePage.results, language)}>
                  <ul className="space-y-3">
                    {pick(study.results, language).map((result) => (
                      <li key={result} className="flex items-start gap-3">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-accent-300" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </CaseBlock>
              </Reveal>

              <Reveal>
                <CaseBlock eyebrow="04" title={pick(casePage.role, language)}>
                  <p>{pick(study.role, language)}</p>
                </CaseBlock>
              </Reveal>
            </div>

            <aside className="space-y-5">
              <Reveal>
                <div className="card p-6">
                  <p className="eyebrow">{pick(casePage.stack, language)}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.stack.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {study.link ? (
                <Reveal>
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary w-full"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {pick(casePage.viewLive, language)}
                  </a>
                </Reveal>
              ) : null}

              <Reveal>
                <div className="rounded-2xl border border-amber-300/15 bg-amber-300/[0.04] p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-200/80">
                    {pick(casePage.ndaTitle, language)}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{pick(casePage.ndaText, language)}</p>
                </div>
              </Reveal>

              <Reveal>
                <div className="card p-6">
                  <p className="text-lg font-semibold text-white">{pick(casePage.ctaTitle, language)}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{pick(casePage.ctaText, language)}</p>
                  <Link to="/#contacto" className="btn-primary mt-5 w-full">
                    {pick(casePage.ctaButton, language)}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>

          {nextStudy ? (
            <div className="mt-16 border-t border-white/5 pt-8">
              <Link
                to={`/casos/${nextStudy.slug}`}
                className="group flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-accent/30 hover:bg-white/[0.05] sm:flex-row sm:items-center"
              >
                <span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    {language === 'es' ? 'Siguiente caso' : 'Next case'}
                  </span>
                  <span className="mt-2 block text-lg font-semibold text-white transition group-hover:text-accent-300">
                    {pick(nextStudy.title, language)}
                  </span>
                </span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-300 transition group-hover:border-accent/40 group-hover:text-accent-300">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  )
}
