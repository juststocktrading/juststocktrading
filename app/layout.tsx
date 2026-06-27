import { Urbanist } from "next/font/google";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import StockHeader from "@/components/stock-header";
import StockFooter from "@/components/stock-footer";

import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "ResellerBus",
  description: `Shop at your fingertips.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <StockHeader />
        {children}
        <StockFooter />
      </body>
    </html>
  );
}
