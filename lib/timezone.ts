/**
 * How the customer's timezone is shown to them.
 *
 * "Africa/Lagos" is an IANA identifier, not something to put in front of a
 * customer about to pay. These turn it into the city and zone name they would
 * recognise, plus the current local time so they can see at a glance that we
 * read their clock correctly.
 */

/** The browser's own timezone, which is what the booking is made against. */
export function browserTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  } catch {
    return "UTC";
  }
}

/** "Africa/Lagos" -> "Lagos" */
export function tzCity(tz: string): string {
  return (tz.split("/").pop() ?? tz).replace(/_/g, " ");
}

/** "Africa/Lagos" -> "West Africa Standard Time" */
export function tzName(tz: string): string {
  try {
    const parts = new Intl.DateTimeFormat("en", { timeZone: tz, timeZoneName: "long" }).formatToParts(new Date());
    return parts.find((p) => p.type === "timeZoneName")?.value ?? "";
  } catch {
    return "";
  }
}

/** The customer's current wall-clock time, so they can sanity check the zone. */
export function nowIn(tz: string): string {
  try {
    return new Intl.DateTimeFormat(undefined, { timeZone: tz, hour: "numeric", minute: "2-digit" }).format(new Date());
  } catch {
    return "";
  }
}

/** "Lagos (West Africa Standard Time)", falling back gracefully. */
export function tzLabel(tz: string): string {
  const city = tzCity(tz);
  const name = tzName(tz);
  return name ? `${city} (${name})` : city;
}

/**
 * The short GMT offset for the zone, e.g. "GMT+1", "GMT-4", "GMT+5:30".
 * Short enough to sit beside a heading, and it needs no translation.
 */
export function tzOffset(tz: string): string {
  try {
    const parts = new Intl.DateTimeFormat("en", { timeZone: tz, timeZoneName: "shortOffset" }).formatToParts(new Date());
    const v = parts.find((p) => p.type === "timeZoneName")?.value;
    // "UTC+1" and "GMT+01:00" both show up depending on the engine
    if (v && /^(GMT|UTC)/.test(v)) {
      return v.replace(/^UTC/, "GMT").replace(/([+-]\d{1,2}):00$/, "$1").replace(/([+-])0(\d)/, "$1$2");
    }
  } catch {
    // shortOffset is not in every engine, fall through to the arithmetic
  }
  try {
    const now = new Date();
    const here = new Date(now.toLocaleString("en-US", { timeZone: tz }));
    const utc = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));
    const mins = Math.round((here.getTime() - utc.getTime()) / 60000);
    if (!mins) return "GMT";
    const sign = mins < 0 ? "-" : "+";
    const h = Math.floor(Math.abs(mins) / 60);
    const m = Math.abs(mins) % 60;
    return `GMT${sign}${h}${m ? ":" + String(m).padStart(2, "0") : ""}`;
  } catch {
    return "";
  }
}
