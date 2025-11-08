import Link from "next/link"
import Image from "next/image"
import { Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products"

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:scale-[1.02]">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="aspect-square relative overflow-hidden bg-secondary/20">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {product.hydrationLevel && (
            <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-accent/90 backdrop-blur-sm text-accent-foreground text-xs font-medium">
              {product.hydrationLevel === "high"
                ? "High Flow"
                : product.hydrationLevel === "medium"
                  ? "Medium Flow"
                  : "Standard"}
            </div>
          )}
        </div>

        <div className="p-4 space-y-3">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground font-medium">{product.brand}</p>
            <h3 className="font-heading font-semibold line-clamp-2 text-balance">{product.name}</h3>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
          </div>
        </div>
      </Link>

      <div className="p-4 pt-0">
        <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="sm">
          <Link href={`/product/${product.slug}`}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="absolute -top-2 -right-2 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse-glow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  )
}
