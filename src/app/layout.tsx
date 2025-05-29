import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import AnimatedBackground from "@/components/features/auth/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskPalette",
  description: "シンプルで使いやすいタスク管理アプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <AnimatedBackground>{children}</AnimatedBackground>
      </body>
    </html>
  );
}
