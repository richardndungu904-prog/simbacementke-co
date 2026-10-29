import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { PRODUCTS, getProductById } from '../data/products'

const CartContext = createContext(null)
const STORAGE_KEY = 'simbacementke.cart'

function readStoredCart() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return typeof parsed === 'object' && parsed !== null ? parsed : {}
  } catch {
    return {}
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredCart)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (id, qty = 1) => {
    setItems((prev) => ({ ...prev, [id]: Math.max(1, (prev[id] || 0) + qty) }))
  }

  const setQty = (id, qty) => {
    setItems((prev) => {
      const next = { ...prev }
      if (qty <= 0) {
        delete next[id]
      } else {
        next[id] = qty
      }
      return next
    })
  }

  const removeItem = (id) => {
    setItems((prev) => {
      const next = { ...prev }
      delete next[id]
      return next
    })
  }

  const clearCart = () => setItems({})

  const lines = useMemo(
    () =>
      Object.entries(items)
        .map(([id, qty]) => ({ product: getProductById(id), qty }))
        .filter((line) => Boolean(line.product)),
    [items],
  )

  const totalItems = lines.reduce((sum, line) => sum + line.qty, 0)
  const estimatedTotal = lines.reduce((sum, line) => sum + line.qty * line.product.price, 0)

  const value = {
    items,
    lines,
    totalItems,
    estimatedTotal,
    addItem,
    setQty,
    removeItem,
    clearCart,
    allProducts: PRODUCTS,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
