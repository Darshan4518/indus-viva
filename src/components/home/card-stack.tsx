import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error
import "swiper/css";
import { Autoplay } from "swiper/modules";
import image1 from "@/assets/img/1.png";
import image2 from "@/assets/img/2.png";
import image3 from "@/assets/img/3.png";
import image4 from "@/assets/img/4.png";
import image5 from "@/assets/img/5.png";
import image6 from "@/assets/img/6.png";
import image7 from "@/assets/img/7.png";
import image8 from "@/assets/img/8.png";
import image9 from "@/assets/img/9.png";


const sustainabilityItems = [
  {
    id: 1,
    number: "01",
    title: "SUSTAINABLY SOURCED FROM THE HEART OF NATURE",
    subtitle: "SUSTAINABLY SOURCED FROM THE HEART OF NATURE",
    description:
      "Salacia roots grow in pristine forests, harvested by tribal communities who honor the land's natural balance.",
    images: [image1, image2, image3],
  },
  {
    id: 2,
    number: "02",
    title: "ADVANCED EXTRACTION PRESERVES POTENCY",
    subtitle: "ADVANCED EXTRACTION PRESERVES POTENCY",
    description:
      "Our state-of-the-art extraction methods ensure maximum retention of the plant's beneficial compounds, delivering superior efficacy in every product.",
    images: [image4, image5, image6],
  },
  {
    id: 3,
    number: "03",
    title: "Innovation Meets Tradition",
    subtitle: "Salacia roots travel to our state-of-the-art facility",
    description:
      "Salacia roots travel to our state-of-the-art facility, where advanced extraction methods preserve their potency. With a dedicated team ensuring strict quality control, each product undergoes thorough testing for purity and safety.",
    images: [image7, image8, image9],
  },
];

const CardStackScroll = () => {
  const targetRef = useRef(null);

  return (
    <div className="bg-[#088772] min-h-screen">
      <div className="text-center py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Sustainability Initiatives
        </h2>
        <p className="text-white max-w-2xl mx-auto mt-4">
          Discover how we're committed to sustainable practices throughout our
          entire production process.
        </p>
      </div>

      <div ref={targetRef} className="relative">
        {sustainabilityItems.map((item, index) => (
          <div
            key={item.id}
            className="sticky px-4 pb-8 overflow-hidden"
            style={{
              top: `${15 + index * 2.5}vh`,
              zIndex: sustainabilityItems.length + index,
            }}
          >
            <div
              className="bg-white rounded-xl overflow-hidden flex flex-col lg:flex-row items-center h-[80vh] md:min-h-[70vh] md:max-w-[90%] mx-auto md:p-6 p-2 w-full shadow-md"
              style={{
                transform: `translateY(${index}px)`,
              }}
            >
              {/* Left Side Content */}
              <div className="p-6 md:p-10 lg:w-1/2 space-y-2 md:space-y-4 md:h-full flex flex-col justify-center h-1/2">
                <div className="flex items-center space-x-4">
                  <div className="h-px w-10 bg-yellow-500"></div>
                  <span className="text-xl 3xl:text-4xl font-semibold text-yellow-700">
                    {item.number}
                  </span>
                </div>
                <h2 className="text-sm md:text-2xl 3xl:text-4xl font-bold text-gray-800 uppercase">
                  {item.title}
                </h2>
                <h3 className="text-xs md:text-lg 3xl:text-2xl font-medium text-gray-600">
                  {item.subtitle}
                </h3>
                <p className="text-gray-500 text-sm md:text-base 3xl:text-xl line-clamp-3 md:line-clamp-none">
                  {item.description}
                </p>
                <div className="flex gap-3 items-start">
                  <Badge className="bg-yellow-200 text-yellow-800 ">
                    INDUS VIVA
                  </Badge>
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 "
                  >
                    Read More →
                  </Button>
                </div>
              </div>

              {/* Right Side Slider */}
              <div className="lg:w-1/2 h-1/2 w-full md:h-full py-1">
                <Swiper
                  slidesPerView={1}
                  className="h-full w-full rounded-xl overflow-hidden"
                  modules={[Autoplay]}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  speed={1000}
                  grabCursor={true}
                >
                  {item.images.map((image, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={image}
                        alt={`${item.title} ${i + 1}`}
                        className="w-full h-full object-cover rounded-xl"
                        style={{ borderRadius: "inherit", display: "block" }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        ))}
        <div className="min-h-[10vh]" />
      </div>
    </div>
  );
};

export default CardStackScroll;
