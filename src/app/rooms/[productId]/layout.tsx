// pages/rooms.tsx

import { generateMetadata } from "@/utils";


export const metadata = generateMetadata("RoomDetail", "Browse and book luxurious rooms at LayRestaurant.");

export default function RoomsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
