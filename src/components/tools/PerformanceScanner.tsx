import { useState, type FormEvent } from 'react'
import {
  formatDate,
  printReport,
  whatsappUrl,
  type ReportMetric,
  type ReportStatus,
} from '../../lib/report'
import { ArrowUpRight, Gauge, Whatsapp } from '../Icons'
import { ScoreRing } from './ScoreRing'
import { ToolReport } from './ToolReport'

type LighthouseAudit = {
  id?: string
  title?: string
  displayValue?: string
  score?: number | null
  details?: {
    type?: string
    overallSavingsMs?: number
  }
}

type LighthouseData = {
  categories?: Record<string, { score?: number | null }>
  audits?: Record<string, LighthouseAudit>
}

type MicrolinkPayload = {
  status?: string
  message?: string
  data?: {
    title?: string
    description?: string
    url?: string
    insights?: {
      lighthouse?: LighthouseData
    }
  }
}

type ScanReport = {
  url: string
  title: string
  description: string
  date: string
  scores: { label: string; value: number }[]
  metrics: ReportMetric[]
  opportunities: { title: string; detail: string }[]
  remaining: string | null
  cached: boolean
}

const categoryLabels: Record<string, string> = {
  performance: 'Rendimiento',
  accessibility: 'Accesibilidad',
  'best-practices': 'Buenas prácticas',
  seo: 'SEO',
}

const auditLabels: Record<string, string> = {
  'largest-contentful-paint': 'LCP',
  'first-contentful-paint': 'FCP',
  'total-blocking-time': 'TBT',
  'cumulative-layout-shift': 'CLS',
  'speed-index': 'Speed Index',
  interactive: 'TTI',
}

const opportunityLabels: Record<string, string> = {
  'render-blocking-resources': 'Recursos que bloquean el renderizado',
  'unused-javascript': 'JavaScript sin usar',
  'unused-css-rules': 'CSS sin usar',
  'uses-optimized-images': 'Imágenes sin optimizar',
  'uses-responsive-images': 'Imágenes no responsive',
  'offscreen-images': 'Imágenes fuera de pantalla',
  'server-response-time': 'Tiempo de respuesta del servidor',
  'total-byte-weight': 'Peso total de la página',
  'uses-text-compression': 'Compresión de texto',
  'modern-image-formats': 'Formatos de imagen modernos',
  'efficient-animated-content': 'Contenido animado eficiente',
  'dom-size': 'Tamaño del DOM',
  'mainthread-work-breakdown': 'Trabajo del hilo principal',
  'bootup-time': 'Tiempo de arranque de JavaScript',
  'network-requests': 'Solicitudes de red',
  'font-display': 'Visualización de fuentes',
}

const statusForScore = (score?: number | null): ReportStatus => {
  if (typeof score !== 'number') return 'warn'
  if (score >= 0.9) return 'good'
  if (score >= 0.5) return 'warn'
  return 'bad'
}

const cachePrefix = 'aj:tool:scan:'

function normalizeUrl(input: string): string {
  const trimmed = input.trim()
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
  const parsed = new URL(withProtocol)

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    throw new Error('La URL debe empezar por http:// o https://')
  }

  return parsed.toString()
}

function readCache(url: string): ScanReport | null {
  try {
    const raw = window.localStorage.getItem(`${cachePrefix}${url}`)
    if (!raw) return null

    const cached = JSON.parse(raw) as { timestamp: number; report: ScanReport }
    if (Date.now() - cached.timestamp > 24 * 60 * 60 * 1000) {
      window.localStorage.removeItem(`${cachePrefix}${url}`)
      return null
    }

    return { ...cached.report, cached: true }
  } catch {
    return null
  }
}

function writeCache(url: string, report: ScanReport): void {
  try {
    window.localStorage.setItem(
      `${cachePrefix}${url}`,
      JSON.stringify({ timestamp: Date.now(), report }),
    )
  } catch {
    return
  }
}

function buildReport(url: string, payload: MicrolinkPayload, remaining: string | null): ScanReport {
  const lighthouse = payload.data?.insights?.lighthouse
  const categories = lighthouse?.categories ?? {}
  const audits = lighthouse?.audits ?? {}

  const scores = Object.entries(categoryLabels)
    .map(([key, label]) => ({
      label,
      value: Math.round((categories[key]?.score ?? 0) * 100),
    }))
    .filter((score) => score.value > 0)

  const metrics = Object.entries(auditLabels)
    .map(([key, label]) => {
      const audit = audits[key]
      if (!audit?.displayValue) return null
      return {
        label,
        value: audit.displayValue,
        status: statusForScore(audit.score),
      }
    })
    .filter(
      (metric): metric is { label: string; value: string; status: ReportStatus } =>
        metric !== null,
    )

  const opportunities = Object.values(audits)
    .filter(
      (audit) =>
        audit.details?.type === 'opportunity' &&
        typeof audit.details.overallSavingsMs === 'number' &&
        audit.details.overallSavingsMs > 0,
    )
    .sort(
      (a, b) =>
        (b.details?.overallSavingsMs ?? 0) - (a.details?.overallSavingsMs ?? 0),
    )
    .slice(0, 4)
    .map((audit) => ({
      title: auditLabels[audit.id ?? ''] ?? opportunityLabels[audit.id ?? ''] ?? audit.title ?? 'Oportunidad de mejora',
      detail:
        audit.displayValue ??
        `${Math.round(audit.details?.overallSavingsMs ?? 0)} ms de ahorro potencial`,
    }))

  return {
    url,
    title: payload.data?.title || url,
    description: payload.data?.description || '',
    date: formatDate(),
    scores,
    metrics,
    opportunities,
    remaining,
    cached: false,
  }
}

