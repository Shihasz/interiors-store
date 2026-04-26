import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Next.js aliases @ to the root by default if no src

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TCC Interiors | Curtains, Wallpapers & Fabrics",
  description: "Premium interior solutions for your home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}