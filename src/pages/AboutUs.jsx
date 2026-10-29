import PageHero from '../components/PageHero'
import logo from '../assets/images/simba-cement-logo.png'

export default function AboutUs() {
  return (
    <div>
      <PageHero
        eyebrow="Who we are"
        title="About SimbaCementKe"
        subtitle="A building-materials yard built around one idea: ordering construction supplies shouldn't take longer than the delivery itself."
      />

      <div className="container-page grid gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="border-2 border-char bg-rebar-100 p-8">
          <img src={logo} alt="Simba Cement" className="h-16 w-auto" />
          <p className="mt-6 text-sm text-steel-700">
            SimbaCementKe Co. is an independent building-materials retailer. We are not the manufacturer of Simba
            Cement — we stock and deliver it, alongside the reinforcement steel and hardware that go with it, from
            our own yard.
          </p>
        </div>

        <div className="space-y-8 text-steel-700">
          <div>
            <h2 className="font-display text-2xl font-extrabold uppercase text-char">How we started</h2>
            <p className="mt-3">
              SimbaCementKe Co. grew out of a simple frustration: site supervisors losing half a day chasing down
              cement, steel and wire from three different suppliers before a pour could even start. We built one
              yard that stocks the materials that actually get used together, and one WhatsApp line to order all of
              it at once.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold uppercase text-char">What we carry</h2>
            <p className="mt-3">
              Two grades of cement covering structural and general-purpose work, deformed rebar in the six diameters
              actually specified on most residential and light-commercial jobs, plus the binding wire and hoop iron
              that finish out a reinforcement order. No 40-page catalogue — five product lines, kept in stock.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold uppercase text-char">How we operate</h2>
            <p className="mt-3">
              No accounts, no logins — every order runs through WhatsApp or our quote form, confirmed by a person on
              the other end who knows the stock on the yard floor that day. Prices on cement and steel move with the
              market, so we quote the current rate at the time you order rather than a stale number on a page.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
