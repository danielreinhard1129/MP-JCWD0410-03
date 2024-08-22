import React from "react";
import { FaCaretRight } from "react-icons/fa";

const PaymentMethod = () => {
  return (
    <div>
      <div className="mx-6 mt-6">
        <div className="flex flex-row items-center gap-1">
          <FaCaretRight className="text-[#0080ff]" />
          <p className="text-base font-semibold">Tickets</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
