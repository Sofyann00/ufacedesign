"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Button } from "@/components/ui/button"
import { ChevronRight, Cpu, Server, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { formatPrice } from "@/lib/data"

export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  }, [
    (slider) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false
      
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      
      slider.on("created", () => {
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-primary/5">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl animate-pulse" />
          </div>
        </div>

        <div className="relative z-10 container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] items-center">
            {/* Content */}
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground animate-gradient">
                Crafting Digital Experiences That Matter
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We transform ideas into exceptional digital products through human-centered design, creating intuitive experiences that users love.
              </p>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href="/marketplace">
                  <Button size="lg" className="group relative overflow-hidden">
                    <span className="relative z-10">Explore Services</span>
                    <div className="absolute inset-0 bg-primary-foreground transform translate-y-full group-hover:translate-y-0 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* 3D Animation or Illustration */}
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative z-10">
                {/* Add a 3D illustration or animation here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-24 relative overflow-hidden bg-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Comprehensive design solutions tailored to your needs
            </p>
          </div>
          
          <div ref={sliderRef} className="keen-slider mt-12">
            {products.map((product) => (
              <div key={product.id} className="keen-slider__slide">
                <Card className="group relative overflow-hidden border-0 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                    <p className="mt-4 font-semibold text-primary">{formatPrice(product.price)}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl -rotate-6 group-hover:rotate-0 transition-transform" />
                <div className="relative bg-card p-6 rounded-xl border shadow-lg">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    name: 'User-Centered Design',
    description: 'We put users first, conducting thorough research and testing to create interfaces that truly resonate with your target audience.',
    icon: <Zap className="h-5 w-5 text-primary" />,
  },
  {
    name: 'Design Excellence',
    description: 'Our team of experienced designers creates pixel-perfect interfaces with attention to detail, following the latest design trends and best practices.',
    icon: <Cpu className="h-5 w-5 text-primary" />,
  },
  {
    name: 'Continuous Support',
    description: 'We provide ongoing design support, iterations, and maintenance to ensure your digital products evolve with your users needs.',
    icon: <Shield className="h-5 w-5 text-primary" />,
  },
]