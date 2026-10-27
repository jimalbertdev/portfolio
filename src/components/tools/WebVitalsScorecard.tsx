import { useState, type FormEvent } from 'react'
import { formatDate, printReport, type ReportMetric, type ReportStatus } from '../../lib/report'
import { ArrowUpRight, Clock } from '../Icons'
import { ScoreRing } from './ScoreRing'
import { ToolReport } from './ToolReport'

type MetricKey = 'lcp' | 'inp' | 'cls' | 'ttfb' | 'fcp'

type MetricDefinition = {
  key: MetricKey
  label: string
  shortLabel: string
  unit: string
  step: string
  good: number
  needs: number
  recommendation: string
}

type VitalsReport = {
  score: number
  date: string
  metrics: ReportMetric[]
  opportunities: { title: string; detail: string }[]
}

const definitions: MetricDefinition[] = [
  {
    key: 'lcp',
    label: 'LCP · Largest Contentful Paint',
    shortLabel: 'LCP',
    unit: 's',
    step: '0.01',
    good: 2.5,
    needs: 4,
    recommendation:
      'Optimiza la imagen o bloque principal, precarga el recurso crítico y elimina CSS/JS que bloquean el renderizado.',
  },
  {
    key: 'inp',
    label: 'INP · Interaction to Next Paint',
    shortLabel: 'INP',
    unit: 'ms',
    step: '1',
    good: 200,
    needs: 500,
    recommendation:
      'Divide tareas largas, reduce JavaScript de terceros y aplica code splitting en las rutas más pesadas.',
  },
  {
    key: 'cls',
    label: 'CLS · Cumulative Layout Shift',
    shortLabel: 'CLS',
    unit: '',
    step: '0.01',
    good: 0.1,
    needs: 0.25,
    recommendation:
      'Reserva dimensiones para imágenes, fuentes y anuncios; evita insertar contenido por encima del área visible.',
  },
  {
    key: 'ttfb',
    label: 'TTFB · Time to First Byte',
    shortLabel: 'TTFB',
    unit: 'ms',
    step: '1',
    good: 800,
    needs: 1800,
    recommendation:
      'Mejora el hosting o CDN, cachea respuestas y optimiza las consultas al servidor y la base de datos.',
  },
  {
    key: 'fcp',
    label: 'FCP · First Contentful Paint',
    shortLabel: 'FCP',
    unit: 's',
    step: '0.01',
    good: 1.8,
    needs: 3,
    recommendation:
      'Inlinea el CSS crítico, precarga fuentes y reduce los scripts que impiden el primer renderizado.',
  },
]

const initialValues: Record<MetricKey, string> = {
  lcp: '',
  inp: '',
  cls: '',
  ttfb: '',
  fcp: '',
}

const sampleValues: Record<MetricKey, string> = {
  lcp: '2.8',
  inp: '240',
  cls: '0.08',
  ttfb: '950',
  fcp: '1.9',
}

function scoreMetric(value: number, good: number, needs: number): number {
  if (value <= good) return 100
  if (value <= needs) {
    return Math.round(100 - ((value - good) / (needs - good)) * 40)
  }
  return Math.max(0, Math.round(60 - ((value - needs) / needs) * 60))
}

function statusForValue(value: number, good: number, needs: number): ReportStatus {
  if (value <= good) return 'good'
  if (value <= needs) return 'warn'
  return 'bad'
}

function formatValue(key: MetricKey, value: number): string {
  if (key === 'cls') return value.toFixed(2)
  if (key === 'lcp' || key === 'fcp') return `${value.toFixed(2)} s`
  return `${Math.round(value)} ms`
}

