import CheckoutPage from "@/features/checkout-detail";
import React from "react";

const Checkout = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <CheckoutPage transactionId={Number(params.id)} />
    </div>
  );
};

export default Checkout;
