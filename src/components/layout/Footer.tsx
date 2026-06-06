import Link from "next/link";
import { Trophy, Globe, ExternalLink, Share2, Rss, Video } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-glass)] bg-[var(--bg-secondary)]/60 backdrop-blur-xl mt-20">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/logo.png" alt="WC Logo" className="w-full h-full object-contain drop-shadow-md" />
              </div>
              <div>
                <div className="font-display text-sm font-bold text-gradient-gold">FIFA World Cup</div>
                <div className="text-xs text-[var(--text-muted)] font-heading tracking-widest">2026</div>
              </div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              The ultimate platform for FIFA World Cup 2026. Live scores, stats, and everything football.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://twitter.com/fifaworldcup" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-[var(--bg-glass-light)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--fifa-gold)] hover:bg-[var(--fifa-blue)]/20 transition-all">
                <Share2 size={14} />
              </a>
              <a href="https://instagram.com/fifaworldcup" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-[var(--bg-glass-light)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--fifa-gold)] hover:bg-[var(--fifa-blue)]/20 transition-all">
                <Rss size={14} />
              </a>
              <a href="https://youtube.com/fifa" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-[var(--bg-glass-light)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--fifa-gold)] hover:bg-[var(--fifa-blue)]/20 transition-all">
                <Video size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 font-heading uppercase tracking-wider">Tournament</h4>
            <ul className="space-y-2">
              {[
                { href: "/schedule", label: "Match Schedule" },
                { href: "/groups", label: "Group Standings" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--fifa-gold)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Teams & Players */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 font-heading uppercase tracking-wider">Players</h4>
            <ul className="space-y-2">
              {[
                { href: "/teams", label: "All Teams" },
                { href: "/highlights", label: "Video Highlights" },
                { href: "/fantasy", label: "Fantasy XI" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--fifa-gold)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Streaming */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 font-heading uppercase tracking-wider">Watch Live (India)</h4>
            <ul className="space-y-2">
              {[
                { href: "https://www.zee5.com", label: "ZEE5", icon: "📺" },
                { href: "https://www.plus.fifa.com", label: "FIFA+", icon: "⚽" },
                { href: "https://www.fifa.com", label: "FIFA Official Site", icon: "🌐" },
              ].map(({ href, label, icon }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-secondary)] hover:text-[var(--fifa-gold)] transition-colors flex items-center gap-2">
                    <span>{icon}</span> {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-[var(--fifa-blue)]/10 border border-[var(--border-primary)]">
              <p className="text-xs text-[var(--text-secondary)]">
                🇮🇳 India: Watch on <strong className="text-[var(--fifa-gold)]">ZEE5</strong> & Unite8 Sports
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[var(--border-glass)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <Trophy size={12} className="text-[var(--fifa-gold)]" />
            <span>FIFA World Cup 2026 Fan Platform</span>
            <span>•</span>
            <Globe size={12} />
            <span>USA · Canada · Mexico</span>
          </div>
          <div className="text-xs text-[var(--text-muted)]">
            Data powered by{" "}
            <a href="https://www.football-data.org" target="_blank" rel="noopener noreferrer" className="text-[var(--fifa-blue-light)] hover:underline">
              football-data.org
            </a>
            {" "}· Not affiliated with FIFA
          </div>
        </div>
      </div>
    </footer>
  );
}
