import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function MarketplacePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">UI/UX Design Services</h1>
        <p className="mt-2 text-muted-foreground">
          Elevate your digital presence with our professional UI/UX design services. We create intuitive, 
          engaging, and user-centered designs that enhance user satisfaction and drive business growth through 
          thoughtful interface design, user research, and interactive prototyping.
        </p>
        <p className="mt-2 text-muted-foreground italic text-sm">
          *Custom packages available for enterprise clients. Schedule a consultation with our design team to discuss your project needs.
        </p>
        
        <div className="mt-8 lg:grid lg:grid-cols-4 lg:gap-x-8">
          <ProductFilters />
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}