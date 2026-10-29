Here’s a deployable React + Tailwind code bundle for the Simba Cement homepage, ready to push to GitHub. It includes the navbar, hero section, info boxes, featured products, and footer — all responsive with your blue‑silver branding.📂 Project StructureCopysimba-cement-site/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── InfoBoxes.jsx
│   │   ├── Products.jsx
│   │   └── Footer.jsx
│   └── index.css
├── tailwind.config.js
├── package.json⚛️ Core FilesApp.jsxjsxCopyimport Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoBoxes from "./components/InfoBoxes";
import Products from "./components/Products";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <InfoBoxes />
      <Products />
      <Footer />
    </div>
  );
}Navbar.jsxjsxCopyexport default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">Simba Cement</h1>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/products" className="hover:underline">Products</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
        <div className="space-x-2 hidden md:flex">
          <button className="bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-gray-200">Shop Now</button>
          <button className="bg-silver text-blue-900 px-4 py-2 rounded-md hover:bg-gray-400">Request Quote</button>
        </div>
        <button className="md:hidden">☰</button>
      </div>
    </nav>
  );
}Hero.jsxjsxCopyexport default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto">
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold">Building Kenya’s Future, One Strong Foundation at a Time.</h2>
        <p className="text-lg">Strength You Can Build On. Trusted Cement & Steel for Every Project.</p>
        <div className="space-x-2">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800">Shop Now</button>
          <button className="bg-gray-300 text-blue-900 px-6 py-3 rounded-md hover:bg-gray-400">Request a Quote</button>
        </div>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <div className="bg-gray-200 h-64 flex items-center justify-center">[Construction Illustration]</div>
      </div>
    </section>
  );
}InfoBoxes.jsxjsxCopyexport default function InfoBoxes() {
  const boxes = [
    { title: "Quality", text: "Premium cement tested to meet standards." },
    { title: "Nationwide Delivery", text: "Reliable logistics across Kenya." },
    { title: "Customer Support", text: "Multi-channel support via WhatsApp & phone." },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12 max-w-7xl mx-auto">
      {boxes.map((box, i) => (
        <div key={i} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-md shadow hover:shadow-lg transition">
          <h3 className="font-bold text-xl mb-2">{box.title}</h3>
          <p>{box.text}</p>
        </div>
      ))}
    </section>
  );
}Products.jsxjsxCopyexport default function Products() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h3 className="text-2xl font-bold mb-6">Featured Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3].map((p) => (
          <div key={p} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-md shadow">
            <div className="bg-gray-300 h-40 mb-4 flex items-center justify-center">Product Image {p}</div>
            <a href="/products" className="text-blue-900 hover:underline">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}Footer.jsxjsxCopyexport default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div>
          <h4 className="font-bold text-lg mb-2">About Simba Cement</h4>
          <p>The Strength That Builds Kenya.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Contact Us</h4>
          <ul className="space-y-2">
            <li>📞 <a href="tel:+254101939326" className="hover:underline">+254 101 939 326</a></li>
            <li>📧 <a href="mailto:info@simbacement.com" className="hover:underline">info@simbacement.com</a></li>
            <li>📍 Nakuru, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Simba Cement. All rights reserved.
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://wa.me/254101939326" className="hover:text-gray-300">WhatsApp</a>
          <a href="https://www.facebook.com/share/1HhLXEHsF7/" className="hover:text-gray-300">Facebook</a>
          <a href="mailto:info@simbacement.com" className="hover:text-gray-300">Email</a>
        </div>
      </div>
    </footer>
  );
}🚀 Deployment StepsInitialize GitHub repo:bashCopygit init
git remote add origin https://github.com/yourusername/simba-cement-site.gitInstall dependencies:bashCopynpm install react react-dom tailwindcss
npx tailwindcss initBuild & run locally:bashCopynpm run devPush to GitHub:bashCopygit add .
git commit -m "Initial Simba Cement site"
git push origin mainThis bundle is ready for GitHub deployment and can be extended with product APIs, checkout, and admin dashboards later.Would you like me to also prepare a CI/CD pipeline setup (e.g., GitHub Actions + Netlify/Northflank) so updates auto‑deploy whenever you push changes?
