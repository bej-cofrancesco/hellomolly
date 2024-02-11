import type { Metadata } from "next";
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
      <body className="font-popmed text-base">
        <main className="mx-auto flex flex-col items-center">
        {children}
        </main>
      </body>
    </html>
  );
}
