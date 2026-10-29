import { Link, useLocation } from 'react-router-dom'
import { waLink } from '../data/contact'

export default function ThankYouPage() {
  const location = useLocation()
  const whatsappMessage = location.state?.whatsappMessage

  return (
    <div className="container-page flex flex-col items-center py-20 text-center sm:py-28">
      <span className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-lion text-lion">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" stroke="currentColor" className="h-9 w-9">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>

      <h1 className="mt-8 font-display text-4xl font-extrabold uppercase text-char sm:text-5xl">
        Request received
      </h1>
      <p className="mt-4 max-w-md text-steel-500">
        Your order request has landed with our team. To get the fastest confirmation on price and dispatch time,
        send it to us directly on WhatsApp too.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href={waLink(whatsappMessage || "Hello, I'd like to place an order.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Confirm on WhatsApp
        </a>
        <Link to="/delivery" className="btn-secondary">What happens next</Link>
      </div>

      <Link to="/" className="mt-10 font-display text-sm font-bold uppercase tracking-wide text-steel-500 hover:text-lion">
        &larr; Back to home
      </Link>
    </div>
  )
}
