"use client";
import "./globals.css";
import { useTheme, ThemeProvider as NextThemesProvider } from "next-themes";
import { CartProvider } from "@/components/context/CartContext";
import Header from "@/components/layout/Header";
import { Provider } from "react-redux";
import storeApp from "@/redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { usePathname } from "next/navigation";
import { TotalProvider } from "@/components/context/TotalContext";
import { CartPayProvider } from "@/components/context/CartPayContext";
import { SessionProvider } from "next-auth/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const ThemeProvider = ({ children, ...props }: any) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useTheme();
  const pathname = usePathname();
  const shouldHideHeader =
    pathname && (pathname.includes("/login") || pathname.includes("/register"));
  return (
    <Provider store={storeApp}>
      <I18nextProvider i18n={i18n}>
        <SessionProvider>
          <html lang="en">
            <body>
              <TotalProvider>
                <CartProvider>
                  <CartPayProvider>
                    <ThemeProvider
                      attribute="class"
                      defaultTheme="light"
                      enableSystem
                      disableTransitionOnChange
                    >
                      {!shouldHideHeader && <Header />}
                      <main className="bg-white overflow-x-hidden">
                        {children}
                        <SpeedInsights />
                      </main>
                    </ThemeProvider>
                  </CartPayProvider>
                </CartProvider>
              </TotalProvider>
            </body>
          </html>
        </SessionProvider>
      </I18nextProvider>
    </Provider>
  );
}
