"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import useGetEvents from "@/hooks/api/event/useGetEvents";
import Link from "next/link";
import { format } from "date-fns";

//   {
//     id: 1,
//     category: "Music",
//     image:
//       "https://api.yesplis.com/images/banner/c0faa7e4668eba9cbcc54c9f651dbc3038e39aed.png",
//     title: "Pemsi Music Fest 2024",
//     city: "Nusa Tenggara Timur",
//     date: "12-15 August 2024",
//     price: "50.000",
//   },
//   {
//     id: 2,
//     category: "Art",
//     image:
//       "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F332764309%2F153745516453%2F1%2Foriginal.20220810-022309?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=a16a1e3b7cc7c38640e4bcc44ac6db80",
//     title: "Ramayana Purawisata",
//     city: "Yogyakarta",
//     date: "12-15 August 2024",
//     price: "50.000",
//   },
//   {
//     id: 3,
//     category: "Music",
//     image:
//       "https://api.yesplis.com/images/banner/d27f091ed6f51f323b2e20e8157034983b0f0333.png",
//     title: "Spirit 58 SMADA",
//     city: "Yogyakarta",
//     date: "8-12 September 2024",
//     price: "135.000",
//   },
//   {
//     id: 4,
//     category: "Music",
//     image:
//       "https://api.yesplis.com/images/banner/317f68f2242d7ec4365d7e1dbd1f924ff4b69072.png",
//     title: "Giginitify X BCA",
//     city: "Jakarta",
//     date: "24 August 2024",
//     price: "450.000",
//   },
//   {
//     id: 5,
//     category: "Music",
//     image:
//       "https://api.yesplis.com/images/banner/98bb5dc6c14848e52ded72c2e22c2b5cb8143c4c.png",
//     title: "Nusantarock",
//     city: "Yogyakarta",
//     date: "12-15 October 2024",
//     price: "50.000",
//   },
//   {
//     id: 6,
//     category: "Music",
//     image:
//       "https://api.yesplis.com/images/banner/317f68f2242d7ec4365d7e1dbd1f924ff4b69072.png",
//     title: "Heritage 90's Concert",
//     city: "Bali",
//     date: "01 November 2024",
//     price: "850.000",
//   },
// ];

interface EventTrendingProps {
  id: number;
  title: string;
  address: string;
  thumbnail: string;
  price: number;
  startDate: Date;
  endDate: Date;
  quota: number;
  booked: number;
  categories: string;
  description: string;
  is_deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const EventTrendingCards: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const { data, isPending } = useGetEvents({
    take: 5,
  });

  return (
    <div className="group relative mt-[30px] flex-col px-6 lg:container lg:mt-[30px] lg:flex lg:max-w-7xl lg:gap-8 lg:px-0">
      <div className="flex flex-row items-center justify-between">
        <p className="text-2xl font-semibold">Trending Now</p>

        {/* Navigation buttons for desktop */}
        <div className="hidden flex-row gap-4 md:flex">
          <button
            className="flex items-center justify-center rounded-full bg-gray-500 p-3 text-white opacity-50 transition-opacity duration-300 hover:opacity-100"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <IoIosArrowBack />
          </button>
          <button
            className="flex items-center justify-center rounded-full bg-gray-500 p-3 text-white opacity-50 transition-opacity duration-300 hover:opacity-100"
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div className="mt-5 overflow-hidden">
        <Swiper
          spaceBetween={15}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation, Pagination]}
          className="relative"
          ref={swiperRef}
          breakpoints={{
            640: {
              slidesPerView: 1.2, // Lebih kecil pada layar mobile
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2, // tablet
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4, // desktop
              spaceBetween: 20,
            },
          }}
        >
          {data?.data.map((event: any) => (
            <SwiperSlide key={event.id}>
              <Link href={`/events/${event.id}`}>
                <div className="w-full overflow-hidden rounded-lg border border-gray-200">
                  <img
                    src={event.thumbnail}
                    alt={event.title}
                    className="h-[150px] w-full object-cover md:h-[180px]"
                  />
                  <div className="p-4">
                    <p className="truncate text-sm font-bold text-red-500">
                      {event.categories}
                    </p>
                    <h4 className="text-md text-blue-gray-900 mt-2 truncate font-semibold">
                      {event.title}
                    </h4>
                    <p className="mt-2 truncate text-sm text-gray-600">
                      {event.address}
                    </p>
                    <p className="mt-1 truncate text-sm text-gray-600">
                    {format(event.startDate, "dd MMM yyyy")} -{" "}
                    {format(event.endDate, "dd MMM yyyy")}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t-[1px] border-gray-200 pt-2">
                      <p className="text-xs text-gray-500">Price</p>
                      <p className="font-bold">IDR {event.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EventTrendingCards;
