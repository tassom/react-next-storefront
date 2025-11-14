import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Next Storefront",
  description: "A modern e-commerce storefront built with React and Next.js",
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
