// Import Swiper React components
'use client'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
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
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper max-w-7xl h-[400px] max-h-400 object-fill rounded-lg my-[60px]"
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide,${index}`}
              className="h-full w-full object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
