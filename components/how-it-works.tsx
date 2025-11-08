import { Activity, Filter, Smartphone } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Activity,
      title: "Sense Flow",
      description: "AI tracking of hydration patterns",
      color: "primary",
    },
    {
      icon: Filter,
      title: "Purify Cycle",
      description: "3-layer filtration model",
      color: "accent",
    },
    {
      icon: Smartphone,
      title: "Smart Feedback",
      description: "App integrations & notifications",
      color: "primary",
    },
  ]

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4 text-balance">From Drop to Data</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Three-stage intelligent hydration system
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className={`relative w-20 h-20 rounded-full bg-${step.color}/10 flex items-center justify-center border-2 border-${step.color}/30`}
                  >
                    <Icon className={`h-10 w-10 text-${step.color}`} />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-transparent animate-pulse-glow" />
                  </div>

                  <div className="space-y-2">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent font-heading font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="font-heading text-xl font-bold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-accent/30" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
