import { waLink } from '../data/contact'

export default function SupportWidget() {
  return (
    <a
      href={waLink('Hello, I need assistance with an order.')}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-4 pr-5 text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-transform hover:scale-105"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 shrink-0">
        <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.94 9.94 0 004.84 1.23h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm5.85 14.24c-.25.7-1.45 1.34-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.25-5.04-4.45-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
      </svg>
      <span className="hidden font-display text-sm font-bold uppercase tracking-wide sm:inline">
        Chat with us
      </span>
    </a>
  )
}
