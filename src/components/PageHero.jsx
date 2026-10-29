export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <div className="border-b-4 border-char bg-char text-rebar-50">
      <div className="container-page py-16 sm:py-20">
        {eyebrow && <p className="section-label mb-3">{eyebrow}</p>}
        <h1 className="max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-xl text-base text-steel-100">{subtitle}</p>}
      </div>
    </div>
  )
}
