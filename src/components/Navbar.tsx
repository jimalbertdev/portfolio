import { useState } from 'react'
import { Link } from 'react-router-dom'
import { nav, pick, site } from '../content'
import { useLanguage } from '../lib/useLanguage'
import { ArrowUpRight, Menu, X } from './Icons'

const sectionLinks = [
  { id: 'servicios', label: nav.services },
  { id: 'casos', label: nav.cases },
  { id: 'sobre-mi', label: nav.about },
  { id: 'contacto', label: nav.contact },
]

export function Navbar() {
  const { language, toggleLanguage } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <header
      id="top"
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-950/95"
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 font-mono text-sm font-semibold text-accent-300 transition group-hover:bg-accent/20">
            {site.initials}
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold text-white">{site.name}</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Fullstack Senior
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label={language === 'es' ? 'Navegación principal' : 'Main navigation'}
        >
          {sectionLinks.map((link) => (
            <Link
              key={link.id}
              to={`/#${link.id}`}
              className="rounded-full px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              {pick(link.label, language)}
            </Link>
          ))}

          <span className="mx-2 h-4 w-px bg-white/10" aria-hidden="true" />

          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[11px] font-medium text-slate-300 transition hover:border-accent/40 hover:text-accent-300"
            aria-label={language === 'es' ? 'EN — Cambiar a inglés' : 'ES — Switch to Spanish'}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>

          <Link to="/#contacto" className="btn-primary ml-2 px-4 py-2 text-xs">
            {pick(nav.cta, language)}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[11px] font-medium text-slate-300 transition hover:border-accent/40 hover:text-accent-300"
            aria-label={language === 'es' ? 'EN — Cambiar a inglés' : 'ES — Switch to Spanish'}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-accent/40 hover:text-accent-300"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={
              open
                ? language === 'es'
                  ? 'Cerrar menú'
                  : 'Close menu'
                : language === 'es'
                  ? 'Abrir menú'
                  : 'Open menu'
            }
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-white/5 bg-ink-950/95 md:hidden">
          <nav
            className="container-page flex flex-col gap-1 py-4"
            aria-label={language === 'es' ? 'Navegación móvil' : 'Mobile navigation'}
          >
            {sectionLinks.map((link) => (
              <Link
                key={link.id}
                to={`/#${link.id}`}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {pick(link.label, language)}
              </Link>
            ))}
            <Link
              to="/#contacto"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              {pick(nav.cta, language)}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
