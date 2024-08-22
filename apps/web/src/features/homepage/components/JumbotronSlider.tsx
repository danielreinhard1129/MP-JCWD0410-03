"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const images = [
  "https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1722412645_OyeHK5.png",
  "https://api.yesplis.com/images/banner/c03ac34fbe715537adedc837e884866bd0a03b15.png",
  "https://api.yesplis.com/images/banner/c0faa7e4668eba9cbcc54c9f651dbc3038e39aed.png",
  "https://assets.loket.com/neo/production/images/banner/20240715202722_669523ba5fa58.jpg",
  "https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1690260495_PraZyu.jpg",
];

export default function JumbotronSlider() {
  return (
    <div className="relative p-6 lg:mt-[40px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper my-[30px] h-[200px] rounded-lg lg:my-[0px] lg:h-[350px] lg:max-w-7xl lg:rounded-lg"
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="absolute inset-0 h-full w-full object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
