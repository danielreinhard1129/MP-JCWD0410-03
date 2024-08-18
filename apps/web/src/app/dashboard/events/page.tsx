"use client";

import { SidebarDemo } from "@/components/Sidebar";
import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaDollarSign, FaTicketAlt, FaTag } from "react-icons/fa";

interface Attendee {
  name: string;
  ticketQuantity: number;
  totalPrice: number;
}

const EventTicket = ({ title, date, venue, price, ticketsAvailable }: any) => (
  <div className="bg-gradient-to-br from-blue-200 to-blue-100 dark:from-blue-800 dark:to-blue-900 border border-blue-300 dark:border-blue-600 shadow-lg rounded-lg p-4 flex flex-col transition-transform transform hover:scale-105">
    <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-blue-200 flex items-center">
      <FaTag className="mr-2" /> {title}
    </h3>
    <p className="text-blue-700 dark:text-blue-400 flex items-center">
      <FaCalendarAlt className="mr-2" /> {date}
    </p>
    <p className="text-blue-700 dark:text-blue-400 flex items-center">
      <FaMapMarkerAlt className="mr-2" /> {venue}
    </p>
    <p className="text-blue-700 dark:text-blue-400 flex items-center">
      <FaDollarSign className="mr-2" /> {price}
    </p>
    <p className="text-blue-700 dark:text-blue-400 flex items-center">
      <FaTicketAlt className="mr-2" /> Available: {ticketsAvailable}
    </p>
    {ticketsAvailable > 0 && (
      <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
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
      <main className="p-6 bg-neutral-100 dark:bg-neutral-900 flex-1 h-screen overflow-y-scroll">
        <h1 className="text-3xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
          Event Tickets
        </h1>

        <div className="mb-6">
          <button
            className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors"
            onClick={() => console.log("Create Event button clicked")}
          >
            Create Event
          </button>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-medium mb-3 text-neutral-700 dark:text-neutral-300">
              Current Event Tickets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
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
            <h2 className="text-2xl font-medium mb-3 text-neutral-700 dark:text-neutral-300">
              Past Event Tickets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
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
