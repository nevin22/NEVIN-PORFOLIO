import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nevin22.vercel.app"),
  title: "Nevin Gabriel Prequencia — Full-Stack Developer",
  description:
    "Portfolio of Nevin Gabriel Prequencia, a full-stack developer working with React, TypeScript, Node.js, React Native, cloud platforms, and AI-assisted features.",
  authors: [{ name: "Nevin Gabriel Prequencia" }],
  openGraph: {
    title: "Nevin Gabriel Prequencia — Full-Stack Developer",
    description:
      "React, TypeScript, Node.js, real-time systems, cloud delivery, and AI-assisted features.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#17181c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
