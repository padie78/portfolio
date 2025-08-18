"use client"; // necesario para hooks y PropsWithChildren

import { useState, useEffect, type PropsWithChildren } from "react";
import { Inter } from "next/font/google";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
// import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300); // 300ms, opcional
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={cn("bg-[#030014] overflow-y-scroll overflow-x-hidden", inter.className)}>
        {loading ? (
          <div className="flex items-center justify-center h-screen text-white text-2xl">
            Loading...
          </div>
        ) : (
          <>
            {/* <StarsCanvas /> */}
            <Navbar />
            <div className="w-full max-w-7xl px-2 md:px-4 mx-auto">{children}</div>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
