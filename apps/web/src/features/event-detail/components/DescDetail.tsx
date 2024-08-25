"use client";

import Markdown from "@/components/Markdown";
import { TicketCounter } from "@/components/TicketCounter";
import { Button } from "@/components/ui/button";
import useGetEvent from "@/hooks/api/event/useGetEvent";
import useCreateTransaction from "@/hooks/api/transaction/useCreateTransaction";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";

export interface DescDetailProps {
  description: string;
  eventId: number;
}

const DescDetail: React.FC<DescDetailProps> = ({ description, eventId }) => {
  const [activeTab, setActiveTab] = useState<"description" | "ticket">(
    "description",
  );
  const [ticketCount, setTicketCount] = useState(1);
  const router = useRouter();
  const createTransaction = useCreateTransaction();

  const [selectedBank, setSelectedBank] = useState("BRI");
  const [virtualAccount, setVirtualAccount] = useState("098237712381283");
  const { data } = useGetEvent(eventId);

  const handleCheckout = () => {
    createTransaction.mutate({
      eventId: eventId,
      qty: ticketCount,
      status: "WAITING_FOR_PAYMENT",
      paymentMethod: selectedBank,
    });
    onSuccess: (data: any) => {
      router.push(`/checkout/${data.id}`);
    };
    onerror: (error: any) => {
      console.error("Transaction Failed", error);
    };
  };

  const handleBankChange = (e: any) => {
    const bank = e.target.value;
    setSelectedBank(bank);

    switch (bank) {
      case "BRI":
        setVirtualAccount("098237712381283");
        break;
      case "BNI":
        setVirtualAccount("123456789012345");
        break;
      case "BCA":
        setVirtualAccount("678901234567890");
        break;
      default:
        setVirtualAccount("");
    }
  };

  return (
    <div>
      <div className="container mt-[30px] px-6 lg:container lg:flex lg:max-w-7xl lg:flex-row lg:justify-between lg:px-0">
        {/* Description */}
        <div className="lg:flex lg:flex-col">
          <div className="flex border-b">
            <button
              className={`px-4 py-2 text-lg font-medium ${activeTab === "description" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`px-4 py-2 text-lg font-medium ${activeTab === "ticket" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}
              onClick={() => setActiveTab("ticket")}
            >
              Ticket
            </button>
          </div>
          <div className="lg:border-[2px lg:mt-6 lg:w-[850px]">
            <div className="mt-4">
              {activeTab === "description" && (
                <div className="lg:max-w-[850px]">
                  <div className="flex flex-col gap-4">
                    <Markdown description={description} />
                  </div>
                </div>
              )}
              {activeTab === "ticket" && (
                <div className="lg:max-w-[850px]">
                  {/* Ticket counter */}
                  <div className="mt-6 flex flex-col gap-5 rounded-lg border-[1px] border-gray-200 p-3">
                    <div className="flex flex-col gap-2">
                      <p className="text-xl font-normal">Regular</p>
                      <p className="text-xs text-gray-500">
                        Price include tax and admin free
                      </p>
                    </div>

                    <div className="flex flex-row items-center justify-between border-t-[1px] py-3">
                      {data?.price && (
                        <p className="text-[18px] font-semibold">{`${data.price * ticketCount}`}</p>
                      )}
                      <div className="w-[80px] lg:w-fit">
                        <div className="flex items-center space-x-4">
                          <Button
                            variant={"outline"}
                            onClick={() => setTicketCount(ticketCount - 1)}
                            disabled={ticketCount <= 1}
                          >
                            -
                          </Button>
                          <span className="text-lg font-semibold">
                            {ticketCount}
                          </span>
                          <Button
                            variant={"outline"}
                            onClick={() => setTicketCount(ticketCount + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}

                  <div className="mt-6 flex flex-col gap-5 rounded-lg border-[1.5px] border-gray-100 p-3">
                    <p className="text-md font-medium">Payment Method</p>
                    <div className="flex flex-row items-center justify-between gap-6">
                      <select
                        className="w-full rounded border p-2"
                        value={selectedBank}
                        onChange={handleBankChange}
                      >
                        <option value="BRI">BRI</option>
                        <option value="BNI">BNI</option>
                        <option value="BCA">BCA</option>
                      </select>
                    </div>

                    <div className="flex flex-col items-start gap-2 rounded-md bg-gray-50 p-3">
                      <p className="text-lg font-semibold text-gray-700">
                        Virtual Account
                      </p>
                      <div className="flex w-full flex-row items-center justify-between">
                        <p className="text-xl font-bold tracking-wider text-gray-900">
                          {virtualAccount}
                        </p>
                        <Button variant={"outline"}>Copy</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* sticky button */}
        <div className="hidden lg:block">
          <div className="lg:sticky lg:top-[95px] lg:flex lg:w-[400px] lg:flex-col lg:gap-6 lg:rounded-xl lg:border-[1.5px] lg:px-5 lg:py-8 lg:shadow-md">
            <Button
              className="w-full bg-[#0080ff] hover:bg-[#0066CC]"
              onClick={handleCheckout}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Processing..." : "Buy Ticket"}
            </Button>
          </div>
        </div>
      </div>

      {/* FAB Mobile */}
      <div className="fixed bottom-0 flex w-full flex-col justify-center gap-6 border-t-[1.5px] border-gray-200 bg-white px-6 py-4 lg:hidden">
        <Button
          className="w-full bg-[#0080ff] md:h-[55px] md:text-lg md:font-semibold"
          onClick={handleCheckout}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Processing..." : "Buy Ticket"}
        </Button>
      </div>
    </div>
  );
};

export default DescDetail;
