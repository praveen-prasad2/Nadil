import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
