export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="h-8 w-32 bg-secondary/50 rounded animate-pulse mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="aspect-square bg-secondary/50 rounded-2xl animate-pulse" />
        <div className="space-y-6">
          <div className="h-12 bg-secondary/50 rounded animate-pulse" />
          <div className="h-6 bg-secondary/50 rounded animate-pulse w-3/4" />
          <div className="h-24 bg-secondary/50 rounded animate-pulse" />
        </div>
      </div>
    </div>
  )
}
