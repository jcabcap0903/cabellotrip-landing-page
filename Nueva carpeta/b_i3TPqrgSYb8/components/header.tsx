"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-sm font-bold">鶴</span>
            </div>
            <span className="font-serif text-xl tracking-wide text-foreground">
              Cabello<span className="text-primary">TRIP</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              href="#destinations" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Destinos
            </Link>
            <Link 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Nosotros
            </Link>
            <Link 
              href="#testimonials" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonios
            </Link>
            <Link 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Reserva tu Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border/50 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-4">
              <Link 
                href="#destinations" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinos
              </Link>
              <Link 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                href="#testimonials" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </Link>
              <Link 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full mt-4 w-full">
                Reserva tu Consulta
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
