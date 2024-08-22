"use client";

import { SidebarDemo } from "@/components/Sidebar";
import React from "react";

interface Attendee {
  name: string;
  ticketQuantity: number;
  totalPrice: number;
}

const AttendeeCard = ({ name, ticketQuantity, totalPrice }: any) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col space-y-4 transition-transform transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    <div className="flex flex-col space-y-2">
      <p className="text-gray-600">
        Tickets: <span className="font-semibold text-gray-800">{ticketQuantity}</span>
      </p>
      <p className="text-gray-600">
        Total Price: <span className="font-semibold text-gray-800">{totalPrice}</span>
      </p>
    </div>
  </div>
);

const AttendeeListPage = () => {
  const attendees = [
    { id: 1, name: "John Doe", ticketQuantity: 2, totalPrice: "$100" },
    { id: 2, name: "Jane Smith", ticketQuantity: 1, totalPrice: "$50" },
    { id: 3, name: "Bob Johnson", ticketQuantity: 3, totalPrice: "$150" },
    { id: 4, name: "Joko Sitahong", ticketQuantity: 5, totalPrice: "$170" },
    { id: 5, name: "Arshavin", ticketQuantity: 3, totalPrice: "$250" },
  ];

  return (
    <div className="flex min-h-screen">
      <SidebarDemo />
      <main className="flex-1 p-8 bg-gray-50 h-screen overflow-y-scroll">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Attendee List
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {attendees.map((attendee) => (
            <AttendeeCard
              key={attendee.id}
              name={attendee.name}
              ticketQuantity={attendee.ticketQuantity}
              totalPrice={attendee.totalPrice}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AttendeeListPage;
