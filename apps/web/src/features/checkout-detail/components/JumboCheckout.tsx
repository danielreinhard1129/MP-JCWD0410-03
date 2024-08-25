import useGetEvent from "@/hooks/api/event/useGetEvent";
import useGetTransaction from "@/hooks/api/transaction/useGetTransaction";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export interface JumboProps {
  thumbnail: string;
  title: string;
  address: string;
  startDate: Date;
  endDate: Date;
  eventId: number;
}

const JumboCheckout: React.FC<JumboProps> = ({
  thumbnail,
  title,
  address,
  startDate,
  endDate,
  eventId,
}) => {
  const { data, isPending } = useGetTransaction(eventId);

  if (isPending) {
    return <h1>loading..</h1>;
  }

  if (!data) {
    return notFound();
  }

  const totalTicket = data.qty;

  return (
    <div>
      <div>
        <div className="container px-6 lg:container lg:max-w-7xl lg:px-0">
          <div className="lg:flex lg:flex-row lg:justify-between lg:gap-4">
            <img
              src={thumbnail}
              alt="banner"
              className="h-[200px] w-full rounded-md object-fill md:h-[300px] md:w-full lg:h-[350px] lg:w-[850px] lg:object-fill"
            />
            <div className="flex flex-col gap-3 lg:mx-0 lg:h-auto lg:w-[400px] lg:justify-between lg:rounded-xl lg:border-[1px] lg:px-5 lg:py-5 lg:shadow-md">
              <div className="mt-3 lg:flex lg:flex-col lg:gap-4 lg:border-b-[1px] lg:border-b-gray-200 lg:pb-4">
                <p className="truncate text-xl font-semibold">{title}</p>
                {/* Icon  */}
                <div className="flex flex-col gap-1.5 lg:flex lg:flex-col lg:gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <FaCalendarAlt className="text-[#0080ff]" />
                    <p className="text-sm text-gray-500">
                      {format(startDate, "dd MMM yyyy")} -{" "}
                      {format(endDate, "dd MMM yyyy")}
                    </p>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    <FaClock className="text-[#0080ff]" />
                    <p className="text-sm text-gray-500">
                      {" "}
                      {format(startDate, "HH:mm")} - {format(endDate, "HH:mm")}
                    </p>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    <FaLocationDot className="text-[#0080ff]" />
                    <p className="text-sm text-gray-500">{address}</p>
                  </div>
                </div>
              </div>

              {/* Penyelenggara */}
              <div className="flex flex-col justify-center gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-xs">Total Price</p>
                  <p className="text-2xl font-semibold">{`IDR ${data.event.price * totalTicket}`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumboCheckout;
