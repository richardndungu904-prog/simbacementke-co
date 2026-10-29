import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center py-32 text-center">
      <p className="font-display text-8xl font-black text-lion">404</p>
      <h1 className="mt-4 font-display text-3xl font-extrabold uppercase text-char">Page not on the yard</h1>
      <p className="mt-3 max-w-sm text-steel-500">
        We couldn&rsquo;t find that page. It may have been moved, or the link might be off.
      </p>
      <Link to="/" className="btn-primary mt-8">Back to home</Link>
    </div>
  )
}
