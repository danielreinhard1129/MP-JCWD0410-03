"use client";

import React from "react";
import JumboCheckout from "./components/JumboCheckout";
import CheckoutDesc from "./components/CheckoutDesc";
import useGetEvent from "@/hooks/api/event/useGetEvent";
import { notFound } from "next/navigation";

interface CheckoutProps {
  eventId: number;
}

const CheckoutPage: React.FC<CheckoutProps> = ({ eventId }) => {
  const { data, isPending } = useGetEvent(eventId);

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return notFound();
  }
  return (
    <div className="mb-[30px]">
      <JumboCheckout address={data.address} title={data.title} thumbnail={data.thumbnail}  startDate={data.startDate} endDate={data.endDate} />
      <CheckoutDesc price={data.price} />
    </div>
  );
};

export default CheckoutPage;
