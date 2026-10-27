import { useEffect, useState } from 'react'
import { pick, site, toolsPage } from '../content'
import { useLanguage } from '../lib/useLanguage'
import { Footer } from '../components/Footer'
import { ArrowUpRight, Clock, Code, Gauge, Whatsapp } from '../components/Icons'
import { Navbar } from '../components/Navbar'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SkipLink } from '../components/SkipLink'
import { HtmlAudit } from '../components/tools/HtmlAudit'
import { PerformanceScanner } from '../components/tools/PerformanceScanner'
import { WebVitalsScorecard } from '../components/tools/WebVitalsScorecard'

type ToolKey = 'performance' | 'html' | 'vitals'

const tabs: { key: ToolKey; label: typeof toolsPage.tabs.performance; icon: typeof Gauge }[] = [
  { key: 'performance', label: toolsPage.tabs.performance, icon: Gauge },
  { key: 'html', label: toolsPage.tabs.html, icon: Code },
  { key: 'vitals', label: toolsPage.tabs.vitals, icon: Clock },
]

export function Tools() {
  const { language } = useLanguage()
  const [active, setActive] = useState<ToolKey>('performance')

  useEffect(() => {
    document.title =
      language === 'es'
        ? `Herramientas gratuitas — ${site.name}`
        : `Free tools — ${site.name}`
  }, [language])

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="contenido" className="pb-20 pt-28 sm:pt-32">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow={pick(toolsPage.eyebrow, language)}
              title={pick(toolsPage.title, language)}
              description={pick(toolsPage.description, language)}
            />
          </Reveal>

          <Reveal>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-accent/15 bg-accent/[0.04] px-4 py-3 text-[11px] text-slate-300">
              <span className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.12em] text-accent-300">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                100% gratis
              </span>
              <span>Sin registro</span>
              <span>Reportes con marca de agua</span>
              <span>{pick(toolsPage.note, language)}</span>
            </div>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition ${
                  active === key
                    ? 'bg-accent text-ink-950'
                    : 'border border-white/10 bg-white/[0.04] text-slate-300 hover:border-accent/30 hover:text-white'
                }`}
                aria-pressed={active === key}
              >
                <Icon className="h-4 w-4" />
                {pick(label, language)}
              </button>
            ))}
          </div>

          <div className="mt-6">
            {active === 'performance' ? <PerformanceScanner /> : null}
            {active === 'html' ? <HtmlAudit /> : null}
            {active === 'vitals' ? <WebVitalsScorecard /> : null}
          </div>

          <Reveal>
            <div className="mt-12 flex flex-col justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-lg font-semibold text-white">¿Prefieres que lo haga yo?</p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                  Reviso los resultados contigo y ejecuto la optimización: Core Web Vitals, carga de
                  assets, caché, imágenes y buenas prácticas.
                </p>
              </div>
              <a
                href={`${site.whatsapp}?text=${encodeURIComponent('Hola Alberto, usé tus herramientas y quiero contratar la optimización de mi sitio.')}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary shrink-0"
              >
                <Whatsapp className="h-4 w-4" />
                Hablemos por WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
