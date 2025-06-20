import type { Metadata } from "next";
import { Gloock, Epilogue, Fustat } from "next/font/google";
import Navbar from '@/components/NavBar';
import "@/styles/globals.css";


const gloock = Gloock({
  variable: "--font-gloock",
  subsets: ["latin"],
  weight: "400"
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"]
});

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Yuewei Li | Portfolio",
  description: "Portfolio of Yuewei Li, a full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gloock.variable} ${epilogue.variable} ${fustat.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
