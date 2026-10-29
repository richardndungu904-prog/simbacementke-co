import { useState } from 'react'
import { CATEGORIES, PRODUCTS } from '../data/products'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {['All', ...CATEGORIES].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`border-2 border-char px-4 py-2 font-display text-sm font-bold uppercase tracking-wide transition-colors ${
              active === cat ? 'bg-char text-white' : 'bg-transparent text-char hover:bg-rebar-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <div key={product.id} id={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
