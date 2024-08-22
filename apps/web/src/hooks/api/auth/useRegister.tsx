"use client";

import { axiosInstance } from "@/lib/axios";
import { Role } from "@/types/user";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

interface RegisterArgs {
  name: string;
  email: string;
  password: string;
  role: Role;

}

const useRegister = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const register = async (payload: RegisterArgs) => {
    setIsLoading(true);
    try {
      await axiosInstance.post("/auth/register", {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      });

      toast("Register Success");

      router.push("/");
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        alert(error.response?.data || "Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { register, isLoading };
};

export default useRegister;
