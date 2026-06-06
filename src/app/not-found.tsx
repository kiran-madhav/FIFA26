import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl mb-6">⚽</div>
      <h1 className="font-display text-5xl font-black text-gradient-gold mb-3">404</h1>
      <p className="text-[var(--text-secondary)] mb-8 max-w-md">
        This page is offside! The content you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="inline-flex items-center gap-2 bg-[var(--fifa-gold)] text-black px-6 py-3 rounded-xl font-bold hover:bg-orange-500 transition-colors shadow-lg">
        Back to Home
      </Link>
    </div>
  );
}
