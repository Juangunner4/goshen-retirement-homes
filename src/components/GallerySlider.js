import React from "react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '../GallerySlider.css';

SwiperCore.use([Navigation, Pagination]);

const GallerySlider = () => {
  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        className="gallery-images"
      >
        <SwiperSlide>
          <img src={require("../images/Gallery1.JPEG")} alt="Gallery 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../images/Gallery2.JPEG")} alt="Gallery 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../images/Gallery3.JPEG")} alt="Gallery 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../images/Gallery4.JPEG")} alt="Gallery 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../images/Gallery5.JPEG")} alt="Gallery 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../images/Gallery6.JPEG")} alt="Gallery 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../images/Gallery7.JPEG")} alt="Gallery 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../images/Gallery8.JPEG")} alt="Gallery 8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../images/Gallery9.JPEG")} alt="Gallery 9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../images/Gallery10.JPEG")} alt="Gallery 10" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default GallerySlider;