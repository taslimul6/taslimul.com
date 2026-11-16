/**
 * Stylised wireframe of an expense / budget tracker
 * (expense + income tiles, a budget card with a progress bar, transaction rows).
 */
export function BudgetMockup() {
  return (
    <div className="dots-bg flex h-full flex-col gap-2.5 p-5" aria-hidden="true">
      <div className="grid grid-cols-[1fr_1fr_1.6fr] gap-2">
        <div className="space-y-1.5 border border-ink/10 bg-panel p-2">
          <div className="font-mono text-[7px] text-dim">EXPENSE</div>
          <div className="text-[11px] font-semibold leading-none">$2,845</div>
        </div>
        <div className="space-y-1.5 border border-ink/10 bg-panel p-2">
          <div className="font-mono text-[7px] text-dim">INCOME</div>
          <div className="text-[11px] font-semibold leading-none text-[#1F8A4C]">$3,500</div>
        </div>
        <div className="space-y-1.5 bg-volt p-2 text-white">
          <div className="flex justify-between font-mono text-[7px] text-white/70">
            <span>BUDGET</span>
            <span>71%</span>
          </div>
          <div className="text-[11px] font-semibold leading-none">$4,000</div>
          <div className="h-1 bg-white/25">
            <div className="h-full w-[71%] bg-lime" />
          </div>
        </div>
      </div>

      {/* category chips */}
      <div className="flex gap-1.5">
        <span className="h-3 w-10 bg-volt" />
        <span className="h-3 w-8 border border-ink/15 bg-panel" />
        <span className="h-3 w-9 border border-ink/15 bg-panel" />
        <span className="h-3 w-7 border border-ink/15 bg-panel" />
      </div>

      {/* transactions */}
      <div className="flex flex-1 flex-col gap-1.5">
        {["w-1/2", "w-2/5", "w-3/5"].map((width, i) => (
          <div key={i} className="flex flex-1 items-center gap-2 border border-ink/10 bg-panel px-2">
            <span className="h-3 w-3 shrink-0 bg-lime/70" />
            <div className={`shimmer h-1.5 ${width}`} />
            <span className="ml-auto font-mono text-[8px]">-${[480, 120, 65][i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
