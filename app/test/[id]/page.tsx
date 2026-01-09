import Link from "next/link";

export default async function TestPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-2xl font-bold">Test: {id}</h1>
        <p className="mt-2 text-white/70">
          Placeholder für die Test-Engine. Nächster Schritt: Fragen laden, Timer, Antworten speichern,
          Ergebnis berechnen, dann Zertifikat via /api/certificate auslösen.
        </p>

        <div className="mt-6 flex gap-3">
          <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-white/90">
            Start (Dummy)
          </button>
          <Link href="/" className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
            Zurück
          </Link>
        </div>
      </div>
    </main>
  );
}
