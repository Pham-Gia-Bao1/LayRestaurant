
"use client"
import React, { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ProductCardCheckOutProps } from "@/types";
const ProductCartConfirm : React.FC<ProductCardCheckOutProps> = ({
  id,
  imageSrc,
  title,
  price,
  description,
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg mb-4 mx-2">
      <div className="flex items-center h-2  m-3">
        <Image
          src={imageSrc}
          alt={title}
          width={50}
          height={50}
          className=""
        />
        <div className="flex flex-col ml-4">
          <span className="text-xl font-bold text-black">{title}</span>
          <span className="text-black text-sm">{description}</span>
        </div>

      </div>
    </div>
  );
};
export default ProductCartConfirm;
