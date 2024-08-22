"use client";

import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import {
  PageableResponse,
  PaginationQueries,
} from "../../../../types/pagination";
interface GetEventQuery extends PaginationQueries {
  search?: string;
}

const useGetEvents = (queries: GetEventQuery) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<PageableResponse<Event>>(
        "/event",
        { params: queries },
      );
      return data;
    },
  });
};

export default useGetEvents;
