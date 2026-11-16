/**
 * Stylised wireframe of a dark project-management dashboard
 * (summary stat tiles, a "create project" form, project cards with status pills).
 */
export function ProjectBoardMockup() {
  const stats = [
    { label: "TOTAL", value: "3", color: "text-white" },
    { label: "PENDING", value: "2", color: "text-[#F5B83D]" },
    { label: "DONE", value: "1", color: "text-[#7CE38B]" },
    { label: "BUDGET", value: "$12.7k", color: "text-white" },
  ];

  return (
    <div className="flex h-full flex-col gap-2.5 bg-term p-5" aria-hidden="true">
      <div className="grid grid-cols-4 gap-2">
        {stats.map((stat) => (
          <div key={stat.label} className="border border-white/10 p-1.5">
            <div className="font-mono text-[7px] text-white/40">{stat.label}</div>
            <div className={`text-[11px] font-semibold leading-tight ${stat.color}`}>{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid flex-1 grid-cols-[1fr_1.7fr] gap-2.5">
        {/* form */}
        <div className="flex flex-col gap-1.5 border border-white/10 p-2">
          <div className="h-1.5 w-3/4 bg-white/70" />
          <div className="h-3 border border-white/10" />
          <div className="h-3 border border-white/10" />
          <div className="h-3 border border-white/10" />
          <div className="mt-auto h-3.5 bg-white" />
        </div>

        {/* project cards */}
        <div className="flex flex-col gap-2">
          {[
            { status: "Pending", tone: "bg-[#F5B83D]/15 text-[#F5B83D]" },
            { status: "Completed", tone: "bg-[#7CE38B]/15 text-[#7CE38B]" },
          ].map((card) => (
            <div key={card.status} className="flex flex-1 flex-col gap-1.5 border border-white/10 p-2">
              <div className="flex gap-1">
                <span className="bg-volt/30 px-1 font-mono text-[7px] text-[#9DB0FF]">Web</span>
                <span className={`px-1 font-mono text-[7px] ${card.tone}`}>● {card.status}</span>
              </div>
              <div className="h-2 w-2/3 bg-white/80" />
              <div className="mt-auto flex justify-between">
                <div className="h-1.5 w-1/3 bg-white/20" />
                <div className="font-mono text-[8px] text-[#7CE38B]">$4,500</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
