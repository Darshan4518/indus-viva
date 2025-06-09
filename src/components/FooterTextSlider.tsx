import { Swiper, SwiperSlide } from "swiper/react";
//@ts-expect-error
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
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      speed={5000}
      grabCursor={true}
      allowTouchMove={false}
      slidesPerView={3}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      centeredSlides={false}
      spaceBetween={30}
      className="w-full bg-[radial-gradient(circle,_#088772_0%,_#5ec199_96%)]"
    >
      {texts.map((text, idx) => (
        <SwiperSlide
          key={idx}
          className="min-w-fit px-6 flex justify-center items-center"
        >
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold text-white whitespace-nowrap py-5">
            {text}
          </h2>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FooterTextSlider;
