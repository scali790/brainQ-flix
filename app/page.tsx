"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const rows = [
  {
    id: "klassik",
    title: "Klassische IQ‑Tests",
    items: [
      { id: "iq-basic", title: "IQ Basis 20", duration: "20 Min", level: "Einsteiger", cover: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" },
      { id: "iq-pro", title: "IQ Pro 40", duration: "40 Min", level: "Fortgeschritten", cover: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop" },
      { id: "iq-rapid", title: "IQ Rapid 10", duration: "10 Min", level: "Schnelltest", cover: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop" },
      { id: "iq-max", title: "IQ Max 60", duration: "60 Min", level: "Experte", cover: "https://images.unsplash.com/photo-1529336953121-a0ce8e82c1a9?q=80&w=1600&auto=format&fit=crop" },
    ],
  },
  {
    id: "logik",
    title: "Logik & Muster",
    items: [
      { id: "logic-fig", title: "Figurenfolgen", duration: "15 Min", level: "Mittel", cover: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop" },
      { id: "logic-num", title: "Zahlenreihen", duration: "12 Min", level: "Mittel", cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop" },
      { id: "logic-verbal", title: "Verbale Logik", duration: "18 Min", level: "Einsteiger", cover: "https://images.unsplash.com/photo-1522075554080-1b3b3c2f52e3?q=80&w=1600&auto=format&fit=crop" },
      { id: "logic-mix", title: "Logik Mix", duration: "22 Min", level: "Fortgeschritten", cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop" },
    ],
  },
  {
    id: "kurse",
    title: "Kurse & Übungen",
    items: [
      { id: "mem-boost", title: "Gedächtnis‑Booster", duration: "14 Tage Plan", level: "Programm", cover: "https://images.unsplash.com/photo-1484249170766-998fa6efe3c0?q=80&w=1600&auto=format&fit=crop" },
      { id: "focus-x", title: "Fokus X", duration: "4 Wochen", level: "Programm", cover: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop" },
      { id: "calc-speed", title: "Rechen‑Speed", duration: "7 Tage Plan", level: "Programm", cover: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop" },
      { id: "logic-lab", title: "Logic Lab", duration: "2 Wochen", level: "Programm", cover: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1600&auto=format&fit=crop" },
    ],
  },
];

const plans = [
  { id: "free", name: "Free", price: "0 AED", features: ["1 Test alle 2 Wochen", "E‑Mail‑Zertifikat", "Basis‑Statistiken"] },
  { id: "pro", name: "Monatspaket", price: "49 AED/Monat", features: ["Unbegrenzte Wiederholungen", "Kurse & Übungen", "Fortgeschrittene Auswertungen", "Personalisierte Trainingspläne"], highlight: true },
];

function Header({ onOpenAuth }: { onOpenAuth: () => void }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded bg-red-600" />
          <span className="font-semibold tracking-tight text-white">BrainIQ</span>
          <span className="ml-3 rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70">Beta</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a className="hover:text-white" href="#tests">Tests</a>
          <a className="hover:text-white" href="#preise">Preise</a>
          <a className="hover:text-white" href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onOpenAuth} className="rounded-lg border border-white/20 px-3 py-1.5 text-sm text-white hover:bg-white/10">Anmelden</button>
          <a href="#start" className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-neutral-900 hover:bg-white/90">Jetzt starten</a>
        </div>
      </div>
    </header>
  );
}

function Hero({ onOpenAuth }: { onOpenAuth: () => void }) {
  return (
    <section id="start" className="relative isolate overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 -z-10 opacity-40" style={{ background: "radial-gradient(60% 60% at 50% 40%, rgba(239,68,68,0.25), transparent 60%)" }} />
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">Teste dein Gehirn. Trainiere deine Intelligenz.</h1>
          <p className="mt-4 text-lg text-white/70">Netflix‑inspiriertes Erlebnis: Wähle Tests wie Serien, bekomme Empfehlungen und erhalte dein Zertifikat per E‑Mail.</p>
          <div className="mt-6 flex gap-3">
            <a href="#tests" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-white/90">Kostenlosen Test starten</a>
            <button onClick={onOpenAuth} className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Account erstellen</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ title, items, onSelect }: { title: string; items: any[]; onSelect: (item: any) => void }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <h2 className="mb-3 text-lg font-semibold text-white">{title}</h2>
      <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
        {items.map((it) => (
          <button key={it.id} onClick={() => onSelect(it)} className="group relative h-44 w-72 flex-shrink-0 overflow-hidden rounded-2xl bg-neutral-900">
            <img src={it.cover} alt={it.title} className="h-full w-full object-cover opacity-80 transition group-hover:scale-105 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
              <div className="text-sm font-semibold text-white">{it.title}</div>
              <div className="mt-0.5 text-xs text-white/70">{it.duration} · {it.level}</div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="preise" className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="text-center text-2xl font-bold text-white">Preise & Abo</h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-white/70">Wiederhole Tests alle 2 Wochen im Free‑Plan – oder hol dir unbegrenzten Zugang zu Kursen und Übungen.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {plans.map((p) => (
          <div key={p.id} className={`rounded-2xl border ${p.highlight ? "border-red-500/60 bg-red-500/5" : "border-white/10 bg-white/5"} p-6`}>
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold text-white">{p.name}</h3>
              <div className="text-right text-2xl font-bold text-white">{p.price}</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" /> {f}</li>
              ))}
            </ul>
            <button className={`mt-6 w-full rounded-xl px-4 py-2 text-sm font-semibold ${p.highlight ? "bg-white text-neutral-900 hover:bg-white/90" : "border border-white/20 text-white hover:bg-white/10"}`}>
              {p.highlight ? "Jetzt Pro werden" : "Free testen"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/60">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} BrainIQ — Alle Rechte vorbehalten.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Datenschutz</a>
          <a href="#" className="hover:text-white">Impressum</a>
          <a href="#" className="hover:text-white">Kontakt</a>
        </div>
      </div>
    </footer>
  );
}

function AuthModal({ open, onClose, onSubmit }: { open: boolean; onClose: () => void; onSubmit: (email: string) => void }) {
  const [email, setEmail] = useState("");
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-neutral-950 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Account erstellen</h3>
          <button onClick={onClose} className="text-white/60 hover:text-white">✕</button>
        </div>
        <p className="mt-2 text-sm text-white/70">Gib deine E‑Mail ein. Wir senden dir Testergebnisse & Zertifikat.</p>
        <div className="mt-4 space-y-3">
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" className="w-full rounded-xl border border-white/20 bg-transparent px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/40" />
          <button onClick={() => onSubmit(email)} className="w-full rounded-xl bg-white px-4 py-2 font-semibold text-neutral-900 hover:bg-white/90">Weiter</button>
        </div>
      </div>
    </div>
  );
}

function DetailModal({ item, open, onClose }: { item: any; open: boolean; onClose: () => void }) {
  if (!open || !item) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
        <div className="relative h-56 w-full">
          <img src={item.cover} alt={item.title} className="h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <button onClick={onClose} className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-white/80 hover:text-white">✕</button>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-1 text-sm text-white/70">{item.duration} · {item.level}</p>
          <p className="mt-3 text-sm text-white/80">Beschreibung: Adaptive Aufgaben, fairer Schwierigkeitsverlauf, Zeitmessung und Plausibilitäts‑Checks.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={`/test/${item.id}`} className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-white/90">Test starten</Link>
            <button className="rounded-xl border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10">Probeaufgaben</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const items = [
    { q: "Wie oft kann ich kostenlos testen?", a: "Im Free‑Plan alle 14 Tage (2 Wochen). Mit Pro beliebig oft." },
    { q: "Bekomme ich ein Zertifikat?", a: "Ja, nach jedem abgeschlossenen Test per E‑Mail." },
    { q: "Sind die Tests wissenschaftlich validiert?", a: "Wir nutzen gängige Aufgabentypen (Matrizen, Zahlenreihen, Analogien) und evaluieren laufend." },
  ];
  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="text-2xl font-bold text-white">FAQ</h2>
      <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10">
        {items.map((it, i) => (
          <details key={i} className="group p-4 open:bg-white/5">
            <summary className="cursor-pointer list-none text-white">
              <div className="flex items-center justify-between">
                <span className="font-medium">{it.q}</span>
                <span className="text-white/50 group-open:rotate-45">＋</span>
              </div>
            </summary>
            <p className="mt-2 text-sm text-white/70">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  const [authOpen, setAuthOpen] = useState(false);
  const [picked, setPicked] = useState<any | null>(null);

  const heroGradient = useMemo(
    () => (
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30" style={{ background: "radial-gradient(50% 50% at 50% 40%, rgba(99,102,241,0.35), transparent 60%)" }} />
    ),
    []
  );

  const onAuthSubmit = (email: string) => {
    // TODO: Firestore addDoc(waitlist)
    setAuthOpen(false);
    alert(`Danke! Bestätigung an ${email} (Dummy).`);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {heroGradient}
      <Header onOpenAuth={() => setAuthOpen(true)} />
      <Hero onOpenAuth={() => setAuthOpen(true)} />

      <section id="tests">
        {rows.map((row) => (
          <Row key={row.id} title={row.title} items={row.items} onSelect={setPicked} />
        ))}
      </section>

      <Pricing />
      <FAQ />
      <Footer />

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} onSubmit={onAuthSubmit} />
      <DetailModal item={picked} open={!!picked} onClose={() => setPicked(null)} />
    </div>
  );
}
