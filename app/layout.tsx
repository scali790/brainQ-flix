import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BrainIQ",
  description: "Netflix-inspirierte IQ-Test Plattform (Starter)."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-neutral-950 text-white">{children}</body>
    </html>
  );
}
