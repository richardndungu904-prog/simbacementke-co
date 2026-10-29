import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SupportWidget from './components/SupportWidget'
import Home from './pages/Home'
import Products from './pages/Products'
import Calculator from './pages/Calculator'
import CheckoutConfirmation from './pages/CheckoutConfirmation'
import ThankYouPage from './pages/ThankYouPage'
import DeliveryTracking from './pages/DeliveryTracking'
import DeliveryConfirmation from './pages/DeliveryConfirmation'
import TestimonialShowcase from './pages/TestimonialShowcase'
import FAQPage from './pages/FAQPage'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import TermsConditions from './pages/TermsConditions'
import NotFound from './pages/NotFound'

function App() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/checkout" element={<CheckoutConfirmation />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/delivery" element={<DeliveryTracking />} />
            <Route path="/delivery-confirmation" element={<DeliveryConfirmation />} />
            <Route path="/testimonials" element={<TestimonialShowcase />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <SupportWidget />
      </div>
    </CartProvider>
  )
}

export default App
