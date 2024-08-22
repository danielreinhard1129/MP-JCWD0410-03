import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/Footer";
import StoreProvider from "@/lib/providers/StoreProvider";
import { useRouter } from "next/navigation";
import ReactQuerryProviders from "@/lib/providers/ReactQuerryProvider";
import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";

const NavbarPage = dynamic(() => import("@/components/Navbar"), { ssr: false });

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
        <ToastContainer />
          </ReactQuerryProviders>
        </StoreProvider>
      </body>
    </html>
  );
}
