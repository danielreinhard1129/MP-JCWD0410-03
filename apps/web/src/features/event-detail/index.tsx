"use client";

import useGetEvent from "@/hooks/api/event/useGetEvent";
import { notFound } from "next/navigation";
import React from "react";
import DescDetail from "./components/DescDetail";
import JumboDetail from "./components/JumboDetail";

interface EventProps {
  eventId: number;
}

const EventDetailPage: React.FC<EventProps> = ({ eventId }) => {
  const { data, isPending } = useGetEvent(eventId);

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return notFound();
  }

  return (
    <div className="mb-[30px]">
      <JumboDetail
        thumbnail={data?.thumbnail}
        address={data.address}
        title={data.title}
        startDate={data.startDate}
        endDate={data.endDate}
        quota={data.quota}
      />
      <DescDetail description={data.description} eventId={data.id} />
    </div>
  );
};

export default EventDetailPage;
