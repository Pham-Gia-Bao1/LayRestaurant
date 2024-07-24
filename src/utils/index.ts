import { Metadata } from "next";
export const API_URL: string = process.env.URL || "https://lay-restaurant.zeabur.app/api";
export function formatNumber(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
export function generateMetadata(pageTitle: string, pageDescription: string): Metadata {
  return {
    title: {
      default: "BitStorm",
      template: "%s | BitStorm",
      absolute: `${pageTitle} | BitStorm`,
    },
    description: pageDescription,
  };
}
export const setStorage = (storageName: string, value: any) => {
  localStorage.setItem(storageName, value);
};
export function headerAPI() {
  const token: string | any = localStorage.getItem("__token__");
  console.log(token);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  return headers;
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const formatDate = (date: Date | null) => {
  return date ? date.toLocaleDateString() : "N/A";
};

export function convertTotalContextStateToNumber(contextState: {
  totalAmount: string | number | null;
}): number {
  const { totalAmount } = contextState;

  // Check if totalAmount is a number and return it, or convert from string
  if (typeof totalAmount === "number") {
    return totalAmount;
  } else if (typeof totalAmount === "string") {
    const parsedNumber = parseFloat(totalAmount);
    if (!isNaN(parsedNumber)) {
      return parsedNumber;
    }
  }

  // Return 0 or handle default case if totalAmount is null or cannot be converted
  return 0;
}