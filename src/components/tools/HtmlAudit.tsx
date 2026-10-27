import { useState, type ChangeEvent, type FormEvent } from 'react'
import { formatDate, printReport, type ReportFinding, type ReportMetric } from '../../lib/report'
import { ArrowUpRight, Code, Upload } from '../Icons'
import { ScoreRing } from './ScoreRing'
import { ToolReport } from './ToolReport'

type HtmlReport = {
  score: number
  title: string
  date: string
  metrics: ReportMetric[]
  findings: ReportFinding[]
  sizeKb: number
}

const sampleHtml = `<!doctype html>
<html lang="es">
<head>
  <title>Mi sitio</title>
  <meta name="description" content="Una descripción corta." />
  <link rel="stylesheet" href="/styles.css" />
  <script src="/app.js"></script>
</head>
<body>
  <h1>Bienvenido</h1>
  <img src="/hero.jpg">
  <script src="/analytics.js"></script>
</body>
</html>`

function analyzeHtml(html: string): HtmlReport {
  const document = new DOMParser().parseFromString(html, 'text/html')
  const sizeKb = new TextEncoder().encode(html).length / 1024

  const title = document.querySelector('title')?.textContent?.trim() ?? ''
  const description = document
    .querySelector('meta[name="description"]')
    ?.getAttribute('content')
    ?.trim() ?? ''
  const canonical = document
    .querySelector('link[rel="canonical"]')
    ?.getAttribute('href')
    ?.trim() ?? ''
  const h1Count = document.querySelectorAll('h1').length
  const images = Array.from(document.querySelectorAll('img'))
  const scripts = Array.from(document.querySelectorAll('script'))
  const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
  const viewport = document.querySelector('meta[name="viewport"]')
  const lang = document.documentElement.getAttribute('lang') ?? ''
  const ogCount = document.querySelectorAll('meta[property^="og:"]').length
  const preconnectCount = document.querySelectorAll(
    'link[rel="preconnect"], link[rel="dns-prefetch"]',
  ).length

  const imagesWithoutAlt = images.filter((image) => !image.getAttribute('alt')?.trim()).length
  const imagesWithoutDimensions = images.filter(
    (image) => !image.getAttribute('width') || !image.getAttribute('height'),
  ).length
  const imagesWithoutLazy = images.filter((image) => image.getAttribute('loading') !== 'lazy').length
  const inlineScriptSize =
    scripts
      .filter((script) => !script.getAttribute('src'))
      .reduce((total, script) => total + (script.textContent?.length ?? 0), 0) / 1024
  const renderBlockingScripts = scripts.filter((script) => {
    const src = script.getAttribute('src')
    return Boolean(src) && !script.hasAttribute('defer') && !script.hasAttribute('async')
  }).length

  const externalHosts = new Set<string>()
  for (const element of [...scripts, ...styles, ...images]) {
    const src = element.getAttribute('src') ?? element.getAttribute('href')
    if (!src) continue
    try {
      const url = new URL(src, 'https://example.com')
      if (url.host !== 'example.com') externalHosts.add(url.host)
    } catch {
      continue
    }
  }

  const findings: ReportFinding[] = []
  let score = 100

  const add = (
    status: ReportFinding['status'],
    label: string,
    detail: string,
    penalty = 0,
  ) => {
    score -= penalty
    findings.push({ status, label, detail })
  }

  if (!title) {
    add('fail', 'Falta el título', 'Añade un <title> único y descriptivo.', 10)
  } else if (title.length < 10 || title.length > 60) {
    add('warn', 'Título poco optimizado', `Tiene ${title.length} caracteres. Busca entre 10 y 60.`, 5)
  } else {
    add('pass', 'Título correcto', `"${title}" · ${title.length} caracteres.`)
  }

  if (!description) {
    add('warn', 'Falta la meta descripción', 'Añade una descripción de 50–160 caracteres.', 8)
  } else if (description.length < 50 || description.length > 160) {
    add('warn', 'Meta descripción fuera de rango', `Tiene ${description.length} caracteres.`, 4)
  } else {
    add('pass', 'Meta descripción correcta', `${description.length} caracteres.`)
  }

  if (!canonical) {
    add('warn', 'Falta canonical', 'Añade una URL canónica para evitar contenido duplicado.', 4)
  } else {
    add('pass', 'Canonical presente', canonical)
  }

  if (h1Count === 0) {
    add('fail', 'No hay H1', 'Incluye un encabezado principal que describa la página.', 6)
  } else if (h1Count > 1) {
    add('warn', 'Hay varios H1', `Encontrados ${h1Count}. Usa un solo H1 por página.`, 3)
  } else {
    add('pass', 'Un solo H1', 'La jerarquía principal está clara.')
  }

  if (!viewport) {
    add('fail', 'Falta viewport', 'Añade <meta name="viewport" content="width=device-width, initial-scale=1">.', 6)
  } else {
    add('pass', 'Viewport configurado', 'La página puede adaptarse a móvil.')
  }

  if (!lang) {
    add('warn', 'Falta el atributo lang', 'Indica el idioma en <html lang="es">.', 2)
  } else {
    add('pass', 'Idioma declarado', `lang="${lang}".`)
  }

  if (imagesWithoutAlt > 0) {
    add(
      'warn',
      'Imágenes sin texto alternativo',
      `${imagesWithoutAlt} de ${images.length} imágenes no tienen alt.`,
      Math.min(10, imagesWithoutAlt),
    )
  } else {
    add('pass', 'Imágenes con alt', `${images.length} imágenes revisadas.`)
  }

  if (imagesWithoutDimensions > 0) {
    add(
      'warn',
      'Imágenes sin dimensiones',
      `${imagesWithoutDimensions} imágenes no declaran width/height y pueden causar CLS.`,
      Math.min(5, imagesWithoutDimensions * 0.5),
    )
  } else {
    add('pass', 'Dimensiones declaradas', 'Las imágenes reservan su espacio.')
  }

  if (imagesWithoutLazy > 0) {
    add(
      'warn',
      'Lazy loading pendiente',
      `${imagesWithoutLazy} imágenes no usan loading="lazy". Úsalo en las que están fuera de pantalla.`,
      Math.min(5, imagesWithoutLazy * 0.5),
    )
  } else {
    add('pass', 'Lazy loading', 'Las imágenes están marcadas como lazy.')
  }

  if (renderBlockingScripts > 0) {
    add(
      'warn',
      'Scripts que bloquean el renderizado',
      `${renderBlockingScripts} scripts externos no usan defer ni async.`,
      Math.min(10, renderBlockingScripts * 2),
    )
  } else {
    add('pass', 'Sin scripts bloqueantes', 'Los scripts externos no bloquean el renderizado.')
  }

  if (styles.length > 3) {
    add(
      'warn',
      'Demasiadas hojas de estilo',
      `${styles.length} archivos CSS enlazados. Agrupa o elimina los que no uses.`,
      Math.min(5, (styles.length - 3) * 1),
    )
  } else {
    add('pass', 'CSS controlado', `${styles.length} hojas de estilo.`)
  }

  if (sizeKb > 200) {
    add('fail', 'HTML muy pesado', `${sizeKb.toFixed(1)} KB. Reduce markup, datos inline y componentes.`, 10)
  } else if (sizeKb > 100) {
    add('warn', 'HTML pesado', `${sizeKb.toFixed(1)} KB. Revisa si puedes simplificar el markup.`, 5)
  } else {
    add('pass', 'Peso de HTML correcto', `${sizeKb.toFixed(1)} KB.`)
  }

  if (preconnectCount === 0) {
    add('warn', 'Sin preconnect', 'Añade preconnect/dns-prefetch para dominios externos críticos.', 2)
  } else {
    add('pass', 'Preconnect configurado', `${preconnectCount} conexiones anticipadas.`)
  }

  if (ogCount < 3) {
    add('warn', 'Open Graph incompleto', `Solo ${ogCount} etiquetas OG. Añade title, description e image.`, 2)
  } else {
    add('pass', 'Open Graph presente', `${ogCount} etiquetas OG.`)
  }

  if (inlineScriptSize > 30) {
    add(
      'warn',
      'JavaScript inline elevado',
      `${inlineScriptSize.toFixed(1)} KB inline. Muévelo a un archivo cacheable.`,
      5,
    )
  } else {
    add('pass', 'JavaScript inline controlado', `${inlineScriptSize.toFixed(1)} KB.`)
  }

  const metrics: ReportMetric[] = [
    {
      label: 'Peso HTML',
      value: `${sizeKb.toFixed(1)} KB`,
      status: sizeKb > 200 ? 'bad' : sizeKb > 100 ? 'warn' : 'good',
    },
    {
      label: 'Scripts',
      value: String(scripts.length),
      status: scripts.length > 15 ? 'warn' : 'good',
    },
    {
      label: 'Hojas CSS',
      value: String(styles.length),
      status: styles.length > 3 ? 'warn' : 'good',
    },
    {
      label: 'Imágenes',
      value: String(images.length),
      status: imagesWithoutAlt > 0 ? 'warn' : 'good',
    },
    {
      label: 'Dominios externos',
      value: String(externalHosts.size),
      status: externalHosts.size > 3 ? 'warn' : 'good',
    },
    {
      label: 'JS inline',
      value: `${inlineScriptSize.toFixed(1)} KB`,
      status: inlineScriptSize > 30 ? 'warn' : 'good',
    },
  ]

  return {
    score: Math.max(0, Math.min(100, Math.round(score))),
    title: title || 'HTML sin título',
    date: formatDate(),
    metrics,
    findings,
    sizeKb,
  }
}

