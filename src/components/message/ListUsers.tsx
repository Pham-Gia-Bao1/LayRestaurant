import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getAllUsers } from "@/api";
import Image from "next/image";
import Link from "next/link";
import SubLoading from "../loading/subLoading";
import MessageItem from "./MessageItem";
import { UserProfile } from "@/types";

const ListUsers: React.FC = () => {
  const [listUsers, setListUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const messages = useSelector((state: RootState) => state.messages.messages);
  const token = useSelector((state: RootState) => state.auth.token);
  const [readMessages, setReadMessages] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const users = await getAllUsers();
      if (users && currentUser) {
        const filteredUsers = users.data.filter(
          (user: UserProfile) => user.id !== currentUser.id
        );
        setListUsers(filteredUsers);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(listUsers);

  const getLastMessageContent = (userId: number): string => {
    const filteredMessages = messages.filter(
      (message) =>
        (message.sender_id === currentUser?.id && message.recipient_id === userId) ||
        (message.sender_id === userId && message.recipient_id === currentUser?.id)
    );
    if (filteredMessages.length > 0) {
      return filteredMessages[filteredMessages.length - 1].content;
    } else {
      return "New message";
    }
  };

  const handleRead = (userId: number) => {
    setReadMessages((prev) => ({ ...prev, [userId]: true }));
  };

  return (
    <div className="mt-8 pb-52 mb-20 bottom-96 h-screen sm:w-1/4 w-full bg-white shadow-md fixed top-12 overflow-y-auto scrollbar-container">
      <div className="divide-y divide-gray-200">
        {loading ? (
          <div className="flex items-center justify-center h-full p-3">
            <SubLoading />
          </div>
        ) : (
          listUsers.map((user) => (
            <Link href={`/messages/${user.id}`} key={user.id}>
              {token && currentUser !== null && (
                <MessageItem
                  name={user.name}
                  profileImage={user.profile_picture}
                  message={getLastMessageContent(user.id)}
                  isRead={!!readMessages[user.id]}
                  onRead={() => handleRead(user.id)}
                />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ListUsers;
