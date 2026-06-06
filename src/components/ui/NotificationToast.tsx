"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Goal, AlertTriangle, Clock, CheckCircle2, Info } from "lucide-react";
import { useNotificationStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const ICONS = {
  goal: { icon: Goal, color: "text-green-400", bg: "bg-green-400/10 border-green-400/30" },
  card: { icon: AlertTriangle, color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/30" },
  kickoff: { icon: Clock, color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/30" },
  fulltime: { icon: CheckCircle2, color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/30" },
  info: { icon: Info, color: "text-[var(--fifa-gold)]", bg: "bg-[var(--fifa-blue)]/20 border-[var(--fifa-blue)]/40" },
};

export function NotificationToast() {
  const { notifications, removeNotification } = useNotificationStore();

  // Auto-remove after 5s
  useEffect(() => {
    if (notifications.length === 0) return;
    const timer = setTimeout(() => {
      removeNotification(notifications[notifications.length - 1].id);
    }, 5000);
    return () => clearTimeout(timer);
  }, [notifications, removeNotification]);

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-xs w-full pointer-events-none">
      <AnimatePresence>
        {notifications.map((n) => {
          const { icon: Icon, color, bg } = ICONS[n.type] ?? ICONS.info;
          return (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.9 }}
              className={cn(
                "glass-card pointer-events-auto flex items-start gap-3 p-3 border",
                bg
              )}
            >
              <div className={cn("mt-0.5 flex-shrink-0", color)}>
                <Icon size={16} />
              </div>
              <p className="text-sm text-[var(--text-primary)] flex-1 leading-snug">{n.message}</p>
              <button
                onClick={() => removeNotification(n.id)}
                className="flex-shrink-0 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                <X size={14} />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
