import { useState } from 'react'
import PageHero from '../components/PageHero'

const FAQS = [
  {
    q: 'Do I need to create an account to order?',
    a: 'No. Every order goes through WhatsApp or our quote form. You give your name, phone number and delivery location each time — nothing is stored behind a login.',
  },
  {
    q: 'Why don’t the prices on this site update automatically?',
    a: 'Cement and steel prices move with the market, sometimes within the same week. We show an indicative price so you can budget, then confirm the exact figure when you place the order, so you never pay a stale number.',
  },
  {
    q: 'What areas do you deliver to?',
    a: 'Same-day delivery covers Nairobi CBD and the immediate environs. Ruaka, Kikuyu, Kitengela and Thika Road usually go out same day too. Further into Kiambu, Machakos or Kajiado counties is typically next working day. See the Delivery & coverage page for details.',
  },
  {
    q: 'Can I get rebar cut to specific lengths?',
    a: 'Yes. Tell us the diameter, length and quantity you need on WhatsApp and we’ll cut to your bar bending schedule where the machine on site allows it.',
  },
  {
    q: 'What if my delivery is short or damaged?',
    a: 'Count and inspect materials with the driver at the point of delivery — that’s the fastest way to resolve a shortfall. You can also log a delivery confirmation afterwards noting any issue, and we’ll follow up.',
  },
  {
    q: 'How do I pay?',
    a: 'M-Pesa and cash on delivery cover most orders. Larger bulk orders may need a deposit confirmed in advance on WhatsApp.',
  },
  {
    q: 'Do you sell single bags, or only bulk?',
    a: 'Both. We serve homeowners buying a handful of bags for a small job just as often as contractors ordering pallets.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div>
      <PageHero eyebrow="Questions" title="Frequently asked" />
      <div className="container-page max-w-3xl py-14 sm:py-20">
        <div className="divide-y-2 divide-char border-y-2 border-char">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-lg font-bold uppercase text-char">{faq.q}</span>
                  <span className={`shrink-0 font-display text-2xl text-lion transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                {isOpen && <p className="pb-6 text-sm leading-relaxed text-steel-700">{faq.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
