import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Order page",
  description: "Manage your orders on BitStorm",
};
export default function OrderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
