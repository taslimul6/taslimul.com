/**
 * Stylised wireframe of a food marketplace (sidebar + product grid + CTA).
 * Purely decorative — shown until a real screenshot is added to the project.
 */
export function MarketplaceMockup() {
  return (
    <div className="dots-bg flex h-full gap-4 p-5" aria-hidden="true">
      <div className="w-1/4 space-y-2.5">
        <div className="h-3 w-3/4 bg-ink" />
        <div className="shimmer h-2" />
        <div className="shimmer h-2 w-5/6" />
        <div className="shimmer h-2 w-2/3" />
        <div className="shimmer h-2 w-4/5" />
      </div>
      <div className="grid flex-1 grid-cols-3 content-start gap-3">
        <div className="aspect-square border border-ink/10 bg-[#FFD9C7]" />
        <div className="aspect-square border border-ink/10 bg-lime/60" />
        <div className="aspect-square border border-ink/10 bg-[#FFD9C7]" />
        <div className="shimmer h-2" />
        <div className="shimmer h-2" />
        <div className="shimmer h-2" />
        <div className="col-span-3 mt-1 flex h-8 items-center bg-volt px-3 font-mono text-[10px] text-white">
          + ADD TO ORDER
        </div>
      </div>
    </div>
  );
}
