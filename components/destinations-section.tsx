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
    image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=800&auto=format&fit=crop",
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
    <section id="destinations" className="py-16 lg:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div className="space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Destinos Destacados
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground leading-tight text-balance">
              Explora los tesoros<br className="hidden sm:block" />de Japón
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md lg:text-right text-sm sm:text-base">
            Cada destino ha sido cuidadosamente seleccionado para ofrecerte 
            una experiencia auténtica e inolvidable.
          </p>
        </div>

        {/* Thin divider */}
        <div className="w-full h-px bg-border mb-12" />

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-6">
          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group relative rounded-xl overflow-hidden bg-card border border-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                <img
                  src={destination.image}
                  alt={`${destination.name}, Japan`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay more readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Price Tag & Action Button */}
                <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                  <div className="bg-white/95 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/20 shadow-sm">
                    <span className="text-[10px] sm:text-xs font-bold text-black uppercase tracking-tight">
                      €{destination.price}
                    </span>
                  </div>
                  <Link 
                    href={`/destinos/${destination.slug}`}
                    className="w-10 h-10 rounded-full bg-[#B31919] flex items-center justify-center border border-[#B31919] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#8B1414] active:scale-95"
                    aria-label={`Ver detalles de viaje a ${destination.name}`}
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </Link>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <span className="text-[10px] text-white/70 uppercase tracking-[0.15em] font-medium">
                    {destination.highlight}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-white mt-1 flex items-baseline gap-2">
                    {destination.name}
                    <span className="text-sm sm:text-base text-white/40 font-sans">{destination.nameJp}</span>
                  </h3>
                  
                  {/* Info Row */}
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/10">
                    <span className="text-[10px] sm:text-xs text-white/60 font-medium">{destination.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-[10px] sm:text-xs text-white/60 font-medium">Premium</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <button className="group flex items-center gap-3 px-6 py-3 rounded-full border border-border hover:border-[#B31919] hover:bg-[#B31919]/5 transition-all duration-300">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">Ver todos los destinos</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#B31919]" />
          </button>
        </div>
      </div>
    </section>
  )
}
