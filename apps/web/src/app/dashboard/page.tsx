"use client";

import { SidebarDemo } from "@/components/Sidebar";
import React from "react";

const Dashboard = () => {
  const cards = [
    {
      title: "Total Tiket Terjual",
      value: "1,250",
      icon: "🎫",
      bgColor: "bg-gradient-to-r from-indigo-500 to-blue-600",
    },
    {
      title: "Total Penjualan",
      value: "$ 75,000,000",
      icon: "💸",
      bgColor: "bg-gradient-to-r from-green-500 to-emerald-700",
    },
    {
      title: "Total Pengunjung",
      value: "3,450",
      icon: "👥",
      bgColor: "bg-gradient-to-r from-pink-500 to-purple-600",
    },
    {
      title: "Total Transaksi",
      value: "980",
      icon: "💳",
      bgColor: "bg-gradient-to-r from-yellow-500 to-orange-600",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarDemo />
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} flex flex-col items-center justify-center w-full p-10 rounded-xl shadow-md hover:shadow-lg text-white transform transition-transform hover:scale-105`}
            >
              <div className="text-6xl mb-6">{card.icon}</div>
              <div className="text-center text-2xl font-semibold">
                {card.title}
              </div>
              <div className="text-center text-5xl font-bold mt-2">
                {card.value}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
