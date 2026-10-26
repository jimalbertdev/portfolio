import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './lib/LanguageProvider'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'

const CaseStudy = lazy(() =>
  import('./pages/CaseStudy').then((module) => ({ default: module.CaseStudy })),
)

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/casos/:slug"
            element={
              <Suspense fallback={<div className="min-h-screen bg-ink-950" />}>
                <CaseStudy />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
