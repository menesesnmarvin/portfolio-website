import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import NextThemesProvider from "@/components/NextThemesProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marvin Meneses - Software Engineer",
  description:
    "Full Stack Developer | React JS | Next JS | Node JS | TypeScript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NextThemesProvider>
          <Navbar />
          {children}
          <Footer />
        </NextThemesProvider>
      </body>
    </html>
  );
}
