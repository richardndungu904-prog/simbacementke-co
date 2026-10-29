import { useState } from 'react'
import PageHero from '../components/PageHero'
import { PHONE_DISPLAY, PHONE_TEL, waLink } from '../data/contact'

export default function ContactUs() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.target)
    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
      setStatus('sent')
      e.target.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <PageHero
        eyebrow="Get in touch"
        title="Contact us"
        subtitle="Fastest response is always WhatsApp, but this form lands directly in our inbox too."
      />

      <div className="container-page grid gap-12 py-14 sm:py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-extrabold uppercase text-char">Reach us directly</h2>
          <ul className="mt-6 space-y-4">
            <li>
              <a href={waLink('Hello, I have a question.')} className="flex items-center gap-3 border-2 border-char p-4 hover:bg-rebar-100">
                <span className="font-display text-sm font-bold uppercase tracking-wide">WhatsApp</span>
                <span className="text-steel-500">{PHONE_DISPLAY}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 border-2 border-char p-4 hover:bg-rebar-100">
                <span className="font-display text-sm font-bold uppercase tracking-wide">Call</span>
                <span className="text-steel-500">{PHONE_DISPLAY}</span>
              </a>
            </li>
            <li className="border-2 border-rebar-200 p-4 text-steel-500">
              <span className="font-display text-sm font-bold uppercase tracking-wide text-char">Facebook</span>
              <p className="mt-1">Search &ldquo;Simba CementKe Co&rdquo; on Facebook to see our latest stock updates.</p>
            </li>
          </ul>
        </div>

        <form
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-5 border-2 border-char bg-white p-6 sm:p-8"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don&rsquo;t fill this out: <input name="bot-field" />
            </label>
          </p>

          <Field label="Name" name="name" required />
          <Field label="Phone" name="phone" type="tel" required />
          <Field label="Email (optional)" name="email" type="email" />
          <label className="block">
            <span className="font-display text-sm font-bold uppercase tracking-wide text-char">Message</span>
            <textarea
              name="message"
              rows={4}
              required
              className="mt-2 w-full border-2 border-char bg-rebar-50 px-4 py-3 text-sm focus:border-lion focus:outline-none"
            />
          </label>

          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full">
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'sent' && (
            <p className="border-2 border-lion bg-lion/10 p-3 text-sm font-semibold text-lion-dark">
              Message sent. We&rsquo;ll get back to you shortly — for anything urgent, use WhatsApp.
            </p>
          )}
          {status === 'error' && (
            <p className="border-2 border-lion bg-lion/10 p-3 text-sm font-semibold text-lion-dark">
              Something went wrong sending that. Please try WhatsApp instead.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

function Field({ label, name, type = 'text', required }) {
  return (
    <label className="block">
      <span className="font-display text-sm font-bold uppercase tracking-wide text-char">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full border-2 border-char bg-rebar-50 px-4 py-3 text-sm focus:border-lion focus:outline-none"
      />
    </label>
  )
}
