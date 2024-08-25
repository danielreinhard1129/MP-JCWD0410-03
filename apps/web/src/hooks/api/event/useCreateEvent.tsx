"use client";

import useAxios from "@/hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface CreateEventPayload {
  title: string;
  address: string;
  thumbnail: File | null;
  price: number;
  startDate: Date | undefined;
  endDate: Date | undefined;
  quota: number;
  booked: number;
  description: string;
}

const useCreateEvent = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CreateEventPayload) => {
      const createEventForm = new FormData();

      createEventForm.append("title", payload.title);
      createEventForm.append("address", payload.address);
      createEventForm.append("thumbnail", payload.thumbnail!);
      createEventForm.append("price", payload.price.toString());
      createEventForm.append(
        "startDate",
        payload.startDate ? payload.startDate.toString() : "",
      );
      createEventForm.append(
        "endDate",
        payload.endDate ? payload.endDate.toString() : "",
      );
      createEventForm.append("quota", payload.quota.toString());
      createEventForm.append("booked", payload.booked.toString());
      createEventForm.append("description", payload.description.toString());

      const { data } = await axiosInstance.post("/event", createEventForm);
      return data;
    },
    onSuccess: async () => {
      toast.success("Create Event Success");
      queryClient.invalidateQueries({ queryKey: ["event"] });
      router.push("/");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useCreateEvent;
