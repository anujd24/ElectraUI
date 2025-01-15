import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Notification from "@/components/notification";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Electra",
  description: "All Electric items at one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <div>
              <Notification />
              <Navbar />
              {children}
              <Footer />
              
              </div>
            </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}