import { useState } from 'react'
import { TESTIMONIALS } from '../data/testimonials'

export default function Testimonials({ limit }) {
  const [index, setIndex] = useState(0)
  const list = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS

  if (limit) {
    return (
      <div className="grid gap-6 sm:grid-cols-2">
        {list.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
    )
  }

  const current = TESTIMONIALS[index]

  return (
    <div>
      <TestimonialCard testimonial={current} large />
      <div className="mt-6 flex gap-2">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial from ${t.name}`}
            className={`h-2 flex-1 border border-char transition-colors ${i === index ? 'bg-lion' : 'bg-transparent'}`}
          />
        ))}
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial, large }) {
  return (
    <blockquote className={`border-2 border-char bg-white p-6 ${large ? 'sm:p-10' : ''}`}>
      <p className={`font-display font-medium leading-snug text-char ${large ? 'text-3xl' : 'text-xl'}`}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="mt-5 border-t border-rebar-200 pt-4">
        <p className="font-display text-base font-bold uppercase text-lion">{testimonial.name}</p>
        <p className="text-sm text-steel-500">{testimonial.role}</p>
      </footer>
    </blockquote>
  )
}
