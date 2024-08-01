import React from "react";
import Home from "./home/page";
import { generateMetadata } from "@/utils";
export const metadata = generateMetadata("", "Welcome to LayRestaurant, the best platform for booking food and rooms");
export default function HomePage() {
  return <Home />;
}
