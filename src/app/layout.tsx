import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HomeGlobe Frontend Developer Test",
  description: "HomeGlobe Frontend Developer Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet" />

      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