export function HtmlAudit() {
  const [html, setHtml] = useState('')
  const [report, setReport] = useState<HtmlReport | null>(null)
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    if (!html.trim()) {
      setError('Pega el HTML de tu página o sube un archivo .html.')
      return
    }

    setReport(analyzeHtml(html))
  }

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      setHtml(String(reader.result ?? ''))
      setError('')
    }
    reader.readAsText(file)
  }

  const handlePrint = () => {
    if (!report) return

    printReport({
      tool: 'Auditoría HTML',
      title: report.title,
      date: report.date,
      score: report.score,
      metrics: report.metrics,
      findings: report.findings,
      note: 'Auditoría estática del HTML pegado. No ejecuta JavaScript ni mide métricas de campo.',
    })
  }

  return (
    <div>
      <div className="card p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent-300">
            <Code className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-white">Auditoría estática de HTML</h3>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              Pega el código fuente de tu página y detecta problemas de SEO técnico, accesibilidad
              básica y rendimiento sin llamadas externas.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-5">
          <label htmlFor="html-source" className="mb-2 block text-xs font-medium text-slate-300">
            Código HTML
          </label>
          <textarea
            id="html-source"
            value={html}
            onChange={(event) => setHtml(event.target.value)}
            rows={9}
            placeholder="Pega aquí el HTML de tu página (Ctrl+U → copiar todo)..."
            className="field resize-y font-mono text-xs leading-5"
            spellCheck={false}
          />

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button type="submit" className="btn-primary px-4 py-2 text-xs">
              Analizar HTML
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setHtml(sampleHtml)}
              className="btn-secondary px-4 py-2 text-xs"
            >
              Cargar ejemplo
            </button>
            <label className="btn-ghost cursor-pointer px-2 py-2 text-xs">
              <Upload className="h-4 w-4" />
              Subir .html
              <input type="file" accept=".html,.htm,text/html" onChange={handleFile} className="sr-only" />
            </label>
          </div>
        </form>

        {error ? <p className="mt-3 text-xs text-amber-300">{error}</p> : null}
      </div>

      {report ? (
        <ToolReport
          tool="Auditoría HTML"
          title={report.title}
          subtitle={`Análisis estático · ${report.date} · ${report.sizeKb.toFixed(1)} KB`}
          onPrint={handlePrint}
        >
          <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <ScoreRing score={report.score} label="Salud del HTML" />
            <div className="flex-1">
              <p className="text-sm leading-6 text-slate-300">
                {report.score >= 90
                  ? 'La base del documento está muy bien. Quedan detalles finos por revisar.'
                  : report.score >= 60
                    ? 'Hay una base razonable, pero varios ajustes pueden mejorar SEO y rendimiento.'
                    : 'Hay problemas importantes que conviene corregir antes de escalar.'}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {report.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
                    <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-slate-500">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
              Hallazgos
            </p>
            <ul className="mt-3 space-y-2">
              {report.findings.map((finding) => (
                <li key={`${finding.label}-${finding.detail}`} className="flex items-start gap-3 text-sm">
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                      finding.status === 'pass'
                        ? 'bg-accent'
                        : finding.status === 'fail'
                          ? 'bg-red-400'
                          : 'bg-amber-300'
                    }`}
                  />
                  <span>
                    <span className="text-slate-200">{finding.label}</span>
                    <span className="block text-xs leading-5 text-slate-500">{finding.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-5 text-[11px] leading-5 text-slate-500">
            Esta auditoría analiza el HTML pegado. No ejecuta JavaScript, no descarga assets ni mide
            LCP/CLS de campo. Para eso, usa el escáner de rendimiento o una auditoría completa.
          </p>
        </ToolReport>
      ) : null}
    </div>
  )
}
