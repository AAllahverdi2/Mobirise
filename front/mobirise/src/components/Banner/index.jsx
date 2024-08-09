import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Banner = () => {
  return (
    <section className="banner">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <img src={'https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={'https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg'} alt="" />
        </SwiperSlide>
        ...
      </Swiper>
    </section>
  );
};

export default Banner;
