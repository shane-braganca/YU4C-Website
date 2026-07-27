import { ScrollReveal } from "./ScrollReveal";

export function Stats() {
  const stats = [
    { value: "100+", label: "Active Members" },
    { value: "20+", label: "Prayer Groups" },
    { value: "50+", label: "Events Annually" },
    { value: "1000+", label: "Lives Touched" },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #0C2461, #1a4ed8, #1e40af)' }}>
      {/* Spiritual divine rays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1 h-full transform rotate-12" style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.08), transparent)' }} />
        <div className="absolute top-0 left-1/2 w-1.5 h-full" style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.08), transparent)' }} />
        <div className="absolute top-0 right-1/4 w-1 h-full transform -rotate-12" style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.08), transparent)' }} />
        <div className="absolute top-0 left-1/3 w-1 h-full transform rotate-6" style={{ background: 'linear-gradient(to bottom, rgba(245, 158, 11, 0.2), transparent)' }} />
        <div className="absolute top-0 right-1/3 w-1 h-full transform -rotate-6" style={{ background: 'linear-gradient(to bottom, rgba(245, 158, 11, 0.2), transparent)' }} />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl opacity-25 animate-pulse" style={{ background: '#6366F1' }} />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full blur-3xl opacity-25 animate-pulse" style={{ background: '#F59E0B', animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-40 w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'rgba(245, 158, 11, 0.4)', animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="text-center group">
                <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-white hover:bg-white transition-all duration-300 hover:scale-105 shadow-2xl" style={{ boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.4)' }}>
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform font-bold" style={{
                    background: 'linear-gradient(to right, #1d4ed8, #F59E0B)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-700 text-xs sm:text-sm md:text-base">{stat.label}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
