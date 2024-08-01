// pages/home.tsx
import { generateMetadata } from "@/utils";

export const metadata = generateMetadata("ProductDetail", "View and manage your product details on LayRestarant");

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
