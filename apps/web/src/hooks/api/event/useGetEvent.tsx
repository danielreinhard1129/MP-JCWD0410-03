import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Event } from "../../../../types/event";

const useGetEvent = (id: number) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Event>(`/event/${id}`);
      return data;
    },
  });
};

export default useGetEvent;
