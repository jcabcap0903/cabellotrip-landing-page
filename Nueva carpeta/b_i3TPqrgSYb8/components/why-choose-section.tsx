"use client"

const features = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C16 4 8 8 8 16C8 20.4 10.5 24 16 28C21.5 24 24 20.4 24 16C24 8 16 4 16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 8V16M16 16L12 20M16 16L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="28" r="2" fill="currentColor"/>
      </svg>
    ),
    title: "Guías Expertos",
    titleJp: "専門ガイド",
    description: "Nuestros guías locales certificados te mostrarán el Japón que los turistas nunca ven. Conocimiento profundo, pasión infinita.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 26C6 26 8 18 16 18C24 18 26 26 26 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 16H8M24 16H28M16 4V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Itinerarios a Medida",
    titleJp: "オーダーメイド",
    description: "Cada viaje es único, como tú. Diseñamos experiencias personalizadas que se adaptan a tus intereses, ritmo y presupuesto.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 6C16 6 12 10 12 14C12 16 14 18 16 18C18 18 20 16 20 14C20 10 16 6 16 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 26C8 22 11.6 18 16 18C20.4 18 24 22 24 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 14C10 14 6 16 6 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 14C22 14 26 16 26 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Experiencias Auténticas",
    titleJp: "本物の体験",
    description: "Desde ceremonias del té privadas hasta talleres de artesanía tradicional. Vive Japón como un verdadero conocedor.",
  },
]

export function WhyChooseSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      {/* Decorative circle */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-accent/20 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl lg:text-5xl font-serif text-foreground mt-4 text-balance">
            La diferencia CabelloTRIP
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mt-8" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-background rounded-2xl p-8 lg:p-10 border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif text-foreground mb-1">
                {feature.title}
              </h3>
              <span className="text-xs text-accent font-medium tracking-wider">
                {feature.titleJp}
              </span>

              {/* Thin divider */}
              <div className="w-8 h-px bg-border my-6" />

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-primary">
                <span className="text-primary text-lg">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Banner */}
        <div className="mt-20 bg-foreground rounded-2xl p-8 lg:p-12 text-center lg:text-left">
          <div className="grid lg:grid-cols-4 gap-8 items-center">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-serif text-background mb-2">
                Confía en nosotros
              </h3>
              <p className="text-background/70 text-sm">
                Números que hablan por sí solos
              </p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl lg:text-5xl font-serif text-primary">98%</p>
                <p className="text-sm text-background/70 mt-2">Satisfacción</p>
              </div>
              <div className="text-center">
                <p className="text-4xl lg:text-5xl font-serif text-accent">24/7</p>
                <p className="text-sm text-background/70 mt-2">Soporte</p>
              </div>
              <div className="text-center">
                <p className="text-4xl lg:text-5xl font-serif text-primary">100%</p>
                <p className="text-sm text-background/70 mt-2">Personalizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
