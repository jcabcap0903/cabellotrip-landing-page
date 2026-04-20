import Link from "next/link"
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react"

const footerLinks = {
  destinos: [
    { label: "Kyoto", href: "#" },
    { label: "Tokyo", href: "#" },
    { label: "Osaka", href: "#" },
    { label: "Hokkaido", href: "#" },
    { label: "Nara", href: "#" },
  ],
  experiencias: [
    { label: "Ceremonia del Té", href: "#" },
    { label: "Ruta del Sake", href: "#" },
    { label: "Onsen & Ryokan", href: "#" },
    { label: "Japón en Familia", href: "#" },
    { label: "Aventura Invernal", href: "#" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Trabaja con Nosotros", href: "#" },
    { label: "Contacto", href: "#contact" },
  ],
  legal: [
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
    { label: "Cookies", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Rising Sun Watermark */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[300px] opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="300" cy="300" r="280" fill="currentColor"/>
          <path d="M300 20V0M300 300L200 100M300 300L400 100M300 300L150 150M300 300L450 150M300 300L100 200M300 300L500 200" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-lg font-bold">鶴</span>
              </div>
              <span className="font-serif text-2xl tracking-wide text-background">
                Cabello<span className="text-primary">TRIP</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm max-w-sm leading-relaxed">
              Tu puerta de entrada a Japón. Más de 15 años creando 
              experiencias de viaje inolvidables en el país del sol naciente.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
                >
                  <social.icon className="w-4 h-4 text-background/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-sm text-background mb-4">Destinos</h4>
            <ul className="space-y-3">
              {footerLinks.destinos.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm text-background mb-4">Experiencias</h4>
            <ul className="space-y-3">
              {footerLinks.experiencias.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm text-background mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm text-background mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-background/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} CabelloTRIP. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-background/50">
            <span>Diseñado con</span>
            <span className="text-primary">❤</span>
            <span>en Madrid & Tokyo</span>
          </div>
          <p className="text-xs text-background/30 font-serif">
            日出ずる国への旅
          </p>
        </div>
      </div>
    </footer>
  )
}
