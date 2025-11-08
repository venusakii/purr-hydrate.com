import { products } from "@/lib/products"
import { ProductCard } from "./product-card"

export function ProductShowcase() {
  // Show first 6 products for homepage
  const featuredProducts = products.slice(0, 6)

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4 text-balance">Featured Products</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Cutting-edge hydration technology and mobility solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
