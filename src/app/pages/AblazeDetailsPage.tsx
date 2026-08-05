import { Link, useParams } from "react-router";
import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  Users,
  Mic2,
  Music,
  Clock3,
  Flame,
  Share2,
} from "lucide-react";

import { useEffect, useState } from "react";

import { getAblazeEvent } from "../../utils/ablaze";
import { AblazeFlame } from "../components/AblazeFlame";

export function AblazeDetailsPage() {
  const { year } = useParams();

  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // =========================
  // GET EVENT FROM SUPABASE
  // =========================

  useEffect(() => {
    async function loadEvent() {
      if (!year) return;

      try {
        const data = await getAblazeEvent(Number(year));
        setEvent(data);
      } catch (err) {
        console.error("Failed to load Ablaze event:", err);
        setError("Unable to load this Ablaze event.");
      } finally {
        setLoading(false);
      }
    }

    loadEvent();
  }, [year]);

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#020810] text-white">
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
  // ERROR / NOT FOUND
  // =========================

  if (error || !event) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#020810] text-white">
        <div className="text-center">
          <Flame className="mx-auto mb-5 h-10 w-10 text-orange-500" />

          <h1 className="text-4xl font-bold">Ablaze event not found</h1>

          <p className="mt-3 text-gray-400">
            {error || "This event could not be found."}
          </p>

          <Link
            to="/ablaze"
            className="mt-6 inline-flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Ablaze
          </Link>
        </div>
      </div>
    );
  }

  // =========================
  // SUPABASE VALUES
  // =========================

  const flameColor = event.flame_color || "#ff6500";

  const eventDate = event.event_date || "Coming Soon";

  const location = event.location || "Coming Soon";

  const participants = event.participants || "Coming Soon";

  const speakers = event.speakers || "Coming Soon";

  const worshipSessions = event.worship_sessions || "Coming Soon";

  const days = event.days || "Coming Soon";

  const theme = event.theme || "Coming Soon";

  const description = event.description || "More details coming soon.";

  return (
    <main
      className="min-h-screen bg-[#020810] text-white"
      style={
        {
          "--ablaze-color": flameColor,
        } as React.CSSProperties
      }
    >
      {/* =========================
          HERO
      ========================= */}

      <section
        className="relative overflow-hidden"
        style={{
          background: `
            radial-gradient(
              circle at 70% 50%,
              ${flameColor}55,
              transparent 35%
            ),
            #020810
          `,
        }}
      >
        {/* Background flame */}
        <div className="absolute right-[5%] top-1/2 hidden -translate-y-1/2 lg:block">
          <AblazeFlame color={flameColor} size="large" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-8">
          {/* =========================
              HERO CONTENT
          ========================= */}

          <div className="grid min-h-[650px] items-center lg:grid-cols-2">
            <div className="max-w-xl py-16">
              {/* Year */}
              <span
                className="inline-block rounded-full px-5 py-2 text-sm font-bold"
                style={{
                  color: flameColor,
                  backgroundColor: `${flameColor}22`,
                }}
              >
                ABLAZE {event.year}
              </span>

              {/* Theme */}
              <h1 className="mt-6 text-6xl font-black uppercase sm:text-8xl">
                {theme}
              </h1>

              {/* Accent line */}
              <div
                className="mt-6 h-1 w-12"
                style={{
                  backgroundColor: flameColor,
                }}
              />

              {/* Scripture */}
              {event.scripture && (
                <div className="mt-8">
                  <p className="text-xl font-semibold">{event.scripture}</p>
                </div>
              )}

              {/* Information */}
              <div className="mt-8 space-y-4 text-gray-300">
                <InfoRow
                  icon={<CalendarDays />}
                  text={eventDate}
                  color={flameColor}
                />

                <InfoRow icon={<MapPin />} text={location} color={flameColor} />

                <InfoRow
                  icon={<Users />}
                  text={
                    participants === "Coming Soon"
                      ? participants
                      : `${participants} Youth`
                  }
                  color={flameColor}
                />

                <InfoRow
                  icon={<Flame />}
                  text={`Theme: ${theme}`}
                  color={flameColor}
                />
              </div>

              {/* Description */}
              <p className="mt-8 max-w-lg leading-7 text-gray-300">
                {description}
              </p>
            </div>
          </div>

          {/* =========================
              STATS
          ========================= */}

          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur md:grid-cols-4">
            <Stat
              icon={<Users />}
              value={participants}
              label="Participants"
              color={flameColor}
            />

            <Stat
              icon={<Mic2 />}
              value={speakers}
              label="Speakers"
              color={flameColor}
            />

            <Stat
              icon={<Music />}
              value={worshipSessions}
              label="Worship Sessions"
              color={flameColor}
            />

            <Stat
              icon={<Clock3 />}
              value={days}
              label="Days of Fire"
              color={flameColor}
            />
          </div>
        </div>
      </section>

      {/* =========================
          GALLERY / COVER IMAGE
      ========================= */}

      <section className="bg-[#f5f2ed] px-6 py-16 text-gray-900">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_300px]">
          <div>
            <h2 className="text-3xl font-black uppercase">
              Moments to Remember
            </h2>

            <div
              className="mt-3 h-1 w-12"
              style={{
                backgroundColor: flameColor,
              }}
            />

            {/* Cover image from Supabase */}
            {event.cover_image ? (
              <div className="mt-8 overflow-hidden rounded-2xl">
                <img
                  src={event.cover_image}
                  alt={`${event.title} cover`}
                  className="h-[400px] w-full object-cover transition duration-500 hover:scale-[1.02]"
                />
              </div>
            ) : (
              <div className="mt-8 rounded-2xl bg-white p-10 text-center">
                <p className="text-gray-500">Photos coming soon.</p>
              </div>
            )}
          </div>

          {/* =========================
              ABOUT
          ========================= */}

          <aside className="rounded-2xl bg-[#07101c] p-7 text-white">
            <div
              className="mb-5 flex h-12 w-12 items-center justify-center rounded-full"
              style={{
                backgroundColor: `${flameColor}22`,
                color: flameColor,
              }}
            >
              <Flame />
            </div>

            <h3 className="text-xl font-bold">About Ablaze</h3>

            <p className="mt-4 text-sm leading-6 text-gray-300">
              Ablaze is a youth convention that brings young people together
              through worship, fellowship, faith and community.
            </p>

            <p
              className="mt-5 italic"
              style={{
                color: flameColor,
              }}
            >
              One fire. One family. One mission.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}

// =========================
// INFO ROW
// =========================

function InfoRow({
  icon,
  text,
  color,
}: {
  icon: React.ReactNode;
  text: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span style={{ color }}>{icon}</span>

      <span>{text}</span>
    </div>
  );
}

// =========================
// STAT
// =========================

function Stat({
  icon,
  value,
  label,
  color,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-4 border-r border-white/10 p-5 last:border-0">
      <span style={{ color }}>{icon}</span>

      <div>
        <p className="font-bold">{value}</p>

        <p className="text-xs text-gray-400">{label}</p>
      </div>
    </div>
  );
}
