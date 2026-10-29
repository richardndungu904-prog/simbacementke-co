import PageHero from '../components/PageHero'
import ProductGrid from '../components/ProductGrid'

export default function Products() {
  return (
    <div>
      <PageHero
        eyebrow="Full catalogue"
        title="Materials"
        subtitle="Every line we carry, with indicative pricing. Rates on cement and steel move with the market, so we confirm the exact figure when you reach out."
      />
      <div className="container-page py-14 sm:py-20">
        <ProductGrid />
      </div>
    </div>
  )
}
