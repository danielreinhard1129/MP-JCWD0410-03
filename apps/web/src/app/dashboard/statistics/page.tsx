"use client";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { SidebarDemo } from "@/components/Sidebar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Statistics: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dataYearly = {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        label: "Jumlah Acara",
        data: [30, 45, 60],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const dataMonthly = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    datasets: [
      {
        label: "Jumlah Acara",
        data: [5, 10, 8, 15, 12, 20, 18, 25, 22, 30, 28, 35],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  const dataDaily = {
    labels: Array.from({ length: 31 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Jumlah Acara",
        data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 5)),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
    ],
  };

  return (
    <div className="flex h-screen">
      <SidebarDemo open={sidebarOpen} setOpen={setSidebarOpen} />

      <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
          Statistics
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="h-80 w-full rounded-lg dark:bg-neutral-700 p-4">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              Data Tahunan
            </h2>
            <Bar data={dataYearly} />
          </div>

          <div className="h-80 w-full rounded-lg dark:bg-neutral-700 p-4">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              Data Bulanan
            </h2>
            <Bar data={dataMonthly} />
          </div>

          <div className="h-80 w-full rounded-lg dark:bg-neutral-700 p-4">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              Data Harian
            </h2>
            <Bar data={dataDaily} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Statistics;
