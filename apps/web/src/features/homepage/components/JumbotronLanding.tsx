"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const JumbotronLanding = () => {
  return (
    <div className="mt-[30px] px-6 lg:mt-[60px]">
      <div className="mx-auto flex flex-col items-center lg:container lg:max-w-7xl lg:px-0">
        {/* Start Title */}
        <div className="text-center lg:flex lg:flex-col lg:justify-center lg:text-center">
          <div className="mb-10 flex flex-col gap-y-6 lg:mb-16">
            <p className="text-2xl font-semibold md:text-3xl lg:text-6xl">
              Ronmes Sphere - Your Event, Your Way
            </p>
            <p className="text-base font-normal text-gray-600 md:text-lg lg:text-xl">
              Your Ultimate Destination for Event Tickets - Experience the
              Magic, Enjoy Every Moment, and Engage with Unforgettable
              Experiences
            </p>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:justify-center md:gap-8 lg:flex-row lg:gap-10">
            <Button className="w-full bg-[#0080ff] hover:bg-[#0066CC] md:w-auto">
              <Link href="#">Create Event Now</Link>
              <FaArrowRightLong className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="w-full text-[#0080ff] hover:text-[#0066CC] md:w-auto"
            >
              <Link href="/events">Find Interesting Events</Link>
              <FaArrowRightLong className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* End Title */}
      </div>
    </div>
  );
};

export default JumbotronLanding;
