import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Testimonials from '../components/Testimonials'
import { PRODUCTS } from '../data/products'
import { waLink, WHATSAPP_CATALOGUE_LINK } from '../data/contact'
import heroBags from '../assets/images/simba-power-cement.png'
import rebarImg from '../assets/images/reinforcement-steel-bars-alt.jpeg'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-4 border-char bg-char text-rebar-50">
        <div className="pointer-events-none absolute inset-0 bg-grain" />
        <div className="container-page relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <p className="section-label mb-4">Nairobi &amp; environs · Same-day dispatch</p>
            <h1 className="font-display text-6xl font-black uppercase leading-[0.9] sm:text-7xl">
              Strength <span className="text-lion">Within</span>,
              <br />
              Delivered On Site.
            </h1>
            <p className="mt-6 max-w-md text-lg text-steel-100">
              Cement, reinforcement steel, binding wire and hoop iron — priced straight, ordered on WhatsApp, and on
              your site the same day for most Nairobi routes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary">Shop materials</Link>
              <a href={WHATSAPP_CATALOGUE_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost border-steel-300 text-rebar-50 hover:border-rebar-50 hover:bg-rebar-50 hover:text-char">
                View WhatsApp catalogue
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-steel-700 pt-8">
              <div>
                <dt className="font-display text-4xl font-extrabold text-lion">5</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-steel-300">Core product lines</dd>
              </div>
              <div>
                <dt className="font-display text-4xl font-extrabold text-lion">24/7</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-steel-300">WhatsApp ordering</dd>
              </div>
              <div>
                <dt className="font-display text-4xl font-extrabold text-lion">6</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-steel-300">Rebar sizes in stock</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border-2 border-lion/40" />
            <div className="relative grid grid-cols-2 gap-4">
              <img src={heroBags} alt="Simba Power Cement bag" className="col-span-2 h-56 w-full border-2 border-steel-700 object-cover sm:h-72" />
              <img src={rebarImg} alt="Stacked reinforcement steel bars" className="h-32 w-full border-2 border-steel-700 object-cover sm:h-40" />
              <div className="flex h-32 flex-col justify-center border-2 border-lion bg-lion/10 p-4 sm:h-40">
                <p className="font-display text-3xl font-extrabold text-lion">50kg</p>
                <p className="text-xs uppercase tracking-wide text-steel-100">Standard cement bag, every batch checked</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="container-page py-16 sm:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-label mb-2">What we stock</p>
            <h2 className="font-display text-4xl font-extrabold uppercase text-char">The core five</h2>
          </div>
          <Link to="/products" className="font-display text-sm font-bold uppercase tracking-wide text-lion hover:underline">
            View full catalogue &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Calculator teaser */}
      <section className="border-y-4 border-char bg-rebar-100">
        <div className="container-page grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-label mb-3">Not sure how much to order?</p>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-none text-char sm:text-5xl">
              Work out your bags before you call.
            </h2>
            <p className="mt-5 max-w-md text-steel-700">
              Punch in the volume of concrete you need and your mix ratio, and get an instant estimate of cement,
              sand and ballast, so your order is right the first time.
            </p>
            <Link to="/calculator" className="btn-primary mt-8 inline-flex">Open the calculator</Link>
          </div>
          <div className="border-2 border-char bg-white p-8">
            <p className="font-display text-sm font-bold uppercase tracking-wide text-steel-500">Example: 3m&sup3; slab, 1:2:4 mix</p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-display text-3xl font-extrabold text-lion">20</p>
                <p className="text-xs uppercase text-steel-500">Cement bags</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-lion">2.31</p>
                <p className="text-xs uppercase text-steel-500">m&sup3; sand</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-lion">4.62</p>
                <p className="text-xs uppercase text-steel-500">m&sup3; ballast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="container-page py-16 sm:py-20">
        <p className="section-label mb-2">From the field</p>
        <h2 className="mb-10 font-display text-4xl font-extrabold uppercase text-char">Word from the sites we serve</h2>
        <Testimonials limit={2} />
      </section>

      {/* CTA banner */}
      <section className="border-t-4 border-lion bg-char text-rebar-50">
        <div className="container-page flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold uppercase sm:text-4xl">Ready to place an order?</h2>
            <p className="mt-2 text-steel-100">Send your list on WhatsApp or fill out our quote form — no account needed.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={waLink('Hello, I would like to place an order.')} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Order on WhatsApp
            </a>
            <Link to="/checkout" className="btn-ghost border-steel-300 text-rebar-50 hover:border-rebar-50 hover:bg-rebar-50 hover:text-char">
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
