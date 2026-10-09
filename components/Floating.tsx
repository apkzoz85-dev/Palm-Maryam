"use client";

import { useEffect, useState } from "react";
import { PHONE_TEL, WHATSAPP_URL, type Dict } from "@/lib/content";

const COOKIE_KEY = "pgpx_cookie_ok";

// Fires a conversion event if Google Ads gtag is present (set NEXT_PUBLIC_GADS_ID).
function track(name: string) {
  try {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.("event", name, { event_category: "lead", page_location: location.href });
  } catch {
    /* analytics must never break the page */
  }
}

export default function Floating({ d }: { d: Dict }) {
  const [showCookie, setShowCookie] = useState(false);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    try {
      setShowCookie(localStorage.getItem(COOKIE_KEY) !== "1");
    } catch {
      setShowCookie(true);
    }
    const onScroll = () => setShowBar(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function acceptCookies() {
    try {
      localStorage.setItem(COOKIE_KEY, "1");
    } catch {
      /* storage blocked: just hide for this view */
    }
    setShowCookie(false);
  }

  return (
    <>
      {/* Mobile bottom bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-px border-t border-line bg-white/95 backdrop-blur safe-bottom transition-transform duration-300 md:hidden ${
          showBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a href={`tel:${PHONE_TEL}`} onClick={() => track("call_click")} className="py-3 text-center text-sm font-semibold text-ink">
          📞 {d.floating.call}
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click")} className="py-3 text-center text-sm font-semibold text-ink">
          💬 {d.floating.whatsapp}
        </a>
        <a href="#register" className="bg-clay py-3 text-center text-sm font-semibold text-white">
          {d.nav.register}
        </a>
      </div>

      {/* Desktop floating buttons */}
      <div className="fixed bottom-6 end-6 z-40 hidden flex-col gap-3 md:flex">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={d.floating.whatsapp}
          onClick={() => track("whatsapp_click")}
          className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-xl transition hover:scale-105"
        >
          💬
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          aria-label={d.floating.call}
          onClick={() => track("call_click")}
          className="grid h-14 w-14 place-items-center rounded-full bg-clay text-2xl text-white shadow-xl transition hover:scale-105"
        >
          📞
        </a>
      </div>

      {showCookie && (
        <div className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-xl flex-col gap-3 rounded-2xl bg-ink p-4 text-sm text-white shadow-2xl sm:flex-row sm:items-center sm:justify-between md:bottom-6 safe-bottom">
          <p className="leading-relaxed text-white/90">{d.cookie.text}</p>
          <button onClick={acceptCookies} className="shrink-0 rounded-full bg-gold px-5 py-2 font-semibold text-ink">
            {d.cookie.accept}
          </button>
        </div>
      )}
    </>
  );
}
