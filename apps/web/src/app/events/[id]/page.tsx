import EventDetailPage from "@/features/event-detail";
import React from "react";

const eventDetail = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <EventDetailPage eventId={Number(params.id)} />
    </div>
  );
};

export default eventDetail;
