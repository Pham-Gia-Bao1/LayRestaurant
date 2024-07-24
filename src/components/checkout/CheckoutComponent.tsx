"use client";
import React from "react";
import { useTotal } from "../context/TotalContext";
import { formatNumber } from "@/utils";
import { useCartPay } from "../context/CartPayContext";
import { useRouter } from "next/navigation";
import { clearRoom, setRoom } from "@/redux/roomSlice";
import { useDispatch } from "react-redux";
import { setOrderType } from "@/redux/orderTypeSlice";
const CheckoutComponent = ({ products }: { products: number }) => {
  const router = useRouter();
  const { total } = useTotal();
  const { selectedItems, getTotalPrice } = useCartPay(); // Use the CartPayContext
  const hasSelectedItems = selectedItems.length > 0;
  const dispatch = useDispatch();
  const handleBuyClick = () => {
    dispatch(clearRoom()); // Clear the room data
    router.push("/checkout"); // Navigate to the checkout page
    dispatch(setOrderType('food'));
  };
  return (
    <div className=" bg-white rounded box-shadow p-3">
      <div className=""></div>
      <div className="mb-4 text-black flex flex-col gap-3 ">
        <div className="flex justify-between px-2">
          <p className=" font-semibold">Sub Total:</p>
          <p className=" font-semibold">
            {formatNumber(getTotalPrice() * 1000)} vnd
          </p>
        </div>
        <div className="flex justify-between px-2">
          <p className=" font-semibold">Delivery Fee:</p>
          <p className=" font-semibold">{formatNumber(20000)} vnd</p>
        </div>
      </div>
      <div className="rounded text-black font-bold flex justify-between items-center p-2">
        <p>Total Payment ({products})</p>
        <div className="flex gap-5  sm:justify-center items-center justify-end">
          <p className="text-red-500 text-xl">
            {products > 0 && getTotalPrice()
              ? formatNumber(getTotalPrice() * 1000 + 20000)
              : 0}
            vnd
          </p>
          <button
            onClick={handleBuyClick}
            className={`p-5 w-52 text-white float-right rounded ${
              products > 0 ? "bg-red-500" : "bg-gray-300"
            }`}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};
export default CheckoutComponent;
