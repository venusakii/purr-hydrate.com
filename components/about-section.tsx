export function AboutSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-balance">BioTech Flow Philosophy</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            At Purr-Hydrate, we engineer hydration systems inspired by nature's own design — flow, balance and
            adaptability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="relative p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <div className="w-6 h-6 rounded-full bg-primary animate-pulse-glow" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Flow Design</h3>
              <p className="text-sm text-muted-foreground">Biomimetic water circulation patterns</p>
            </div>

            <div className="relative p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                <div className="w-6 h-6 rounded-full bg-accent animate-pulse-glow" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Smart Systems</h3>
              <p className="text-sm text-muted-foreground">AI-powered hydration tracking</p>
            </div>

            <div className="relative p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <div className="w-6 h-6 rounded-full bg-primary animate-pulse-glow" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Pure Technology</h3>
              <p className="text-sm text-muted-foreground">Advanced 3-layer filtration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
