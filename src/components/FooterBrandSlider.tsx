import { Swiper, SwiperSlide } from "swiper/react";
//@ts-expect-error
import "swiper/css";
import { Autoplay } from "swiper/modules";

import brand1 from "@/assets/img/brand/brand-b-01.png";
import brand2 from "@/assets/img/brand/brand-b-02.png";
import brand3 from "@/assets/img/brand/brand-b-03.png";
import brand4 from "@/assets/img/brand/brand-b-04.png";

const FooterBrandSlider = () => {
  const brands = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand1,
    brand2,
    brand3,
    brand4,
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
      className="w-full py-6 border-b border-neutral-800"
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
