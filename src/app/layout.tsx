import type { Metadata } from "next";
import { Poppins, Roboto_Slab } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Rivo",
  description: "Modern Ecommerce UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto flex flex-col items-center font-popmed text-base">
        {children}
      </body>
    </html>
  );
}
