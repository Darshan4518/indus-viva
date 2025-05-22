import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const sustainabilityItems = [
  {
    id: 1,
    number: "01",
    title: "SUSTAINABLY SOURCED FROM THE HEART OF NATURE",
    subtitle: "SUSTAINABLY SOURCED FROM THE HEART OF NATURE",
    description:
      "Salacia roots grow in pristine forests, harvested by tribal communities who honor the land's natural balance.",
    image: "https://magicads.ae/indus-viva/assets/img/new/project-02.png",
  },
  {
    id: 2,
    number: "02",
    title: "ADVANCED EXTRACTION PRESERVES POTENCY",
    subtitle: "ADVANCED EXTRACTION PRESERVES POTENCY",
    description:
      "Our state-of-the-art extraction methods ensure maximum retention of the plant's beneficial compounds, delivering superior efficacy in every product.",
    image: "https://magicads.ae/indus-viva/assets/img/new/project-01.png",
  },
  {
    id: 3,
    number: "03",
    title: "Innovation Meets Tradition",
    subtitle: "Salacia roots travel to our state-of-the-art facility",
    description:
      "Salacia roots travel to our state-of-the-art facility, where advanced extraction methods preserve their potency. With a dedicated team ensuring strict quality control, each product undergoes thorough testing for purity and safety.",
    image: "https://magicads.ae/indus-viva/assets/img/new/about-1.png",
  },
]

export default function SustainabilityVerticalSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!isDesktop || !sectionRef.current) return

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[]

    gsap.set(cards, {
      y: (i) => i * 30,
      scale: 0.9,
      opacity: 0.5,
      zIndex: (i) => sustainabilityItems.length - i,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    })

    cards.forEach((card, i) => {
      const start = i / cards.length
      const end = (i + 1) / cards.length

      tl.to(
        card,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          zIndex: sustainabilityItems.length + 10,
          ease: "power2.out",
          duration: 1,
        },
        start
      )

      tl.to(
        card,
        {
          zIndex: sustainabilityItems.length - i,
          duration: 0.01,
        },
        end
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [isDesktop])

  return (
    <section
      ref={sectionRef}
      className="bg-[#088772] py-10 px-4 sm:px-6 lg:px-8 relative md:hidden"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Sustainability Initiatives
        </h2>
        <p className="text-white max-w-2xl mx-auto mt-4">
          Discover how we're committed to sustainable practices throughout our
          entire production process.
        </p>
      </div>

      <div className={`max-w-6xl mx-auto relative ${isDesktop ? "md:h-[60vh]" : ""}`}>
        {sustainabilityItems.map((item, index) => (
          <div
            key={item.id}
            ref={(el:any) => (cardsRef.current[index] = el)}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row items-center cursor-pointer mb-6 md:mb-0 transition-all duration-500"
            style={
              isDesktop
                ? {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: sustainabilityItems.length - index,
                  }
                : {}
            }
          >
            <div className="p-6 md:p-10 lg:w-1/2 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-px w-10 bg-yellow-500"></div>
                <span className="text-xl font-semibold text-yellow-700">
                  {item.number}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
              <h3 className="text-lg font-medium text-gray-600">{item.subtitle}</h3>
              <p className="text-gray-500">{item.description}</p>
              <Badge className="bg-yellow-200 text-yellow-800 w-fit mt-2">
                INDUS VIVA
              </Badge>
              <Button variant="link" className="text-blue-600 hover:text-blue-800 mt-2">
                Read More →
              </Button>
            </div>

            <div className="lg:w-1/2 w-full">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
