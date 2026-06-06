"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, X, Clock, Tag } from "lucide-react";
import { HIGHLIGHTS } from "@/lib/data/news";
import { formatDate } from "@/lib/utils";

type Highlight = typeof HIGHLIGHTS[0];

function VideoModal({ highlight, onClose }: { highlight: Highlight; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-3xl bg-[var(--bg-card)] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-[var(--border-glass)]">
          <h3 className="font-semibold text-[var(--text-primary)] text-sm pr-4">{highlight.title}</h3>
          <button
            id="close-video-modal"
            onClick={onClose}
            className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        <div className="relative pt-[56.25%]">
          <iframe
            src={highlight.videoUrl + "?autoplay=1"}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="p-4 flex flex-wrap gap-2">
          {highlight.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-[11px] bg-[var(--fifa-blue)]/20 text-[var(--fifa-blue-light)] border border-[var(--fifa-blue)]/30"
            >
              #{tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HighlightsPage() {
  const [activeHighlight, setActiveHighlight] = useState<Highlight | null>(null);
  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = ["All", ...Array.from(new Set(HIGHLIGHTS.flatMap((h) => h.tags)))];

  const filtered = selectedTag === "All"
    ? HIGHLIGHTS
    : HIGHLIGHTS.filter((h) => h.tags.includes(selectedTag));

  return (
    <div className="min-h-screen pt-20 max-w-screen-xl mx-auto px-4 pb-20">
      <div className="py-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl sm:text-5xl font-black text-[var(--text-primary)] mb-2"
        >
          Match <span className="text-gradient-gold">Highlights</span>
        </motion.h1>
        <p className="text-[var(--text-secondary)]">Goals, moments & full match replays</p>
      </div>

      {/* Tags Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {allTags.map((tag) => (
          <button
            key={tag}
            id={`tag-filter-${tag.toLowerCase().replace(/\s/g, "-")}`}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedTag === tag
                ? "bg-[var(--fifa-blue)] text-white"
                : "bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            {tag === "All" ? "🎬 All" : `#${tag}`}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTag}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((highlight, i) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden cursor-pointer group"
              onClick={() => setActiveHighlight(highlight)}
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={highlight.thumbnail}
                  alt={highlight.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center group-hover:bg-[var(--fifa-gold)]/80 transition-all"
                  >
                    <Play size={22} className="text-white fill-white ml-1" />
                  </motion.div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-bold flex items-center gap-1">
                  <Clock size={9} /> {highlight.duration}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-[var(--text-primary)] text-sm leading-snug line-clamp-2 group-hover:text-[var(--fifa-gold)] transition-colors mb-2">
                  {highlight.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {highlight.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 rounded text-[10px] bg-[var(--bg-secondary)] text-[var(--text-muted)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="text-[10px] text-[var(--text-muted)]">
                  {formatDate(highlight.publishedAt)}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* FIFA+ Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 glass-card-gold p-8 text-center"
      >
        <div className="text-4xl mb-4">🎬</div>
        <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2">
          Watch More on <span className="text-gradient-gold">FIFA+</span>
        </h3>
        <p className="text-[var(--text-secondary)] mb-6 max-w-md mx-auto text-sm">
          Full match replays, documentaries, live matches, and exclusive World Cup 2026 content — all on FIFA+
        </p>
        <a
          href="https://www.plus.fifa.com/en"
          target="_blank"
          rel="noopener noreferrer"
          id="fifa-plus-link"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--fifa-blue)] to-[var(--fifa-blue-light)] text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all glow-blue"
        >
          <Play size={16} className="fill-white" /> Watch on FIFA+
        </a>
        <div className="mt-4 text-xs text-[var(--text-muted)]">
          🇮🇳 India: Also available on ZEE5 & Unite8 Sports
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeHighlight && (
          <VideoModal highlight={activeHighlight} onClose={() => setActiveHighlight(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
