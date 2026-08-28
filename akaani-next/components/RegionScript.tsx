/**
 * Sets data-region on <html> before first paint, so the right currency is
 * painted rather than swapped in afterwards. Runs as a blocking inline script
 * on purpose: doing this in an effect would flash the wrong price.
 *
 * Timezone rather than geo-IP: no network call, no third party, nothing to
 * consent to, and it survives ad blockers. A saved choice always wins.
 */
const SNIPPET = `(function(){try{var s=localStorage.getItem("akaani-region");if(s==="ng"||s==="us"){document.documentElement.dataset.region=s;return}var t=(Intl.DateTimeFormat().resolvedOptions().timeZone||"");document.documentElement.dataset.region=t==="Africa/Lagos"?"ng":"us"}catch(e){document.documentElement.dataset.region="ng"}})();`;

export default function RegionScript() {
  return <script dangerouslySetInnerHTML={{ __html: SNIPPET }} />;
}
