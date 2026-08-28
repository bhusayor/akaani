/**
 * Decides which currency the page shows.
 *
 * Two passes, because neither signal alone is good enough:
 *
 * 1. Timezone, synchronously before first paint. No network on the critical
 *    path, so the common case paints the right price rather than flashing the
 *    wrong one. It is right for almost everyone, but it cannot see a VPN: a
 *    VPN moves your IP, not your machine's clock.
 * 2. Country by IP, async and best-effort, which does see a VPN. It only
 *    corrects pass 1 when the two disagree, is capped by a timeout, and any
 *    failure leaves the timezone answer standing.
 *
 * A saved manual choice short-circuits both. The IP answer is cached per
 * session so a VPN switched on mid-visit is picked up on the next page.
 */
const SNIPPET = `(function(){
var D=document.documentElement,K="akaani-region",C="akaani-cc";
function set(r){if(D.dataset.region!==r){D.dataset.region=r;try{document.dispatchEvent(new CustomEvent("akaani:region",{detail:r}))}catch(e){}}}
var saved=null;try{saved=localStorage.getItem(K)}catch(e){}
if(saved==="ng"||saved==="us"){set(saved);return}
try{var t=Intl.DateTimeFormat().resolvedOptions().timeZone||"";set(t==="Africa/Lagos"?"ng":"us")}catch(e){set("ng")}
var cc=null;try{cc=sessionStorage.getItem(C)}catch(e){}
if(cc){set(cc==="NG"?"ng":"us");return}
try{
var a=new AbortController(),k=setTimeout(function(){a.abort()},2500);
fetch("https://api.country.is/",{signal:a.signal})
.then(function(r){return r.ok?r.json():null})
.then(function(d){if(!d||!d.country)return;try{sessionStorage.setItem(C,d.country)}catch(e){}set(d.country==="NG"?"ng":"us")})
.catch(function(){})
.then(function(){clearTimeout(k)});
}catch(e){}
})();`;

export default function RegionScript() {
  return <script dangerouslySetInnerHTML={{ __html: SNIPPET }} />;
}
