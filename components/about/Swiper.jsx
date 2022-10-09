import React from "react";

import { Swiper as Slider, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/bundle";

import { isBrowser } from "react-device-detect";

function Swiper({ mWidth, intro, work, academics, courses }) {
  return (
    <Slider
      style={{ maxWidth: mWidth }}
      pagination={{
        type: "fraction",
        clickable: true,
      }}
      spaceBetween={40}
      modules={[Pagination, Navigation]}
      scrollbar={{ draggable: true }}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      navigation={isBrowser && true}
    >
      {/* Mapa ut? */}
      <SwiperSlide>{intro}</SwiperSlide>
      <SwiperSlide>{work}</SwiperSlide>
      <SwiperSlide>{academics}</SwiperSlide>
      <SwiperSlide>{courses}</SwiperSlide>
    </Slider>
  );
}

export default Swiper;
