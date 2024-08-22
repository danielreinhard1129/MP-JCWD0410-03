"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import { FaCaretRight } from "react-icons/fa";

export interface CheckoutDescProps {
  price: number;
}

const CheckoutDesc: React.FC<CheckoutDescProps> = ({ price }) => {
  const [selectedTicket, setSelectedTicket] = useState("0");
  const [totalPrice, setTotalPrice] = useState(price);

  useEffect(() => {
    const calculatedPrice = price * parseInt(selectedTicket, 10);
    setTotalPrice(calculatedPrice);
  }, [selectedTicket, price]);

  return (
    <div>
      <div className="lg:container lg:mt-6 lg:flex lg:max-w-7xl lg:flex-row lg:justify-between lg:gap-7 lg:px-0">
        <div className="mx-6 mt-6 lg:mx-0 lg:mt-0 lg:w-full">
          <div className="flex flex-row items-center gap-1">
            <FaCaretRight className="text-[#0080ff]" />
            <p className="text-base font-semibold">Tickets</p>
          </div>

          <div className="mt-6 flex flex-col gap-5 rounded-lg border-[1.5px] border-gray-100 p-3">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-normal">Regular</p>
              <p className="text-xs text-gray-500">
                Price include tax and admin free
              </p>
            </div>

            <div className="flex flex-row items-center justify-between border-t-2 border-gray-50 py-2">
              <p className="text-[18px] font-semibold">{`IDR ${price.toLocaleString()}`}</p>
              <div className="w-[80px] px-2 py-1 lg:w-fit">
                <Select
                  value={selectedTicket}
                  onValueChange={(value) => setSelectedTicket(value)}
                >
                  <SelectTrigger className="lg:w-[120px]">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="0">0</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Voucher */}
          <div className="mt-6 flex flex-col gap-5 rounded-lg border-[1.5px] border-gray-100 p-3">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-normal">Voucher</p>
              <p className="text-xs text-gray-500">
                Use Voucher to reduce total price
              </p>
            </div>

            <div className="flex flex-row items-center justify-between gap-6 border-t-2 border-gray-50 py-4">
              <div className="w-full">
                <Input></Input>
              </div>

              <Button>Apply</Button>
            </div>
          </div>

          {/* Points */}
          <div className="mt-6 flex flex-col gap-5 rounded-lg border-[1.5px] border-gray-100 p-3">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-normal">Points</p>
              <p className="text-xs text-gray-500">Use Points</p>
            </div>

            <div className="flex flex-row items-center justify-between gap-6 border-t-2 border-gray-50 py-4">
              <div className="w-full">
                <Input></Input>
              </div>

              <Button>Apply</Button>
            </div>
          </div>
        </div>

        <div>
          {/* Button Checkout */}
          <div className="hidden lg:block">
            <div className="lg:sticky lg:top-[95px] lg:flex lg:w-[400px] lg:flex-col lg:gap-6 lg:rounded-xl lg:border-[1.5px] lg:px-5 lg:py-8 lg:shadow-md">
              <div className="flex flex-col gap-2">
                <p className="text-xs">Total Price</p>
                <p className="text-md font-semibold">{`IDR ${totalPrice.toLocaleString()}`}</p>
              </div>
              <Button className="w-full bg-[#0080ff] hover:bg-[#0066CC]">
                Bayar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* FAB Mobile */}
      <div className="fixed bottom-0 flex w-full flex-row justify-between gap-6 border-t-[1.5px] border-gray-200 bg-white px-6 py-4 lg:hidden">
        <div className="flex flex-col gap-2">
          <p className="text-xs">Total Price</p>
          <p className="text-md font-semibold">{`IDR ${totalPrice.toLocaleString()}`}</p>
        </div>
        <Button className="text-md h-full bg-[#0080ff] px-10 py-3 md:h-[55px] md:text-lg md:font-semibold">
          Bayar
        </Button>
      </div>
    </div>
  );
};

export default CheckoutDesc;
