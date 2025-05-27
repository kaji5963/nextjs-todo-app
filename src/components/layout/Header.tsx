"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
          >
            Todo App
          </Link>
          <nav className="space-x-4">
            <Link
              href="/"
              className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/"
              className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              ログアウト
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
