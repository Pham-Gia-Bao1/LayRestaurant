import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getAllUsers } from "@/api";
import Link from "next/link";
import MessageItem from "./MessageItem";
import { UserProfile, Message } from "@/types";
import SkeletonMessageItem from "../skeleton/SkeletonMessageItem";
import debounce from "lodash.debounce";

const ListUsers: React.FC = () => {
  const [listUsers, setListUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeUserId, setActiveUserId] = useState<number | null>(null);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const messages = useSelector((state: RootState) => state.messages.messages);
  const token = useSelector((state: RootState) => state.auth.token);
  const [readMessages, setReadMessages] = useState<{ [key: number]: boolean }>(
    {}
  );
  const fetchingMoreData = useRef<boolean>(false);
  const [isMaxPage, setIsMaxPage] = useState<boolean>(false);
  const [loadingGetMoreData, setLoadingGetMoreData] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  // Ref for parent-box
  const parentBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    getUsers();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Ensure the height is recalculated if the component resizes
      if (parentBoxRef.current) {
        handleScroll();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [parentBoxRef.current]);

  const handleScroll = useCallback(
    debounce(() => {
      if (!parentBoxRef.current) return;

      const parentBox = parentBoxRef.current;
      const parentBoxRect = parentBox.getBoundingClientRect();
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition =
        window.scrollY ||
        window.pageYOffset ||
        document.body.scrollTop +
          (document.documentElement && document.documentElement.scrollTop) ||
        0;
      const scrollDifference = documentHeight - viewportHeight - scrollPosition;

      // Calculate the threshold based on the parent-box
      if (
        scrollDifference < parentBoxRect.height * 2 &&
        !fetchingMoreData.current &&
        !loadingGetMoreData &&
        !isMaxPage
      ) {
        fetchingMoreData.current = true;
        getMoreData();
      }
    }, 200),
    [loadingGetMoreData, isMaxPage]
  );

  const getMoreData = async () => {
    setLoadingGetMoreData(true);
    try {
      const nextPage = page + 1;
      const users = await getAllUsers(nextPage);

      if (users && currentUser) {
        const filteredUsers = users.data.filter(
          (user: UserProfile) => user.id !== currentUser.id
        );
        if (filteredUsers.length === 0) {
          setIsMaxPage(true);
        } else {
          setListUsers((prevUsers) => [...prevUsers, ...filteredUsers]);
          setPage(nextPage);
        }
      }
    } catch (error) {
      console.error("Failed to fetch more data:", error);
    } finally {
      setLoadingGetMoreData(false);
      fetchingMoreData.current = false;
    }
  };

  const getUsers = async () => {
    try {
      const users = await getAllUsers(page);
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

  const getLastMessageContentForCurrentUser = (userId: number): string => {
    const filteredMessages = messages.filter(
      (message: Message) =>
        (message.sender_id === currentUser?.id &&
          message.recipient_id === userId) ||
        (message.sender_id === userId &&
          message.recipient_id === currentUser?.id)
    );
    if (filteredMessages.length > 0) {
      return filteredMessages[filteredMessages.length - 1].content;
    } else {
      return "";
    }
  };

  const getLastMessageOfCurrentUserWithAllRecipients = (user: UserProfile) => {
    const allMessages = [
      ...(user.received_messages || []),
      ...(user.sent_messages || []),
    ];
    return allMessages.length > 0
      ? allMessages[allMessages.length - 1].content
      : "";
  };

  const handleRead = (userId: number) => {
    setReadMessages((prev) => ({ ...prev, [userId]: true }));
    setActiveUserId(userId);
  };

  const getMessagesAllUser = () => {
    return listUsers.map((user) => {
      const lastMessage = getLastMessageOfCurrentUserWithAllRecipients(user);
      return { user, lastMessage };
    });
  };

  const userMessages = getMessagesAllUser();

  return (
    <div
      ref={parentBoxRef}
      className="mt-8 pb-52 mb-20 bottom-96 h-screen sm:w-1/4 w-full bg-white shadow-md fixed top-12 overflow-y-auto scrollbar-container"
    >
      <div className="divide-y divide-gray-200">
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <SkeletonMessageItem key={index} />
            ))
          : userMessages.map(({ user, lastMessage }) => (
              <Link href={`/messages/${user.id}`} key={user.id}>
                {token && currentUser !== null && (
                  <MessageItem
                    lastMessage={lastMessage}
                    name={user.name}
                    profileImage={user.profile_picture}
                    message={getLastMessageContentForCurrentUser(user.id)}
                    isRead={!!readMessages[user.id]}
                    isActive={activeUserId === user.id}
                    onRead={() => handleRead(user.id)}
                  />
                )}
              </Link>
            ))}
      </div>
      {loadingGetMoreData &&
        Array.from({ length: 5 }).map((_, index) => (
          <SkeletonMessageItem key={index} />
        ))}
    </div>
  );
};

export default ListUsers;
