import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Transaction } from "../../../../types/transaction";

const useGetTransaction = (id: number) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ["transaction", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Transaction>(
        `/transaction/${id}`,
      );
      return data;
    },
  });
};

export default useGetTransaction;
