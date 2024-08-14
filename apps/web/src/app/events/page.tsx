"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const eventData = [
  {
    id: 1,
    category: "Music",
    image:
      "https://api.yesplis.com/images/banner/c0faa7e4668eba9cbcc54c9f651dbc3038e39aed.png",
    title: "Pemsi Music Fest 2024",
    city: "Nusa Tenggara Timur",
    date: "12-15 August 2024",
    price: "50.000",
  },
  {
    id: 2,
    category: "Art",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F332764309%2F153745516453%2F1%2Foriginal.20220810-022309?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=a16a1e3b7cc7c38640e4bcc44ac6db80",
    title: "Ramayana Purawisata",
    city: "Yogyakarta",
    date: "12-15 August 2024",
    price: "50.000",
  },
  {
    id: 3,
    category: "Music",
    image:
      "https://api.yesplis.com/images/banner/d27f091ed6f51f323b2e20e8157034983b0f0333.png",
    title: "Spirit 58 SMADA",
    city: "Yogyakarta",
    date: "8-12 September 2024",
    price: "135.000",
  },
  {
    id: 4,
    category: "Music",
    image:
      "https://api.yesplis.com/images/banner/317f68f2242d7ec4365d7e1dbd1f924ff4b69072.png",
    title: "Giginitify X BCA",
    city: "Jakarta",
    date: "24 August 2024",
    price: "450.000",
  },
  {
    id: 5,
    category: "Music",
    image:
      "https://api.yesplis.com/images/banner/98bb5dc6c14848e52ded72c2e22c2b5cb8143c4c.png",
    title: "Nusantarock",
    city: "Yogyakarta",
    date: "12-15 October 2024",
    price: "50.000",
  },
  {
    id: 6,
    category: "Music",
    image:
      "https://assets.loket.com/neo/production/images/banner/20240503020209.png",
    title: "Heritage 90's Concert",
    city: "Bali",
    date: "01 November 2024",
    price: "850.000",
  },
  {
    id: 7,
    category: "Music",
    image:
      "https://assets.loket.com/neo/production/images/banner/20240503020209.png",
    title: "Heritage 90's Concert",
    city: "Bali",
    date: "01 November 2024",
    price: "850.000",
  },
  {
    id: 8,
    category: "Music",
    image:
      "https://assets.loket.com/neo/production/images/banner/20240503020209.png",
    title: "Heritage 90's Concert",
    city: "Bali",
    date: "01 November 2024",
    price: "850.000",
  },
  {
    id: 9,
    category: "Music",
    image:
      "https://api.yesplis.com/images/banner/c0faa7e4668eba9cbcc54c9f651dbc3038e39aed.png",
    title: "Pemsi Music Fest 2024",
    city: "Nusa Tenggara Timur",
    date: "12-15 August 2024",
    price: "50.000",
  },
  {
    id: 10,
    category: "Music",
    image:
      "https://api.yesplis.com/images/banner/c0faa7e4668eba9cbcc54c9f651dbc3038e39aed.png",
    title: "Pemsi Music Fest 2024",
    city: "Nusa Tenggara Timur",
    date: "12-15 August 2024",
    price: "50.000",
  },
  {
    id: 11,
    category: "Music",
    image:
      "https://api.yesplis.com/images/banner/c0faa7e4668eba9cbcc54c9f651dbc3038e39aed.png",
    title: "Pemsi Music Fest 2024",
    city: "Nusa Tenggara Timur",
    date: "12-15 August 2024",
    price: "50.000",
  },
  {
    id: 12,
    category: "Music",
    image:
      "https://api.yesplis.com/images/banner/c0faa7e4668eba9cbcc54c9f651dbc3038e39aed.png",
    title: "Pemsi Music Fest 2024",
    city: "Nusa Tenggara Timur",
    date: "12-15 August 2024",
    price: "50.000",
  },
  {
    id: 13,
    category: "Music",
    image:
      "https://api.yesplis.com/images/banner/c0faa7e4668eba9cbcc54c9f651dbc3038e39aed.png",
    title: "Pemsi Music Fest 2024",
    city: "Nusa Tenggara Timur",
    date: "12-15 August 2024",
    price: "50.000",
  },
  {
    id: 14,
    category: "Music",
    image:
      "https://assets.loket.com/neo/production/images/banner/20240503020209.png",
    title: "Heritage 90's Concert",
    city: "Bali",
    date: "01 November 2024",
    price: "850.000",
  },
  {
    id: 15,
    category: "Music",
    image:
      "https://api.yesplis.com/images/banner/98bb5dc6c14848e52ded72c2e22c2b5cb8143c4c.png",
    title: "Nusantarock",
    city: "Yogyakarta",
    date: "12-15 October 2024",
    price: "50.000",
  },
];

