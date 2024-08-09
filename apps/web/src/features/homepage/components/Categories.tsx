"use client";

import { Button } from "@/components/ui/button";
import { FaArtstation, FaFilm, FaMusic, FaTheaterMasks } from "react-icons/fa";
import { GiHeartWings } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { MdSportsScore } from "react-icons/md";
import { SiDiscogs } from "react-icons/si";

import { useState } from "react";

const categoriesList = [
  { name: "Music", icon: FaMusic },
  { name: "Film", icon: FaFilm },
  { name: "Art", icon: FaArtstation },
  { name: "Theater", icon: FaTheaterMasks },
  { name: "Nightlife", icon: SiDiscogs },
  { name: "Sports", icon: MdSportsScore },
  { name: "Dating", icon: GiHeartWings },
  { name: "E-Sports", icon: IoGameController },
];

const Categories = () => {
  const [selectedSort, setSelectedSort] = useState("Newly_added");

  return (
    <div className="my-6 flex flex-col px-6 lg:my-16">
      <div className="lg:container lg:max-w-7xl lg:px-0">
        <div className="lg-flex-row grid grid-cols-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:justify-between">
          {categoriesList.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-y-2 text-center"
            >
              <Button
                variant="outline"
                className="flex h-16 w-16 items-center justify-center rounded-full hover:bg-[#0080ff]/[0.2] sm:h-20 sm:w-20 lg:h-24 lg:w-24"
              >
                <category.icon className="h-8 w-8 text-[#0080ff] hover:text-[#0066CC] sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
              </Button>
              <p className="text-xs font-medium text-gray-700 lg:text-sm">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
