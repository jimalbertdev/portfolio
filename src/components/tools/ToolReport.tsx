import type { ReactNode } from 'react'
import { site } from '../../content'
import { whatsappUrl } from '../../lib/report'
import { Download, Whatsapp } from '../Icons'

type ToolReportProps = {
  tool: string
  title: string
  url?: string
  subtitle?: string
  onPrint: () => void
  children: ReactNode
}

export function ToolReport({ tool, title, url, subtitle, onPrint, children }: ToolReportProps) {
  return (
    <section className="relative mt-8 overflow-hidden rounded-2xl border border-accent/20 bg-ink-900/70 p-5 sm:p-7">
      <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden">
        <span className="-rotate-12 whitespace-nowrap text-4xl font-extrabold tracking-tight text-white/[0.035] sm:text-6xl">
          Alberto Jiménez · jimalbert.dev
        </span>
      </div>

      <div className="relative">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="eyebrow">Reporte gratuito</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">{title}</h3>
            {url ? <p className="mt-1 break-all font-mono text-xs text-accent-300">{url}</p> : null}
            {subtitle ? <p className="mt-2 text-sm leading-6 text-slate-400">{subtitle}</p> : null}
          </div>
          <button type="button" onClick={onPrint} className="btn-secondary shrink-0 px-4 py-2 text-xs">
            <Download className="h-4 w-4" />
            Descargar PDF
          </button>
        </div>

        {children}

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">¿Quieres que lo optimice?</p>
            <p className="mt-1 max-w-md text-xs leading-5 text-slate-400">
              Soy Alberto Jiménez, fullstack senior. Reviso el diagnóstico y ejecuto la optimización.
            </p>
          </div>
          <a
            href={whatsappUrl(tool, url)}
            target="_blank"
            rel="noreferrer"
            className="btn-primary shrink-0 text-xs"
          >
            <Whatsapp className="h-4 w-4" />
            Contratar optimización
          </a>
        </div>

        <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-600">
          Reporte con marca de agua · {site.name} · {site.phone} · {site.portfolioUrl}
        </p>
      </div>
    </section>
  )
}
