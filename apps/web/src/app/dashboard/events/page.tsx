"use client";

import { SidebarDemo } from "@/components/Sidebar";
import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaDollarSign,
  FaTicketAlt,
  FaTag,
} from "react-icons/fa";

const EventTicket = ({ title, date, venue, price, ticketsAvailable }: any) => (
  <div className="flex transform flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
    <h3 className="mb-2 flex items-center text-lg font-semibold text-gray-800">
      <FaTag className="mr-2 text-blue-500" /> {title}
    </h3>
    <p className="mb-1 flex items-center text-gray-600">
      <FaCalendarAlt className="mr-2 text-blue-400" /> {date}
    </p>
    <p className="mb-1 flex items-center text-gray-600">
      <FaMapMarkerAlt className="mr-2 text-blue-400" /> {venue}
    </p>
    <p className="mb-1 flex items-center text-gray-600">
      <FaDollarSign className="mr-2 text-blue-400" /> {price}
    </p>
    <p className="mb-4 flex items-center text-gray-600">
      <FaTicketAlt className="mr-2 text-blue-400" /> Available:{" "}
      {ticketsAvailable}
    </p>
    {ticketsAvailable > 0 && (
      <button className="mt-auto rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
        Buy Now
      </button>
    )}
  </div>
);

const EventsPage = () => {
  const currentEvents = [
    {
      title: "Summer Music Fest",
      date: "August 15, 2024",
      venue: "Main Hall",
      price: "$50",
      ticketsAvailable: "100",
    },
    {
      title: "Tech Innovation Summit",
      date: "August 22, 2024",
      venue: "Conference Room A",
      price: "$60",
      ticketsAvailable: "50",
    },
    {
      title: "Art and Culture Exhibition",
      date: "August 29, 2024",
      venue: "Gallery Hall",
      price: "$40",
      ticketsAvailable: "200",
    },
    {
      title: "Annual Charity Gala",
      date: "September 5, 2024",
      venue: "Grand Ballroom",
      price: "$70",
      ticketsAvailable: "30",
    },
    {
      title: "Food and Drink Festival",
      date: "September 10, 2024",
      venue: "Park Grounds",
      price: "$55",
      ticketsAvailable: "150",
    },
    {
      title: "Fashion Show Extravaganza",
      date: "September 15, 2024",
      venue: "Event Center",
      price: "$65",
      ticketsAvailable: "75",
    },
  ];

  const pastEvents = [
    {
      title: "Winter Wonderland Concert",
      date: "July 15, 2024",
      venue: "Main Hall",
      price: "$55",
      ticketsAvailable: "0",
    },
    {
      title: "Startup Showcase",
      date: "July 22, 2024",
      venue: "Conference Room B",
      price: "$45",
      ticketsAvailable: "0",
    },
    {
      title: "Classic Car Show",
      date: "July 29, 2024",
      venue: "Parking Lot A",
      price: "$65",
      ticketsAvailable: "0",
    },
    {
      title: "Historical Drama Performance",
      date: "August 5, 2024",
      venue: "Theater Stage",
      price: "$75",
      ticketsAvailable: "0",
    },
    {
      title: "Beachside BBQ Bash",
      date: "August 12, 2024",
      venue: "Beachfront",
      price: "$50",
      ticketsAvailable: "0",
    },
    {
      title: "Gourmet Wine Tasting",
      date: "August 19, 2024",
      venue: "Wine Cellar",
      price: "$60",
      ticketsAvailable: "0",
    },
  ];

  return (
    <div className="flex">
      <SidebarDemo />
      <main className="h-screen flex-1 overflow-y-scroll bg-gray-50 p-8">
        <h1 className="mb-8 text-4xl font-semibold text-gray-800">
          Event Tickets
        </h1>

        <div className="mb-8">
          <button
            className="rounded-lg bg-green-600 px-6 py-2 text-white transition-colors hover:bg-green-700"
            onClick={() => console.log("Create Event button clicked")}
          >
            Create Event
          </button>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="mb-6 text-2xl font-medium text-gray-700">
              Current Event Tickets
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {currentEvents.map((event, index) => (
                <EventTicket
                  key={index}
                  title={event.title}
                  date={event.date}
                  venue={event.venue}
                  price={event.price}
                  ticketsAvailable={event.ticketsAvailable}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-medium text-gray-700">
              Past Event Tickets
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {pastEvents.map((event, index) => (
                <EventTicket
                  key={index}
                  title={event.title}
                  date={event.date}
                  venue={event.venue}
                  price={event.price}
                  ticketsAvailable={event.ticketsAvailable}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventsPage;
