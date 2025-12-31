import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Gem, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-8 px-6 md:px-12 flex justify-between items-center border-b border-border/50">
        <h1 className="text-3xl font-bold tracking-tighter">DrobeMonds</h1>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          <Link href="/clothes" className="hover:text-primary transition-colors">
            Clothes
          </Link>
          <Link href="/jewellery" className="hover:text-primary transition-colors">
            Jewellery
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Our Story
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm font-medium border-b border-foreground pb-0.5">
            Cart (0)
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 px-6 md:px-12 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl mb-6 leading-tight">
            Where luxury meets <br /> <span className="italic">everyday elegance.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            DrobeMonds curate the finest collection of contemporary apparel and timeless jewelry for those who
            appreciate the art of dressing well.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-px bg-border">
          <Link
            href="/clothes"
            className="group relative aspect-[4/5] bg-background overflow-hidden flex flex-col items-center justify-center p-12 transition-all hover:bg-secondary/50"
          >
            <div className="relative w-full h-full mb-8 transition-transform duration-700 group-hover:scale-105">
              <Image src="/luxury-clothing-display.jpg" alt="Clothes" fill className="object-cover rounded-sm" />
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <span className="uppercase text-xs tracking-widest text-muted-foreground">Collection</span>
              </div>
              <h3 className="text-3xl mb-4">The Wardrobe</h3>
              <div className="inline-flex items-center gap-2 text-sm font-medium border-b border-primary pb-1 group-hover:gap-4 transition-all">
                Shop Clothes <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          <Link
            href="/jewellery"
            className="group relative aspect-[4/5] bg-background overflow-hidden flex flex-col items-center justify-center p-12 transition-all hover:bg-secondary/50"
          >
            <div className="relative w-full h-full mb-8 transition-transform duration-700 group-hover:scale-105">
              <Image src="/exquisite-jewelry-diamonds.jpg" alt="Jewellery" fill className="object-cover rounded-sm" />
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Gem className="w-5 h-5 text-primary" />
                <span className="uppercase text-xs tracking-widest text-muted-foreground">Boutique</span>
              </div>
              <h3 className="text-3xl mb-4">The Diamonds</h3>
              <div className="inline-flex items-center gap-2 text-sm font-medium border-b border-primary pb-1 group-hover:gap-4 transition-all">
                Shop Jewellery <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </section>
      </main>

      <footer className="bg-foreground text-background py-20 px-6 md:px-12 mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <h2 className="text-4xl font-bold mb-6">DrobeMonds</h2>
            <p className="text-background/60 max-w-sm mb-8">
              A student project reimagining the intersection of fashion and fine jewelry.
            </p>
          </div>
          <div>
            <h4 className="uppercase text-xs tracking-widest font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-background/80">
              <li>
                <Link href="/clothes">Clothing</Link>
              </li>
              <li>
                <Link href="/jewellery">Jewellery</Link>
              </li>
              <li>
                <Link href="#">New Arrivals</Link>
              </li>
              <li>
                <Link href="#">Sale</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="uppercase text-xs tracking-widest font-bold mb-6">Newsletter</h4>
            <div className="flex border-b border-background/20 pb-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-none outline-none text-sm w-full"
              />
              <button>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