export function PerformanceScanner() {
  const [url, setUrl] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [report, setReport] = useState<ScanReport | null>(null)
  const [error, setError] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    let normalized: string
    try {
      normalized = normalizeUrl(url)
    } catch {
      setStatus('error')
      setError('Escribe una URL válida, por ejemplo https://tusitio.com')
      return
    }

    const cached = readCache(normalized)
    if (cached) {
      setReport(cached)
      setStatus('success')
      return
    }

    setStatus('loading')
    setReport(null)

    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 60000)

    try {
      const response = await fetch(
        `https://api.microlink.io/?url=${encodeURIComponent(normalized)}&insights=true&meta=true`,
        {
          headers: { Accept: 'application/json' },
          signal: controller.signal,
        },
      )
      const payload = (await response.json()) as MicrolinkPayload

      if (!response.ok || payload.status !== 'success' || !payload.data?.insights?.lighthouse) {
        throw new Error(payload.message || 'No se pudo completar el escaneo.')
      }

      const nextReport = buildReport(
        normalized,
        payload,
        response.headers.get('x-rate-limit-remaining'),
      )

      if (nextReport.scores.length === 0) {
        throw new Error('La API no devolvió puntajes para este sitio.')
      }

      writeCache(normalized, nextReport)
      setReport(nextReport)
      setStatus('success')
    } catch (scanError) {
      const message =
        scanError instanceof Error && scanError.name === 'AbortError'
          ? 'El escaneo tardó demasiado. Inténtalo de nuevo o escríbeme por WhatsApp.'
          : scanError instanceof Error && /429|quota|limit/i.test(scanError.message)
            ? 'El escáner gratuito alcanzó su límite diario. Escríbeme para una auditoría completa.'
            : 'No se pudo analizar el sitio. Revisa la URL o inténtalo más tarde.'

      setError(message)
      setStatus('error')
    } finally {
      window.clearTimeout(timeout)
    }
  }

  const handlePrint = () => {
    if (!report) return

    printReport({
      tool: 'Escáner de rendimiento',
      title: report.title,
      url: report.url,
      date: report.date,
      scores: report.scores,
      metrics: report.metrics,
      opportunities: report.opportunities,
      note: 'Análisis Lighthouse vía Microlink. Los resultados pueden variar según red y dispositivo.',
    })
  }

  return (
    <div>
      <div className="card p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent-300">
            <Gauge className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-white">Escáner de rendimiento web</h3>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              Analiza una URL con Lighthouse y obtén puntajes de rendimiento, accesibilidad,
              buenas prácticas y SEO.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-5">
          <label htmlFor="scan-url" className="mb-2 block text-xs font-medium text-slate-300">
            URL de tu sitio
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="scan-url"
              type="text"
              inputMode="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="https://tusitio.com"
              className="field flex-1"
              autoComplete="url"
            />
            <button type="submit" className="btn-primary shrink-0" disabled={status === 'loading'}>
              {status === 'loading' ? 'Analizando...' : 'Escanear sitio'}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-3 text-[11px] leading-5 text-slate-500">
            Escaneo gratuito con Lighthouse vía Microlink. Límite diario compartido. Para una
            auditoría completa y sin límites, contáctame.
          </p>
        </form>
      </div>

      {status === 'loading' ? (
        <div className="card mt-4 flex items-center gap-4 p-5">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
          <div>
            <p className="text-sm font-medium text-white">Analizando el sitio...</p>
            <p className="mt-1 text-xs text-slate-400">
              Lighthouse puede tardar entre 10 y 30 segundos. No cierres esta pestaña.
            </p>
          </div>
        </div>
      ) : null}

      {status === 'error' && error ? (
        <div className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-300/[0.05] p-5">
          <p className="text-sm font-medium text-amber-100">{error}</p>
          <a
            href={whatsappUrl('Escáner de rendimiento')}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary mt-4 px-4 py-2 text-xs"
          >
            <Whatsapp className="h-4 w-4" />
            Pedir auditoría por WhatsApp
          </a>
        </div>
      ) : null}

      {status === 'success' && report ? (
        <ToolReport
          tool="Escáner de rendimiento"
          title={report.title}
          url={report.url}
          subtitle={`Lighthouse móvil · ${report.date}${report.cached ? ' · resultado en caché' : ''}`}
          onPrint={handlePrint}
        >
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {report.scores.map((score) => (
              <ScoreRing key={score.label} score={score.value} label={score.label} />
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {report.metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500">
                  {metric.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{metric.value}</p>
                <span
                  className={`mt-2 inline-block h-1.5 w-8 rounded-full ${
                    metric.status === 'good'
                      ? 'bg-accent'
                      : metric.status === 'bad'
                        ? 'bg-red-400'
                        : 'bg-amber-300'
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
              Oportunidades de mejora
            </p>
            {report.opportunities.length > 0 ? (
              <ul className="mt-3 space-y-2">
                {report.opportunities.map((opportunity) => (
                  <li key={`${opportunity.title}-${opportunity.detail}`} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                    <span>
                      <span className="text-slate-200">{opportunity.title}</span>
                      <span className="text-slate-500"> · {opportunity.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-slate-400">No se detectaron oportunidades críticas.</p>
            )}
          </div>

          {report.remaining ? (
            <p className="mt-5 text-[11px] text-slate-500">
              Consultas gratuitas restantes en esta ventana: {report.remaining}
            </p>
          ) : null}
        </ToolReport>
      ) : null}
    </div>
  )
}
