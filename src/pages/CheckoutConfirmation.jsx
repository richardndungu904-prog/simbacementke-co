import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { useCart } from '../context/CartContext'
import { waLink } from '../data/contact'

function buildOrderSummary(lines) {
  return lines
    .map((line) => `${line.qty} x ${line.product.name} (${line.product.unit})`)
    .join('\n')
}

export default function CheckoutConfirmation() {
  const { lines, totalItems, estimatedTotal, setQty, removeItem, clearCart } = useCart()
  const [status, setStatus] = useState('idle')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const formEl = e.target
    const formData = new FormData(formEl)
    formData.set('order-items', buildOrderSummary(lines) || 'No catalogue items selected')
    formData.set('order-estimate', `KES ${estimatedTotal.toLocaleString('en-KE')} (indicative)`)

    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })

      const name = formData.get('name')
      const location = formData.get('location')
      const notes = formData.get('notes')
      const message = [
        `Hello, I'd like to place an order (${name}).`,
        '',
        lines.length ? 'Items:' : null,
        lines.length ? buildOrderSummary(lines) : null,
        '',
        `Delivery location: ${location}`,
        notes ? `Notes: ${notes}` : null,
      ]
        .filter(Boolean)
        .join('\n')

      clearCart()
      navigate('/thank-you', { state: { whatsappMessage: message } })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <PageHero
        eyebrow="Request a quote"
        title="Confirm your order"
        subtitle="No account needed. Review your list, add your delivery details, and we'll confirm final pricing and dispatch time on WhatsApp."
      />

      <div className="container-page grid gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="font-display text-2xl font-extrabold uppercase text-char">Your list</h2>
          {lines.length === 0 ? (
            <div className="mt-6 border-2 border-dashed border-rebar-200 p-8 text-center text-steel-500">
              <p>Your order list is empty.</p>
              <Link to="/products" className="btn-secondary mt-6 inline-flex">Browse products</Link>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {lines.map(({ product, qty }) => (
                <div key={product.id} className="flex items-center gap-4 border-2 border-char bg-white p-4">
                  <img src={product.image} alt={product.name} className="h-16 w-16 shrink-0 border border-rebar-200 object-cover" />
                  <div className="flex-1">
                    <p className="font-display text-base font-bold uppercase text-char">{product.name}</p>
                    <p className="text-xs text-steel-500">{product.unit}</p>
                  </div>
                  <input
                    type="number"
                    min="1"
                    value={qty}
                    onChange={(e) => setQty(product.id, Number.parseInt(e.target.value, 10) || 1)}
                    className="w-16 border-2 border-char px-2 py-1 text-center font-display font-bold"
                  />
                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    className="font-display text-xs font-bold uppercase text-lion hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="flex items-center justify-between border-t-2 border-char pt-4">
                <span className="font-display text-sm font-bold uppercase text-steel-500">
                  {totalItems} item{totalItems === 1 ? '' : 's'}
                </span>
                <span className="font-display text-xl font-extrabold text-char">
                  Est. KES {estimatedTotal.toLocaleString('en-KE')}
                </span>
              </div>
              <p className="text-xs italic text-steel-500">
                Estimate only. Final price on cement and steel is confirmed at order time.
              </p>
            </div>
          )}
        </div>

        <form
          name="order"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-5 border-2 border-char bg-white p-6 sm:p-8"
        >
          <input type="hidden" name="form-name" value="order" />
          <input type="hidden" name="order-items" value="" />
          <input type="hidden" name="order-estimate" value="" />
          <p className="hidden">
            <label>
              Don&rsquo;t fill this out: <input name="bot-field" />
            </label>
          </p>

          <h2 className="font-display text-2xl font-extrabold uppercase text-char">Your details</h2>

          <Field label="Full name" name="name" required />
          <Field label="Phone number" name="phone" type="tel" required />
          <Field label="Delivery location" name="location" required placeholder="Estate, road, nearest landmark" />
          <label className="block">
            <span className="font-display text-sm font-bold uppercase tracking-wide text-char">Notes (optional)</span>
            <textarea
              name="notes"
              rows={3}
              placeholder="e.g. cut rebar to 3m lengths, deliver before 2pm"
              className="mt-2 w-full border-2 border-char bg-rebar-50 px-4 py-3 text-sm focus:border-lion focus:outline-none"
            />
          </label>

          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full">
            {status === 'sending' ? 'Submitting…' : 'Submit order request'}
          </button>

          {status === 'error' && (
            <p className="border-2 border-lion bg-lion/10 p-3 text-sm font-semibold text-lion-dark">
              Something went wrong submitting that. Please try again or message us on WhatsApp directly.
            </p>
          )}

          <p className="text-xs text-steel-500">
            Submitting sends your request to our team and opens WhatsApp so you can confirm instantly &mdash; whichever
            reaches us first, we&rsquo;ll respond on.
          </p>
        </form>
      </div>
    </div>
  )
}

function Field({ label, name, type = 'text', required, placeholder }) {
  return (
    <label className="block">
      <span className="font-display text-sm font-bold uppercase tracking-wide text-char">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-2 border-char bg-rebar-50 px-4 py-3 text-sm focus:border-lion focus:outline-none"
      />
    </label>
  )
}
