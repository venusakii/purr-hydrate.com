"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { MolecularBackground } from "@/components/molecular-background"
import { NavHeader } from "@/components/nav-header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products, getAllBrands } from "@/lib/products"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function ReviewsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedBrand, setSelectedBrand] = useState<string>("all")
  const [selectedHydration, setSelectedHydration] = useState<string>("all")
  const [priceRange, setPriceRange] = useState<number[]>([0, 2000])

  useEffect(() => {
    if (categoryParam === "fountains" || categoryParam === "bikes") {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  const brands = getAllBrands()

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategory === "all" || product.category === selectedCategory
      const brandMatch = selectedBrand === "all" || product.brand === selectedBrand
      const hydrationMatch =
        selectedHydration === "all" ||
        product.hydrationLevel === selectedHydration ||
        (selectedHydration === "none" && !product.hydrationLevel)
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]

      return categoryMatch && brandMatch && hydrationMatch && priceMatch
    })
  }, [selectedCategory, selectedBrand, selectedHydration, priceRange])

  return (
    <>
      <MolecularBackground />
      <div className="relative z-10">
        <NavHeader />
        <main className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-balance">Product Reviews</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated selection of smart hydration systems and mobility solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 p-6">
                <div>
                  <h2 className="font-heading text-lg font-semibold mb-4">Filters</h2>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm font-medium">
                    Category
                  </Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger id="category">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Products</SelectItem>
                      <SelectItem value="fountains">Pet Fountains</SelectItem>
                      <SelectItem value="bikes">Bikes & Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brand" className="text-sm font-medium">
                    Brand
                  </Label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger id="brand">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Brands</SelectItem>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hydration" className="text-sm font-medium">
                    Hydration Level
                  </Label>
                  <Select value={selectedHydration} onValueChange={setSelectedHydration}>
                    <SelectTrigger id="hydration">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="high">High Flow</SelectItem>
                      <SelectItem value="medium">Medium Flow</SelectItem>
                      <SelectItem value="low">Standard</SelectItem>
                      <SelectItem value="none">N/A (Bikes)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label className="text-sm font-medium">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </Label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={2000}
                    step={10}
                    className="w-full"
                  />
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Showing {filteredProducts.length} of {products.length} products
                  </p>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50">
                  <p className="text-lg font-medium text-muted-foreground mb-2">No products found</p>
                  <p className="text-sm text-muted-foreground">Try adjusting your filters</p>
                </div>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
