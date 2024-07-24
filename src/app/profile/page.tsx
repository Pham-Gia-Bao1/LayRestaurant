"use client"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCheckInDate, setCheckOutDate } from "@/redux/dateSlice";
import { setDays } from "@/redux/daySlice";
import { setOrderData } from "@/redux/order/orderDataRoomSlice";
import { setRoom } from "@/redux/roomSlice";
import { setCurrentUser } from "@/redux/userSlice";

const Profile: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedOrderDetails = sessionStorage.getItem("orderDetails");

    if (savedOrderDetails) {
      const {
        orderData,
        total,
        currentUser,
        room,
        checkInDate,
        checkOutDate,
        days,
        orderType
      } = JSON.parse(savedOrderDetails);

      // Log the values to the console
      console.log("Order Details:", savedOrderDetails);
      console.log("Order Data:", orderData);
      console.log("Total:", total);
      console.log("Current User:", currentUser);
      console.log("Room:", room);
      console.log("Check-In Date:", checkInDate);
      console.log("Check-Out Date:", checkOutDate);
      console.log("Days:", days);

      // Cập nhật Redux state
      dispatch(setOrderData(orderData));
      dispatch(setCurrentUser(currentUser));
      dispatch(setRoom(room));
      dispatch(setCheckInDate(checkInDate));
      dispatch(setCheckOutDate(checkOutDate));
      dispatch(setDays(days));

      // Xóa dữ liệu khỏi sessionStorage nếu không còn cần thiết
      sessionStorage.removeItem("orderDetails");
    }
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-black">
        Helllooooooooooooooooooooooooooooooooooooooooooooooooooo
      </h1>
    </div>
  );
};

export default Profile;
