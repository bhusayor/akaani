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
