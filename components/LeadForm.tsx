"use client";

import { useState, type FormEvent } from "react";
import type { Dict } from "@/lib/content";

type Status = "idle" | "sending" | "ok" | "error";

export default function LeadForm({ d, locale }: { d: Dict["form"]; locale: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never tick this hidden box.
    if (data.get("botcheck")) return;

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as { success?: boolean };
      if (json.success) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-clay focus:ring-2 focus:ring-clay/20";

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate={false}>
      <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ""} />
      <input type="hidden" name="subject" value={`New lead | Palm Gardens at PX | ${locale.toUpperCase()}`} />
      <input type="hidden" name="from_name" value="Palm Gardens at PX landing page" />
      <input type="hidden" name="page_language" value={locale} />
      {/* Honeypot field, hidden from people, visible to bots */}
      <label className="hidden" aria-hidden="true">
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="grid gap-1.5 text-sm font-medium">
        {d.name}
        <input name="name" type="text" required autoComplete="name" className={inputClass} />
      </label>

      <label className="grid gap-1.5 text-sm font-medium">
        {d.phone}
        <input
          name="phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder={d.phonePlaceholder}
          pattern="[+0-9 ]{8,16}"
          dir="ltr"
          className={inputClass}
        />
      </label>

      <label className="grid gap-1.5 text-sm font-medium">
        {d.unit}
        <select name="unit_type" defaultValue="" required className={inputClass}>
          <option value="" disabled>
            —
          </option>
          {d.unitOptions.map((o) => (
            <option key={o.value} value={o.label}>
              {o.label}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-1.5 text-sm font-medium">
        {d.notes}
        <textarea name="message" rows={3} className={inputClass} />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-clay px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-clay/20 transition hover:bg-clay-dark disabled:opacity-60"
      >
        {status === "sending" ? d.sending : d.submit}
      </button>

      {status === "ok" && (
        <p role="status" className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          {d.success}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
          {d.error}
        </p>
      )}
      <p className="text-xs text-muted">{d.privacyNote}</p>
    </form>
  );
}
