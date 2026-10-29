import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import logo from '../assets/images/simba-cement-logo.png'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/calculator', label: 'Calculator' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/faq', label: 'FAQ' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b-4 border-char bg-rebar-50/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Simba Cement" className="h-11 w-auto" />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-2xl font-bold uppercase tracking-tight text-char">
              SimbaCementKe
            </span>
            <span className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-steel-500">
              Co. &mdash; Building Supplies
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-display text-base font-semibold uppercase tracking-wide transition-colors ${
                  isActive ? 'text-lion' : 'text-char hover:text-lion'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/checkout"
            className="relative flex h-11 w-11 items-center justify-center border-2 border-char text-char transition-colors hover:bg-char hover:text-rebar-50"
            aria-label="View order basket"
          >
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l3-8H5.4M7 13L5.4 5M7 13l-2.3 4.6a1 1 0 00.9 1.4H17M17 13v4a2 2 0 002 2h1" />
              <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
              <circle cx="17" cy="20" r="1.4" fill="currentColor" stroke="none" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-lion font-display text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center border-2 border-char lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t-2 border-char bg-rebar-50 lg:hidden">
          <div className="container-page flex flex-col divide-y divide-rebar-200 py-2">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 font-display text-lg font-semibold uppercase tracking-wide ${
                    isActive ? 'text-lion' : 'text-char'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
