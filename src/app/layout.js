import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pamban Bridge | Pamban Bridge Rameswaram | Famous Bridges In India",
  description: "Visit the Pamban Bridge Rameshwaram for eternal peace. One of the most famous Bridges in India, the Pamban will take you to the amazing island of Pamban.",
   icons: {
    icon: [
      { url: '/Pamban-Bridge-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/Pamban-Bridge-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/Pamban-Bridge-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
