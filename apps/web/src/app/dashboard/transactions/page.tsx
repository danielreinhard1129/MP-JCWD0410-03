"use client";

import { SidebarDemo } from "@/components/Sidebar";
import React, { useState } from "react";

interface Transaction {
  id: number;
  title: string;
  amount: string;
  date: string;
  user: string;
  proofUrl: string;
}

const Transaction = ({ transaction, onAccept, onReject }: any) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-lg rounded-lg p-6 transition-all transform hover:scale-105">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {transaction.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-400 mb-1">
        <span className="font-semibold">Amount:</span> {transaction.amount}
      </p>
      <p className="text-gray-700 dark:text-gray-400 mb-1">
        <span className="font-semibold">Date:</span> {transaction.date}
      </p>
      <p className="text-gray-700 dark:text-gray-400 mb-1">
        <span className="font-semibold">User:</span> {transaction.user}
      </p>
      <p className="text-gray-700 dark:text-gray-400 mb-4">
        <span className="font-semibold">Payment Proof:</span>{" "}
        <a
          href={transaction.proofUrl}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Proof
        </a>
      </p>
      <div className="flex gap-3 mt-4">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          onClick={() => onAccept(transaction.id)}
        >
          Accept
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          onClick={() => onReject(transaction.id)}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 1,
      title: "Transaction 1",
      amount: "$100",
      date: "2024-08-15",
      user: "Jacob",
      proofUrl: "https://example.com/proof-1",
    },
    {
      id: 2,
      title: "Transaction 2",
      amount: "$150",
      date: "2024-08-16",
      user: "Selena",
      proofUrl: "https://example.com/proof-2",
    },
    {
      id: 3,
      title: "Transaction 3",
      amount: "$150",
      date: "2024-08-17",
      user: "Marya",
      proofUrl: "https://example.com/proof-3",
    },
    {
      id: 4,
      title: "Transaction 4",
      amount: "$150",
      date: "2024-08-18",
      user: "Endrick",
      proofUrl: "https://example.com/proof-4",
    },
    {
      id: 5,
      title: "Transaction 5",
      amount: "$200",
      date: "2024-08-19",
      user: "Emily",
      proofUrl: "https://example.com/proof-5",
    },
    {
      id: 6,
      title: "Transaction 6",
      amount: "$250",
      date: "2024-08-20",
      user: "Michael",
      proofUrl: "https://example.com/proof-6",
    },
  ]);

  const handleAccept = (id: number) => {
    console.log(`Accepted transaction with id: ${id}`);
  };

  const handleReject = (id: number) => {
    console.log(`Rejected transaction with id: ${id}`);
  };

  return (
    <div className="flex min-h-screen">
      <SidebarDemo />
      <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 h-screen overflow-y-scroll">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Transactions Management
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transactions.map((transaction) => (
            <Transaction
              key={transaction.id}
              transaction={transaction}
              onAccept={handleAccept}
              onReject={handleReject}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default TransactionsPage;
