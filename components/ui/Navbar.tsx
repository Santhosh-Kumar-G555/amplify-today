// components/ui/Navbar.tsx
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 mix-blend-difference pointer-events-none">
      <div className="font-bebas text-2xl md:text-3xl tracking-[0.15em] text-white pointer-events-auto cursor-pointer">
        AMPLIFY TODAY
      </div>
      <div className="hidden md:flex gap-8 font-dm font-medium text-sm tracking-widest uppercase pointer-events-auto">
        <Link className="text-white hover:text-cyan transition-colors" href="#work">Work</Link>
        <Link className="text-white hover:text-cyan transition-colors" href="#services">Services</Link>
        <Link className="text-white hover:text-cyan transition-colors" href="#about">About</Link>
        <Link className="text-orange hover:text-[#FF8C00] transition-colors" href="#start">Start &rarr;</Link>
      </div>
    </nav>
  )
}
