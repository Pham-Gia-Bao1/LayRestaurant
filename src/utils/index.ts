import { Metadata } from "next";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
export const API_URL: string = "https://lay-restaurant.zeabur.app/api";
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

export const generateRandomString = (length = 2) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const extractOrderNumber = (inputString: string) => {
  // Đoạn chuỗi cố định là "OD", lấy vị trí bắt đầu của "OD"
  const prefix = 'OD';
  const index = inputString.indexOf(prefix);

  // Nếu không tìm thấy "OD", trả về null
  if (index === -1) {
    return null;
  }

  // Trả về phần chuỗi sau "OD"
  return inputString.substring(index + prefix.length);
};
export function convertToStaticImport(value: string | undefined): StaticImport | string {
  if (value === undefined && value === null) {
    return '';
  }

  // Convert string to unknown first, then to StaticImport
  return (value as unknown) as StaticImport;
}