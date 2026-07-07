import type { Metadata } from "next";
import "./globals.css";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Jared Tating | Personal site",
  description: "My personal site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full w-full flex flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
