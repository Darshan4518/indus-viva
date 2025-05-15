import { Swiper, SwiperSlide } from "swiper/react";
//@ts-expect-error
import "swiper/css";
import { Autoplay } from "swiper/modules";

import brand1 from "../assets/img/brand2/Brand--02.png";
import brand2 from "../assets/img/brand2/Brand--03.png";
import brand3 from "../assets/img/brand2/Brand--04.png";
import brand4 from "../assets/img/brand2/Brand--05.png";
import brand5 from "../assets/img/brand2/Brand--06.png";
import brand6 from "../assets/img/brand2/Brand--07.png";
import brand7 from "../assets/img/brand2/Brand--08.png";
import brand8 from "../assets/img/brand2/Brand--09.png";
import brand9 from "../assets/img/brand2/Brand--11.png";

const FooterBrandSlider = () => {
  const brands = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      loop={true}
      speed={5000}
      slidesPerView={2}
      allowTouchMove={false}
      autoplay={{ delay: 1, disableOnInteraction: false }}
      grabCursor={true}
      breakpoints={{
        480: { slidesPerView: 3 },
        640: { slidesPerView: 4 },
        768: { slidesPerView: 5 },
        1024: { slidesPerView: 6 },
      }}
      className="w-full py-6  md:mt-10 mt-4"
    >
      {brands.map((src, idx) => (
        <SwiperSlide key={idx} className="flex justify-center items-center">
          <img
            src={src}
            alt={`brand-${idx}`}
            className="h-10 sm:h-12 object-contain mx-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FooterBrandSlider;
