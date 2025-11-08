import Link from "next/link"
import { Droplet } from "lucide-react"

export function NavHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold">
          <Droplet className="h-6 w-6 text-primary" />
          <span className="text-balance">Purr-Hydrate</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/reviews" className="text-sm font-medium transition-colors hover:text-primary">
            Reviews
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
