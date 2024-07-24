// ./src/components/BestRooms.tsx
"use client";
import Image, { StaticImageData } from 'next/image';
import React, { useRef } from 'react';
import RoomImage1 from "../../assets/images/rooms/RoomImage1.jpg";
import RoomImage2 from "../../assets/images/rooms/RoomImage2.jpg";
import RoomImage3 from "../../assets/images/rooms/RoomImage3.jpg";
import RoomImage4 from "../../assets/images/rooms/RoomImage4.jpg";

type Room = {
  id: number;
  name: string;
  destinations: number;
  image: StaticImageData;
};

const rooms: Room[] = [
  {
    id: 1,
    name: 'Portugal',
    destinations: 150,
    image: RoomImage1,
  },
  {
    id: 2,
    name: 'Italy',
    destinations: 240,
    image: RoomImage2,
  },
  {
    id: 3,
    name: 'Switzerland',
    destinations: 180,
    image: RoomImage3,
  },
  {
    id: 4,
    name: 'Vietnam',
    destinations: 100,
    image: RoomImage4,
  },
  {
    id: 4,
    name: 'Vietnam',
    destinations: 100,
    image: RoomImage4,
  }, {
    id: 4,
    name: 'Vietnam',
    destinations: 100,
    image: RoomImage4,
  }, {
    id: 4,
    name: 'Vietnam',
    destinations: 100,
    image: RoomImage4,
  },
];

const BestRooms: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="container p-8">
      <h2 className="text-2xl font-bold mb-4 text-black">The best rooms</h2>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth justify-center overflow-hidden"
        >
          {rooms.map((room) => (
            <div
              key={room.id}
              className="min-w-[24%] relative h-52 flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover"
              />
              <div className="p-4 absolute bottom-5 z-10">
                <h3 className="text-lg font-semibold">{room.name}</h3>
                <p className="text-gray-600">{room.destinations} Destinations</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 w-10 transform -translate-y-1/2 bg-gray-200 hover:bg-orange-500 p-2 rounded-full"
        >
          &#8592;
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 w-10   transform -translate-y-1/2 hover:bg-orange-500 bg-gray-200 text-white p-2 rounded-full"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default BestRooms;
