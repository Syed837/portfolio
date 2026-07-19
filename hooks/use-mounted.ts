"use client";

import { useEffect, useState } from "react";

/** Guards against SSR/client markup mismatches for client-only UI (e.g. theme toggle). */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
