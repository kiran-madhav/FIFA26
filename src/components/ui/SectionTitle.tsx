/**
 * Shared section title — gold gradient centered heading.
 * Usage: <SectionTitle>Gallery</SectionTitle>
 */
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl sm:text-3xl text-white text-center mb-8 tracking-wide">
      <span className="text-gradient-gold">{children}</span>
    </h2>
  );
}
