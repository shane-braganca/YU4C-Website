import { Link } from "react-router";
import { ArrowDown, ArrowRight, Flame } from "lucide-react";
import { useEffect, useState } from "react";

import { getAblazeEvents } from "../../utils/ablaze";
import { AblazeFlame } from "../components/AblazeFlame";

export function AblazePage() {
  // =========================
  // SUPABASE DATA
  // =========================

  const [ablazeEvents, setAblazeEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadEvents() {
      try {
        const data = await getAblazeEvents();
        setAblazeEvents(data);
      } catch (err) {
        console.error("Failed to load Ablaze events:", err);
        setError("Unable to load Ablaze events.");
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
        <div className="text-center">
          <Flame className="mx-auto mb-5 h-8 w-8 animate-pulse text-orange-500" />

          <p className="text-sm tracking-[0.3em] text-gray-400">
            LOADING ABLAZE...
          </p>
        </div>
      </div>
    );
  }

  // =========================
  // ERROR
  // =========================

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
        <div className="text-center">
          <Flame className="mx-auto mb-5 h-8 w-8 text-red-500" />

          <p className="text-red-400">{error}</p>

          <p className="mt-3 text-sm text-gray-500">
            Please try refreshing the page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="overflow-hidden bg-[#050505] text-white">
      {/* =========================
          HERO
      ========================= */}

      <section className="relative min-h-[850px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#050505]" />

        {/* Orange atmospheric glow */}
        <div
          className="absolute left-1/2 top-[55%] h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,100,20,0.20), transparent 65%)",
          }}
        />

        {/* Subtle side glow */}
        <div
          className="absolute right-[-10%] top-[10%] h-[500px] w-[400px] rounded-full blur-[140px]"
          style={{
            background: "#ff5a1f",
            opacity: 0.08,
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[850px] max-w-7xl flex-col items-center justify-center px-6 text-center">
          {/* Small heading */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-orange-500/70" />

            <span className="text-xs font-semibold tracking-[0.5em] text-orange-400">
              YU4C PRESENTS
            </span>

            <span className="h-px w-10 bg-orange-500/70" />
          </div>

          {/* Main title */}
          <h1 className="text-[70px] font-black leading-[0.8] tracking-[-0.06em] sm:text-[110px] md:text-[145px]">
            <span className="block">ABLAZE</span>
          </h1>

          <p className="mt-8 max-w-xl text-sm uppercase tracking-[0.35em] text-gray-400 sm:text-base">
            A journey through the years
          </p>

          {/* Main flame */}
          <div className="relative mt-[-20px]">
            <AblazeFlame color="#ff6a00" size="large" />
          </div>

          <p className="mt-[-20px] max-w-md text-base leading-7 text-gray-400">
            Every year carries a different flame. Different stories. Different
            colours. One unforgettable journey.
          </p>

          {/* Scroll */}
          <a
            href="#years"
            className="mt-12 flex flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-500 transition hover:text-white"
          >
            Explore the journey
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </section>

      {/* =========================
          YEARS
      ========================= */}

      <section
        id="years"
        className="relative bg-[#f3f0ea] px-5 py-24 text-[#151515]"
      >
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-5 flex justify-center">
              <Flame className="h-7 w-7 text-orange-500" />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-orange-600">
              The Ablaze Archive
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Every year.
              <br />
              <span className="text-gray-400">A different flame.</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Explore the memories, themes and moments from every Ablaze
              experience.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-20">
            {/* Desktop line */}
            <div className="absolute left-0 right-0 top-[150px] hidden h-px bg-gray-300 lg:block" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {ablazeEvents.map((event) => (
                <Link
                  key={event.year}
                  to={`/ablaze/${event.year}`}
                  className="group relative"
                >
                  {/* Card */}
                  <div
                    className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white transition-all duration-500 group-hover:-translate-y-3"
                    style={{
                      boxShadow: `0 15px 50px ${event.flame_color}18`,
                    }}
                  >
                    {/* Colour header */}
                    <div
                      className="relative flex h-[270px] items-center justify-center overflow-hidden"
                      style={{
                        background: `
                          radial-gradient(
                            circle at center,
                            ${event.flame_color}55,
                            transparent 65%
                          ),
                          #070b10
                        `,
                      }}
                    >
                      {/* Glow */}
                      <div
                        className="absolute h-48 w-48 rounded-full blur-[70px]"
                        style={{
                          background: event.flame_color,
                          opacity: 0.25,
                        }}
                      />

                      {/* Flame */}
                      <AblazeFlame color={event.flame_color} size="small" />

                      {/* Year */}
                      <div className="absolute bottom-5 left-6">
                        <p
                          className="text-5xl font-black"
                          style={{
                            color: event.flame_color,
                          }}
                        >
                          {event.year}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
                        ABLAZE
                      </p>

                      {/* Theme */}
                      <h3 className="mt-2 text-2xl font-black">
                        {event.theme || "Coming Soon"}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                        {event.description || "Details coming soon."}
                      </p>

                      {/* Date */}
                      <p className="mt-4 text-xs font-medium text-gray-400">
                        {event.event_date || "Coming Soon"}
                      </p>

                      {/* Explore */}
                      <div
                        className="mt-6 flex items-center gap-2 text-sm font-bold"
                        style={{
                          color: event.flame_color,
                        }}
                      >
                        Explore year
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* No events */}
            {ablazeEvents.length === 0 && (
              <div className="py-20 text-center">
                <Flame className="mx-auto mb-4 h-8 w-8 text-gray-400" />

                <p className="text-gray-500">No Ablaze events available yet.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================
          BOTTOM QUOTE
      ========================= */}

      <section className="relative overflow-hidden bg-[#050505] px-6 py-32 text-center">
        <div
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          style={{
            background: "#ff6500",
            opacity: 0.12,
          }}
        />

        <div className="relative">
          <Flame className="mx-auto h-8 w-8 text-orange-500" />

          <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            Different years.
            <br />
            <span className="text-orange-500">One fire.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-gray-500">
            The story of Ablaze continues.
          </p>
        </div>
      </section>
    </main>
  );
}
