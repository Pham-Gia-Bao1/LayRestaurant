import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
  description: "Explore and manage your orders on BitStorm",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
