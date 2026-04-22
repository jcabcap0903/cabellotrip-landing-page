"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  // Eliminamos el estado anterior porque Formspree gestiona el envío directamente
  
  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      {/* Círculo decorativo */}
      <div className="absolute -left-48 bottom-0 w-96 h-96 rounded-full border border-accent/10" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Columna Izquierda - Info de Contacto */}
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

            {/* Detalles de contacto */}
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

            {/* Decoración Japonesa */}
            <div className="pt-8">
              <p className="text-6xl font-serif text-accent/20">旅</p>
              <p className="text-sm text-muted-foreground mt-2">
                Tabi - El viaje
              </p>
            </div>
          </div>

          {/* Columna Derecha - Formulario */}
          <div className="flex items-center">
            <div className="w-full bg-background rounded-2xl p-8 lg:p-12 border border-border shadow-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif text-foreground mb-2">
                    Reserva tu consulta gratuita
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Cuéntanos tus planes y te responderemos en menos de 24 horas para empezar a diseñar tu itinerario.
                  </p>
                </div>

                <form 
                  action="https://formspree.io/f/xvzdwnzo" 
                  method="POST"
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="full-name" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Nombre completo</label>
                    <input 
                      type="text" 
                      name="name" 
                      id="full-name" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/50 focus:bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Ej: Juan Pérez"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Correo electrónico</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/50 focus:bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="juan@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">¿Cómo podemos ayudarte?</label>
                    <textarea 
                      name="message" 
                      id="message" 
                      rows={4} 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/50 focus:bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Cuéntanos sobre tu viaje soñado..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#B31919] text-white py-4 rounded-full font-bold hover:bg-[#8B1414] active:scale-[0.98] transition-all shadow-md hover:shadow-lg"
                  >
                    Enviar solicitud de consulta
                  </button>
                </form>

                <p className="text-[10px] text-muted-foreground text-center">
                  Al enviar el formulario, aceptas nuestra{" "}
                  <a href="#" className="underline hover:text-foreground transition-colors">
                    política de privacidad
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
