"use client";

import { Button } from "@/components/ui/button";
import useGetTransaction from "@/hooks/api/transaction/useGetTransaction";
import Image from "next/image";
import React, { useState, useRef, ChangeEvent } from "react";
import axios from "axios";
import { Status } from "../../../../types/transaction";
import { axiosInstance } from "@/lib/axios";
import useUpdateTransaction from "@/hooks/api/transaction/useUpdateTransaction";
import { useRouter } from "next/navigation";

export interface CheckoutDescProps {
  eventId: number;
  transactionId: number;
}

const CheckoutDesc: React.FC<CheckoutDescProps> = ({
  eventId,
  transactionId,
}) => {
  const { data } = useGetTransaction(eventId);
  const updateTransaction = useUpdateTransaction(transactionId);
  const router = useRouter();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [paymentImage, setPaymentImage] = useState<string>("");
  const [paymentFile, setPaymentFile] = useState<File | null>(null);

  const [isPending, setIsPending] = useState<boolean>(false);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onChangePaymentProof = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length) {
      setPaymentFile(files[0]);
      setPaymentImage(URL.createObjectURL(files[0]));
    }
  };

  const removeSelectedImage = () => {
    setPaymentImage("");
    setPaymentFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async () => {
    if (!paymentFile) return;

    setIsPending(true);

    try {
      updateTransaction.mutate({
        status: Status.WAITING_FOR_ADMIN_CONFIRMATION,
        paymentProof: paymentFile,
      });
      onSuccess: () => {
        router.push(`/transaction/${transactionId}`);
      };
    } catch (error) {
      console.log("upload payment proof Failed", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div>
      <div className="lg:container lg:mt-6 lg:flex lg:max-w-7xl lg:flex-row lg:justify-between lg:gap-7 lg:px-0">
        <div className="mx-6 mt-6 lg:mx-0 lg:mt-0 lg:w-full"></div>

        <div>
          {/* Button Checkout */}
          <div className="hidden lg:block">
            <div className="lg:sticky lg:top-[95px] lg:flex lg:w-[400px] lg:flex-col lg:gap-6 lg:rounded-xl lg:border-[1.5px] lg:px-5 lg:py-8 lg:shadow-md">
              <div className="flex flex-col gap-2">
                <p className="text-xs">Status</p>
                <p className="text-md text-red-500">{data?.status}</p>
              </div>
              {paymentImage ? (
                <>
                  <div className="relative h-[200px] w-full">
                    <Image src={paymentImage} alt="Payment proof" fill />
                  </div>
                  <Button
                    className="w-full bg-red-500 hover:bg-red-600"
                    onClick={removeSelectedImage}
                  >
                    Remove
                  </Button>
                  <Button
                    className="mt-2 w-full bg-green-500 hover:bg-green-600"
                    onClick={handleSubmit}
                  >
                    {isPending ? "submiting..." : "Submit"}
                  </Button>
                </>
              ) : (
                <Button
                  className="w-full bg-[#0080ff] hover:bg-[#0066CC]"
                  onClick={handleFileUpload}
                  disabled={isPending}
                >
                  Upload Payment Proof
                </Button>
              )}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={onChangePaymentProof}
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAB Mobile */}
      <div className="fixed bottom-0 flex w-full flex-col justify-between gap-6 border-t-[1.5px] border-gray-200 bg-white px-6 py-4 lg:hidden">
        <div className="flex flex-row justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs">Status</p>
            <p className="text-md text-red-500">{data?.status}</p>
          </div>
        </div>
        {paymentImage ? (
          <>
            <Button
              className="w-full bg-green-500 hover:bg-green-600"
              onClick={handleSubmit}
              disabled={isPending}
            >
              {isPending ? "submiting..." : "Submit"}
            </Button>
            <Button
              className="w-full bg-red-500 hover:bg-red-600"
              onClick={removeSelectedImage}
            >
              Remove
            </Button>
          </>
        ) : (
          <Button
            className="h-full bg-[#0080ff] px-10 py-3 text-xs md:h-[55px] md:text-lg md:font-semibold"
            onClick={handleFileUpload}
            disabled={isPending}
          >
            Upload Payment Proof
          </Button>
        )}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={onChangePaymentProof}
        />
      </div>
    </div>
  );
};

export default CheckoutDesc;
