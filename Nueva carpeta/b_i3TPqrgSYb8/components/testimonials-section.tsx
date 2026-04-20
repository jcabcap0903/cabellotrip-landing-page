"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "María García",
    location: "Madrid, España",
    quote: "Un viaje transformador. CabelloTRIP no solo nos mostró Japón, nos hizo sentir parte de él. Cada momento fue mágico, desde el amanecer en Fushimi Inari hasta la cena privada con una familia local.",
    trip: "Kyoto & Osaka, 12 días",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    location: "Barcelona, España",
    quote: "Tras 15 viajes a Japón, pensé que ya lo había visto todo. CabelloTRIP me demostró lo equivocado que estaba. Descubrí rincones secretos que jamás habría encontrado solo. Simplemente excepcional.",
    trip: "Ruta del Sake, 10 días",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Ana Martínez",
    location: "Valencia, España",
    quote: "Viajamos con nuestros hijos y fue perfecto. El equipo diseñó un itinerario que mantuvo a todos fascinados. Experiencias adaptadas a cada edad, sin prisas, con flexibilidad total.",
    trip: "Japón en Familia, 14 días",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Roberto Fernández",
    location: "Sevilla, España",
    quote: "La atención al detalle es incomparable. Desde el momento en que aterrizamos, todo fluyó perfectamente. Los ryokan seleccionados, los restaurantes ocultos... cada elección fue impecable.",
    trip: "Hokkaido Invernal, 9 días",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
]

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Testimonios
            </span>
            <h2 className="text-3xl lg:text-5xl font-serif text-foreground text-balance">
              Voces de<br />nuestros viajeros
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Thin divider */}
        <div className="w-full h-px bg-border mb-12" />

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="bg-secondary rounded-2xl p-8 lg:p-10 h-full border border-border relative">
                  {/* Quote Icon */}
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>

                  {/* Quote */}
                  <blockquote className="text-foreground leading-relaxed mb-8">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Trip Info */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-background rounded-full border border-border text-xs text-muted-foreground mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {testimonial.trip}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? "bg-primary w-6" 
                  : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
