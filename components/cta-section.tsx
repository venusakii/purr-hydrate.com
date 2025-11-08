import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-primary/5" />

      {/* Animated droplets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-balance">Join the Hydration Revolution</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Be part of the future where data flows like water.
          </p>
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden group bg-accent text-accent-foreground hover:bg-accent/90 text-base font-medium px-8"
            >
              <Link href="/reviews">
                Explore Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
