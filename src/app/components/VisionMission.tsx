import { Target, Compass } from "lucide-react";

export function VisionMission() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #061233, #0C2461, #1a4ed8)' }}>
      {/* Spiritual light rays from above */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-1 h-full" style={{ background: 'linear-gradient(to bottom, rgba(99, 102, 241, 0.6), rgba(99, 102, 241, 0.3), transparent)' }} />
        <div className="absolute top-0 left-1/2 w-1.5 h-full" style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2), transparent)' }} />
        <div className="absolute top-0 right-1/4 w-1 h-full" style={{ background: 'linear-gradient(to bottom, rgba(245, 158, 11, 0.5), rgba(245, 158, 11, 0.3), transparent)' }} />
        <div className="absolute top-0 left-1/3 w-0.5 h-full transform rotate-6" style={{ background: 'linear-gradient(to bottom, rgba(99, 102, 241, 0.4), transparent)' }} />
        <div className="absolute top-0 right-1/3 w-0.5 h-full transform -rotate-6" style={{ background: 'linear-gradient(to bottom, rgba(245, 158, 11, 0.4), transparent)' }} />
      </div>

      {/* Background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(99, 102, 241, 0.2)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(245, 158, 11, 0.2)' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 rounded-full blur-sm animate-pulse" style={{ background: '#818CF8' }} />
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-white rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-40 w-2 h-2 rounded-full blur-sm animate-pulse" style={{ background: '#F59E0B', animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full blur-sm animate-pulse" style={{ background: '#A5B4FC', animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block px-4 sm:px-6 py-2 backdrop-blur-sm border rounded-full mb-4 sm:mb-6 text-sm sm:text-base" style={{ background: 'rgba(245, 158, 11, 0.15)', borderColor: 'rgba(245, 158, 11, 0.4)', color: '#FCD34D' }}>
            <span>🌟 Our Purpose</span>
          </div>
          <h2 className="tracking-tight mb-4 text-white text-2xl sm:text-3xl md:text-4xl">Vision & Mission</h2>
          <div className="h-1.5 w-24 rounded-full mx-auto" style={{ background: 'linear-gradient(to right, #6366F1, #F59E0B)' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto mb-12 sm:mb-14 md:mb-16">
          {/* Vision */}
          <div className="space-y-6 sm:space-y-8 p-6 sm:p-8 md:p-10 bg-white/95 backdrop-blur-md rounded-3xl border-2 hover:bg-white transition-colors shadow-xl" style={{ borderColor: '#F59E0B' }}>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl shadow-xl" style={{ background: 'linear-gradient(to bottom right, #F59E0B, #D97706)' }}>
                <Target className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-gray-900 text-xl sm:text-2xl">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic">
              "Christ-centered youth transforming the Church and society."
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-6 sm:space-y-8 p-6 sm:p-8 md:p-10 bg-white/95 backdrop-blur-md rounded-3xl border-2 hover:bg-white transition-colors shadow-xl" style={{ borderColor: '#6366F1' }}>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl shadow-xl" style={{ background: 'linear-gradient(to bottom right, #1d4ed8, #1a4ed8)' }}>
                <Compass className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-gray-900 text-xl sm:text-2xl">Our Mission</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <li className="flex gap-2 sm:gap-3">
                <span className="flex-shrink-0" style={{ color: '#6366F1' }}>✓</span>
                <span>To lead every young person into a personal encounter with Jesus.</span>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <span className="flex-shrink-0" style={{ color: '#6366F1' }}>✓</span>
                <span>To form youth in prayer, Scripture, and the gifts of the Holy Spirit.</span>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <span className="flex-shrink-0" style={{ color: '#6366F1' }}>✓</span>
                <span>To inspire servant leadership rooted in love and humility.</span>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <span className="flex-shrink-0" style={{ color: '#6366F1' }}>✓</span>
                <span>To build a community that witnesses to Christ in daily life.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Scripture Foundation */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border-2 shadow-lg" style={{ borderColor: 'rgba(245, 158, 11, 0.5)' }}>
            <p className="text-gray-700 italic text-base sm:text-lg leading-relaxed">
              "Go into all the world and preach the gospel to all creation."
            </p>
            <p className="mt-2 text-sm sm:text-base" style={{ color: '#1d4ed8' }}>— Mark 16:15</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border-2 shadow-lg" style={{ borderColor: 'rgba(99, 102, 241, 0.4)' }}>
            <p className="text-gray-700 italic text-base sm:text-lg leading-relaxed">
              "You are the light of the world. A city set on a hill cannot be hidden."
            </p>
            <p className="mt-2 text-sm sm:text-base" style={{ color: '#1d4ed8' }}>— Matthew 5:14</p>
          </div>
        </div>
      </div>
    </section>
  );
}
