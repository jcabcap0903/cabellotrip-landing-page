"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
      {/* Background with subtle paper texture */}
      <div className="absolute inset-0 bg-secondary">
        <div className="absolute inset-0 paper-texture pointer-events-none" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 right-8 lg:right-32 w-px h-32 bg-border" />
      <div className="absolute bottom-32 left-8 lg:left-32 w-px h-24 bg-border" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-accent opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Small Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Premium Travel Experience
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight text-balance">
              <span className="block text-foreground">Descubre el</span>
              <span className="block text-foreground">alma de</span>
              <span className="block text-primary italic">Japón</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-md leading-relaxed">
              Viajes exclusivos diseñados a medida. Sumérgete en la cultura milenaria 
              con guías locales expertos y experiencias únicas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base group"
              >
                Reserva tu Consulta
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 h-14 text-base border-foreground/20 hover:bg-foreground/5"
              >
                Ver Itinerarios
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-12 pt-6 border-t border-border/50">
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-serif text-foreground">500+</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Viajeros felices</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-serif text-foreground">15</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Años experiencia</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-serif text-foreground">47</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Destinos únicos</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop"
                alt="Traditional Japanese pagoda surrounded by cherry blossoms"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-6 lg:-left-12 bg-background rounded-xl p-4 sm:p-5 shadow-xl border border-border max-w-[180px] sm:max-w-[200px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-lg">🌸</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Próximo viaje</p>
                  <p className="font-serif text-sm text-foreground">Abril 2026</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Temporada de Sakura</p>
            </div>

            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 lg:-right-8 w-full h-full border border-accent/30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-border" />
      </div>
    </section>
  )
}
