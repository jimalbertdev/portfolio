import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  about,
  cases,
  contact,
  hero,
  homeSections,
  labProjects,
  pick,
  principles,
  processSteps,
  services,
  site,
  stackGroups,
  stats,
} from '../content'
import type { CaseStudy } from '../content'
import { useLanguage } from '../lib/useLanguage'
import { CaseCard } from '../components/CaseCard'
import { ContactForm } from '../components/ContactForm'
import { Counter } from '../components/Counter'
import { Footer } from '../components/Footer'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  Github,
  Linkedin,
  ServiceGlyph,
  Sparkles,
  Whatsapp,
} from '../components/Icons'
import { Navbar } from '../components/Navbar'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SkipLink } from '../components/SkipLink'
import { TypingCode, type CodeToken } from '../components/TypingCode'

const featuredSlugs = ['cordami-offline', 'quedate', 'wushutech-pro']

const featuredCases = featuredSlugs
  .map((slug) => cases.find((study) => study.slug === slug))
  .filter((study): study is CaseStudy => study !== undefined)

const terminalTokens: CodeToken[] = [
  { text: 'const ', className: 'text-fuchsia-300' },
  { text: 'profile', className: 'text-sky-300' },
  { text: ' = ', className: 'text-slate-500' },
  { text: '{\n', className: 'text-slate-400' },
  { text: '  role: ', className: 'text-slate-400' },
  { text: "'Fullstack Senior'", className: 'text-accent-300' },
  { text: ',\n  stack: [', className: 'text-slate-400' },
  { text: "'React'", className: 'text-accent-300' },
  { text: ', ', className: 'text-slate-500' },
  { text: "'Python'", className: 'text-accent-300' },
  { text: ', ', className: 'text-slate-500' },
  { text: "'PHP'", className: 'text-accent-300' },
  { text: '],\n  infra: [', className: 'text-slate-400' },
  { text: "'Nginx'", className: 'text-accent-300' },
  { text: ', ', className: 'text-slate-500' },
  { text: "'Apache'", className: 'text-accent-300' },
  { text: '],\n  remote: ', className: 'text-slate-400' },
  { text: 'true', className: 'text-amber-300' },
  { text: ',\n  timezone: ', className: 'text-slate-400' },
  { text: "'UTC-4'", className: 'text-accent-300' },
  { text: ',\n}\n\n', className: 'text-slate-400' },
  { text: '// build, ship, maintain.', className: 'text-slate-600' },
]

