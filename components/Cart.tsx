"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type CartLine = { price: number; qty: number; img: string };
type CartState = Record<string, CartLine>;

const CART_KEY = "akaani_cart";
const CHECKOUT_URL = "https://useakaani.com/recipes";

/** Bundle cart: floating button, drawer and toast. Persists to localStorage. */
export default function Cart() {
  const [cart, setCart] = useState<CartState>({});
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const fabRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const toastRef = useRef<HTMLDivElement>(null);
  const shown = useRef(false);

  const count = Object.values(cart).reduce((n, l) => n + l.qty, 0);
  const total = Object.values(cart).reduce((n, l) => n + l.qty * l.price, 0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      if (saved) setCart(JSON.parse(saved) as CartState);
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  /* the bubble only exists once something is in the cart */
  useEffect(() => {
    if (!fabRef.current) return;
    if (count > 0 && !shown.current) {
      shown.current = true;
      gsap.to(fabRef.current, { scale: 1, opacity: 1, duration: 0.55, ease: "back.out(1.8)" });
    } else if (count === 0 && shown.current) {
      shown.current = false;
      gsap.to(fabRef.current, { scale: 0, opacity: 0, duration: 0.35, ease: "power2.in" });
      setOpen(false);
    }
  }, [count]);

  useEffect(() => {
    if (!drawerRef.current) return;
    gsap.to(drawerRef.current, {
      x: open ? 0 : "105%",
      duration: open ? 0.55 : 0.45,
      ease: open ? "power4.out" : "power3.in",
    });
    document.body.style.overflow = open ? "hidden" : "";
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
  }, [open]);

  const add = useCallback((name: string, price: number, img: string) => {
    setCart((prev) => ({ ...prev, [name]: { price, img, qty: (prev[name]?.qty ?? 0) + 1 } }));
    setToast(`${name} added to cart`);
  }, []);

  /* wire the server-rendered "Add to cart" buttons */
  useEffect(() => {
    const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>(".add-cart"));
    const offs = buttons.map((btn) => {
      const onClick = () => {
        const card = btn.closest<HTMLElement>(".product");
        if (!card) return;
        const name = card.dataset.name ?? "Bundle";
        const price = parseFloat(card.dataset.price ?? "0");
        const img = card.querySelector("img")?.getAttribute("src") ?? "";
        add(name, price, img);
      };
      btn.addEventListener("click", onClick);
      return () => btn.removeEventListener("click", onClick);
    });
    return () => offs.forEach((off) => off());
  }, [add]);

  useEffect(() => {
    if (!toast || !toastRef.current) return;
    const tl = gsap
      .timeline()
      .to(toastRef.current, { y: -120, opacity: 1, duration: 0.5, ease: "back.out(1.6)" })
      .to(toastRef.current, { y: 0, opacity: 0, duration: 0.4, ease: "power2.in" }, "+=1.8")
      .call(() => setToast(null));
    return () => {
      tl.kill();
    };
  }, [toast]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const step = (name: string, delta: number) =>
    setCart((prev) => {
      const line = prev[name];
      if (!line) return prev;
      const qty = line.qty + delta;
      const next = { ...prev };
      if (qty <= 0) delete next[name];
      else next[name] = { ...line, qty };
      return next;
    });

  const remove = (name: string) =>
    setCart((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });

  return (
    <>
      <div className="toast" ref={toastRef}>
        <i>✓</i>
        <span>{toast ?? "Added to cart"}</span>
      </div>

      <button className="cartfab" ref={fabRef} aria-label="Open cart" onClick={() => setOpen(true)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1.6" />
          <circle cx="19" cy="21" r="1.6" />
          <path d="M2 3h3l2.6 12.5a1.8 1.8 0 0 0 1.8 1.5h9.2a1.8 1.8 0 0 0 1.8-1.4L22 8H6" />
        </svg>
        <span className="cartfab__count">{count}</span>
      </button>

      <div className={`cartveil${open ? " is-open" : ""}`} onClick={() => setOpen(false)} />

      <aside className="cartdrawer" ref={drawerRef} aria-label="Shopping cart">
        <div className="cartdrawer__head">
          <b>Your cart</b>
          <button className="cartdrawer__close" aria-label="Close cart" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        <div className="cartdrawer__items">
          {count === 0 ? (
            <div className="cartdrawer__empty">
              <b>Your cart is empty</b>
              Pick a bundle and start cooking.
            </div>
          ) : (
            Object.entries(cart).map(([name, line]) => (
              <div className="cartitem" key={name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={line.img} alt="" />
                <div className="cartitem__info">
                  <b>{name}</b>
                  <em>${line.price.toFixed(2)}</em>
                </div>
                <div className="cartitem__qty">
                  <button type="button" aria-label="Decrease" onClick={() => step(name, -1)}>
                    −
                  </button>
                  <b>{line.qty}</b>
                  <button type="button" aria-label="Increase" onClick={() => step(name, 1)}>
                    +
                  </button>
                </div>
                <button className="cartitem__remove" type="button" aria-label="Remove" onClick={() => remove(name)}>
                  🗑
                </button>
              </div>
            ))
          )}
        </div>

        {count > 0 && (
          <div className="cartdrawer__foot">
            <div className="cartdrawer__total">
              <span>Subtotal</span>
              <b>${total.toFixed(2)}</b>
            </div>
            <a href={CHECKOUT_URL} className="btn btn--accent btn--lg">
              Checkout
            </a>
            <p className="cartdrawer__hint">Instant PDF download after payment.</p>
          </div>
        )}
      </aside>
    </>
  );
}
