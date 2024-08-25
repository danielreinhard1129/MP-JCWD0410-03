"use client";

import React from "react";
import JumboCheckout from "./components/JumboCheckout";
import CheckoutDesc from "./components/CheckoutDesc";
import useGetEvent from "@/hooks/api/event/useGetEvent";
import { notFound } from "next/navigation";
import useGetTransaction from "@/hooks/api/transaction/useGetTransaction";

interface CheckoutProps {
  transactionId: number;
}

const CheckoutPage: React.FC<CheckoutProps> = ({ transactionId }) => {
  const { data, isPending } = useGetTransaction(transactionId);

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return notFound();
  }

  return (
    <div className="mb-[30px]">
      <JumboCheckout
        eventId={data.event.id}
        address={data.event.address}
        title={data.event.title}
        thumbnail={data.event.thumbnail}
        startDate={data.event.startDate}
        endDate={data.event.endDate}
      />
      <CheckoutDesc eventId={data.event.id} transactionId={data.id} />
    </div>
  );
};

export default CheckoutPage;
