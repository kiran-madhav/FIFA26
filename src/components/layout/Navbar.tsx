"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, Calendar, Radio, BarChart3, Users, Trophy, Play,
  GitBranch, Star, Menu, X, Swords, ArrowLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/schedule", label: "Schedule", icon: Calendar },
  { href: "/groups", label: "Groups", icon: BarChart3 },
  { href: "/teams", label: "Teams", icon: Users },
  { href: "/highlights", label: "Highlights", icon: Play },
  { href: "/fantasy", label: "Fantasy", icon: Star },
  { href: "/polls", label: "Polls", icon: Swords },
];

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--bg-primary)]/90 backdrop-blur-xl border-b border-[var(--border-glass)] shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left Section: Back Button + Logo */}
        <div className="flex items-center gap-3">
          {pathname !== "/" && (
            <button
              id="nav-back-btn"
              onClick={() => router.back()}
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--fifa-blue)]/10 text-[var(--fifa-blue)] hover:bg-[var(--fifa-blue)] hover:text-white transition-all shadow-sm"
              aria-label="Go back"
            >
              <ArrowLeft size={18} />
            </button>
          )}

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <img src="/logo.png" alt="WC Logo" className="w-full h-full object-contain drop-shadow-md" />
          </div>
          <div className="hidden sm:block">
            <div className="font-display text-sm font-bold text-gradient-gold leading-none">
              FIFA World Cup
            </div>
            <div className="text-[10px] text-[var(--text-secondary)] font-heading tracking-widest uppercase">
              2026 • USA • CAN • MEX
            </div>
          </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
                  active
                    ? "text-[var(--fifa-gold)] bg-[var(--fifa-blue)]/20"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-glass-light)]"
                )}
              >
                <Icon size={15} />
                {label}
                {active && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg border border-[var(--fifa-blue)]/40 bg-[var(--fifa-blue)]/10"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu */}
          <button
            id="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-glass-light)] transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-[var(--bg-secondary)]/95 backdrop-blur-xl border-b border-[var(--border-glass)]"
          >
            <nav className="px-4 py-4 grid grid-cols-2 gap-2">
              {NAV_LINKS.map(({ href, label, icon: Icon }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                      active
                        ? "text-[var(--fifa-gold)] bg-[var(--fifa-blue)]/20 border border-[var(--fifa-blue)]/30"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-glass-light)] border border-transparent"
                    )}
                  >
                    <Icon size={18} className={active ? "text-[var(--fifa-gold)]" : "text-[var(--text-muted)]"} />
                    <span className="truncate">{label}</span>
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
