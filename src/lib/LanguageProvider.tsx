import { useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Language } from '../content'
import { LanguageContext, type LanguageContextValue } from './language-context'

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'es'
  }

  const queryLanguage = new URLSearchParams(window.location.search).get('lang')
  if (queryLanguage === 'es' || queryLanguage === 'en') {
    return queryLanguage
  }

  const stored = window.localStorage.getItem('portfolio-language')
  if (stored === 'es' || stored === 'en') {
    return stored
  }

  return window.navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('portfolio-language', language)
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => {
        const nextLanguage = language === 'es' ? 'en' : 'es'
        setLanguage(nextLanguage)

        const url = new URL(window.location.href)
        url.searchParams.set('lang', nextLanguage)
        window.history.replaceState({}, '', url)
      },
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
