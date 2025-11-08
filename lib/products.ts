export type Product = {
  id: string
  slug: string
  name: string
  brand: string
  category: "fountains" | "bikes"
  price: number
  rating: number
  reviews: number
  image: string
  description: string
  features: string[]
  amazonUrl: string
  hydrationLevel?: "high" | "medium" | "low"
}

export const products: Product[] = [
  // Pet Water Fountains
  {
    id: "catit-flower-fountain",
    slug: "catit-flower-fountain",
    name: "Catit LED Flower Fountain",
    brand: "Catit",
    category: "fountains",
    price: 27.99,
    rating: 4.5,
    reviews: 5000,
    image: "https://m.media-amazon.com/images/I/61BhM8Zl27L._AC_SX679_.jpg",
    description:
      "Triple action fountain with LED indicator and ergonomic flower design. Features advanced filtration and ultra-quiet pump technology.",
    features: [
      "LED water level indicator",
      "3L capacity with flower design",
      "Triple action filtration: softened water, circulation, oxygenation",
      "Ultra-quiet pump",
      "Easy to clean and maintain",
    ],
    amazonUrl: "https://www.amazon.com/Catit-Flower-Fountain-Triple-Action-Filter/dp/B0146QXOB0",
    hydrationLevel: "high",
  },
  {
    id: "petlibro-dockstream-fountain",
    slug: "petlibro-dockstream-fountain",
    name: "PETLIBRO Dockstream App Monitoring Fountain",
    brand: "PETLIBRO",
    category: "fountains",
    price: 39.99,
    rating: 4.7,
    reviews: 892,
    image: "https://m.media-amazon.com/images/I/71BBdrF6bKL._AC_SX679_.jpg",
    description:
      "Smart fountain with app monitoring, stainless steel tray, and wireless pump. Tracks pet hydration in real-time.",
    features: [
      "App connectivity for hydration tracking",
      "Wireless pump for easy cleaning",
      "Dual filtration system",
      "2.5L capacity",
      "Ultra-quiet operation under 28dB",
    ],
    amazonUrl: "https://www.amazon.com/PETLIBRO-Monitoring-Dockstream-Automatic-Dispenser/dp/B0CBN7SM2R",
    hydrationLevel: "high",
  },
  {
    id: "petsafe-drinkwell-fountain",
    slug: "petsafe-drinkwell-fountain",
    name: "PetSafe Drinkwell Stainless Steel 360 Fountain",
    brand: "PetSafe",
    category: "fountains",
    price: 89.99,
    rating: 4.6,
    reviews: 2103,
    image: "https://m.media-amazon.com/images/I/71lzKycY7XL._AC_SX679_.jpg",
    description:
      "Premium 360-degree stainless steel fountain for multiple pets. Provides fresh, filtered water from any angle.",
    features: [
      "360-degree design with 5 free-falling streams",
      "Stainless steel construction",
      "Carbon filtration removes odors and tastes",
      "128 oz capacity",
      "Dishwasher safe (excluding pump)",
    ],
    amazonUrl: "https://www.amazon.com/PetSafe-Drinkwell-Multi-Pet-Stainless-Fountain/dp/B002SB91QS",
    hydrationLevel: "high",
  },
  {
    id: "veken-water-fountain",
    slug: "veken-water-fountain",
    name: "Veken Pet Water Fountain",
    brand: "Veken",
    category: "fountains",
    price: 24.99,
    rating: 4.4,
    reviews: 1567,
    image: "https://m.media-amazon.com/images/I/71nvO76fr7L._AC_SX679_.jpg",
    description: "Automatic pet water fountain with ultra-quiet pump and multi-stage filtration for cats and dogs.",
    features: [
      "Ultra-quiet pump under 40dB",
      "5-stage filtration system",
      "84 oz / 2.5L capacity",
      "BPA-free materials",
      "Two flow modes: waterfall and gentle fountain",
    ],
    amazonUrl: "https://www.amazon.com/Water-Fountain-Pump-Veken-Filters/dp/B0FMF59BR2",
    hydrationLevel: "medium",
  },

  // Bikes
  {
    id: "gokeep-electric-bike",
    slug: "gokeep-electric-bike",
    name: "GOKEEP 1300W Folding Electric Bike",
    brand: "GOKEEP",
    category: "bikes",
    price: 599.99,
    rating: 4.5,
    reviews: 100,
    image: "https://m.media-amazon.com/images/I/61hqdazYd7L._AC_SX679_.jpg",
    description:
      "Folding electric bike with powerful 1300W motor and long-range battery. Ideal for commuting with fat tires and suspension.",
    features: [
      "1300W motor for powerful performance",
      "75-mile PAS range with 52V 13Ah removable battery",
      "20\" fat tires for stability and traction",
      "Front suspension for smooth ride",
      "7-speed gear system",
    ],
    amazonUrl: "https://www.amazon.com/GOKEEP-Electric-Removable-Suspension-Certified/dp/B0FG74R72R",
  },
  {
    id: "schwinn-network-bike",
    slug: "schwinn-network-bike",
    name: "Schwinn Network 1 Hybrid Bike",
    brand: "Schwinn",
    category: "bikes",
    price: 499.99,
    rating: 4.2,
    reviews: 432,
    image: "https://m.media-amazon.com/images/I/81t8mWV9uPL._AC_SX679_.jpg",
    description:
      "Hybrid bike with alloy frame and suspension fork for smooth, efficient rides. Perfect for commuting and paths.",
    features: [
      "18-inch alloy hybrid frame and suspension fork",
      "21-speed twist shifters and rear derailleur",
      "Alloy linear pull brakes",
      "Alloy hi-rise stem and swept-back handlebar",
      "Hybrid elastomer spring saddle and ergonomic grips",
    ],
    amazonUrl: "https://www.amazon.com/Schwinn-Network-Hybrid-Bicycle-White/dp/B07LC9886S",
  },
  {
    id: "sataway-kickstand",
    slug: "sataway-kickstand",
    name: "Sataway Bike Kickstand",
    brand: "Sataway",
    category: "bikes",
    price: 23.96,
    rating: 4.4,
    reviews: 670,
    image: "https://m.media-amazon.com/images/I/418dPULxTcL._AC_SX679_.jpg",
    description:
      "Adjustable aluminum alloy rear mount kickstand for 24-29 inch bikes. Heavy-duty design for e-bikes and mountain bikes.",
    features: [
      "Suitable for bikes with 40mm mounting holes",
      "Premium aluminum alloy construction",
      "Adjustable height for balance",
      "Wide anti-slip foot",
      "Includes bolts and washers for installation",
    ],
    amazonUrl: "https://www.amazon.com/Sataway-Kickstand-Adjustable-Aluminum-Electric/dp/B0BWJBMHS2",
  },
  {
    id: "vivi-electric-bike",
    slug: "vivi-electric-bike",
    name: "Vivi Electric Bike 26\" x 4.0 Fat Tire",
    brand: "Vivi",
    category: "bikes",
    price: 559.99,
    rating: 4.3,
    reviews: 524,
    image: "https://m.media-amazon.com/images/I/71G+Fyy8YdL._AC_SX679_.jpg",
    description:
      "Fat tire electric mountain bike with peak 1000W motor and removable battery. Up to 60 miles range and 25MPH speed.",
    features: [
      "500W motor (peak 1000W) with 25mph top speed",
      "48V 13Ah removable battery, 30-60 miles range",
      "LCD display with 5 assist levels",
      "Aluminum alloy frame and front suspension",
      "4\" puncture-resistant fat tires",
    ],
    amazonUrl: "https://www.amazon.com/Electric-Bicycle-Removable-Battery-Professional/dp/B09BVJ7SX3",
  },
  {
    id: "cycplus-portable-compressor",
    slug: "cycplus-portable-compressor",
    name: "CYCPLUS Electric Air Compressor Portable Bicycle Pump",
    brand: "CYCPLUS",
    category: "bikes",
    price: 45.99,
    rating: 4.3,
    reviews: 4332,
    image: "https://m.media-amazon.com/images/I/510nTo3iKKL._AC_SY879_.jpg",
    description:
      "Portable tire inflator with max 150 PSI and auto shut-off. Rechargeable for bikes, motorcycles, and cars.",
    features: [
      "Up to 150 PSI for fast inflation",
      "Built-in hose and compact design",
      "Rechargeable battery for multiple uses",
      "Emergency LED lighting",
      "Preset pressure and auto shut-off",
    ],
    amazonUrl: "https://www.amazon.com/Portable-Compressor-Rechargeable-Ergonomic-Emergency/dp/B07B65GN6W",
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: "fountains" | "bikes"): Product[] {
  return products.filter((p) => p.category === category)
}

export function getAllBrands(): string[] {
  const brands = new Set(products.map((p) => p.brand))
  return Array.from(brands).sort()
}
