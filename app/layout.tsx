import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MascotCorner from "./components/MascotCorner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Sweatbuds — Sweat together. Stay accountable.",
  description:
    "The couples fitness accountability app. Set weekly rules, wager fun stakes, and cheer each other on with home-screen sweat snaps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <MascotCorner />
      </body>
    </html>
  );
}
