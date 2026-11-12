"use client";

import { useEffect, useState } from "react";

/**
 * Ticking clock for a given IANA time zone (e.g. "Asia/Dhaka").
 * Renders "--:--:--" on the server, then starts ticking in the browser
 * — this avoids a hydration mismatch between server and client time.
 */
export function LiveClock({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-GB", { timeZone }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return <span suppressHydrationWarning>{time}</span>;
}
