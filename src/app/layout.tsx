import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header"
import { TopBar } from "./components/layout/TopBar";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neuro Crecimiento",
  description: "Desarrolla el aprendizaje de tus hijos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
