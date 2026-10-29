import { Link } from 'react-router-dom'
import logo from '../assets/images/simba-cement-logo.png'
import { PHONE_DISPLAY, PHONE_TEL, waLink } from '../data/contact'

export default function Footer() {
  return (
    <footer className="border-t-4 border-lion bg-char text-rebar-50">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="Simba Cement" className="mb-4 h-10 w-auto brightness-0 invert" />
          <p className="max-w-xs text-sm text-steel-300">
            Wholesale and retail cement, reinforcement steel and building hardware, sourced straight and delivered
            straight, across Nairobi and beyond.
          </p>
        </div>

        <div>
          <h3 className="section-label mb-4">Shop</h3>
          <ul className="space-y-2 font-body text-sm text-steel-100">
            <li><Link to="/products" className="hover:text-lion-light">All products</Link></li>
            <li><Link to="/calculator" className="hover:text-lion-light">Concrete calculator</Link></li>
            <li><Link to="/testimonials" className="hover:text-lion-light">Testimonials</Link></li>
            <li><Link to="/checkout" className="hover:text-lion-light">Request a quote</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="section-label mb-4">Company</h3>
          <ul className="space-y-2 font-body text-sm text-steel-100">
            <li><Link to="/about" className="hover:text-lion-light">About us</Link></li>
            <li><Link to="/delivery" className="hover:text-lion-light">Delivery &amp; coverage</Link></li>
            <li><Link to="/faq" className="hover:text-lion-light">FAQ</Link></li>
            <li><Link to="/terms" className="hover:text-lion-light">Terms &amp; conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="section-label mb-4">Talk to us</h3>
          <ul className="space-y-2 font-body text-sm text-steel-100">
            <li>
              <a href={waLink('Hello, I would like to enquire about your products.')} className="hover:text-lion-light">
                WhatsApp: {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE_TEL}`} className="hover:text-lion-light">Call: {PHONE_DISPLAY}</a>
            </li>
            <li className="text-steel-300">Find us on Facebook — search &ldquo;Simba CementKe Co&rdquo;</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-steel-700">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-steel-300 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} SimbaCementKe Co. Independent building materials retailer.</p>
          <p>Not affiliated with National Cement Co. Ltd. Simba Cement is a trademark of its respective owner.</p>
        </div>
      </div>
    </footer>
  )
}
