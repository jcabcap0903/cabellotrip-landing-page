"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      {/* Decorative circle */}
      <div className="absolute -left-48 bottom-0 w-96 h-96 rounded-full border border-accent/10" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Contact Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Contacto
              </span>
              <h2 className="text-3xl lg:text-5xl font-serif text-foreground text-balance">
                Empieza tu viaje
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                ¿Listo para descubrir Japón? Cuéntanos tus sueños de viaje y 
                crearemos una experiencia inolvidable solo para ti.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <a 
                href="mailto:hola@cabellotrip.com" 
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">hola@cabellotrip.com</p>
                </div>
              </a>

              <a 
                href="tel:+34912345678" 
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">+34 912 345 678</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Oficina</p>
                  <p className="text-foreground">Calle Gran Vía 42, Madrid</p>
                </div>
              </div>
            </div>

            {/* Japanese Text Decoration */}
            <div className="pt-8">
              <p className="text-6xl font-serif text-accent/20">旅</p>
              <p className="text-sm text-muted-foreground mt-2">
                Tabi - El viaje
              </p>
            </div>
          </div>

          {/* Right Column - Newsletter Form */}
          <div className="flex items-center">
            <div className="w-full bg-background rounded-2xl p-8 lg:p-12 border border-border">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif text-foreground mb-2">
                    Suscríbete a nuestra newsletter
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Recibe ofertas exclusivas, guías de viaje y las últimas 
                    novedades sobre Japón directamente en tu bandeja de entrada.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Tu correo electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-14 rounded-xl bg-secondary border-border pr-4 pl-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground group"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
                        ¡Gracias por suscribirte!
                      </span>
                    ) : (
                      <>
                        Suscribirme
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center">
                  Al suscribirte, aceptas nuestra{" "}
                  <a href="#" className="underline hover:text-foreground transition-colors">
                    política de privacidad
                  </a>
                </p>

                {/* Decorative thin border */}
                <div className="pt-6">
                  <div className="h-px w-full bg-border" />
                </div>

                {/* Quick Links */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <a 
                    href="#" 
                    className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    FAQ
                  </a>
                  <a 
                    href="#" 
                    className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    Guía de Japón
                  </a>
                  <a 
                    href="#" 
                    className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
