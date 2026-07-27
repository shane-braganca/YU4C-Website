import { Heart, Music, Sparkles, Users } from "lucide-react";

export function SpiritualLifestyle() {
  const lifestyle = [
    {
      icon: Heart,
      emoji: "🙏",
      text: "A heart of prayer",
      color: "linear-gradient(135deg, #1d4ed8, #1a4ed8)",
      description: "Daily communion with God"
    },
    {
      icon: Music,
      emoji: "🎵",
      text: "A spirit of worship",
      color: "linear-gradient(135deg, #F59E0B, #D97706)",
      description: "Praising Him in all things"
    },
    {
      icon: Sparkles,
      emoji: "✨",
      text: "A life of purity and service",
      color: "linear-gradient(135deg, #7C3AED, #5B21B6)",
      description: "Living as His witnesses"
    },
    {
      icon: Users,
      emoji: "🤝",
      text: "A commitment to community",
      color: "linear-gradient(135deg, #6366F1, #F59E0B)",
      description: "Growing together in faith"
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0C2461 0%, #1a4ed8 50%, #1e40af 100%)' }}>
      {/* Divine light rays from heaven */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        <div className="absolute top-0 left-1/4 w-1 h-2/3" style={{ background: 'linear-gradient(to bottom, rgba(245, 158, 11, 0.6), transparent)' }} />
        <div className="absolute top-0 left-1/2 w-2 h-3/4" style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.7), transparent)' }} />
        <div className="absolute top-0 right-1/4 w-1 h-2/3" style={{ background: 'linear-gradient(to bottom, rgba(99, 102, 241, 0.6), transparent)' }} />
        <div className="absolute top-0 left-1/3 w-0.5 h-1/2 transform rotate-12" style={{ background: 'linear-gradient(to bottom, rgba(245, 158, 11, 0.4), transparent)' }} />
        <div className="absolute top-0 right-1/3 w-0.5 h-1/2 transform -rotate-12" style={{ background: 'linear-gradient(to bottom, rgba(165, 180, 252, 0.4), transparent)' }} />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse" style={{ background: '#818CF8', animationDuration: '4s' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse" style={{ background: '#F59E0B', animationDuration: '5s', animationDelay: '1s' }} />

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-24 right-24 w-2 h-2 rounded-full blur-sm animate-pulse" style={{ background: '#FCD34D' }} />
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full blur-sm animate-pulse" style={{ background: 'rgba(255, 255, 255, 0.8)', animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-32 w-2 h-2 rounded-full blur-sm animate-pulse" style={{ background: '#A5B4FC', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full blur-sm animate-pulse" style={{ background: '#FCD34D', animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 backdrop-blur-sm border-2 rounded-full mb-6 sm:mb-8 text-sm sm:text-base" style={{ background: 'rgba(245, 158, 11, 0.1)', borderColor: '#F59E0B' }}>
            <span className="flex items-center gap-2" style={{ color: '#FCD34D' }}>
              <span className="text-xl">💫</span>
              Our Way of Life
            </span>
          </div>

          <h2 className="tracking-tight mb-6 sm:mb-8 text-white text-3xl sm:text-4xl md:text-5xl">
            Our Spiritual Lifestyle
          </h2>

          <p className="text-indigo-200 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Being a YU4C member isn't just about attending programs — it's about living a lifestyle of faith, rooted in Christ and empowered by the Holy Spirit.
          </p>
        </div>

        {/* Lifestyle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {lifestyle.map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" style={{ background: item.color }} />
              <div className="relative bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border-2 hover:shadow-2xl transition-all duration-500 text-center group-hover:-translate-y-3 h-full flex flex-col" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                <div className="mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative" style={{ background: item.color }}>
                    <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white absolute" />
                    <div className="text-4xl sm:text-5xl opacity-20">{item.emoji}</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="mb-3 text-gray-900 text-lg sm:text-xl">{item.text}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-auto">{item.description}</p>
                </div>
                <div className="mt-6 h-1 w-0 group-hover:w-full mx-auto rounded-full transition-all duration-500" style={{ background: item.color }} />
              </div>
            </div>
          ))}
        </div>

        {/* Scripture Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity blur-lg" style={{ background: 'linear-gradient(to right, #1d4ed8, #F59E0B, #7C3AED)' }} />
            <div className="relative bg-white p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-xl flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, #1d4ed8, #F59E0B)' }}>
                  📖
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 italic text-lg sm:text-xl lg:text-2xl leading-relaxed mb-4">
                    "I have come that they may have life, and have it to the full."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #1d4ed8, transparent)' }} />
                    <p className="font-medium text-base sm:text-lg" style={{ color: '#1d4ed8' }}>John 10:10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
