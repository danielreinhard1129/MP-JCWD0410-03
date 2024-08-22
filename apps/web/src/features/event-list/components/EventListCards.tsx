"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Pagination from "@/components/Pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useGetEvent from "@/hooks/api/event/useGetEvent";
import useGetEvents from "@/hooks/api/event/useGetEvents";
import { Loader2 } from "lucide-react";


interface Event {
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

const EventListCards: React.FC = () => {
  const [selectedSort, setSelectedSort] = useState("Newly_added");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);

  const { data, isPending } = useGetEvents({
    page,
    take: 5,
  });


  const onPageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  if (isPending) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  if (!data) {
    return <h1 className="text-center">Event tidak ditemukan</h1>;
  }

  return (
    <div className="mb-6 px-4 lg:container lg:my-[60px] lg:max-w-7xl lg:px-0">
      <p className="mb-4 text-2xl font-semibold">Events List</p>

      <div className="mb-6 flex flex-col gap-4 md:flex md:flex-row lg:flex-row lg:gap-6">
        {/* Sort by */}
        <div className="flex w-full flex-row gap-4">
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
              value={selectedCategory}
              onValueChange={(value) => setSelectedCategory(value)}
            >
              <SelectTrigger className="w-full lg:w-[150px]">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Music">Music</SelectItem>
                  <SelectItem value="Film">Film</SelectItem>
                  <SelectItem value="Art">Art</SelectItem>
                  <SelectItem value="Theater">Theater</SelectItem>
                  <SelectItem value="Nightlife">Nightlife</SelectItem>
                  <SelectItem value="Sports">Sports</SelectItem>
                  <SelectItem value="Dating">Dating</SelectItem>
                  <SelectItem value="E-Sports">E-Sports</SelectItem>
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

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {data.data.map((event: any) => (
          <Link href={`/events/${event.id}`} key={event.id}>
            <div className="w-full cursor-pointer overflow-hidden rounded-lg border border-gray-200 hover:shadow-sm">
              <div className="m-0 rounded-none">
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="h-[100px] w-full object-fill lg:h-[150px] lg:object-cover"
                />
              </div>
              <div className="p-3">
                <p className="truncate text-xs font-bold text-red-500 lg:text-sm">
                  {event.categories}
                </p>
                <h4 className="lg:text-md text-blue-gray-900 mt-2 truncate text-sm font-semibold">
                  {event.title}
                </h4>
                <p className="mt-2 truncate text-xs text-gray-600 lg:text-sm">
                  {event.address}
                </p>
                <p className="mt-2 truncate text-xs text-gray-600 lg:text-sm">
                  {new Date(event.startDate).toLocaleDateString()}
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
        <Pagination
          total={data.meta.total || 0}
          take={data.meta.take||0}
          onPageChange={onPageChange}
          page={page}
        />
      </div>
    </div>
  );
};

export default EventListCards;