export function Home() {
  const { language } = useLanguage()

  useEffect(() => {
    document.title =
      language === 'es'
        ? 'Alberto Jiménez — Fullstack Senior | React, Python, PHP y DevOps'
        : 'Alberto Jiménez — Senior Fullstack Developer | React, Python, PHP and DevOps'
  }, [language])

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="contenido">
        <section className="relative overflow-hidden bg-hero-glow pb-20 pt-32 sm:pb-28 sm:pt-40">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />

          <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr]">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-300">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                {pick(hero.availability, language)}
              </div>

              <h1 className="mt-6 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {pick(hero.title, language)}{' '}
                <span className="hero-gradient bg-gradient-to-r from-accent-300 via-emerald-200 to-sky-300 bg-clip-text text-transparent">
                  {pick(hero.titleAccent, language)}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                {pick(hero.description, language)}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#contacto" className="btn-primary">
                  {pick(hero.primaryCta, language)}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link to="/casos" className="btn-secondary">
                  {pick(hero.secondaryCta, language)}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={site.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost ml-1 px-2 py-2"
                >
                  <Download className="h-4 w-4" />
                  {language === 'es' ? 'Descargar CV' : 'Download CV'}
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-2">
                {hero.tech.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="terminal-card card relative overflow-hidden shadow-2xl shadow-black/50 transition duration-300 hover:border-accent/25">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                  <span className="ml-auto font-mono text-[10px] text-slate-600">{hero.terminal.file}</span>
                </div>

                <div className="p-5 font-mono text-[12px] leading-6 sm:p-6 sm:text-[13px]">
                  <TypingCode tokens={terminalTokens} />
                </div>

                <div className="grid grid-cols-2 gap-px border-t border-white/10 bg-white/5">
                  {hero.terminal.facts.map((fact) => (
                    <div key={pick(fact.label, language)} className="bg-ink-900/80 p-4">
                      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">
                        {pick(fact.label, language)}
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">{pick(fact.value, language)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-white/5 bg-white/[0.015]">
          <div className="container-page grid grid-cols-2 divide-x divide-white/5 sm:grid-cols-4">
            {stats.map((stat) => (
              <Reveal key={pick(stat.label, language)}>
                <div className="px-4 py-8 text-center sm:py-10">
                  <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    <Counter value={pick(stat.value, language)} />
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{pick(stat.label, language)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="servicios" className="section scroll-mt-24">
          <div className="container-page">
            <Reveal>
              <SectionHeading
                eyebrow={pick(homeSections.services.eyebrow, language)}
                title={pick(homeSections.services.title, language)}
                description={pick(homeSections.services.description, language)}
              />
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {services.map((service, index) => (
                <Reveal key={service.id} className="h-full">
                  <article className="card group h-full p-6 transition duration-300 hover:border-accent/30 hover:bg-white/[0.05] sm:p-7">
                    <div className="flex items-start justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent-300">
                        <ServiceGlyph icon={service.icon} className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-[10px] text-slate-600">0{index + 1}</span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">{pick(service.title, language)}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{pick(service.description, language)}</p>
                    <ul className="mt-5 space-y-2.5">
                      {pick(service.bullets, language).map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="casos"
          className="section scroll-mt-24 border-t border-white/5 bg-white/[0.015]"
        >
          <div className="container-page">
            <Reveal>
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <SectionHeading
                  eyebrow={pick(homeSections.cases.eyebrow, language)}
                  title={pick(homeSections.cases.title, language)}
                  description={pick(homeSections.cases.description, language)}
                />
                <p className="max-w-xs font-mono text-[10px] uppercase leading-5 tracking-[0.14em] text-slate-600 sm:text-right">
                  {pick(homeSections.cases.note, language)}
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {featuredCases.map((study, index) => (
                <Reveal key={study.slug} className="h-full">
                  <CaseCard study={study} index={index} />
                </Reveal>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link to="/casos" className="btn-secondary">
                {pick(homeSections.cases.viewAll, language)}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section id="lab" className="section scroll-mt-24 border-t border-white/5">
          <div className="container-page">
            <Reveal>
              <SectionHeading
                eyebrow={pick(homeSections.lab.eyebrow, language)}
                title={pick(homeSections.lab.title, language)}
                description={pick(homeSections.lab.description, language)}
              />
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {labProjects.map((project) => {
                const isProduction = project.statusTone === 'production'

                return (
                  <Reveal key={pick(project.name, language)} className="h-full">
                    <article
                      className={`card group h-full p-6 transition duration-300 hover:bg-white/[0.05] ${
                        isProduction ? 'hover:border-accent/25' : 'hover:border-amber-300/25'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${
                            isProduction
                              ? 'border-accent/20 bg-accent/5 text-accent-300'
                              : 'border-amber-300/20 bg-amber-300/5 text-amber-200'
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              isProduction ? 'bg-accent' : 'bg-amber-300'
                            }`}
                          />
                          {pick(project.status, language)}
                        </span>
                        <Sparkles
                          className={`h-5 w-5 ${
                            isProduction ? 'text-accent-300/60' : 'text-amber-200/60'
                          }`}
                        />
                      </div>

                      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                        {pick(project.highlight, language)}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold leading-snug text-white transition group-hover:text-accent-300">
                        {pick(project.name, language)}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {pick(project.description, language)}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span key={item} className="chip">
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500">
                        {pick(project.tags, language).map((tag) => (
                          <span key={tag}>#{tag}</span>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-page">
            <Reveal>
              <SectionHeading
                eyebrow={pick(homeSections.process.eyebrow, language)}
                title={pick(homeSections.process.title, language)}
                description={pick(homeSections.process.description, language)}
              />
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <Reveal key={step.number} className="h-full">
                  <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                    <p className="font-mono text-[11px] text-accent-300">{step.number}</p>
                    <h3 className="mt-8 text-lg font-semibold text-white">{pick(step.title, language)}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{pick(step.description, language)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section border-y border-white/5 bg-white/[0.015]">
          <div className="container-page">
            <Reveal>
              <SectionHeading
                eyebrow={pick(homeSections.stack.eyebrow, language)}
                title={pick(homeSections.stack.title, language)}
                description={pick(homeSections.stack.description, language)}
              />
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stackGroups.map((group) => (
                <Reveal key={pick(group.label, language)} className="h-full">
                  <div className="h-full rounded-2xl border border-white/10 bg-ink-900/40 p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                      {pick(group.label, language)}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="section scroll-mt-24">
          <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow={pick(homeSections.about.eyebrow, language)}
                title={pick(homeSections.about.title, language)}
              />
              <div className="mt-6 space-y-5 text-base leading-7 text-slate-400">
                {pick(about.paragraphs, language).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={site.cv} target="_blank" rel="noreferrer" className="btn-secondary">
                  <Download className="h-4 w-4" />
                  {language === 'es' ? 'Descargar CV' : 'Download CV'}
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost px-2 py-2"
                >
                  <Whatsapp className="h-4 w-4" />
                  {site.phone}
                </a>
              </div>
            </Reveal>

            <Reveal>
              <div className="card overflow-hidden">
                <div className="flex items-center gap-4 border-b border-white/5 bg-accent/5 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-ink-950 font-mono text-lg font-semibold text-accent-300">
                    {site.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{site.name}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      Fullstack Senior · UTC-4
                    </p>
                  </div>
                  <span className="ml-auto h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
                </div>

                <dl className="divide-y divide-white/5">
                  {about.facts.map((fact) => (
                    <div key={pick(fact.label, language)} className="grid grid-cols-[0.8fr_1.2fr] gap-4 px-6 py-4">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
                        {pick(fact.label, language)}
                      </dt>
                      <dd className="text-sm text-slate-200">{pick(fact.value, language)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          <div className="container-page mt-20">
            <Reveal>
              <SectionHeading
                eyebrow={pick(homeSections.principles.eyebrow, language)}
                title={pick(homeSections.principles.title, language)}
                description={pick(homeSections.principles.description, language)}
              />
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle) => (
                <Reveal key={pick(principle.title, language)} className="h-full">
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                    <h3 className="text-sm font-semibold text-white">{pick(principle.title, language)}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {pick(principle.description, language)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="section scroll-mt-24 border-t border-white/5 bg-white/[0.015]"
        >
          <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow={pick(contact.eyebrow, language)}
                title={pick(contact.title, language)}
                description={pick(contact.description, language)}
              />

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="card group flex items-center gap-3 p-4 transition hover:border-accent/30 hover:bg-white/[0.05]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition group-hover:text-accent-300">
                    <Whatsapp className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.14em] text-slate-500">
                      {pick(contact.whatsappLabel, language)}
                    </span>
                    <span className="mt-0.5 block text-sm text-slate-200">{site.phone}</span>
                  </span>
                </a>

                <a
                  href={site.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="card group flex items-center gap-3 p-4 transition hover:border-accent/30 hover:bg-white/[0.05]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition group-hover:text-accent-300">
                    <Download className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.14em] text-slate-500">
                      {pick(contact.cvLabel, language)}
                    </span>
                    <span className="mt-0.5 block text-sm text-slate-200">
                      {pick(contact.cvValue, language)}
                    </span>
                  </span>
                </a>

                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="card group flex items-center gap-3 p-4 transition hover:border-accent/30 hover:bg-white/[0.05]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition group-hover:text-accent-300">
                    <Linkedin className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.14em] text-slate-500">
                      {pick(contact.linkedinLabel, language)}
                    </span>
                    <span className="mt-0.5 block text-sm text-slate-200">/in/jimalbertdev</span>
                  </span>
                </a>

                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="card group flex items-center gap-3 p-4 transition hover:border-accent/30 hover:bg-white/[0.05]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition group-hover:text-accent-300">
                    <Github className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.14em] text-slate-500">GitHub</span>
                    <span className="mt-0.5 block text-sm text-slate-200">/jimalbertdev</span>
                  </span>
                </a>
              </div>

              <div className="mt-8 rounded-2xl border border-accent/15 bg-accent/5 p-5">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                  {language === 'es' ? 'Disponibilidad' : 'Availability'}
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {language === 'es'
                    ? 'Abierto a roles full-time remotos y proyectos freelance selectos. Zona horaria UTC-4, con solapamiento con EE.UU. y Europa.'
                    : 'Open to full-time remote roles and selected freelance projects. UTC-4 timezone, with overlap for the US and Europe.'}
                </p>
              </div>
            </Reveal>

            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
