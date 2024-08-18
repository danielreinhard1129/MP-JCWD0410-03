"use client";

import React from "react";

const Dashboard = () => {
  const cards = [
    {
      title: "Jumlah Tiket Terjual",
      value: "1,250",
      icon: "🎫",
      bgColor: "bg-gradient-to-r from-indigo-500 to-blue-600",
    },
    {
      title: "Jumlah Penjualan",
      value: "Rp 75,000,000",
      icon: "💸",
      bgColor: "bg-gradient-to-r from-green-500 to-emerald-700",
    },
    {
      title: "Jumlah Pengunjung",
      value: "3,450",
      icon: "👥",
      bgColor: "bg-gradient-to-r from-pink-500 to-purple-600",
    },
    {
      title: "Jumlah Transaksi",
      value: "980",
      icon: "💳",
      bgColor: "bg-gradient-to-r from-yellow-500 to-orange-600",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} flex flex-col items-center justify-center w-full sm:w-[48%] md:w-[45%] lg:w-[40%] p-8 rounded-xl shadow-lg text-white transform transition-transform hover:scale-105`}
          >
            <div className="text-5xl mb-4">{card.icon}</div>
            <div className="text-center text-xl font-semibold">{card.title}</div>
            <div className="text-center text-4xl font-bold">{card.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
