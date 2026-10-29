import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const STEPS = [
  {
    n: '01',
    title: 'Order placed',
    body: 'You send your list via WhatsApp or our quote form. We check stock and confirm final pricing there and then.',
  },
  {
    n: '02',
    title: 'Order confirmed',
    body: 'You get a message back with the confirmed items, price and an estimated dispatch window for the day.',
  },
  {
    n: '03',
    title: 'Dispatched',
    body: 'Your materials go out on our truck. For cut rebar or split coils, this is when final counts are locked in.',
  },
  {
    n: '04',
    title: 'Delivered',
    body: 'Someone at the site checks and signs for the delivery. We ask you to confirm receipt so our records match yours.',
  },
]

const ZONES = [
  { zone: 'Nairobi CBD & environs', window: 'Same day, 2–5 hrs from confirmation' },
  { zone: 'Ruaka, Kikuyu, Kitengela, Thika Road', window: 'Same day, 4–7 hrs from confirmation' },
  { zone: 'Wider Kiambu, Machakos, Kajiado counties', window: 'Next working day' },
  { zone: 'Outside these zones', window: 'Quoted on request, ask on WhatsApp' },
]

export default function DeliveryTracking() {
  return (
    <div>
      <PageHero
        eyebrow="How it works"
        title="Delivery &amp; coverage"
        subtitle="We don't run a live GPS tracker — orders are small enough in number that a person on WhatsApp can tell you exactly where your truck is, faster than an app would."
      />

      <div className="container-page py-14 sm:py-20">
        <h2 className="font-display text-2xl font-extrabold uppercase text-char">From order to delivery</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.n} className="border-2 border-char bg-white p-6">
              <p className="font-display text-4xl font-black text-lion/30">{step.n}</p>
              <h3 className="mt-2 font-display text-lg font-bold uppercase text-char">{step.title}</h3>
              <p className="mt-2 text-sm text-steel-500">{step.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl font-extrabold uppercase text-char">Coverage &amp; typical windows</h2>
        <div className="mt-6 overflow-hidden border-2 border-char">
          {ZONES.map((z, i) => (
            <div
              key={z.zone}
              className={`flex flex-col justify-between gap-1 p-4 sm:flex-row sm:items-center ${
                i % 2 === 0 ? 'bg-white' : 'bg-rebar-100'
              }`}
            >
              <span className="font-display text-sm font-bold uppercase text-char">{z.zone}</span>
              <span className="text-sm text-steel-500">{z.window}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs italic text-steel-500">
          Windows are typical, not guaranteed &mdash; heavy rain, road closures and stock timing can shift them. We'll
          always update you on WhatsApp if a delivery is running late.
        </p>

        <div className="mt-16 flex flex-col items-start gap-4 border-2 border-lion bg-lion/5 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-extrabold uppercase text-char">Received your order?</h2>
            <p className="mt-1 text-sm text-steel-500">Confirm receipt so our records match what arrived on site.</p>
          </div>
          <Link to="/delivery-confirmation" className="btn-primary shrink-0">Confirm delivery</Link>
        </div>
      </div>
    </div>
  )
}
