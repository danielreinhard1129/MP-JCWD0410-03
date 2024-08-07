'use client'

import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const JumbotronLanding = () => {
  return (
    <div>
      <div className="flex container max-w-7xl px-0 my-[60px] justify-center">
        {/* Start Title */}
        <div className="flex flex-col font-semibold text-center gap-y-16 max-w-4xl">
          <div className="flex flex-col gap-y-6" >
            <p className="text-4xl">Ronmes Sphere - Your Event, Your Way</p>
            <p className="font-normal">
              Your Ultimate Destination for Event Tickets - Experience the
              Magic, Enjoy Every Moment, and Engage with Unforgettable
              Experiences
            </p>
          </div>
          <div className="flex flex-row justify-center gap-x-10">
            <Button className="bg-[#0080ff] hover:bg-[#0066CC]">
              <Link href="#">Create Event Now</Link>
              <FaArrowRightLong className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="text-[#0080ff] hover:text-[#0066CC]">
              <Link href="#">Find Interesting Events</Link>
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
