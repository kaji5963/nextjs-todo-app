"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface AnimatedBackgroundProps {
  children: React.ReactNode;
}

export default function AnimatedBackground({
  children,
}: AnimatedBackgroundProps) {
  const pathname = usePathname();
  const isAuthPage =
    pathname.startsWith("/login") || pathname.startsWith("/signup");

  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#e2e8f01a_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f01a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className={`relative z-10 w-full ${
          isAuthPage ? "flex items-center justify-center py-12" : ""
        }`}
      >
        <div
          className={`${
            isAuthPage ? "w-full max-w-md" : "container mx-auto px-4 py-8"
          }`}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
