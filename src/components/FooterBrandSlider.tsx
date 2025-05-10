import { Swiper, SwiperSlide } from 'swiper/react';
//@ts-expect-error
import 'swiper/css';
//@ts-expect-error
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import brand1 from "@/assets/img/brand/brand-b-01.png"
import brand2 from "@/assets/img/brand/brand-b-02.png"
import brand3 from "@/assets/img/brand/brand-b-03.png"
import brand4 from "@/assets/img/brand/brand-b-04.png"




const FooterBrandSlider = () => {
  const brands = [brand1, brand2, brand3, brand4, brand1, brand2, brand3, brand4];
  return (
    <Swiper
  modules={[Autoplay]}
  spaceBetween={50}
  slidesPerView={5}
  loop={true}
  autoplay={{ delay: 0, disableOnInteraction: false }}
  speed={3000} 
  grabCursor={true}
  allowTouchMove={false}
  breakpoints={{
    640: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 },
  }}
  className="w-full py-6  border-b border-neutral-800 "
>
  {brands.map((src, idx) => (
    <SwiperSlide key={idx}>
      <img src={src} alt={`brand-${idx}`} className="mx-auto h-10 object-contain" />
    </SwiperSlide>
  ))}
</Swiper>

    )
}

export default FooterBrandSlider