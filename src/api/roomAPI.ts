import { BookingRoom, RoomProp } from "@/types";
import { API_URL } from "@/utils";
import axios from 'axios';
import { handleError } from "./index";

export const fetchRoomsData = async (page: number): Promise<RoomProp[]> => {
    const apiUrl = `${API_URL}/rooms?page=${page}`;
    try {
        const response = await axios.get(apiUrl, {
            withCredentials: true,
        });
        console.log(response.data);
        return response.data.data; // Return fetched data
    } catch (error) {
        throw new Error(handleError(error)); // Handle error and throw custom message
    }
};

export const getRoomDetail = async (roomId: number): Promise<RoomProp> => {
    const apiUrl = `${API_URL}/rooms/${roomId}`;
    try {
        const room = await axios.get<RoomProp>(apiUrl);
        return room.data; // Return fetched room details
    } catch (error) {
        console.error("Failed to fetch room details:", error);
        throw new Error(handleError(error)); // Handle error and throw custom message
    }
};

export const fetchBookingsOfRoom = async (roomId: number): Promise<BookingRoom[]> => {
    const apiUrl = `${API_URL}/bookingRooms/room/${roomId}`;
    try {
        const response = await axios.get<BookingRoom[]>(apiUrl);
        console.log(response.data);
        return response.data; // Return fetched bookings
    } catch (error) {
        console.error("Failed to fetch bookings:", error);
        throw new Error(handleError(error)); // Handle error and throw custom message
    }
};

// food's booking


export interface BookingFood {
    id: number;
    user_id: number;
    order_number: string;
    order_date: string; // Hoặc Date nếu bạn xử lý ngày bằng đối tượng Date
    total_amount: number;
    status: string;
    payment_method: string;
    delivery_address: string;
    note?: string; // Trường này có thể là undefined
}

// Định nghĩa kiểu dữ liệu cho Booking Food Item
export interface BookingFoodItem {
    id: number;
    booking_id: number;
    food_id: number;
    quantity: number;
    // Các trường khác tùy thuộc vào bảng của bạn
}
// Hàm gọi API cho Booking Foods
export const fetchBookings = async (): Promise<BookingFood[]> => {
    const response = await axios.get(`${API_URL}/booking-food`);
    return response.data;
};

export const fetchBookingById = async (id: number): Promise<BookingFood> => {
    const response = await axios.get(`${API_URL}/booking-food/${id}`);
    return response.data;
};

export const createBooking = async (bookingData: BookingFood): Promise<BookingFood> => {
    const response = await axios.post(`${API_URL}/booking-food`, bookingData);
    return response.data;
};

export const updateBooking = async (id: number, bookingData: BookingFood): Promise<BookingFood> => {
    const response = await axios.put(`${API_URL}/booking-food/${id}`, bookingData);
    return response.data;
};

export const deleteBooking = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/booking-food/${id}`);
};

export const fetchBookingsByUserId = async (userId: number): Promise<BookingFood[]> => {
    const response = await axios.get(`${API_URL}/booking-food/user/${userId}`);
    return response.data;
};

// Hàm gọi API cho Booking Food Items
export const fetchBookingFoodItems = async (): Promise<BookingFoodItem[]> => {
    const response = await axios.get(`${API_URL}/booking-food-items`);
    return response.data;
};

export const fetchBookingFoodItemById = async (id: number): Promise<BookingFoodItem> => {
    const response = await axios.get(`${API_URL}/booking-food-items/${id}`);
    return response.data;
};

export const createBookingFoodItem = async (itemData: BookingFoodItem): Promise<BookingFoodItem> => {
    const response = await axios.post(`${API_URL}/booking-food-items`, itemData);
    return response.data;
};

export const updateBookingFoodItem = async (id: number, itemData: BookingFoodItem): Promise<BookingFoodItem> => {
    const response = await axios.put(`${API_URL}/booking-food-items/${id}`, itemData);
    return response.data;
};

export const deleteBookingFoodItem = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/booking-food-items/${id}`);
};

// api for booking room
// Hàm gọi API để tạo một đặt phòng mới
export const createBookingRoom = async (bookingRoomData: BookingRoom): Promise<BookingRoom> => {
    const response = await axios.post(`${API_URL}/bookingRooms`, bookingRoomData);
    return response.data;
};