import PageHero from '../components/PageHero'

export default function TermsConditions() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Terms &amp; conditions" />
      <div className="container-page max-w-3xl space-y-8 py-14 text-steel-700 sm:py-20">
        <Section title="1. Pricing">
          Prices shown on this site for cement, binding wire and hoop iron are indicative and move with market
          rates for raw materials and fuel. Reinforcement steel is priced per diameter and length at the time of
          order. The price confirmed to you on WhatsApp or by our team at the point of order is the price that
          applies, not the figure shown on this page.
        </Section>
        <Section title="2. Orders">
          Orders are placed via WhatsApp or our quote form and are confirmed once a member of our team responds
          with final pricing, quantities and an estimated delivery window. An order is not binding until this
          confirmation is given.
        </Section>
        <Section title="3. Payment">
          We accept M-Pesa and cash on delivery for most orders. Large or first-time bulk orders may require a
          deposit before dispatch, which will always be agreed with you in advance.
        </Section>
        <Section title="4. Delivery">
          Delivery windows quoted are estimates based on route and stock availability, not guarantees. Someone must
          be available at the delivery site to receive and count the materials on arrival; disputes over quantity
          delivered must be raised at the point of delivery.
        </Section>
        <Section title="5. Returns">
          Cement is a perishable product once a bag is opened or exposed to moisture and cannot be returned once
          delivered. Steel, wire and hoop iron may be returned unused and in original condition within 48 hours of
          delivery, subject to inspection.
        </Section>
        <Section title="6. Contact">
          Questions about an existing order should go to our WhatsApp line first, quoting your name and delivery
          date, for the fastest response.
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-display text-xl font-extrabold uppercase text-char">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed">{children}</p>
    </div>
  )
}
