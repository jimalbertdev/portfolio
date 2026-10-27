import { site } from '../content'

export type ReportStatus = 'good' | 'warn' | 'bad'

export type ReportScore = {
  label: string
  value: number
}

export type ReportMetric = {
  label: string
  value: string
  status?: ReportStatus
}

export type ReportFinding = {
  label: string
  detail: string
  status: 'pass' | 'warn' | 'fail'
}

export type ReportData = {
  tool: string
  title: string
  url?: string
  date: string
  score?: number
  scores?: ReportScore[]
  metrics?: ReportMetric[]
  findings?: ReportFinding[]
  opportunities?: { title: string; detail: string }[]
  note?: string
}

export function formatDate(date = new Date()): string {
  return date.toLocaleString('es-VE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function whatsappUrl(tool: string, url?: string): string {
  const message = `Hola Alberto, usé tu herramienta "${tool}"${url ? ` para ${url}` : ''} y quiero contratar la optimización.`
  return `${site.whatsapp}?text=${encodeURIComponent(message)}`
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      })[character] ?? character,
  )
}

export function printReport(data: ReportData): void {
  const reportWindow = window.open('', '_blank', 'width=920,height=1200')

  if (!reportWindow) {
    window.alert('Permite las ventanas emergentes para descargar el reporte.')
    return
  }

  const scoreCards = (data.scores ?? [])
    .map(
      (score) => `
        <div class="score">
          <strong>${score.value}</strong>
          <span>${escapeHtml(score.label)}</span>
        </div>
      `,
    )
    .join('')

  const scores =
    scoreCards.length > 0
      ? `<div class="scores">${scoreCards}</div>`
      : data.score !== undefined
        ? `<div class="scores single"><div class="score"><strong>${data.score}</strong><span>Puntaje global</span></div></div>`
        : ''

  const metrics = (data.metrics ?? [])
    .map(
      (metric) => `
        <tr>
          <td>${escapeHtml(metric.label)}</td>
          <td><strong>${escapeHtml(metric.value)}</strong></td>
          <td><span class="dot ${metric.status ?? ''}"></span></td>
        </tr>
      `,
    )
    .join('')

  const findings = (data.findings ?? [])
    .map(
      (finding) => `
        <li>
          <span class="dot ${finding.status}"></span>
          <div>
            <strong>${escapeHtml(finding.label)}</strong>
            <p>${escapeHtml(finding.detail)}</p>
          </div>
        </li>
      `,
    )
    .join('')

  const opportunities = (data.opportunities ?? [])
    .map(
      (opportunity) => `
        <li>
          <strong>${escapeHtml(opportunity.title)}</strong>
          <span>${escapeHtml(opportunity.detail)}</span>
        </li>
      `,
    )
    .join('')

  const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>${escapeHtml(data.title)} — ${escapeHtml(data.tool)}</title>
    <style>
      @page { size: A4; margin: 14mm; }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        color: #0f172a;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        font-size: 11px;
        line-height: 1.45;
        background: #fff;
        position: relative;
        padding: 26px;
      }
      .watermark {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: rotate(-24deg);
        color: rgba(15, 23, 42, 0.045);
        font-size: 44px;
        font-weight: 800;
        text-align: center;
        pointer-events: none;
        z-index: 0;
      }
      .content { position: relative; z-index: 1; }
      header { border-top: 5px solid #059669; padding-top: 12px; display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
      header > div:first-child { flex: 1 1 320px; min-width: 0; }
      h1 { margin: 0; font-size: 24px; letter-spacing: -0.4px; overflow-wrap: anywhere; }
      h2 { margin: 24px 0 10px; font-size: 11px; letter-spacing: 1.4px; text-transform: uppercase; color: #059669; border-bottom: 1px solid #d1d5db; padding-bottom: 5px; }
      .muted { color: #64748b; }
      .brand { max-width: 45%; text-align: right; font-size: 10px; line-height: 1.6; overflow-wrap: anywhere; word-break: break-word; }
      .brand strong { display: block; color: #0f172a; font-size: 12px; }
      footer span { overflow-wrap: anywhere; }
      .meta { margin-top: 18px; padding: 12px 14px; border: 1px solid #e2e8f0; border-radius: 8px; background: #f8fafc; }
      .meta p { margin: 2px 0; }
      .scores { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-top: 10px; }
      .scores.single { grid-template-columns: 160px; }
      .score { border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px; text-align: center; }
      .score strong { display: block; color: #059669; font-size: 22px; line-height: 1.1; }
      .score span { display: block; margin-top: 4px; color: #64748b; font-size: 9px; text-transform: uppercase; letter-spacing: 0.6px; }
      table { width: 100%; border-collapse: collapse; }
      td { border-bottom: 1px solid #eef2f7; padding: 7px 4px; }
      td:last-child { width: 22px; text-align: right; }
      .dot { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #64748b; }
      .dot.good, .dot.pass { background: #059669; }
      .dot.warn, .dot.bad, .dot.fail { background: #d97706; }
      ul { margin: 0; padding: 0; list-style: none; }
      li { display: flex; gap: 8px; padding: 7px 0; border-bottom: 1px solid #eef2f7; }
      li .dot { margin-top: 5px; flex: 0 0 auto; }
      li p { margin: 2px 0 0; color: #64748b; }
      li span:last-child { color: #64748b; }
      .cta { margin-top: 24px; padding: 16px; border: 1px solid #a7f3d0; border-radius: 8px; background: #ecfdf5; display: flex; justify-content: space-between; gap: 16px; align-items: center; flex-wrap: wrap; }
      .cta strong { display: block; font-size: 14px; }
      .cta p { margin: 4px 0 0; color: #475569; }
      .cta a { color: #047857; font-weight: 700; text-decoration: none; }
      .cta small { display: block; font-weight: 400; font-size: 9px; }
      .note { margin-top: 14px; color: #64748b; font-size: 9px; }
      footer { margin-top: 24px; padding-top: 10px; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 9px; display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; }

      @media print {
        body { padding: 0; }
      }
    </style>
  </head>
  <body>
    <div class="watermark">Alberto Jiménez · Fullstack Senior · WhatsApp +58 424-900-8410</div>
    <div class="content">
      <header>
        <div>
          <p class="muted" style="margin:0 0 4px;text-transform:uppercase;letter-spacing:1.2px;font-size:9px;">Reporte gratuito · ${escapeHtml(data.tool)}</p>
          <h1>${escapeHtml(data.title)}</h1>
        </div>
        <div class="brand">
          <strong>${escapeHtml(site.name)}</strong>
          <span>${escapeHtml(site.role)}</span><br />
          <span>WhatsApp ${escapeHtml(site.phone)}</span><br />
          <span>${escapeHtml(site.portfolioUrl)}</span>
        </div>
      </header>

      <div class="meta">
        ${data.url ? `<p><strong>Sitio analizado:</strong> ${escapeHtml(data.url)}</p>` : ''}
        <p><strong>Fecha:</strong> ${escapeHtml(data.date)}</p>
        ${data.note ? `<p><strong>Nota:</strong> ${escapeHtml(data.note)}</p>` : ''}
      </div>

      ${scores ? `<h2>Puntajes</h2>${scores}` : ''}
      ${metrics ? `<h2>Métricas</h2><table>${metrics}</table>` : ''}
      ${findings ? `<h2>Hallazgos</h2><ul>${findings}</ul>` : ''}
      ${opportunities ? `<h2>Oportunidades de mejora</h2><ul>${opportunities}</ul>` : ''}

      <div class="cta">
        <div>
          <strong>¿Quieres que optimice tu sitio?</strong>
          <p>Reviso el diagnóstico y ejecuto las mejoras: rendimiento, Core Web Vitals y buenas prácticas.</p>
        </div>
        <a href="${site.whatsapp}">Hablar por WhatsApp<small>wa.me/584249008410</small></a>
      </div>

      <p class="note">Reporte generado con ${escapeHtml(data.tool)}. Los resultados pueden variar según red, dispositivo y condiciones del servidor.</p>

      <footer>
        <span>${escapeHtml(site.name)} · ${escapeHtml(site.role)} · ${escapeHtml(site.portfolioUrl)}</span>
        <span>Reporte con marca de agua</span>
      </footer>
    </div>
    <script>window.onload = () => setTimeout(() => window.print(), 350);</script>
  </body>
</html>`

  reportWindow.document.write(html)
  reportWindow.document.close()
}
