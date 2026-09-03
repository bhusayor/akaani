"use client";

import { useEffect, useState } from "react";

export type Region = "ng" | "us";

/**
 * Follows the region decided by the pre-paint script in RegionScript: timezone
 * first, then a country-by-IP correction that lands asynchronously.
 *
 * Reading `dataset.region` once on mount is not enough. The IP pass arrives a
 * few hundred milliseconds later, and in the booking flow that value decides
 * what the customer is charged, so it has to stay subscribed.
 */
export function useRegion(): [Region, (r: Region) => void] {
  const [region, setRegion] = useState<Region>("ng");

  useEffect(() => {
    const read = () => setRegion(document.documentElement.dataset.region === "us" ? "us" : "ng");
    read();
    document.addEventListener("akaani:region", read);
    return () => document.removeEventListener("akaani:region", read);
  }, []);

  function choose(next: Region) {
    setRegion(next);
    document.documentElement.dataset.region = next;
    try {
      localStorage.setItem("akaani-region", next);
    } catch {
      /* private mode: the choice just does not persist */
    }
    document.dispatchEvent(new CustomEvent("akaani:region", { detail: next }));
  }

  return [region, choose];
}

export const PRICE: Record<Region, { label: string; currency: "NGN" | "USD" }> = {
  ng: { label: "₦50,000", currency: "NGN" },
  us: { label: "$50", currency: "USD" },
};
