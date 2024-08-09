import React from "react";
import "./index.css";
import { FaRegSmile } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-head-content">
          <h3>Services</h3>
          <p>
            We offer a variety of floral services, from unique bouquets to event
            decoration.
          </p>
        </div>
        <div className="services-slider">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b3.jpg" alt="" />
        </SwiperSlide>
       
       
       
      </Swiper>
        </div>
        <div className="mission">
          <div className="mission-img">
            <img
              src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg"
              alt=""
            />
          </div>
          <div className="mission-content">
            <h5>our mission</h5>
            <p>
              Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore
              dicunt an, ea civibus.
            </p>
            <button>read more</button>
          </div>
        </div>
        <div className="category-cards">
          <div className="category-card-wrapper">
            <div className="icon-content">
              <FaRegSmile />
              <span>happiness</span>
            </div>
            <p>Vis ne postulant principes accommodare ius modo</p>
          </div>
          <div className="category-card-wrapper">
            <div className="icon-content">
            <FaRegHeart />
              <span>
              Organic</span>
            </div>
            <p>Vis ne postulant principes accommodare ius modo</p>
          </div>
          <div className="category-card-wrapper">
            <div className="icon-content">
            <IoSunnyOutline />
              <span>Freshness</span>
            </div>
            <p>Vis ne postulant principes accommodare ius modo</p>
          </div>
          <div className="category-card-wrapper">
            <div className="icon-content">
            <FaCartShopping />
              <span>Delivery</span>
            </div>
            <p>Vis ne postulant principes accommodare ius modo</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
