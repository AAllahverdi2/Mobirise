import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.scss";


const Banner = () => {
  return (
    <section className="banner">
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        // scrollbar={{ draggable: true }}
        speed={1000}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src={
              "https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg"
            }
            alt=""
          />
          <div className="bannerText">
            <h3>Floral</h3>
            <h4>Excellent bouquets for you</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg"
            }
            alt=""
          />
          <div className="bannerText">
            <h3>Floral</h3>
            <h4>Excellent bouquets for you</h4>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </section>
  );
};

export default Banner;
