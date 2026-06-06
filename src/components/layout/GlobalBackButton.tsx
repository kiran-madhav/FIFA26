"use client";
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export function GlobalBackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Don't show on the home page
  if (pathname === "/") return null;

  return (
    <div className="fixed top-24 left-4 z-50 sm:top-28 sm:left-8">
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => router.back()}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--fifa-blue)] text-white shadow-lg shadow-[var(--fifa-blue)]/30 border border-white/10 glow-blue"
        title="Go Back"
      >
        <ArrowLeft size={20} />
      </motion.button>
    </div>
  );
}
