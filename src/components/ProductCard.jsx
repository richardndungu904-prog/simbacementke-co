import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { items, addItem, setQty } = useCart()
  const qty = items[product.id] || 0

  return (
    <div className="group flex flex-col border-2 border-char bg-white">
      <Link to={`/products#${product.id}`} className="relative block aspect-[4/3] overflow-hidden border-b-2 border-char bg-rebar-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-0 top-0 bg-lion px-3 py-1 font-display text-xs font-bold uppercase tracking-wider text-white">
          {product.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl font-bold uppercase leading-none text-char">{product.name}</h3>
        <p className="mt-1 text-sm text-steel-500">{product.grade}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-700">{product.blurb}</p>

        <div className="mt-4 flex items-end justify-between border-t border-rebar-200 pt-4">
          <div>
            <p className="font-display text-2xl font-extrabold text-char">
              KES {product.price.toLocaleString('en-KE')}
              <span className="ml-1 font-body text-xs font-normal text-steel-500">/ {product.unit}</span>
            </p>
            <p className="text-xs italic text-steel-500">{product.priceNote}</p>
          </div>
        </div>

        <div className="mt-4">
          {qty === 0 ? (
            <button type="button" onClick={() => addItem(product.id, 1)} className="btn-primary w-full">
              Add to order
            </button>
          ) : (
            <div className="flex items-center justify-between border-2 border-char">
              <button
                type="button"
                onClick={() => setQty(product.id, qty - 1)}
                className="flex h-11 w-11 items-center justify-center font-display text-xl font-bold hover:bg-char hover:text-white"
                aria-label={`Decrease quantity of ${product.name}`}
              >
                &minus;
              </button>
              <span className="font-display text-lg font-bold">{qty} in order</span>
              <button
                type="button"
                onClick={() => setQty(product.id, qty + 1)}
                className="flex h-11 w-11 items-center justify-center font-display text-xl font-bold hover:bg-char hover:text-white"
                aria-label={`Increase quantity of ${product.name}`}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
