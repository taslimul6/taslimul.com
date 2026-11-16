/** Price items shown in the ticker and cards. `up` = price went up (red), otherwise down (green). */
const items = [
  { name: "চাল", price: "৳৭৪", change: "2.1%", up: true },
  { name: "ডাল", price: "৳১৪২", change: "1.4%", up: false },
  { name: "তেল", price: "৳১৮৫", change: "3.0%", up: true },
  { name: "মাছ", price: "৳৩২০", change: "0.8%", up: false },
];

/**
 * Stylised wireframe of a Bangla market-price tracker
 * (scrolling price ticker + highlight banner + price cards with ▲/▼ changes).
 */
export function PriceTrackerMockup() {
  return (
    <div className="dots-bg flex h-full flex-col gap-2.5 p-5" aria-hidden="true">
      {/* ticker */}
      <div className="flex gap-3 overflow-hidden whitespace-nowrap border-y border-ink/10 bg-panel px-2 py-1 font-mono text-[8px]">
        {items.map((item) => (
          <span key={item.name}>
            {item.name} {item.price}{" "}
            <span className={item.up ? "text-[#D93F3F]" : "text-[#1F8A4C]"}>
              {item.up ? "▲" : "▼"} {item.change}
            </span>
          </span>
        ))}
      </div>

      {/* banner */}
      <div className="flex items-center justify-between border border-[#1F8A4C]/20 bg-[#1F8A4C]/10 px-3 py-2">
        <div className="space-y-1.5">
          <div className="h-2.5 w-28 bg-ink/80" />
          <div className="h-2 w-16 bg-[#1F8A4C]" />
        </div>
        <div className="h-7 w-7 rounded-full bg-[#E9B872]" />
      </div>

      {/* price cards */}
      <div className="grid flex-1 grid-cols-4 gap-2">
        {items.map((item) => (
          <div key={item.name} className="flex flex-col justify-between border border-ink/10 bg-panel p-1.5">
            <div className="text-[9px] font-semibold leading-tight">{item.name}</div>
            <div>
              <div className="text-[10px] font-semibold leading-tight">{item.price}</div>
              <div
                className={`mt-0.5 inline-block px-1 font-mono text-[7px] ${
                  item.up ? "bg-[#D93F3F]/10 text-[#D93F3F]" : "bg-[#1F8A4C]/10 text-[#1F8A4C]"
                }`}
              >
                {item.up ? "▲" : "▼"} {item.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