const Events: React.FC = () => {
  const [selectedSort, setSelectedSort] = useState("Newly_added");
  const [showAll, setShowAll] = useState(false);

  const eventsToShow = showAll ? eventData : eventData.slice(0, 8);

  return (
    <div className="mb-6 px-4 lg:container lg:my-[60px] lg:max-w-7xl lg:px-0">
      <p className="mb-4 text-2xl font-semibold">Events List</p>

      <div className="mb-6 flex flex-col gap-4 md:flex md:flex-row lg:flex-row lg:gap-6">
        {/* Sort by */}
        <div className="flex w-full flex-row gap-4">
          {" "}
          <div className="w-full lg:w-fit">
            <Select
              value={selectedSort}
              onValueChange={(value) => setSelectedSort(value)}
            >
              <SelectTrigger className="w-full lg:w-[150px]">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Newly_added">Newly Added</SelectItem>
                  <SelectItem value="closest_date">Closest Date</SelectItem>
                  <SelectItem value="longest_date">Longest Date</SelectItem>
                  <SelectItem value="price_low_asc">
                    Price Low to High
                  </SelectItem>
                  <SelectItem value="price_high_dsc">
                    Price High to Low
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* Category */}
          <div className="w-full lg:w-fit">
            <Select
              value={selectedSort}
              onValueChange={(value) => setSelectedSort(value)}
            >
              <SelectTrigger className="w-full lg:w-[150px]">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Newly_added">All Events</SelectItem>
                  <SelectItem value="closest_date">Music</SelectItem>
                  <SelectItem value="longest_date">Film</SelectItem>
                  <SelectItem value="price_low_asc">Art</SelectItem>
                  <SelectItem value="price_high_dsc">Theater</SelectItem>
                  <SelectItem value="price_high_dsc">Nightlife</SelectItem>
                  <SelectItem value="price_high_dsc">Sports</SelectItem>
                  <SelectItem value="price_high_dsc">Dating</SelectItem>
                  <SelectItem value="price_high_dsc">E-Sports</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Event Location */}
        <div className="w-full lg:w-[400px]">
          <div className="flex w-full items-center space-x-2">
            <Input
              type="text"
              placeholder="Search Location"
              className="flex-grow"
            />
            <Button
              type="button"
              className="hidden bg-[#FF8000] hover:bg-[#E67300]"
            >
              <FaLocationDot />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 lg:gap-6">
        {eventsToShow.map((event) => (
          <Link href={`/events/${event.id}`}>
            <div
              className="w-full cursor-pointer overflow-hidden rounded-lg border border-gray-200 hover:shadow-sm"
              key={event.id}
            >
              <div className="m-0 rounded-none">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-[100px] w-full object-fill lg:h-[150px] lg:object-cover"
                />
              </div>
              <div className="p-3">
                <p className="truncate text-xs font-bold text-red-500 lg:text-sm">
                  {event.category}
                </p>
                <h4 className="lg:text-md text-blue-gray-900 mt-2 truncate text-sm font-semibold">
                  {event.title}
                </h4>
                <p className="mt-2 truncate text-xs text-gray-600 lg:text-sm">
                  {event.city}
                </p>
                <p className="mt-2 truncate text-xs text-gray-600 lg:text-sm">
                  {event.date}
                </p>
              </div>
              <div className="flex items-center justify-between border-t-[1px] border-gray-200 p-3">
                <p className="text-xs text-gray-500">Price</p>
                <p className="text-sm font-bold">IDR {event.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Events;
