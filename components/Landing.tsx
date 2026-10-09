import LeadForm from "@/components/LeadForm";
import Floating from "@/components/Floating";
import {
  LEADS_EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  type Dict,
} from "@/lib/content";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-clay">{children}</p>
  );
}

function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
      {children}
    </h2>
  );
}

export default function Landing({ d, path }: { d: Dict; path: string }) {
  const isAr = d.locale === "ar";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: d.seo.title,
    description: d.seo.description,
    inLanguage: d.locale === "ar" ? "ar-EG" : "en",
    about: {
      "@type": "Residence",
      name: "Palm Gardens at PX",
      description: d.phase.text,
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: d.faq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  };

  return (
    <div dir={d.dir} lang={d.locale} data-path={path} className="min-h-screen pb-24 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ========== Header ========== */}
      <header className="sticky top-0 z-30 border-b border-line/70 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="font-display text-xl font-bold tracking-tight text-ink">
            Palm Gardens <span className="text-clay">PX</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-ink/80 lg:flex">
            <a href="#highlights" className="hover:text-clay">{d.nav.highlights}</a>
            <a href="#phase" className="hover:text-clay">{d.nav.phase}</a>
            <a href="#masterplan" className="hover:text-clay">{d.nav.masterplan}</a>
            <a href="#units" className="hover:text-clay">{d.nav.units}</a>
            <a href="#payment" className="hover:text-clay">{d.nav.payment}</a>
            <a href="#gallery" className="hover:text-clay">{d.nav.gallery}</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={d.nav.switchHref}
              hrefLang={d.locale === "ar" ? "en" : "ar"}
              className="rounded-full border border-line px-3 py-1.5 text-sm font-semibold text-ink hover:border-clay hover:text-clay"
            >
              {d.nav.switchLabel}
            </a>
            <a href="#register" className="hidden rounded-full bg-clay px-4 py-2 text-sm font-semibold text-white hover:bg-clay-dark sm:inline-block">
              {d.nav.register}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ========== Hero ========== */}
        <section className="relative isolate overflow-hidden text-white">
          <img
            src="/images/render-4.jpg"
            alt={isAr ? "تصور معماري لمشروع Palm Gardens at PX بالم هيلز" : "Architectural rendering of Palm Gardens at PX, Palm Hills"}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/90" />
          <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-16 sm:px-6 md:pb-24 md:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/90 px-4 py-1.5 text-sm font-bold text-ink">
                <span className="h-2 w-2 animate-pulse rounded-full bg-clay" />
                {d.hero.badge}
              </span>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-gold">{d.hero.eyebrow}</p>
              <h1 className="font-display mt-3 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
                {d.hero.title}
              </h1>
              <p className="mt-4 text-xl font-medium text-white/95 sm:text-2xl">{d.hero.subtitle}</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">{d.hero.lead}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#register" className="rounded-full bg-clay px-7 py-3.5 font-semibold text-white shadow-xl shadow-black/30 transition hover:bg-clay-dark">
                  {d.hero.ctaRegister}
                </a>
                <a href={`tel:${PHONE_TEL}`} className="rounded-full border border-white/60 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/10">
                  📞 {d.hero.ctaCall} · <span dir="ltr">{PHONE_DISPLAY}</span>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white transition hover:brightness-110">
                  💬 {d.hero.ctaWhatsapp}
                </a>
              </div>
            </div>

            <aside className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md sm:p-8">
              <dl className="grid grid-cols-2 gap-6">
                {d.hero.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-4xl font-bold text-gold sm:text-5xl">{s.value}</dd>
                    <dd className="mt-1 text-sm text-white/85">{s.label}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 border-t border-white/20 pt-6">
                <p className="text-sm font-semibold text-gold">{isAr ? "خطة السداد" : "Payment plan"}</p>
                <p className="mt-2 text-lg font-semibold leading-snug">{d.hero.paymentLine}</p>
              </div>
            </aside>
          </div>
        </section>

        {/* ========== Highlights ========== */}
        <section id="highlights" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Eyebrow>{d.nav.highlights}</Eyebrow>
          <SectionTitle>{d.highlights.title}</SectionTitle>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{d.highlights.intro}</p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.highlights.items.map((item) => (
              <article key={item.title} className="group rounded-3xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <div className="mb-5 h-1 w-12 rounded-full bg-clay transition group-hover:w-20" />
                <h3 className="font-display text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ========== Pyramid view ========== */}
        <section className="bg-sand">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Eyebrow>{isAr ? "الإطلالة" : "The view"}</Eyebrow>
              <SectionTitle>{d.pyramid.title}</SectionTitle>
              <p className="mt-5 text-lg leading-8 text-muted">{d.pyramid.text}</p>
              <a href="#units" className="mt-8 inline-flex rounded-full border border-ink px-6 py-3 font-semibold text-ink transition hover:bg-ink hover:text-white">
                {d.nav.units} →
              </a>
            </div>
            <div className="order-1 overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/20 lg:order-2">
              <img src="/images/render-5.jpg" alt={d.pyramid.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </div>
          </div>
        </section>

        {/* ========== Phase 2 ========== */}
        <section id="phase" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <Eyebrow>{d.nav.phase}</Eyebrow>
              <SectionTitle>{d.phase.title}</SectionTitle>
              <p className="mt-5 text-lg leading-8 text-muted">{d.phase.text}</p>
              <ul className="mt-8 grid gap-3">
                {d.phase.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-line">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-clay" />
                    <span className="leading-7">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="rounded-3xl bg-ink p-8 text-white sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{isAr ? "الحالة" : "Status"}</p>
              <p className="mt-4 text-lg leading-8 text-white/90">{d.phase.soldOut}</p>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/15 pt-8">
                <div>
                  <p className="font-display text-4xl font-bold text-gold">36</p>
                  <p className="mt-1 text-sm text-white/70">{isAr ? "فدان" : "Acres"}</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-bold text-gold">~18</p>
                  <p className="mt-1 text-sm text-white/70">{isAr ? "فدان The Valley" : "Acres The Valley"}</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-bold text-gold">128–140</p>
                  <p className="mt-1 text-sm text-white/70">{isAr ? "متر فوق سطح البحر" : "Metres above sea level"}</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-bold text-gold">17.5%</p>
                  <p className="mt-1 text-sm text-white/70">Footprint</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ========== Masterplan ========== */}
        <section id="masterplan" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Eyebrow>{d.nav.masterplan}</Eyebrow>
          <SectionTitle>{d.masterplan.title}</SectionTitle>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{d.masterplan.text}</p>
          <figure className="mt-12 overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl shadow-ink/5 ring-1 ring-line">
            <img src="/images/masterplan.jpg" alt={d.masterplan.alt} loading="lazy" className="w-full rounded-2xl" />
            <figcaption className="px-3 pb-2 pt-4 text-sm text-muted">{d.masterplan.caption}</figcaption>
          </figure>
        </section>

        {/* ========== Units & prices ========== */}
        <section id="units" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <Eyebrow>{d.nav.units}</Eyebrow>
            <SectionTitle>{d.units.title}</SectionTitle>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{d.units.intro}</p>

            <div className="mt-12 overflow-x-auto rounded-3xl border border-line">
              <table className="w-full min-w-[720px] border-collapse text-start text-sm sm:text-base">
                <thead className="bg-ink text-white">
                  <tr>
                    {d.units.headers.map((h) => (
                      <th key={h} scope="col" className="px-5 py-4 text-start font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {d.units.rows.map((row, i) => (
                    <tr key={row[0]} className={i % 2 ? "bg-paper" : "bg-white"}>
                      {row.map((cell, j) => (
                        <td key={j} className={`border-t border-line px-5 py-4 ${j === 0 ? "font-semibold text-ink" : "text-ink/80"} ${j === 5 ? "font-semibold text-clay" : ""}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted">{d.units.note}</p>
          </div>
        </section>

        {/* ========== Payment ========== */}
        <section id="payment" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Eyebrow>{d.nav.payment}</Eyebrow>
          <SectionTitle>{d.payment.title}</SectionTitle>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{d.payment.intro}</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.payment.steps.map((s, i) => (
              <div key={s.label} className="relative overflow-hidden rounded-3xl bg-sand p-7">
                <span className="absolute -end-2 -top-4 font-display text-8xl font-bold text-ink/5">{i + 1}</span>
                <p className="font-display text-5xl font-bold text-clay">{s.value}</p>
                <p className="mt-3 font-medium text-ink">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">{d.payment.note}</p>
        </section>

        {/* ========== Amenities + masterplan ========== */}
        <section className="bg-ink text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <Eyebrow>{isAr ? "المرافق" : "Amenities"}</Eyebrow>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{d.amenities.title}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">{d.amenities.intro}</p>
            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {d.amenities.items.map((a) => (
                <div key={a.title} className="bg-ink p-7 sm:p-8">
                  <h3 className="font-display text-2xl font-semibold text-gold">{a.title}</h3>
                  <p className="mt-3 leading-7 text-white/75">{a.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-14 max-w-3xl border-s-4 border-clay ps-6">
              <h3 className="font-display text-2xl font-semibold">{d.masterplan.title}</h3>
              <p className="mt-3 text-lg leading-8 text-white/80">{d.masterplan.text}</p>
            </div>
          </div>
        </section>

        {/* ========== Construction gallery ========== */}
        <section id="gallery" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Eyebrow>{d.nav.gallery}</Eyebrow>
          <SectionTitle>{d.gallery.title}</SectionTitle>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{d.gallery.intro}</p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {d.gallery.items.map((g) => (
              <figure key={g.src} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-line">
                <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="px-5 py-4 text-sm font-medium text-ink/80">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ========== Register form ========== */}
        <section id="register" className="bg-sand">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow>{d.nav.register}</Eyebrow>
              <SectionTitle>{d.form.title}</SectionTitle>
              <p className="mt-5 text-lg leading-8 text-muted">{d.form.intro}</p>
              <div className="mt-8 space-y-3 text-ink/85">
                <p>
                  📞{" "}
                  <a href={`tel:${PHONE_TEL}`} dir="ltr" className="font-semibold text-clay hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p>
                  💬{" "}
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-clay hover:underline">
                    WhatsApp
                  </a>
                </p>
                <p>
                  ✉️{" "}
                  <a href={`mailto:${LEADS_EMAIL}`} className="font-semibold text-clay hover:underline" dir="ltr">
                    {LEADS_EMAIL}
                  </a>
                </p>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-ink/5 ring-1 ring-line sm:p-10">
              <LeadForm d={d.form} locale={d.locale} />
            </div>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionTitle>{d.faq.title}</SectionTitle>
          <div className="mt-10 divide-y divide-line rounded-3xl border border-line bg-white">
            {d.faq.items.map((f) => (
              <details key={f.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                  {f.q}
                  <span className="text-clay transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-7 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ========== Disclaimer + privacy ========== */}
        <section className="border-t border-line bg-paper">
          <div className="mx-auto max-w-6xl space-y-6 px-4 py-14 text-sm leading-7 text-muted sm:px-6">
            <h2 className="font-semibold text-ink">{d.disclaimer.title}</h2>
            <p>{d.disclaimer.prices}</p>
            <p>{d.disclaimer.agent}</p>
            <p>{d.disclaimer.general}</p>
            <details className="rounded-2xl border border-line bg-white p-5">
              <summary className="cursor-pointer font-semibold text-ink">{d.privacy.summary}</summary>
              <p className="mt-3">{d.privacy.text}</p>
            </details>
          </div>
        </section>
      </main>

      {/* ========== Footer ========== */}
      <footer className="bg-ink py-12 text-white/75">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl font-bold text-white">
              Palm Gardens <span className="text-clay">PX</span>
            </p>
            <p className="mt-2 text-sm">{d.footer.tagline}</p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-white">{d.footer.contact}</p>
            <p className="mt-2" dir="ltr">
              <a href={`tel:${PHONE_TEL}`} className="hover:text-gold">{PHONE_DISPLAY}</a>
            </p>
            <p className="mt-1" dir="ltr">
              <a href={`mailto:${LEADS_EMAIL}`} className="hover:text-gold">{LEADS_EMAIL}</a>
            </p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-white/50 sm:px-6">
          © {new Date().getFullYear()} · {d.footer.rights}
        </p>
      </footer>

      <Floating d={d} />
    </div>
  );
}
