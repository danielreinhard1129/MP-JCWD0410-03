"use client";

import useAxios from "@/hooks/useAxios";
import { useAppDispatch } from "@/redux/hooks";
import { loginAction } from "@/redux/slices/userSlice";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface LoginPayload {
  email: string;
  password: string;
}

const useLogin = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const { data } = await axiosInstance.post("/auth/login", payload);

      return data;
    },
    onSuccess: (data) => {
      dispatch(loginAction(data));
      toast.success("Login Success");
      console.log(data);

      router.push(data.role === "ORGANIZERS" ? "/dashboard" : "/");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useLogin;
