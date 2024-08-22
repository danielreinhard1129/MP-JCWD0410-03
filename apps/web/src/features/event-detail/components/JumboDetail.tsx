import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export interface JumboProps {
  thumbnail: string;
  category?: string;
  title: string;
  address: string;
}

const JumboDetail: React.FC<JumboProps> = ({
  thumbnail,
  category,
  title,
  address,
}) => {
  return (
    <div>
      <div className="container px-6 lg:container lg:max-w-7xl lg:px-0">
        <div className="lg:flex lg:flex-row lg:justify-between lg:gap-4">
          <img
            src={thumbnail}
            alt="banner"
            className="h-[200px] w-full rounded-md object-fill md:h-[300px] md:w-full lg:h-[350px] lg:w-[850px]"
          />
          <div className="flex flex-col gap-3 lg:mx-0 lg:h-auto lg:w-[400px] lg:justify-between lg:rounded-xl lg:border-[1px] lg:px-5 lg:py-8 lg:shadow-md">
            <div className="mt-3 lg:flex lg:flex-col lg:gap-4">
              <p className="text- text-xs font-bold text-red-500">Music</p>
              <p className="truncate text-xl font-semibold">{title}</p>
              {/* Icon  */}
              <div className="flex flex-col gap-1.5 lg:flex lg:flex-col lg:gap-2">
                <div className="flex flex-row items-center gap-2">
                  <FaCalendarAlt className="text-[#0080ff]" />
                  <p className="text-sm text-gray-500">21 August 2024</p>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <FaClock className="text-[#0080ff]" />
                  <p className="text-sm text-gray-500">19:00 - 21:00 WIB</p>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <FaLocationDot className="text-[#0080ff]" />
                  <p className="text-sm text-gray-500">{address}</p>
                </div>
              </div>
            </div>

            {/* Penyelenggara */}
            <div className="mt-[8px] flex flex-row gap-2">
              <img
                src="https://th.bing.com/th/id/OIP.yYxEtQljA2Abchk6HC8iUAHaHa?rs=1&pid=ImgDetMain"
                alt="Company logo"
                className="h-[50px] w-[50px] rounded-full"
              />

              <div className="flex flex-col justify-center gap-1">
                <p className="text-sm font-normal text-gray-500">
                  Diselenggarakan Oleh
                </p>
                <p className="text-sm font-bold">Purwadhika Entertaiment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumboDetail;
