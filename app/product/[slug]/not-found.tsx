import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavHeader } from "@/components/nav-header"
import { Footer } from "@/components/footer"
import { MolecularBackground } from "@/components/molecular-background"

export default function NotFound() {
  return (
    <>
      <MolecularBackground />
      <div className="relative z-10">
        <NavHeader />
        <main className="container mx-auto px-4 py-24">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h1 className="font-heading text-6xl md:text-8xl font-bold">404</h1>
            <h2 className="font-heading text-2xl md:text-3xl font-bold">Product Not Found</h2>
            <p className="text-lg text-muted-foreground">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <div className="pt-6">
              <Button asChild size="lg">
                <Link href="/reviews">Browse All Products</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
