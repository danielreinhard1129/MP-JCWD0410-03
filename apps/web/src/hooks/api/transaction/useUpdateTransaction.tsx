"use client";

import useAxios from "@/hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Status } from "../../../../types/transaction";

interface UpdateTransactionPayload {
  paymentProof: File;
  status: Status;
}

const useUpdateTransaction = (transactionId: number) => {
  const router = useRouter();
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: UpdateTransactionPayload) => {
      const updateTransactionForm = new FormData();

      updateTransactionForm.append("paymentProof", payload.paymentProof);
      updateTransactionForm.append("status", payload.status);

      const { data } = await axiosInstance.patch(
        `/transaction/${transactionId}`,
        updateTransactionForm,
      );
      return data;
    },
    onSuccess: () => {
      toast.success("Payment proof uploaded successfully");
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      router.push(`/`);
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useUpdateTransaction;
