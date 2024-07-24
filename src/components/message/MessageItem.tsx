// src/components/MessageItem.tsx

import Image from "next/image";
import React from "react";

interface MessageItemProps {
  profileImage: string;
  name: string;
  message: string;
  isRead: boolean;
  onRead: () => void; // Define onRead prop as a function with no parameters
}

const MessageItem: React.FC<MessageItemProps> = ({
  profileImage,
  name,
  message,
  isRead,
  onRead, // Destructure onRead from props
}) => {
  return (
    <div onClick={onRead} className={`flex items-center p-4 bg-white border-b border-gray-200 hover:bg-gray-300 ${isRead ? '' : 'font-bold'}`}>
      <Image
        width={100}
        height={100}
        src={profileImage}
        alt={`${name}'s profile`}
        className="w-10 h-10 rounded-full"
      />
      <div className="ml-4 flex-1">
        <div className="flex flex-col justify-between">
          <h4 className="text-lg font-semibold text-black">{name}</h4>
          {/* <p className={`text-gray-700 ${isRead ? '' : 'text-black'}`}>{message}</p> */}
        </div>
      </div>
      <div>
        {/* <span className="text-sm text-gray-500">19:48</span> */}
        <p className="text-sm text-gray-500 bg-green-500 w-3 h-3 rounded-full"></p>
        {/* {!isRead && (
          <span className="ml-2 flex items-center justify-center w-6 h-6 text-sm text-white bg-green-500 rounded-full">
            10
          </span>
        )} */}
      </div>
    </div>
  );
};

export default MessageItem;
