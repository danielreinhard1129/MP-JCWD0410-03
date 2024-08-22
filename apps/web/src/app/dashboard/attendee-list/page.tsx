"use client";

import { SidebarDemo } from "@/components/Sidebar";
import React from "react";

interface Attendee {
  name: string;
  ticketQuantity: number;
  totalPrice: number;
}

const AttendeeCard = ({ name, ticketQuantity, totalPrice }: any) => (
  <div className="flex flex-col space-y-4 rounded-lg border border-blue-300 bg-gradient-to-br from-blue-100 to-blue-200 p-6 shadow-lg dark:border-blue-600 dark:from-blue-800 dark:to-blue-900">
    <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">
      {name}
    </h3>
    <div className="flex flex-col space-y-2">
      <p className="text-blue-600 dark:text-blue-400">
        Tickets: <span className="font-semibold">{ticketQuantity}</span>
      </p>
      <p className="text-blue-600 dark:text-blue-400">
        Total Price: <span className="font-semibold">{totalPrice}</span>
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
    <div className="flex">
      <SidebarDemo />
      <main className="min-h-screen flex-1 overflow-y-auto bg-neutral-100 p-6 dark:bg-neutral-900">
        <h1 className="mb-8 text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
          Attendee List
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
