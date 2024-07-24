import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProductDetail",
  description: "View and manage your product details on BitStorm",
};

export default function ProductDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
