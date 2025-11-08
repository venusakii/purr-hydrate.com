import Image from "next/image"
import { MolecularBackground } from "@/components/molecular-background"
import { NavHeader } from "@/components/nav-header"
import { Footer } from "@/components/footer"
import { Droplet, Zap, Heart, Users } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Lena Vargas",
      role: "Chief Hydration Scientist",
      image: "/team-lena-vargas.jpg",
    },
    {
      name: "Akio Tan",
      role: "Biotech Engineer",
      image: "/team-akio-tan.jpg",
    },
    {
      name: "Chloe Marin",
      role: "Product Design Lead",
      image: "/team-chloe-marin.jpg",
    },
    {
      name: "Ivan Petrov",
      role: "Data Analytics Director",
      image: "/team-ivan-petrov.jpg",
    },
  ]

  const values = [
    {
      icon: Droplet,
      title: "Pure Innovation",
      description: "We engineer solutions inspired by nature's perfect designs",
    },
    {
      icon: Zap,
      title: "Smart Technology",
      description: "AI-powered systems that adapt to real-world needs",
    },
    {
      icon: Heart,
      title: "Life-Centered",
      description: "Every product designed with well-being at its core",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built on feedback from thousands of satisfied users",
    },
  ]

  return (
    <>
      <MolecularBackground />
      <div className="relative z-10">
        <NavHeader />
        <main>
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-24 text-center">
            <div className="mx-auto max-w-3xl space-y-6">
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-balance">About Purr-Hydrate</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Where biology meets technology. We're redefining hydration through the lens of science and innovation.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-12 border border-border/50">
              <div className="mx-auto max-w-3xl text-center space-y-4">
                <h2 className="font-heading text-3xl md:text-4xl font-bold">Our Mission</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  At Purr-Hydrate, we believe that hydration is more than just water — it's life data. Our mission is to
                  create intelligent systems that seamlessly integrate into daily life, promoting health and well-being
                  for both pets and people through cutting-edge technology and biomimetic design.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="container mx-auto px-4 py-24">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="relative p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Team Section */}
          <section className="container mx-auto px-4 py-24 bg-secondary/20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Meet Our Team</h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Scientists, engineers, and designers united by a passion for innovation
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 overflow-hidden transition-all duration-300 hover:border-accent/50 hover:scale-[1.02]"
                >
                  <div className="aspect-square relative overflow-hidden bg-secondary/20">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-heading font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse-glow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </section>

          {/* Story Section */}
          <section className="container mx-auto px-4 py-24">
            <div className="mx-auto max-w-3xl space-y-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">Our Story</h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Purr-Hydrate was born from a simple observation: traditional hydration systems were stuck in the past.
                  Our founder, Dr. Lena Vargas, noticed how nature optimizes water flow in living organisms and wondered
                  — why can't we do the same for our everyday products?
                </p>
                <p>
                  In 2020, we assembled a team of biotech engineers, data scientists, and product designers to reimagine
                  hydration from the ground up. What started as a research project evolved into a full-scale innovation
                  lab, combining AI tracking, smart sensors, and biomimetic design principles.
                </p>
                <p>
                  Today, Purr-Hydrate serves thousands of satisfied customers who trust our technology to keep their
                  pets healthy and their lives flowing smoothly. We're not just selling products — we're building an
                  ecosystem where data flows like water, improving lives one drop at a time.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
