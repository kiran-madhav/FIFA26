import Image from "next/image";

function getCountryCodeFromEmoji(emoji: string) {
  if (!emoji) return null;
  const points = Array.from(emoji).map(c => c.codePointAt(0)!);
  if (points.length >= 2 && points[0] >= 0x1F1E6 && points[0] <= 0x1F1FF) {
    const char1 = String.fromCharCode(points[0] - 0x1F1E6 + 97);
    const char2 = String.fromCharCode(points[1] - 0x1F1E6 + 97);
    return char1 + char2;
  }
  if (emoji === "🏴󠁧󠁢󠁥󠁮󠁧󠁿") return "gb-eng";
  if (emoji === "🏴󠁧󠁢󠁳󠁣󠁴󠁿") return "gb-sct";
  if (emoji === "🏴󠁧󠁢󠁷󠁬󠁳󠁿") return "gb-wls";
  return null;
}

export function Flag({ emoji, className, size = 20 }: { emoji: string; className?: string; size?: number }) {
  const code = getCountryCodeFromEmoji(emoji);
  
  if (!code) {
    return <span className={className} style={{ fontSize: size }}>{emoji}</span>;
  }

  return (
    <div className={`relative inline-block overflow-hidden rounded-sm ${className}`} style={{ width: size * 1.4, height: size }}>
      <Image 
        src={`https://flagcdn.com/w40/${code}.png`} 
        alt={code}
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  );
}
