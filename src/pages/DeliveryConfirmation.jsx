import { useState } from 'react'
import PageHero from '../components/PageHero'

export default function DeliveryConfirmation() {
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

  if (status === 'sent') {
    return (
      <div className="container-page flex flex-col items-center py-24 text-center">
        <h1 className="font-display text-3xl font-extrabold uppercase text-char">Thanks for confirming</h1>
        <p className="mt-3 max-w-sm text-steel-500">
          We've logged your delivery confirmation. If anything about the order wasn't right, message us on
          WhatsApp and we'll sort it out.
        </p>
      </div>
    )
  }

  return (
    <div>
      <PageHero
        eyebrow="After delivery"
        title="Confirm delivery"
        subtitle="A quick confirmation helps us keep accurate records and catch any shortfall before it becomes a dispute."
      />

      <div className="container-page max-w-xl py-14 sm:py-20">
        <form
          name="delivery-confirmation"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-5 border-2 border-char bg-white p-6 sm:p-8"
        >
          <input type="hidden" name="form-name" value="delivery-confirmation" />
          <p className="hidden">
            <label>
              Don&rsquo;t fill this out: <input name="bot-field" />
            </label>
          </p>

          <Field label="Full name" name="name" required />
          <Field label="Phone number used to order" name="phone" type="tel" required />
          <Field label="Delivery date" name="delivery-date" type="date" required />

          <label className="block">
            <span className="font-display text-sm font-bold uppercase tracking-wide text-char">
              Was everything delivered as ordered?
            </span>
            <select
              name="condition"
              required
              defaultValue=""
              className="mt-2 w-full border-2 border-char bg-rebar-50 px-4 py-3 text-sm focus:border-lion focus:outline-none"
            >
              <option value="" disabled>Select an answer</option>
              <option value="yes-complete">Yes, everything matched the order</option>
              <option value="partial">Partial — something was missing or short</option>
              <option value="damaged">Items arrived damaged</option>
              <option value="not-delivered">Nothing has arrived yet</option>
            </select>
          </label>

          <label className="block">
            <span className="font-display text-sm font-bold uppercase tracking-wide text-char">Notes (optional)</span>
            <textarea
              name="notes"
              rows={3}
              placeholder="Anything we should know"
              className="mt-2 w-full border-2 border-char bg-rebar-50 px-4 py-3 text-sm focus:border-lion focus:outline-none"
            />
          </label>

          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full">
            {status === 'sending' ? 'Submitting…' : 'Confirm delivery'}
          </button>

          {status === 'error' && (
            <p className="border-2 border-lion bg-lion/10 p-3 text-sm font-semibold text-lion-dark">
              Something went wrong submitting that. Please try again or message us on WhatsApp.
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
