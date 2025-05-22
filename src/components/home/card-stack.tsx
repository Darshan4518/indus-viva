
import { useEffect, useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

 useEffect(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  const spacingY = 140;

  sustainabilityItems.forEach((_, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    gsap.set(card, { zIndex: sustainabilityItems.length - index });

    if (index === 0) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: `top+=${index * spacingY} center`,
      end: `+=${spacingY}`,
      scrub: true,
      onEnter: () => {
        gsap.set(card, {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        });
      },
      onLeaveBack: () => {
        gsap.set(card, {
          position: "relative",
          clearProps: "all",
        });
      },
    });

    gsap.fromTo(
      card,
      { y: 0 },               
      {
        y: index * spacingY,  
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top+=${index * spacingY} center`,
          end: `+=${spacingY}`,
          scrub: true,
        },
      }
    );
  });

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);

  return (
    <div className="min-h-screen bg-[#088772] p-3 "
        ref={containerRef}
    >
    <div className="text-center mb-10" 
    
    >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Sustainability Initiatives
        </h2>
        <p className="text-white max-w-2xl mx-auto mt-4">
          Discover how we're committed to sustainable practices throughout our
          entire production process.
        </p>
      </div>

      <div
        className="relative min-h-[140vh] xl:min-h-[100vh] flex items-start justify-center"
      >
        <div className="relative w-[90%] max-w-4xl">
          {sustainabilityItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el:any) => (cardRefs.current[index] = el)}
              className="w-full bg-white rounded-xl shadow-xl mb-6 p-6 md:p-10 flex flex-col lg:flex-row items-center transition-all duration-500"
            >
              <div className="lg:w-1/2 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="h-px w-10 bg-yellow-500"></div>
                  <span className="text-xl font-semibold text-yellow-700">
                    {item.number}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 md:line-clamp-none line-clamp-4">
                  {item.title}
                </h2>
                <h3 className="text-lg font-medium text-gray-600 md:line-clamp-none line-clamp-4">
                  {item.subtitle}
                </h3>
                <p className="text-gray-500 md:line-clamp-none line-clamp-4">{item.description}</p>
                <Badge className="bg-yellow-200 text-yellow-800 w-fit mt-2">
                  INDUS VIVA
                </Badge>
                <Button variant="link" className="text-blue-600 hover:text-blue-800 mt-2">
                  Read More →
                </Button>
              </div>

              <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl"
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
