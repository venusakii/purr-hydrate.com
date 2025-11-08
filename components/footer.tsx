import Link from "next/link"
import { Droplet } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold">
              <Droplet className="h-6 w-6 text-primary" />
              <span>Purr-Hydrate</span>
            </Link>
            <p className="text-sm text-muted-foreground">Pure Innovation. Smart Hydration.</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/reviews?category=fountains"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Pet Fountains
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews?category=bikes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Bikes
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">© 2025 Purr-Hydrate.com — All Rights Reserved.</p>
          <p className="text-center text-xs text-muted-foreground mt-2">
            Amazon Affiliate Partner. As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
