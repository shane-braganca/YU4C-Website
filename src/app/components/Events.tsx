import { Calendar, ArrowRight, Clock, MapPin } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Events() {
  const upcomingEvents = [
    {
      emoji: "✨",
      title: "Spirit Fire 2025",
      description: "Youth Retreat, Old Goa",
      date: "January 20-22, 2025",
      location: "Old Goa Retreat Center",
      gradient: "linear-gradient(135deg, #4F46E5 0%, #312E81 100%)",
      glowColor: "rgba(99, 102, 241, 0.25)",
    },
    {
      emoji: "🎶",
      title: "Praise Night Goa",
      description: "Monthly Worship Evening",
      date: "Every First Friday",
      location: "Various Parishes",
      gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
      glowColor: "rgba(245, 158, 11, 0.25)",
    },
    {
      emoji: "🙏",
      title: "Lenten Youth Recollection",
      description: "March 2025",
      date: "March 15, 2025",
      location: "Cathedral of Se, Goa",
      gradient: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
      glowColor: "rgba(124, 58, 237, 0.25)",
    },
    {
      emoji: "💡",
      title: "Faith & Culture Workshop",
      description: "Living for Christ in Today's World",
      date: "February 10, 2025",
      location: "Margao Parish Hall",
      gradient: "linear-gradient(135deg, #6366F1 0%, #F59E0B 100%)",
      glowColor: "rgba(99, 102, 241, 0.25)",
    },
  ];

  return (
    <section id="events" className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-40 -right-20 w-64 h-64 rounded-full blur-3xl opacity-15 animate-pulse" style={{ background: '#C4B5FD', animationDuration: '4s' }} />
      <div className="absolute bottom-40 -left-20 w-64 h-64 rounded-full blur-3xl opacity-15 animate-pulse" style={{ background: '#FDE68A', animationDuration: '5s', animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm border rounded-full mb-6 text-sm" style={{ background: 'rgba(99, 102, 241, 0.05)', borderColor: 'rgba(99, 102, 241, 0.25)', color: '#4F46E5' }}>
              <Calendar className="w-4 h-4" />
              <span>What's Happening</span>
            </div>
            <h2 className="tracking-tight mb-4 text-gray-900 text-3xl sm:text-4xl md:text-5xl">
              Upcoming Events
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Join us for these Spirit-filled gatherings and encounters with Christ
            </p>
          </div>
        </ScrollReveal>

        {/* Events Grid */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {upcomingEvents.map((event, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className="group relative h-full">
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" style={{ background: event.glowColor }} />
                  <div className="relative h-full bg-white border-2 rounded-3xl p-6 sm:p-8 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 flex flex-col" style={{ borderColor: '#E5E7EB' }}>
                    {/* Icon Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10" style={{ background: event.gradient }}>
                          {event.emoji}
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full animate-ping" style={{ background: '#6366F1' }} />
                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full" style={{ background: '#6366F1' }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text transition-all" style={{
                        backgroundImage: event.gradient,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                      }}>
                        {event.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm sm:text-base">{event.description}</p>

                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Clock className="w-4 h-4" style={{ color: '#6366F1' }} />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <MapPin className="w-4 h-4" style={{ color: '#6366F1' }} />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    <button className="w-full py-3 text-white rounded-full hover:shadow-lg transition-all hover:scale-105 text-sm sm:text-base flex items-center justify-center gap-2 group" style={{ background: event.gradient }}>
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Scripture Quote */}
        <ScrollReveal delay={0.2} direction="up">
          <div className="max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="relative p-8 sm:p-10 rounded-3xl overflow-hidden shadow-xl border-2" style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.04), rgba(245, 158, 11, 0.04))',
              borderColor: 'rgba(99, 102, 241, 0.2)'
            }}>
              <div className="absolute top-4 left-4 text-6xl sm:text-7xl opacity-10" style={{ color: '#6366F1' }}>"</div>
              <div className="relative">
                <p className="text-gray-700 italic text-lg sm:text-xl leading-relaxed text-center mb-4">
                  Let us consider how we may spur one another on toward love and good deeds, not giving up meeting together.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-12 rounded" style={{ background: 'linear-gradient(to right, transparent, #6366F1)' }} />
                  <p className="font-medium" style={{ color: '#4F46E5' }}>Hebrews 10:24-25</p>
                  <div className="h-px w-12 rounded" style={{ background: 'linear-gradient(to left, transparent, #6366F1)' }} />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal delay={0.3} direction="up">
          <div className="text-center">
            <button className="group px-8 sm:px-10 py-4 sm:py-5 bg-white border-2 text-gray-900 hover:text-white rounded-full inline-flex items-center gap-3 text-base sm:text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden" style={{ borderColor: '#6366F1' }}>
              <span className="relative z-10">View Full Event Calendar</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to right, #4F46E5, #7C3AED)' }} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
