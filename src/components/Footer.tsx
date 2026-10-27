import { Link } from 'react-router-dom'
import { footer, nav, pick, site } from '../content'
import { useLanguage } from '../lib/useLanguage'
import { Github, Linkedin, Whatsapp } from './Icons'

const currentYear = new Date().getFullYear()

const sectionLinks = [
  { id: 'servicios', label: nav.services },
  { id: 'casos', label: nav.cases },
  { id: 'lab', label: nav.lab },
  { id: 'sobre-mi', label: nav.about },
  { id: 'contacto', label: nav.contact },
]

export function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 font-mono text-sm font-semibold text-accent-300">
                {site.initials}
              </span>
              <span className="text-sm font-semibold text-white">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">{pick(footer.tagline, language)}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-300">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
              {language === 'es' ? 'Disponible remoto' : 'Remote available'}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              {language === 'es' ? 'Navegación' : 'Navigation'}
            </p>
            <nav
              className="mt-4 flex flex-col gap-2"
              aria-label={language === 'es' ? 'Navegación del pie' : 'Footer navigation'}
            >
              {sectionLinks.map((link) => (
                <Link
                  key={link.id}
                  to={`/#${link.id}`}
                  className="text-sm text-slate-400 transition hover:text-accent-300"
                >
                  {pick(link.label, language)}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-accent-300"
              >
                <Whatsapp className="h-4 w-4" />
                {site.phone}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-accent-300"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-accent-300"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {site.name}. {pick(footer.rights, language)}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span>{pick(footer.madeWith, language)}</span>
            <a href="#top" className="transition hover:text-accent-300">
              {pick(footer.backToTop, language)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
