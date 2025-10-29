import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "User Registration App",
  description: "Manage users with Next.js CRUD + MongoDB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0a0a0a] text-gray-900 min-h-screen flex items-center justify-center`}
      >
        <main className="w-full max-w-5xl mx-auto p-6 flex flex-col items-center justify-center rounded-xl">
          {children}
        </main>
      </body>
    </html>
  );
}
