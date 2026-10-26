import { useState, type FormEvent } from 'react'
import { contact, pick, site } from '../content'
import { useLanguage } from '../lib/useLanguage'
import { ArrowUpRight } from './Icons'

type FormStatus = 'idle' | 'success' | 'invalid'

export function ContactForm() {
  const { language } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const cleanName = name.trim()
    const cleanEmail = email.trim()
    const cleanMessage = message.trim()
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)

    if (!cleanName || !validEmail || !cleanMessage) {
      setStatus('invalid')
      return
    }

    const subject =
      language === 'es'
        ? `Contacto desde el portafolio — ${cleanName}`
        : `Portfolio contact — ${cleanName}`
    const body = `${cleanMessage}\n\n${cleanName}\n${cleanEmail}`
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.assign(mailto)
    setStatus('success')
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-medium text-slate-300">
            {pick(contact.form.name, language)}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={pick(contact.form.namePlaceholder, language)}
            className="field"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-medium text-slate-300">
            {pick(contact.form.email, language)}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={pick(contact.form.emailPlaceholder, language)}
            className="field"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-xs font-medium text-slate-300">
          {pick(contact.form.message, language)}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={pick(contact.form.messagePlaceholder, language)}
          className="field resize-none"
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[11px] leading-5 text-slate-500">
          {pick(contact.form.note, language)}
        </p>
        <button type="submit" className="btn-primary shrink-0">
          {pick(contact.form.submit, language)}
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      <p
        aria-live="polite"
        className={`mt-4 text-xs ${
          status === 'invalid' ? 'text-amber-300' : status === 'success' ? 'text-accent-300' : 'text-transparent'
        }`}
      >
        {status === 'invalid'
          ? pick(contact.form.invalid, language)
          : status === 'success'
            ? pick(contact.form.success, language)
            : ' '}
      </p>
    </form>
  )
}
