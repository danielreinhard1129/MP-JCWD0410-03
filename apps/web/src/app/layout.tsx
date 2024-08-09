import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavbarPage from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreProvider from "@/lib/providers/StoreProvider";
import { useRouter } from "next/navigation";
import ReactQuerryProviders from "@/lib/providers/ReactQuerryProvider";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ronmes Sphere",
  description: "One trip away from your next event",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ReactQuerryProviders>
            <NavbarPage />
            {children}
            <Footer />
          </ReactQuerryProviders>
        </StoreProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
