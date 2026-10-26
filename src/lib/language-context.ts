import { createContext } from 'react'
import type { Language } from '../content'

export type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
