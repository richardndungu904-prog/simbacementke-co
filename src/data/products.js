import simbaPower from '../assets/images/simba-power-cement.png'
import simba325 from '../assets/images/simba-cement-32-5r.jpeg'
import rebar from '../assets/images/reinforcement-steel-bars.jpeg'
import rebarAlt from '../assets/images/reinforcement-steel-bars-alt.jpeg'
import bindingWire from '../assets/images/binding-wire.jpeg'
import hoopIron from '../assets/images/hoop-iron.jpeg'

export const CATEGORIES = ['Cement', 'Steel & Reinforcement', 'Wire & Accessories']

export const PRODUCTS = [
  {
    id: 'simba-power-425',
    name: 'Simba Power Cement',
    grade: 'Portland Cement CEM I 42.5R',
    category: 'Cement',
    unit: '50kg bag',
    price: 745,
    priceNote: "confirm today's yard rate",
    image: simbaPower,
    blurb:
      'High early-strength cement built for columns, slabs and anything that needs to take load fast. The go-to grade for structural work.',
    details: [
      'Standard: KS EAS 18-1:2001, CEM I 42.5N/R',
      'Sold in 50kg bags, full pallets of 24 available',
      'Best for: foundations, columns, beams, precast',
    ],
  },
  {
    id: 'simba-325r',
    name: 'Simba Cement 32.5R',
    grade: 'Portland Pozzolana Cement CEM IV/B-P 32.5R',
    category: 'Cement',
    unit: '50kg bag',
    price: 695,
    priceNote: "confirm today's yard rate",
    image: simba325,
    blurb:
      'The all-rounder for plastering, blockwork and mass concrete where you need workability and a smoother finish over raw strength.',
    details: [
      'Standard: KS EAS 18-1:2001, CEM IV/B-P 32.5R',
      'Sold in 50kg bags, full pallets of 24 available',
      'Best for: plastering, masonry, walling, screeding',
    ],
  },
  {
    id: 'rebar-deformed',
    name: 'Reinforcement Steel Bars',
    grade: 'High-yield deformed bars, Y8–Y25',
    category: 'Steel & Reinforcement',
    unit: 'per length (12m)',
    price: 890,
    priceNote: 'price varies by diameter',
    image: rebar,
    imageAlt: rebarAlt,
    blurb:
      'Ribbed high-yield rebar cut to standard 12m lengths. We stock the diameters foundations, slabs and columns actually call for.',
    details: [
      'Diameters in stock: Y8, Y10, Y12, Y16, Y20, Y25',
      'Straight lengths or cut-and-bend to your BBS on request',
      'Best for: foundations, columns, slabs, retaining walls',
    ],
  },
  {
    id: 'binding-wire',
    name: 'Binding Wire',
    grade: 'Galvanized annealed wire, 1.6mm',
    category: 'Wire & Accessories',
    unit: '25kg coil',
    price: 4850,
    priceNote: "confirm today's yard rate",
    image: bindingWire,
    blurb:
      'Soft-drawn galvanized wire for tying rebar cages before the pour. Kink-resistant and easy to twist by hand or with a rebar tier.',
    details: [
      'Gauge: 1.6mm, soft-annealed for hand tying',
      'Sold by the 25kg coil, split coils available on site',
      'Best for: tying rebar joints and cages',
    ],
  },
  {
    id: 'hoop-iron',
    name: 'Hoop Iron',
    grade: 'Steel strapping, 0.5mm x 19mm',
    category: 'Wire & Accessories',
    unit: '30m coil',
    price: 1240,
    priceNote: "confirm today's yard rate",
    image: hoopIron,
    blurb:
      'Galvanized strapping for reinforcing masonry courses and bracing formwork. A quiet essential on every serious block-wall job.',
    details: [
      'Dimensions: 0.5mm thick x 19mm wide',
      'Sold by the 30m coil',
      'Best for: wall reinforcement every 3–4 courses, formwork bracing',
    ],
  },
]

export function getProductById(id) {
  return PRODUCTS.find((product) => product.id === id)
}
