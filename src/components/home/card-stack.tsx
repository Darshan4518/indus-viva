import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

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
];

const CardStackScroll = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [containerHeight, setContainerHeight] = useState("100vh");

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const spacingY = window.innerWidth < 768 ? 120 : 180;
    const totalHeight = window.innerHeight + (sustainabilityItems.length - 1) * spacingY;
    setContainerHeight(`${totalHeight}px`);

    gsap.set(cardRefs.current, {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
    });

    gsap.set(cardRefs.current[0], {
      y: 0,
      zIndex: 20,
      opacity: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${(sustainabilityItems.length - 1) * spacingY + window.innerHeight + 1400}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
      },
    });

    cardRefs.current.slice(1).forEach((card, index) => {
      tl.fromTo(
        card,
        {
          y: (index + 1) * window.innerHeight * 0.6,
          zIndex: 40 + index,
        },
        {
          y: 0,
          zIndex: 40 + index,
          duration: 1,
          ease: "power2.inOut",
        },
        index
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-[#088772] overflow-hidden p-4">
      <div className="text-center mt-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Sustainability Initiatives
        </h2>
        <p className="text-white max-w-2xl mx-auto mt-4">
          Discover how we're committed to sustainable practices throughout our
          entire production process.
        </p>
      </div>

      <div className="relative">
        <div
          className="relative w-[90%] mx-auto my-20"
          ref={containerRef}
          style={{ height: containerHeight }}
        >
          {sustainabilityItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el:never) => (cardRefs.current[index] = el)}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row items-center transition-all duration-500 h-[70vh] md:mt-30 mt-20"
            >
              <div className="p-6 md:p-10 lg:w-1/2 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="h-px w-10 bg-yellow-500"></div>
                  <span className="text-xl font-semibold text-yellow-700">
                    {item.number}
                  </span>
                </div>
                <h2 className="md:text-2xl text-sm font-bold text-gray-800">
                  {item.title}
                </h2>
                <h3 className="md:text-lg text-sm font-medium text-gray-600">
                  {item.subtitle}
                </h3>
                <p className="text-gray-500 line-clamp-3 md:line-clamp-none text-sm md:text-base">{item.description}</p>
                <Badge className="bg-yellow-200 text-yellow-800 w-fit mt-2">
                  INDUS VIVA
                </Badge>
                <Button
                  variant="link"
                  className="text-blue-600 hover:text-blue-800 mt-2"
                >
                  Read More →
                </Button>
              </div>
              <div className="lg:w-1/2 w-full h-full">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardStackScroll;