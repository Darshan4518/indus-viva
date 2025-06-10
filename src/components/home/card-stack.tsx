
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

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
  {
    id: 4,
    number: "04",
    title: "SUSTAINABLY SOURCED FROM THE HEART OF NATURE",
    subtitle: "SUSTAINABLY SOURCED FROM THE HEART OF NATURE",
    description:
      "Salacia roots grow in pristine forests, harvested by tribal communities who honor the land's natural balance.",
    image: "https://magicads.ae/indus-viva/assets/img/new/project-02.png",
  },
  {
    id: 5,
    number: "05",
    title: "ADVANCED EXTRACTION PRESERVES POTENCY",
    subtitle: "ADVANCED EXTRACTION PRESERVES POTENCY",
    description:
      "Our state-of-the-art extraction methods ensure maximum retention of the plant's beneficial compounds, delivering superior efficacy in every product.",
    image: "https://magicads.ae/indus-viva/assets/img/new/project-01.png",
  },
]

const CardStackScroll = () => {
  const targetRef = useRef(null)

  return (
    <div className="bg-[#088772] min-h-screen">
      <div className="text-center py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Sustainability Initiatives</h2>
        <p className="text-white max-w-2xl mx-auto mt-4">
          Discover how we're committed to sustainable practices throughout our entire production process.
        </p>
      </div>

      <div ref={targetRef} className="relative">
        {sustainabilityItems.map((item, index) => (
          <div
            key={item.id}
            className="sticky px-4 pb-8 overflow-hidden"
            style={{
              top: `${120 + index * 20}px`,
              zIndex: sustainabilityItems.length + index,
            }}
          >
            <div className="bg-white rounded-xl overflow-hidden flex flex-col lg:flex-row items-center min-h-[70vh] max-w-[90%] mx-auto mb-3 p-6 " style={{
             boxShadow: "0 -5px 10px rgba(0, 0, 0, 0.1)",
                transform: `translateY(${index}px)`,
            }}>
              <div className="p-6 md:p-10 lg:w-1/2 md:space-y-4 space-y-3">
                <div className="flex items-center space-x-4">
                  <div className="h-px w-10 bg-yellow-500"></div>
                  <span className="text-xl 3xl:text-4xl font-semibold text-yellow-700">{item.number}</span>
                </div>
                <h2 className="md:text-2xl 3xl:text-4xl text-sm font-bold text-gray-800 uppercase">{item.title}</h2>
                <h3 className="md:text-lg 3xl:text-2xl text-sm font-medium text-gray-600">{item.subtitle}</h3>
                <p className="text-gray-500 line-clamp-3 md:line-clamp-none text-sm md:text-base 3xl:text-xl">
                  {item.description}
                </p>
                <Badge className="bg-yellow-200 text-yellow-800 w-fit mt-2">INDUS VIVA</Badge>
                <Button variant="link" className="text-blue-600 hover:text-blue-800 mt-2">
                  Read More →
                </Button>
              </div>
              <div className="lg:w-1/2 w-full h-full  ">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        ))}

        <div className="h-screen"></div>
      </div>
    </div>
  )
}

export default CardStackScroll
