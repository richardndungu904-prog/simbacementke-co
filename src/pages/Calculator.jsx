import PageHero from '../components/PageHero'
import ConcreteCalculator from '../components/ConcreteCalculator'

export default function Calculator() {
  return (
    <div>
      <PageHero
        eyebrow="Plan your order"
        title="Concrete calculator"
        subtitle="Estimate cement bags, sand and ballast for your pour before you call in an order."
      />
      <div className="container-page max-w-3xl py-14 sm:py-20">
        <ConcreteCalculator />
      </div>
    </div>
  )
}
