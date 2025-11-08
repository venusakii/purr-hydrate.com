import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 py-24 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-medium tracking-wider text-primary uppercase">
              Science of Hydration. Designed for Life.
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-balance">
              Smart Hydration for Smart Pets <span className="text-primary">and Smart People</span>
            </h1>
          </div>

          <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Discover innovative water flow systems that blend biology and technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden group bg-accent text-accent-foreground hover:bg-accent/90 text-base font-medium px-8"
            >
              <Link href="/reviews">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base font-medium px-8 bg-transparent">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Animated flow lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-flow" />
          <div
            className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-flow"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-flow"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>
    </section>
  )
}
