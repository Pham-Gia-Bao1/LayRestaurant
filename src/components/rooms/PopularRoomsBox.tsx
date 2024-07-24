"use client";
import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCart";
import { RoomProp } from "@/types";
import { fetchRoomsData } from "@/api/roomAPI";
export default function PopularRoomsBox() {
  const [rooms, setRooms] = useState<RoomProp[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getRooms = async () => {
    setLoading(true);
    try {
      const fetchedFoods = await fetchRoomsData(1);

      setRooms(fetchedFoods);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getRooms();
  },[]);
  return (
    <div className="py-12 p-4 w-full">
      <div className="flex flex-wrap items-center justify-between  p-5 mb-4">
        <h2 className="text-2xl font-bold text-black w-full md:w-2/3  mb-4 md:mb-0">
          Most Popular Rooms
        </h2>
        <div className="w-full md:w-1/3 flex justify-between sm:justify-end gap-2 ">
          <button
            type="button"
            className="box-shadow w-56 px-4 py-2 text-black active:bg-red-500 hover:bg-gray-800 rounded"
          >
            All
          </button>
          <button
            type="button"
            className="box-shadow w-56 px-4 py-2 text-black active:bg-red-500 hover:bg-gray-800 rounded"
          >
            Capacity
          </button>
          <button
            type="button"
            className="box-shadow w-56 px-4 py-2 text-black active:bg-red-500 hover:bg-gray-800 rounded"
          >
            Type
          </button>
          <button
            type="button"
            className="box-shadow w-56 px-4 py-2 text-black active:bg-red-500 hover:bg-gray-800 rounded"
          >
            Price
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-5">
        {rooms.map((room) => (

          <RoomCard
            key={room.id}
            id={room.id}
            roomName={room.name}
            rating={room.star_rating}
            description={room.description}
            price={room.price}
            imageSrc={room.image1}
            status={room.status}
          />
        ))}
      </div>
    </div>
  );
}
