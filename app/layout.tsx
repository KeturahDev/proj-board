import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Board",
  description: "A place to organize and track personal projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="valentine" lang="en">
      <body className={inter.className}>
        <main className=" flex flex-col justify-center">
          <Nav />
          <div className="m-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