export function WebVitalsScorecard() {
  const [values, setValues] = useState<Record<MetricKey, string>>(initialValues)
  const [report, setReport] = useState<VitalsReport | null>(null)
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    const parsed: Partial<Record<MetricKey, number>> = {}

    for (const definition of definitions) {
      const raw = values[definition.key].trim()
      if (!raw) {
        if (definition.key === 'fcp') continue
        setError(`Completa el valor de ${definition.shortLabel}.`)
        return
      }

      const numericValue = Number(raw.replace(',', '.'))
      if (!Number.isFinite(numericValue) || numericValue < 0) {
        setError(`El valor de ${definition.shortLabel} no es válido.`)
        return
      }

      parsed[definition.key] = numericValue
    }

    const metrics: ReportMetric[] = []
    const opportunities: { title: string; detail: string }[] = []
    const scores: number[] = []

    for (const definition of definitions) {
      const value = parsed[definition.key]
      if (value === undefined) continue

      const score = scoreMetric(value, definition.good, definition.needs)
      const status = statusForValue(value, definition.good, definition.needs)
      scores.push(score)
      metrics.push({
        label: definition.shortLabel,
        value: formatValue(definition.key, value),
        status,
      })

      if (status !== 'good') {
        opportunities.push({
          title: `${definition.shortLabel} · ${status === 'bad' ? 'prioridad alta' : 'mejorable'}`,
          detail: definition.recommendation,
        })
      }
    }

    setReport({
      score: Math.round(scores.reduce((total, score) => total + score, 0) / scores.length),
      date: formatDate(),
      metrics,
      opportunities,
    })
  }

  const handlePrint = () => {
    if (!report) return

    printReport({
      tool: 'Core Web Vitals',
      title: 'Scorecard de Core Web Vitals',
      date: report.date,
      score: report.score,
      metrics: report.metrics,
      opportunities: report.opportunities,
      note: 'Evaluación basada en los valores introducidos por el usuario. No mide el sitio en vivo.',
    })
  }

  return (
    <div>
      <div className="card p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent-300">
            <Clock className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-white">Scorecard de Core Web Vitals</h3>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              Introduce tus métricas de PageSpeed Insights, Search Console o Chrome UX Report y
              obtén un diagnóstico priorizado.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {definitions.map((definition) => (
              <div key={definition.key}>
                <label
                  htmlFor={`vital-${definition.key}`}
                  className="mb-2 block text-xs font-medium text-slate-300"
                >
                  {definition.shortLabel}
                  {definition.unit ? <span className="text-slate-600"> ({definition.unit})</span> : null}
                </label>
                <input
                  id={`vital-${definition.key}`}
                  type="number"
                  min="0"
                  step={definition.step}
                  inputMode="decimal"
                  value={values[definition.key]}
                  onChange={(event) =>
                    setValues((current) => ({
                      ...current,
                      [definition.key]: event.target.value,
                    }))
                  }
                  placeholder={definition.key === 'cls' ? '0.08' : definition.unit === 'ms' ? '200' : '2.5'}
                  className="field"
                />
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button type="submit" className="btn-primary px-4 py-2 text-xs">
              Evaluar métricas
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                setValues(sampleValues)
                setError('')
              }}
              className="btn-secondary px-4 py-2 text-xs"
            >
              Cargar ejemplo
            </button>
            <a
              href="https://pagespeed.web.dev/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost px-2 py-2 text-xs"
            >
              Obtener mis métricas
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-3 text-[11px] leading-5 text-slate-500">
            LCP y FCP en segundos, INP y TTFB en milisegundos, CLS sin unidad. Los umbrales siguen las
            recomendaciones de web.dev.
          </p>
        </form>

        {error ? <p className="mt-3 text-xs text-amber-300">{error}</p> : null}
      </div>

      {report ? (
        <ToolReport
          tool="Core Web Vitals"
          title="Scorecard de Core Web Vitals"
          subtitle={`Evaluación de métricas · ${report.date}`}
          onPrint={handlePrint}
        >
          <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <ScoreRing score={report.score} label="Salud global" />
            <div className="flex-1">
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {report.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500">
                        {metric.label}
                      </p>
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          metric.status === 'good'
                            ? 'bg-accent'
                            : metric.status === 'bad'
                              ? 'bg-red-400'
                              : 'bg-amber-300'
                        }`}
                      />
                    </div>
                    <p className="mt-1 text-sm font-semibold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
              Prioridades de mejora
            </p>
            {report.opportunities.length > 0 ? (
              <ul className="mt-3 space-y-2">
                {report.opportunities.map((opportunity) => (
                  <li key={opportunity.title} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                    <span>
                      <span className="text-slate-200">{opportunity.title}</span>
                      <span className="block text-xs leading-5 text-slate-500">
                        {opportunity.detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-slate-400">
                Todo en verde. Mantén el monitoreo para detectar regresiones.
              </p>
            )}
          </div>

          <p className="mt-5 text-[11px] leading-5 text-slate-500">
            Esta herramienta evalúa los valores que introduces. No mide tu sitio en vivo ni sustituye
            una auditoría de campo.
          </p>
        </ToolReport>
      ) : null}
    </div>
  )
}
