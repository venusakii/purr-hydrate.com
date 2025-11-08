import Link from "next/link"
import { Droplet, Bike } from "lucide-react"

export function CategoryHighlight() {
  return (
    <section className="relative py-24 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-16 text-balance">
          Smart Systems for Every Creature
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Link
            href="/reviews?category=fountains"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="relative z-10">
              <Droplet className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-2">Pet Water Fountains</h3>
              <p className="text-muted-foreground">
                Advanced circulation systems with smart LED indicators and whisper-quiet operation
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
          </Link>

          <Link
            href="/reviews?category=bikes"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 p-8 border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="relative z-10">
              <Bike className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-2">Bikes & Ride Accessories</h3>
              <p className="text-muted-foreground">High-performance mobility solutions for the modern urban explorer</p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
          </Link>
        </div>
      </div>
    </section>
  )
}
