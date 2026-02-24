import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const phenomena = localFont({
  src: [
    {
      path: "../fonts/Phenomena-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Phenomena-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Phenomena-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-phenomena",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NADIL | Fire Stop Applicator | Dubai & Saudi Arabia",
  description: "NADIL - Professional fire stop application services in Dubai and Saudi Arabia. Protecting buildings with certified fire safety solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${phenomena.variable} ${phenomena.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
