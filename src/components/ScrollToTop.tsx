import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
      }, 80)

      return () => window.clearTimeout(timer)
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
    return undefined
  }, [pathname, hash])

  return null
}
