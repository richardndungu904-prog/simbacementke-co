import PageHero from '../components/PageHero'
import Testimonials from '../components/Testimonials'

export default function TestimonialShowcase() {
  return (
    <div>
      <PageHero
        eyebrow="From the field"
        title="What customers say"
        subtitle="Real feedback from contractors, retailers and homeowners we've supplied across Nairobi and beyond."
      />
      <div className="container-page py-14 sm:py-20">
        <Testimonials limit={4} />
      </div>
    </div>
  )
}
