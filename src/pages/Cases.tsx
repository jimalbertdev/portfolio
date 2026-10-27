import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cases, casesPage, pick, site } from '../content'
import { useLanguage } from '../lib/useLanguage'
import { CaseCard } from '../components/CaseCard'
import { Footer } from '../components/Footer'
import { ArrowLeft } from '../components/Icons'
import { Navbar } from '../components/Navbar'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SkipLink } from '../components/SkipLink'

export function Cases() {
  const { language } = useLanguage()

  useEffect(() => {
    document.title = `${pick(casesPage.title, language)} — ${site.name}`
  }, [language])

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="contenido" className="pb-20 pt-28 sm:pt-32">
        <div className="container-page">
          <Reveal>
            <Link to="/" className="btn-ghost">
              <ArrowLeft className="h-4 w-4" />
              {pick(casesPage.backHome, language)}
            </Link>

            <div className="mt-8">
              <SectionHeading
                as="h1"
                eyebrow={pick(casesPage.eyebrow, language)}
                title={pick(casesPage.title, language)}
                description={pick(casesPage.description, language)}
              />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((study, index) => (
              <Reveal key={study.slug} className="h-full">
                <CaseCard study={study} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
