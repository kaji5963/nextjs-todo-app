"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 border-b border-slate-200/60 shadow-sm w-full">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-3">
          {/* チェックリスト風アイコン */}
          <span className="inline-block text-blue-400">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="16"
                rx="2"
                ry="2"
                stroke="currentColor"
                fill="none"
              />
              <path d="M9 10l2 2l4-4" stroke="currentColor" />
            </svg>
          </span>
          <Link
            href="/"
            className="text-xl font-medium text-slate-600 tracking-tight hover:text-blue-500 transition-colors cursor-pointer"
          >
            TaskPalette
          </Link>
        </div>
        <nav>
          <Link
            href="/login"
            className="px-4 py-2 text-base text-slate-500 hover:text-blue-500 hover:bg-white/60 rounded transition-colors cursor-pointer"
          >
            ログアウト
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
