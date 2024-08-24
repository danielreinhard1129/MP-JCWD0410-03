"use client";

import useAxios from "@/hooks/useAxios";
import { useAppDispatch } from "@/redux/hooks";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface UpdateProfileData {
  name: string;
  email: string;
  address: string;
  phone_number: string;
  image: File | null;
}

const useUpdateProfile = (id: number) => {
  const { axiosInstance } = useAxios();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: async (payload: UpdateProfileData) => {
      const updateProfileForm = new FormData();

      updateProfileForm.append("name", payload.name);
      updateProfileForm.append("email", payload.email);
      updateProfileForm.append("address", payload.address);
      updateProfileForm.append("phone_number", payload.phone_number);
      updateProfileForm.append("image", payload.image!);

      const { data } = await axiosInstance.patch(
        `/profile/${id}`,
        updateProfileForm,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success("Profile updated successfully.");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(
        error.response?.data || "Failed to update profile. Please try again.",
      );
    },
  });
};

export default useUpdateProfile;
