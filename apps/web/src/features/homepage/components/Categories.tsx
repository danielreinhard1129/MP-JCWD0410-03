"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { FaMusic, FaFilm, FaArtstation, FaTheaterMasks } from "react-icons/fa";
import { SiDiscogs } from "react-icons/si";
import { MdSportsScore } from "react-icons/md";
import { GiHeartWings } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

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
    <div className="my-[60px] flex flex-col gap-14">
      <div className="container my-[0px] flex max-w-7xl flex-row justify-between px-0">
        {categoriesList.map((category, index) => (
          <div key={index} className="flex flex-col gap-y-3 text-center">
            <Button
              variant="outline"
              className="h-[100px] w-[100px] rounded-full hover:bg-[#0080ff]/[0.2]"
            >
              <category.icon className="h-8 w-8" />
            </Button>
            <p className="">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
