"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Kyoto",
    nameJp: "京都",
    slug: "kyoto",
    description: "Templos antiguos, jardines zen y la esencia de la tradición japonesa.",
    price: "2,490",
    duration: "8 días",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=800&auto=format&fit=crop",
    highlight: "Geishas & Templos",
  },
  {
    id: 2,
    name: "Tokyo",
    nameJp: "東京",
    slug: "tokyo",
    description: "La metrópolis donde lo ultramoderno convive con siglos de historia.",
    price: "2,190",
    duration: "7 días",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
    highlight: "Neón & Tradición",
  },
  {
    id: 3,
    name: "Hokkaido",
    nameJp: "北海道",
    slug: "hokkaido",
    description: "Naturaleza salvaje, onsen y paisajes de ensueño en cada estación.",
    price: "3,290",
    duration: "10 días",
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=800&auto=format&fit=crop",
    highlight: "Naturaleza & Onsen",
  },
  {
    id: 4,
    name: "Osaka",
    nameJp: "大阪",
    slug: "osaka",
    description: "La capital gastronómica de Japón, vibrante y llena de vida.",
    price: "1,990",
    duration: "6 días",
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=800&auto=format&fit=crop",
    highlight: "Gastronomía",
  },
]

export function DestinationsSection() {
  return (
    <section id="destinations" className="py-24 lg:py-32 bg-background relative">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Destinos Destacados
            </span>
            <h2 className="text-3xl lg:text-5xl font-serif text-foreground text-balance">
              Explora los tesoros<br />de Japón
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md lg:text-right">
            Cada destino ha sido cuidadosamente seleccionado para ofrecerte 
            una experiencia auténtica e inolvidable.
          </p>
        </div>

        {/* Thin divider */}
        <div className="w-full h-px bg-border mb-12" />

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group relative rounded-xl overflow-hidden bg-card border border-border transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={destination.image}
                  alt={`${destination.name}, Japan`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                {/* Price Tag & Action Button */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="bg-background/95 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
                    <span className="text-sm font-medium text-foreground">
                      Desde €{destination.price}
                    </span>
                  </div>
                  <Link 
                    href={`/destinos/${destination.slug}`}
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border border-primary shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-primary/90"
                    aria-label={`Ver detalles de viaje a ${destination.name}`}
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </Link>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div>
                    <span className="text-xs text-primary-foreground/80 uppercase tracking-wider">
                      {destination.highlight}
                    </span>
                    <h3 className="text-2xl font-serif text-primary-foreground mt-1 flex items-baseline gap-2">
                      {destination.name}
                      <span className="text-lg text-primary-foreground/60">{destination.nameJp}</span>
                    </h3>
                  </div>
                  
                  <p className="text-sm text-primary-foreground/80 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {destination.description}
                  </p>

                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-primary-foreground/20">
                    <span className="text-xs text-primary-foreground/60">{destination.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-primary-foreground/40" />
                    <span className="text-xs text-primary-foreground/60">Todo incluido</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="flex justify-center mt-12">
          <button className="group flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <span className="text-sm uppercase tracking-widest">Ver todos los destinos</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  )
}
