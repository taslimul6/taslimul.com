import type { JSX } from "react";
import type { ProjectMockup } from "@/data/types";
import { BudgetMockup } from "./BudgetMockup";
import { DirectoryMockup } from "./DirectoryMockup";
import { EventsMockup } from "./EventsMockup";
import { LandingMockup } from "./LandingMockup";
import { MarketplaceMockup } from "./MarketplaceMockup";
import { PriceTrackerMockup } from "./PriceTrackerMockup";
import { ProjectBoardMockup } from "./ProjectBoardMockup";

/** Maps a project's `mockup` key to its component. Add new mockups here. */
const mockups: Record<ProjectMockup, () => JSX.Element> = {
  marketplace: MarketplaceMockup,
  directory: DirectoryMockup,
  events: EventsMockup,
  prices: PriceTrackerMockup,
  budget: BudgetMockup,
  board: ProjectBoardMockup,
  landing: LandingMockup,
};

export function Mockup({ type }: { type: ProjectMockup }) {
  const Component = mockups[type];
  return <Component />;
}
