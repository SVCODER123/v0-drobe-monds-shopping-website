import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

type Product = {
  id: string
  name: string
  price_inr: number
  category: string
  product_type: string
  image_query: string | null
}

export default async function JewelleryPage() {
  const supabase = await createClient()
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("product_type", "jewellery")
    .order("created_at", { ascending: true })

  const PRODUCTS = products || []

  return (
    <div className="min-h-screen p-6 md:p-12">
      <Link href="/" className="inline-flex items-center gap-2 text-sm mb-12 hover:text-primary transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h1 className="text-5xl md:text-7xl mb-4">The Diamonds</h1>
          <p className="text-muted-foreground max-w-md">
            Handcrafted pieces designed to be passed down through generations.
          </p>
        </div>
        <div className="flex gap-4 text-xs uppercase tracking-widest font-bold">
          <span>Precious Metals</span>
          <span className="text-muted-foreground">|</span>
          <span>Gemstones</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="aspect-square relative overflow-hidden bg-secondary mb-4 rounded-full">
              <Image
                src={`/.jpg?height=600&width=600&query=${product.image_query || product.name.replace(/ /g, "+")}`}
                alt={product.name}
                fill
                className="object-contain p-12 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{product.category}</p>
              <h3 className="text-xl mb-2">{product.name}</h3>
              <p className="font-serif italic text-primary">₹{product.price_inr.toLocaleString("en-IN")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
