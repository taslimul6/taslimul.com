/**
 * Stylised wireframe of a dark SaaS landing page
 * (nav, glowing centered hero with CTA + CLI snippet, three pricing tiers).
 */
export function LandingMockup() {
  return (
    <div className="relative flex h-full flex-col gap-3 overflow-hidden bg-term p-5" aria-hidden="true">
      {/* glow behind the hero */}
      <div className="absolute left-1/2 top-[18%] h-24 w-48 -translate-x-1/2 rounded-full bg-volt/40 blur-2xl" />

      {/* nav */}
      <div className="relative flex items-center justify-between">
        <div className="h-2 w-12 bg-white/80" />
        <div className="flex gap-2">
          <span className="h-1 w-5 bg-white/30" />
          <span className="h-1 w-5 bg-white/30" />
          <span className="h-1 w-5 bg-white/30" />
        </div>
        <div className="h-3 w-9 bg-volt" />
      </div>

      {/* hero */}
      <div className="relative flex flex-col items-center gap-1.5 text-center">
        <div className="h-2.5 w-3/5 bg-white" />
        <div className="h-2.5 w-2/5 bg-gradient-to-r from-volt to-lime" />
        <div className="mt-1 h-1.5 w-1/2 bg-white/25" />
        <div className="mt-1.5 flex gap-1.5">
          <span className="h-3.5 w-12 bg-white" />
          <span className="flex h-3.5 items-center border border-white/20 px-1.5 font-mono text-[7px] text-lime">
            $ npx nexus init
          </span>
        </div>
      </div>

      {/* pricing tiers */}
      <div className="relative mt-auto grid grid-cols-3 gap-2">
        {[false, true, false].map((popular, i) => (
          <div
            key={i}
            className={`space-y-1 border p-1.5 ${popular ? "border-volt bg-volt/15" : "border-white/10"}`}
          >
            <div className="h-1 w-1/2 bg-white/40" />
            <div className="text-[10px] font-semibold leading-none text-white">${[0, 29, 99][i]}</div>
            <div className="h-1 w-3/4 bg-white/15" />
          </div>
        ))}
      </div>
    </div>
  );
}
