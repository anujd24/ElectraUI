import type { Metadata } from "next";
import "./globals.css";
import Notification from "@/components/notification";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";


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
            <div>
              <Notification />
              <Navbar />
              {children}
              <Footer />
              
              </div>
            
      </body>
    </html>
  );
}