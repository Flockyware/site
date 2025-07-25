import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import '@fontsource-variable/reem-kufi-fun'; // Supports weights 400-700
import '@fontsource/comic-mono';
import '@fontsource/bubblegum-sans';
import Footer from "@/components/footer";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "It's  a website ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="my-10 mx-10 ">
        <NavBar></NavBar>
        <div className="bg-bavaroa-500 border-2 border-emerald-400">
          {/*stuff goes here*/}
          {children}
        </div>
      <Footer></Footer>
      </body>
    </html>
  );
}
