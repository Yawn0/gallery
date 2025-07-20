import "~/styles/globals.css";

import { type Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Geist } from "next/font/google";
import { TopNav } from "./_components/topnav";

export const metadata: Metadata = {
  title: "Gallery app experiment",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geist.variable}`}>
        <body className="flex flex-col gap-4">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
