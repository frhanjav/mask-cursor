import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cursor-mask",
  description: "olivier-larose-minh-pham",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
