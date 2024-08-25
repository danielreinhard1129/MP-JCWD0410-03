"use client";

import useAxios from "@/hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface CreateTransactionPayload {
  eventId: number;
  qty: number;
  status: string;
  paymentMethod: string;
}

const useCreateTransaction = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CreateTransactionPayload) => {
      const response = await axiosInstance.post("/transaction", payload);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("On Progress Transaction");
      queryClient.invalidateQueries({ queryKey: ["transaction"] });
      router.push(`/checkout/${data.id}`);
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useCreateTransaction;
