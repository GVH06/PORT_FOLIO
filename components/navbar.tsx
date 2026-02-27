"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center pt-4 md:pt-6 px-4`}
    >
      <nav className={`w-full max-w-4xl rounded-2xl md:rounded-full px-6 py-4 flex items-center justify-between transition-all duration-500 ${scrolled
        ? "glass shadow-xl shadow-black/10 scale-[0.98] border-opacity-20"
        : "bg-transparent border border-transparent scale-100"
        }`}>
        <a href="#" className="font-mono text-lg font-bold tracking-tight text-foreground transition-transform hover:scale-105">
          G V S L HASINI
          <span className="text-primary animate-pulse">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-all hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-5 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden p-2 rounded-full hover:bg-primary/10 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[88px] left-4 right-4 rounded-2xl glass p-6 border border-white/10 shadow-2xl md:hidden animate-in slide-in-from-top-4 fade-in duration-300">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary block w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-border">
              <a
                href="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full justify-center items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
