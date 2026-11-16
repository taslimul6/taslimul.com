/** One result card in the directory wireframe. */
function ResultCard({ titleWidth, lineWidth }: { titleWidth: string; lineWidth: string }) {
  return (
    <div className="space-y-2 border border-ink/10 bg-panel p-3">
      <div className={`h-2.5 bg-ink/80 ${titleWidth}`} />
      <div className="shimmer h-2" />
      <div className={`shimmer h-2 ${lineWidth}`} />
      <div className="h-2 w-10 bg-[#28C840]/70" />
    </div>
  );
}

/**
 * Stylised wireframe of a search directory (search bar + result cards).
 * Purely decorative — shown until a real screenshot is added to the project.
 */
export function DirectoryMockup() {
  return (
    <div className="dots-bg flex h-full flex-col gap-3 p-5" aria-hidden="true">
      <div className="flex gap-2">
        <div className="flex h-8 flex-1 items-center border border-ink/20 bg-panel px-3 font-mono text-[10px] text-dim">
          search: cardiologist, dhaka_
        </div>
        <div className="h-8 w-16 bg-ink" />
      </div>
      <div className="grid flex-1 grid-cols-2 gap-3">
        <ResultCard titleWidth="w-2/3" lineWidth="w-1/2" />
        <ResultCard titleWidth="w-1/2" lineWidth="w-3/4" />
      </div>
    </div>
  );
}
