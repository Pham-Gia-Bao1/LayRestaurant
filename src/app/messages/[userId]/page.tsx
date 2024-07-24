"use client"
import { getUser } from "@/api";
import Chat from "@/components/pages/Chat";

import { PropductProps, UserProfile } from "@/types";
import React, { useEffect, useState } from "react";

const MessageDetail: React.FC<PropductProps> = ({ params }) => {
  const [sender, setSender] = useState<UserProfile | null>(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUser = await getUser();
        if (currentUser) {
          setSender(currentUser);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchCurrentUser();
  }, []);
  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-red-500 h-full">
      <div className="min-h-screen flex-1 bg-gray-800 text-white w-full">
        {sender && <Chat senderId={sender.id} recipientId={params.userId} />}
      </div>
    </main>
  );
};
export default MessageDetail;
