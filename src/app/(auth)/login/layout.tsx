import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Log in to your account on BitStorm",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
