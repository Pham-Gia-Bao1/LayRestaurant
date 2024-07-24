// src/components/OrderCard.tsx
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import Link from "next/link";
import { OrderCardProps } from "@/types";

const OrderCard: React.FC<OrderCardProps> = ({
  id,
  picture,
  name,
  price,
  onRemove,
  quantity
}) => {
  return (
    <div className="flex items-center p-4 bg-gray-100 rounded-full m-2 relative w-full">
      <Link href={`/settings/products/${id}`} className="flex items-center w-full">

        <Image
          src={picture}
          alt={name}
          className="w-16 h-16 rounded-md mr-4"
          width={64} // Adjusted width and height for better image quality
          height={64}
        />
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-600">${price}</p>
        </div>
      </Link>
      <div className="flex items-center ml-4">
        <button
          onClick={() => onRemove(id)}
          className="text-red-500 hover:bg-red-100 rounded-full p-2"
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
