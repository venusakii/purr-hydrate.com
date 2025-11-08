import { Star } from "lucide-react"

export function ReviewsSection() {
  const reviews = [
    {
      name: "Alexandra Chen",
      text: "My cat drinks more now — and loves it!",
      rating: 5,
    },
    {
      name: "Diego Martinez",
      text: "Hydration meets design.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      text: "The smartest fountain I have ever owned.",
      rating: 5,
    },
  ]

  return (
    <section className="relative py-24 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4 text-balance">
          Trusted by Humans & Their Companions
        </h2>
        <p className="text-center text-muted-foreground mb-16">Real experiences from our community</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">"{review.text}"</p>
              <p className="text-sm font-medium text-muted-foreground">– {review.name}</p>

              <div className="absolute -top-2 -right-2 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse-glow pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
