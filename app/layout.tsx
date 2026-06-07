import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iTrans | Web Solutions for Minor and Start-up Companies",
  description:
    "iTrans — a team of freelancers building full-stack web apps, front-end designs, and back-end integrations for minor and start-up companies.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="text-white antialiased">{children}</body>
    </html>
  );
}
