import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import "swiper/css";
import { Autoplay } from "swiper/modules";

const FooterTextSlider = () => {
  const texts = [
    "Let’s Build Wellness Together *",
    "Let’s Build Wellness Together *",
    "Let’s Build Wellness Together *",
    "Let’s Build Wellness Together *",
    "Let’s Build Wellness Together *",
    "Let’s Build Wellness Together *",
    "Let’s Build Wellness Together *",
    "Let’s Build Wellness Together *",
    "Let’s Build Wellness Together *",
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      speed={3000}
      grabCursor={true}
      allowTouchMove={false}
      slidesPerView={3}
      breakpoints={{
        480: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
      className="w-full"
    >
      {texts.map((text, idx) => (
        <SwiperSlide key={idx} className="flex justify-center items-center">
          <h2 className="text-sm sm:text-lg md:text-3xl lg:text-4xl font-semibold text-white whitespace-nowrap">
            {text}
          </h2>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FooterTextSlider;
